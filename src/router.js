import Vue from 'vue'
import Router from 'vue-router'
import {firebase} from "@/firebase/firebaseConfig";
import "firebase/auth";
import store from "@/store";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
      component: () => import('./views/MainPg.vue'),
    },
    {
      path: '/groupSet',
      name: 'GroupSet',
      component: () => import('./views/GroupSet.vue'),
    },
    {
      path: '/receiptPg',
      name: 'ReceiptPg',
      component: () => import('./views/ReceiptPg.vue'),
    },
    {
      path: '/add/restaurant',
      name: 'AddRestaurant',
      component: () => import('./views/AddRestaurant.vue'),
    },
    {
      path: '/mapPg',
      name: 'MapPg',
      component: () => import('./views/MapPg.vue'),
    },
    {
      path: '/setRestaurantList',
      name: 'SetRestaurantList',
      component: () => import('./views/SetRestaurantList.vue'),
    },
  ]
})
const makeTitle = (title) =>
    title ? `${title} | WDWE` : "WDWE";

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title);
  });
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(async (user) => {

    // let _isAdmin = '';
    // let _isMaster = '';

    await store.dispatch('getUser', user)
        .then(() => {
          if (user) {
            console.log(user)
            console.log('user', store.state.user)
            // _isAdmin = store.state.claims.isAdmin
            // console.log('isAdmin : ', _isAdmin)
            // _isMaster = store.state.claims.isMaster
            // console.log('isMaster : ', _isMaster)
          } else {
            console.log('없다.')
          }
        })


    const firebaseCurrentUser = firebase.auth().currentUser
    console.log(firebaseCurrentUser)

    if (store.state.firebaseLoaded)
      next()
  })

});

export default router
