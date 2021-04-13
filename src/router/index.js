import VueRouter from 'vue-router'
// import store from '@/store'
// import _ from 'lodash'

import {
  Login,
  Dashboard,
  // Users
  Users,
  Hosts,
  Guests,
  PilotHosts,
  PilotGuests,
  UserAdd,
  UserDetail,
  UserEditGuest,
  // Experiences
  Packages,
  PackageDetail,
  PackagePrivateDetail,
  // Featured Experiences
  ContentList,
  ContentAdd,
  ContentEdit,
  // Categories
  CategoriesTags,
  CategoriesAdd,
  CategoriesEdit,
  // Tour Prefernces
  TourPreferences,
  TourPreferencesAdd,
  TourPreferencesEdit,
  // Refund
  RefundList,
  RefundAdd,
  RefundEdit,
  // Booking by Contact
  BookingContact,
  // Bookings
  BookingList,
  BookingEdit,
  // Tours
  ActiveTour,
  // Financial Report
  FinancialReport,
  // Verification Reqs
  VerificationRequests,
  VerificationDetail
} from '@/views'

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard, meta: { group: 'dashboard' } },
    { path: '/verification-requests', component: VerificationRequests, meta: { group: 'dashboard' } },
    { path: '/verification-detail/:id_req', name: 'requestdetail', component: VerificationDetail, params: true, meta: { group: 'dashboard' } },

    { path: '/users', component: Users, meta: { group: 'users' } },
    { path: '/users/page/:page', component: Users, meta: { group: 'users' } },
    { path: '/hosts', component: Hosts, meta: { group: 'users' } },
    { path: '/hosts/page/:page', component: Hosts, meta: { group: 'users' } },
    { path: '/guests', component: Guests, meta: { group: 'users' } },
    { path: '/guests/page/:page', component: Guests, meta: { group: 'users' } },
    { path: '/pilot-hosts', component: PilotHosts, meta: { group: 'users' } },
    { path: '/pilot-hosts/page/:page', component: PilotHosts, meta: { group: 'users' } },
    { path: '/pilot-guests', component: PilotGuests, meta: { group: 'users' } },
    { path: '/pilot-guests/page/:page', component: PilotGuests, meta: { group: 'users' } },
    { path: '/user/:id', name: 'userdetail', component: UserDetail, params: true, meta: { group: 'users' } },
    { path: '/add-user', component: UserAdd, meta: { group: 'users' } },
    { path: '/edit-user-guest', component: UserEditGuest, meta: { group: 'users' } },

    { path: '/active-tour', component: ActiveTour, meta: { group: 'activities' } },
    { path: '/packages', component: Packages, meta: { group: 'activities' } },
    { path: '/packages/page/:page', component: Packages, meta: { group: 'activities' } },
    { path: '/tour-preferences', component: TourPreferences, meta: { group: 'activities' } },
    { path: '/categories-tags', component: CategoriesTags, meta: { group: 'activities' } },
    { path: '/categories-edit/:id_categories', name: 'categoriesedit', component: CategoriesEdit, meta: { group: 'activities' } },
    { path: '/categories-add', component: CategoriesAdd, meta: { group: 'activities' } },
    { path: '/booking-contact', component: BookingContact, meta: { group: 'activities' } },
    { path: '/booking-list', component: BookingList, meta: { group: 'activities' } },
    { path: '/booking-edit/:id_order', name: 'bookingdetail', component: BookingEdit, meta: { group: 'activities' } },
    { path: '/package-detail/:id_tour', name: 'tourdetail', component: PackageDetail, meta: { group: 'activities' } },
    { path: '/package-detail-private/:id_tour', name: 'tourdetailprivate', component: PackagePrivateDetail, params: true, meta: { group: 'activities' } },
    { path: '/tour-preferences-add', component: TourPreferencesAdd, meta: { group: 'activities' } },
    { path: '/tour-preferences-edit', component: TourPreferencesEdit, meta: { group: 'activities' } },

    { path: '/featured-contents', component: ContentList, meta: { group: 'content' } },
    { path: '/featured-add', component: ContentAdd, meta: { group: 'content' } },
    { path: '/featured-edit', component: ContentEdit, meta: { group: 'content' } },

    { path: '/refund-list', component: RefundList, meta: { group: 'transactions' } },
    { path: '/refund-add', component: RefundAdd, meta: { group: 'transactions' } },
    { path: '/refund-edit', component: RefundEdit, meta: { group: 'transactions' } },
    { path: '/financial-report', component: FinancialReport, meta: { group: 'transactions' } }
  ],
  mode: 'history'
})

/**
 * empty error message everytime changing route.
 *
 * sometimes when error occured, the state persists,
 * so when navigate away to another page, the error is injected into the new page
 */
// router.beforeEach((to, from, next) => {
//   const errEmpty = _.isEmpty(store.state.errorMsg)
//   if (!errEmpty) {
//     store.commit('SET_ERR_MSG', {})
//   }
//   next()
// })

export default router
