import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import stores from '@/store'

import '@/assets/css/bulma.min.css'
//import '@/assets/css/style.css'
import '@/assets/scss/style.scss'
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
import BookingContact from './components/BookingContact'
import BookingList from './components/BookingList'
import BookingEdit from './components/BookingEdit'
import ActiveTour from './components/ActiveTour'
import TourPackagesDetail from './components/TourPackagesDetail'
import TourPackagesDetailPrivate from './components/TourPackagesDetailPrivate'
import TourPreferencesAdd from './components/TourPreferencesAdd'
import TourPreferencesEdit from './components/TourPreferencesEdit'
import Login from './components/Login'
import FinancialReport from './components/FinancialReport'
import VerificationRequests from './components/VerificationRequests'
import VerificationDetail from './components/VerificationDetail'


import HighchartsVue from 'highcharts-vue';
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
Vue.config.productionTip = false
dataModule(Highcharts);

Vue.use(VueRouter)
Vue.use(HighchartsVue)
Vue.use(Vuex)

const store = new Vuex.Store(stores)



const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/user-profile', component: UserProfile },
    { path: '/add-user', component: UserAdd },
    { path: '/active-tour', component: ActiveTour },
    { path: '/edit-user-host/:user_uid', name: 'edithost', component: UserEditHost },
    { path: '/edit-user-guest', component: UserEditGuest },
    { path: '/tour-packages', component: TourPackages },
    { path: '/featured-contents', component: ContentList },
    { path: '/featured-add', component: ContentAdd },
    { path: '/featured-edit', component: ContentEdit },
    { path: '/tour-preferences', component: TourPreferences },
    { path: '/categories-tags', component: CategoriesTags },
    { path: '/categories-add', component: CategoriesAdd },
    { path: '/categories-edit/:id_categories', name: 'categoriesedit', component: CategoriesEdit },
    { path: '/refund-list', component: RefundList },
    { path: '/refund-add', component: RefundAdd },
    { path: '/refund-edit', component: RefundEdit },
    { path: '/booking-contact', component: BookingContact },
    { path: '/booking-list', component: BookingList },
    { path: '/booking-edit/:id_order', name: 'bookingdetail', component: BookingEdit },
    { path: '/tour-packages-detail/:id_tour', name: 'tourdetail', component: TourPackagesDetail },
    { path: '/tour-packages-detail-private/:id_tour', name: 'tourdetailprivate', component: TourPackagesDetailPrivate },
    { path: '/tour-preferences-add', component: TourPreferencesAdd },
    { path: '/tour-preferences-edit', component: TourPreferencesEdit },
    { path: '/financial-report', component: FinancialReport },
    { path: '/verification-requests', component: VerificationRequests },
    { path: '/verification-detail/:id_req', name: 'requestdetail', component: VerificationDetail },

  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
