'use strict'

const https = require('https')
const url = require('url')
const {logInfo, logSuccess, logError} = require('../console')

const _request = Symbol('_request')
const _upload = Symbol('_upload')

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
    let { code, data, message } = await GitHubPublish[_request](path)

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

      await GitHubPublish[_request](path, 'DELETE')
    }
  }

  /**
   * 上传资源
   * @param {*} uploadUrl 上传地址，从‘getReleaseDraft’中获取
   * @param {*} fileName 文件名
   * @param {*} fileBuffer 二进制文件
   */
  async uploadAsset (uploadUrl, fileName, fileBuffer) {
    const urlObject = url.parse(`${uploadUrl.replace(/({.*})/gi, '')}?name=${fileName}`)
    const fileExt = fileName.substr(fileName.lastIndexOf('.') + 1)

    logInfo(`上传${fileName}...`)
    const { code, data, message } = await GitHubPublish[_upload](urlObject, fileBuffer, fileExt)

    if (code !== 200) {
      logError(`${fileName}上传失败。${message}`)
      return {}
    }
    
    if (!data) {
      logError(`${fileName}上传失败`)
      return {}
    }

    logSuccess(`${fileName}上传成功`)
    return data
  }

  static [_request] (path, method = 'GET') {
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
          res.on('data', chunk => {
            data += chunk
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

  static [_upload] (urlObject, fileBuffer, fileExt) {
    const options = {
      hostname: urlObject.hostname,
      port: urlObject.port,
      path: `${urlObject.path}&access_token=${this.token}`,
      method: 'POST',
      headers: {
        'User-Agent': 'NODEJS',
        'Content-Type': `application/${fileExt || 'octet-stream'}`,
        'Content-Length': fileBuffer.length
      }
    }

    return new Promise((resolve, reject) => {
      const json = {
        code: 200
      }

      const request = https.request(options, res => {
        let data = ''
        res.on('data', chunk => {
          data += chunk
        }).on('end', () => {
          json.data = JSON.parse(data)
          resolve(json)
        })
      }).on('error', error => {
        logError(error)

        json.code = 400
        json.message = error
        reject(json)
      })

      request.write(fileBuffer)
      request.end()
    }).catch(() => {})
  }
}

module.exports = GitHubPublish
