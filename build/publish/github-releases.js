import https from 'https'

const _gitHubRequest = Symbol('_gitHubRequest')

/**
 * Publish github release draft
 * 在对应仓库下的release创建一个与package.json的version的draft
 */
class GitHubPublish {
  constructor ({ owner = '', project = '', version = '' } = {}) {
    const token = process.env.GH_TOKEN

    if (!token) throw new Error(`GitHub Personal access tokens没有设置，或者没有配置"GH_TOKEN" env`)

    this.owner = owner
    this.project = project
    this.version = version
    this.token = token
  }

  // 根据版本号获取release草稿
  getReleaseDraft () {
    const action = `/repos/${this.owner}/${this.project}/releases?access_token=${this.token}`
    console.log(action)
    this[_gitHubRequest]()
  }

  static [_gitHubRequest] (action, method = 'GET') {
    const baseUrl = 'https://api.github.com'
  }
}