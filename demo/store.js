import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docs: true
  },
  mutations: {
    toggleDocs(state, value) {
      state.docs = value;
    }
  },
  actions: {

  }
})
