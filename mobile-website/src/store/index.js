import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.isLoggedIn = !!user
    },
    LOGOUT(state) {
      state.user = null
      state.isLoggedIn = false
      // 清除本地存储
      localStorage.removeItem('user')
    }
  },
  actions: {
    login({ commit }, userData) {
      // 保存用户信息到本地存储
      localStorage.setItem('user', JSON.stringify(userData))
      commit('SET_USER', userData)
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    initializeStore({ commit }) {
      // 从本地存储初始化用户状态
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        commit('SET_USER', JSON.parse(storedUser))
      }
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    currentUser: state => state.user
  }
})