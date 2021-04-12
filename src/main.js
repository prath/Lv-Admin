import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import stores from '@/store'
import router from '@/router'
// import axios from 'axios'

import '@/assets/css/bulma.min.css'
import '@/assets/scss/style.scss'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(stores)

// axios.interceptors.response.use((config) => {
//   console.log('success? ', config)
//   return config
// }, (error) => {
//   console.log('error? ', error)
//   return Promise.reject(error)
// })

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
