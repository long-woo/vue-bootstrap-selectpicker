// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

import SelectPicker from './components'

Vue.config.productionTip = false

Vue.prototype.$prism = Prism
Vue.use(SelectPicker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
