import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import stores from '@/store'
import router from '@/router'

import '@/assets/css/bulma.min.css'
import '@/assets/scss/style.scss'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(stores)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
