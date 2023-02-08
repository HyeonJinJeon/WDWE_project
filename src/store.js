import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: '',
    claims: null,
    firebaseLoaded: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    },
    setClaims(state, claims) {
      state.claims = claims
    },
    setFirebaseLoaded(state) {
      state.firebaseLoaded = true
    }
  },
  actions: {
    async getUser({commit}, user) {
      // firebase 가 동작중인지
      commit('setFirebaseLoaded')
      // user 정보를 집어 넣는다.
      commit('setUser', user)
      if (!user) return false
      const token = await user.getIdToken()
      commit('setToken', token)
      const tokenResult = await user.getIdTokenResult(true)
      const claims = tokenResult.claims
      commit('setClaims', claims)
    }
  }
})
