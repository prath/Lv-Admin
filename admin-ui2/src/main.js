import Vue from 'vue/dist/vue.js'
import App from './App'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import Users from './components/Users'
import TourPackages from './components/TourPackages'
import ContentList from './components/ContentList'
import TourPreferences from './components/TourPreferences'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/tour-packages', component: TourPackages },
    { path: '/curated-contents', component: ContentList },
    { path: '/tour-preferences', component: TourPreferences },
  ],
  mode: 'history'
})

new Vue({
  components: { App },
  render: h => h(App),
  router
}).$mount('#app')