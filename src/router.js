import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login'),
    },
    {
      path: '/mainPg',
      name: 'mainPg',
      component: () => import('./views/MainPg.vue'),
    },
  ]
})
