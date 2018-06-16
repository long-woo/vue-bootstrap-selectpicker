// import qs from 'qs'
import Vue from 'vue'
import Axios from 'axios'

// 配置axios
Axios.defaults.timeout = 5000
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 请求拦截器
Axios.interceptors.request.use(config => {
  const params = Object.assign({

  }, config.params)

  config.params = params
  Vue.nprogress.start()

  if (config.method === 'post') {
    // config.data = qs.stringify(config.data)
  }

  return config
}, error => {
  Vue.nprogress.done()

  return error
})

// 相应拦截器
Axios.interceptors.response.use(resopnse => {
  Vue.nprogress.done()

  return resopnse.data
}, error => {
  Vue.nprogress.done()

  return error
})

export default Axios
