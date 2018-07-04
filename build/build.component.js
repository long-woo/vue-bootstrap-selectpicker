'use strict'

require('./check-versions')()

process.env.NODE_ENV = 'production'

const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const archiver = require('archiver')

const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const env = require('../config/prod.env')
const {logInfo, logSuccess, logError} = require('./console')
const packageInfo = require('../package.json')
const GitHubPushlish = require('./publish/github-releases')

const spinner = ora('building for production...')

config.build.assetsRoot = path.resolve(__dirname, '../dist')
config.build.assetsSubDirectory = '/'

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 压缩文件夹
function createZIP () {
  const fileName = `${packageInfo.name}-${packageInfo.version}.zip`
  const filePath = `${resolve('/')}/${fileName}`
  const output = fs.createWriteStream(filePath)
  const archive = archiver('zip', {
    zlib: { level: 9}
  })

  logInfo(`creating ${fileName}...`)
  output.on('close', async () => {
    const fileBuffer = fs.readFileSync(filePath, 'utf8')

    logInfo(`${archive.pointer()} total bytes.\n\nupading ${fileName} to github release draft...`)

    // 上传到github release draft
    const publishGH = new GitHubPushlish({ owner: packageInfo.repository.owner, project: packageInfo.name, version: packageInfo.version})
    const draft = await publishGH.getReleaseDraft()

    if (!draft.id) {
      throw new Error('')
    }

    if (draft.assets) {
      // 如果draft中存在资源，先删除
      const assetIds = draft.assets.filter(asset => asset.id)

      await publishGH.deleteAsset(assetIds)
    }

    publishGH.uploadAsset(draft.upload_url, filename, fileBuffer)
  })

  archive.on('error', (error) => {
    logError(err)
    throw new Error('')
  })

  archive.pipe(output)

  // 添加文件
  archive.directory(config.build.assetsRoot, false)
  archive.finalize()
}

const webpackBaseConfig = {
  output: {
    path: config.build.assetsRoot
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),

    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),

    new ExtractTextPlugin({
      filename: `css/vue-bootstrap-selectpicker.min.css`,
      allChunks: true
    }),

    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),

    new webpack.BannerPlugin(`vue-bootstrap-selectpicker v${packageInfo.version}
copyright ${new Date()}. ${packageInfo.author}
Licensed under ${packageInfo.license} (${packageInfo.repository.url}/blob/master/LICENSE)`)
  ]
}
const webpackConfig = [
  merge(webpackBaseConfig, {
    entry: path.resolve(`./src/components/SelectPicker.vue`),
    output: {
      filename: 'js/vue-bootstrap-selectpicker.js',
      library: 'SelectPicker',
      libraryTarget: 'window'
    }
  }),
  merge(webpackBaseConfig, {
    entry: path.resolve(`./src/components/index.js`),
    output: {
      filename: 'js/vue-bootstrap-selectpicker.min.js',
      library: 'select-picker',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  })
]

spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // if you are using ts-loader, setting this to true will make typescript errors show up during build
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      logError('Build failed with errors.')
      process.exit(1)
    }

    logSuccess('Build complete.')
    createZIP()
  })
})
