import Vue from 'vue'
import Vuex from 'vuex'
// import config from '@/config/index.js'
// import request from '@/plugins/axios.js'

Vue.use(Vuex)

function getType(data) {
  const t = Object.prototype.toString.call(data)
  return t.slice(8, -1)
}

const state = {
//   token: sessionStorage.getItem(config.tokenKey) || '',
  test: '11',
//   oss: 'https://sihong-lm.oss-cn-shanghai.aliyuncs.com/',
//   // 左侧菜单
//   menu: {
//     group: [],
//     router: []
//   },
//   userInfo: {
//     username: '',
//     penname: '',
//     avatars: ''
//   }
}

const mutations = {
  SET_STORE: (state, data) => {
    const type = Object.prototype.toString.call(data).slice(8, -1)
    switch (type) {
      case 'Array': {
        data.map(item => {
          if (getType(item.value) === 'Object') {
            Object.assign(state[item.key], item.value)
          } else {
            state[item.key] = item.value
          }
        })
        break
      }
      case 'Object': {
        if (getType(data.value) === 'Object') {
          Object.assign(state[data.key], data.value)
        } else {
          state[data.key] = data.value
        }
      }
    }
  }
}

const actions = {
  SetStore({ commit }, data) {
    commit('SET_STORE', data)
  }
//   async SetOSS({ commit }, value) {
//     commit('SET_STORE', { key: 'oss', value })
//     localStorage.setItem('oss', value)
//   },
//   async SetToken({ commit }, value) {
//     commit('SET_STORE', { key: 'token', value })
//     if (value) {
//       this.dispatch('SetMenu')
//       sessionStorage.setItem(config.tokenKey, value)
//     } else {
//       this.dispatch('SetMenu', {
//         group: [],
//         router: []
//       })
//       sessionStorage.removeItem(config.tokenKey)
//     }
//   },
//   async SetMenu({ commit }, value) {
//     if (value) {
//       commit('SET_STORE', { key: 'menu', value })
//     } else {
//       const token = this.state.token
//       const post = this._vm.$post
//       const data = await post('v1/rbac/menu', { token })
//       if (config.successCode.includes(data.code)) {
//         commit('SET_STORE', { key: 'menu', value: data.data })
//       }
//     }
//   },
//   async GetUserInfo({ commit }) {
//     const post = this._vm.$post
//     const data = await post('/v1/admin/show')
//     if (config.successCode.includes(data.code)) {
//       commit('SET_STORE', {
//         key: 'userInfo',
//         value: data.data.result
//       })
//     }
//   }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
  // modules: {}
})
