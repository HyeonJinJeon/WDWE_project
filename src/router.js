import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
  ]
})
