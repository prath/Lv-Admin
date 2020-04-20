import Vue from 'vue/dist/vue.js'
import App from './App'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import Users from './components/Users'
import UserAdd from './components/UserAdd'
import UserEditHost from './components/UserEditHost'
import UserProfile from './components/UserProfile'
import UserEditGuest from './components/UserEditGuest'
import TourPackages from './components/TourPackages'
import ContentList from './components/ContentList'
import ContentAdd from './components/ContentAdd'
import ContentEdit from './components/ContentEdit'
import CategoriesTags from './components/CategoriesTags'
import CategoriesAdd from './components/CategoriesAdd'
import CategoriesEdit from './components/CategoriesEdit'
import TourPreferences from './components/TourPreferences'
import RefundList from './components/RefundList'
import RefundAdd from './components/RefundAdd'
import RefundEdit from './components/RefundEdit'
import TourPackagesDetail from './components/TourPackagesDetail'
import TourPackagesDetailPrivate from './components/TourPackagesDetailPrivate'
import TourPreferencesAdd from './components/TourPreferencesAdd'
import TourPreferencesEdit from './components/TourPreferencesEdit'
import Login from './components/Login'


import HighchartsVue from 'highcharts-vue';
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";

dataModule(Highcharts);

Vue.use(VueRouter)
Vue.use(HighchartsVue)


const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/user-profile', component: UserProfile },
    { path: '/add-user', component: UserAdd },
    { path: '/edit-user-host', component: UserEditHost },
    { path: '/edit-user-guest', component: UserEditGuest },
    { path: '/tour-packages', component: TourPackages },
    { path: '/curated-contents', component: ContentList },
    { path: '/curated-add', component: ContentAdd },
    { path: '/curated-edit', component: ContentEdit },
    { path: '/tour-preferences', component: TourPreferences },
    { path: '/categories-tags', component: CategoriesTags },
    { path: '/categories-add', component: CategoriesAdd },
    { path: '/categories-edit', component: CategoriesEdit },
    { path: '/refund-list', component: RefundList },
    { path: '/refund-add', component: RefundAdd },
    { path: '/refund-edit', component: RefundEdit },
    { path: '/tour-packages-detail', component: TourPackagesDetail },
    { path: '/tour-packages-detail-private', component: TourPackagesDetailPrivate },
    { path: '/tour-preferences-add', component: TourPreferencesAdd },
    { path: '/tour-preferences-edit', component: TourPreferencesEdit },

  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
