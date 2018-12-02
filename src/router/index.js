import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/getstart',
      component: () => import('@/pages/GetStart'),
      children: [
        {
          path: '',
          redirect: 'use'
        },
        {
          path: 'use',
          name: 'Use',
          component: () => import('@/pages/Use'),
          meta: {
            title: '使用'
          }
        },
        {
          path: 'propertys',
          name: 'Propertys',
          component: () => import('@/pages/Propertys'),
          meta: {
            title: '属性'
          }
        },
        {
          path: 'events',
          name: 'Events',
          component: () => import('@/pages/Events'),
          meta: {
            title: '事件'
          }
        }
      ]
    }
  ]
})
