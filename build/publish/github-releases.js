'use strict'

const https = require('https')
const {logInfo, logSuccess, logError} = require('../console')

const _gitHubRequest = Symbol('_gitHubRequest')


/**
 * Publish github release draft
 * 在对应仓库下的release创建一个与package.json的version的draft
 */
class GitHubPublish {
  constructor ({ owner = '', project = '', version = '' } = {}) {
    const token = process.env.GH_TOKEN

    if (!token) {
      logError('GitHub Personal access tokens没有设置，或者没有配置"GH_TOKEN" env')
      throw new Error('')
    }

    this.owner = owner
    this.project = project
    this.version = version
    this.token = token
  }

  // 获取对应release的draft
  async getReleaseDraft () {
    logInfo(`检查${this.project}是否创建${this.version}的draft...`)
    const path = `/repos/${this.owner}/${this.project}/releases`
    let { code, data, message } = await GitHubPublish[_gitHubRequest](path)

    if (code !== 200) {
      logError(message)
      return {}
    }
    
    if (!data) {
      logError(`${this.version}的draft不存在`)
      return {}
    }

    data = data.filter((item, index) => item.draft && item.name === this.version) || [{}]
    
    return data[0]
  }

  /**
   * 删除文件
   * @param {*} assetIds 资源id，数组类型
   * eg: [1,2]
   */
  async deleteAsset (assetIds) {
    logInfo(`删除已经存在的文件...`)
    for (let assetId of assetIds) {
      const path = `/repos/${this.owner}/${this.project}/releases/assets/${assetId}`

      await GitHubPublish[_gitHubRequest](path, 'DELETE')
    }
  }

  // 上传文件
  async uploadAsset () {

  }

  static [_gitHubRequest] (path, method = 'GET') {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `${path}?access_token=${this.token}`,
      method,
      headers: {
        'User-Agent': 'NODEJS'
      }
    }

    return new Promise((resolve, reject) => {
      const json = {
        code: 200
      }

      https.request(options, res => {
          let data = ''
          res.on('data', buffer => {
            data += buffer
          }).on('end', () => {
            json.data = JSON.parse(data)
            resolve(json)
          })

        }).on('error', error => {
          logError(error)

          json.code = 400
          json.message = error
          reject(json)
        }).end()
    }).catch(() => {})
  }
}

module.exports = GitHubPublish
