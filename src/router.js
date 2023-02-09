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
      path: '/signUp',
      name: 'SignUp',
      component: () => import('./views/SignUp'),
    },
    {
      path: '/mainPg',
      name: 'MainPg',
      component: () => import('./views/MainPg'),
    },
  ]
})
