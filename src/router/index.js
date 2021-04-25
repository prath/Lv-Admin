import VueRouter from 'vue-router'
// import store from '@/store'
// import _ from 'lodash'

import {
  Login,

  Dashboard,

  // Verification Reqs
  VerificationRequests,
  VerificationDetail,

  // Pricing & Promo
  PricingStructure,
  PromoCodes,

  // Users
  Users,
  Hosts,
  HostAdd,
  Guests,
  PilotHosts,
  PilotHostAction,
  PilotGuests,
  PilotGuestAction,
  DeletedUsers,
  DeactivatedUsers,
  UserAdd,
  UserDetail,

  // Activities
  OngoingActivities,
  BookingContact,
  Bookings,

  // Packages
  ActivityPackages,
  ActivityPackageDetail,

  // Categories
  CategoriesAdd,
  CategoriesEdit,
  CategoriesTags,

  // Featured experiences
  ContentAdd,
  ContentEdit,
  ContentList,

  // Financial Reports
  FinancialReport,

  // Refund
  RefundAdd,
  RefundEdit,
  RefundList

} from '@/views'

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },

    // Dashboard
    { path: '/dashboard', component: Dashboard, meta: { group: 'dashboard' } },
    { path: '/verification-requests', component: VerificationRequests, meta: { group: 'dashboard' } },
    { path: '/verification-detail/:id_req', name: 'requestdetail', component: VerificationDetail, params: true, meta: { group: 'dashboard' } },
    { path: '/pricing-structure', component: PricingStructure, meta: { group: 'dashboard' } },
    { path: '/promo-codes', component: PromoCodes, meta: { group: 'dashboard' } },
    { path: '/promo-codes/pages/:page', component: PromoCodes, meta: { group: 'dashboard' } },
    // { path: '/promo-codes/add', component: PromoCodeAdd, meta: { group: 'dashboard' } },

    // Global Users (?)
    { path: '/users', component: Users, meta: { group: 'users' } },
    { path: '/users/page/:page', component: Users, meta: { group: 'users' } },
    { path: '/user/:id', name: 'userdetail', component: UserDetail, params: true, meta: { group: 'users' } },
    { path: '/add-user', component: UserAdd, meta: { group: 'users' } },

    // Users
    { path: '/hosts', component: Hosts, meta: { group: 'users' } },
    { path: '/hosts/page/:page', component: Hosts, meta: { group: 'users' } },
    { path: '/host-add', component: HostAdd, meta: { group: 'users' } },
    { path: '/guests', component: Guests, meta: { group: 'users' } },
    { path: '/guests/page/:page', component: Guests, meta: { group: 'users' } },
    { path: '/pilot-hosts', component: PilotHosts, meta: { group: 'users' } },
    { path: '/pilot-hosts/page/:page', component: PilotHosts, meta: { group: 'users' } },
    { path: '/pilot-host/:id', name: 'pilotHostAction', component: PilotHostAction, params: true, meta: { group: 'users' } },
    { path: '/pilot-guests', component: PilotGuests, meta: { group: 'users' } },
    { path: '/pilot-guest/:id', name: 'pilotGuestAction', component: PilotGuestAction, params: true, meta: { group: 'users' } },
    { path: '/pilot-guests/page/:page', component: PilotGuests, meta: { group: 'users' } },
    { path: '/deactivated-users', component: DeactivatedUsers, meta: { group: 'users' } },
    { path: '/deactivated-users/page/:page', component: DeactivatedUsers, meta: { group: 'users' } },
    { path: '/deleted-users', component: DeletedUsers, meta: { group: 'users' } },
    { path: '/deleted-users/page/:page', component: DeletedUsers, meta: { group: 'users' } },

    // Activities
    { path: '/ongoing-activities', component: OngoingActivities, meta: { group: 'activities' } },
    { path: '/activity-packages', component: ActivityPackages, meta: { group: 'activities' } },
    { path: '/activity-packages/page/:page', component: ActivityPackages, meta: { group: 'activities' } },
    { path: '/activity-packages/:id', component: ActivityPackageDetail, params: true, meta: { group: 'activities' } },
    { path: '/bookings', component: Bookings, meta: { group: 'activities' } },
    { path: '/bookings-by-contact', component: BookingContact, meta: { group: 'activities' } },
    { path: '/categories-tags', component: CategoriesTags, meta: { group: 'activities' } },
    { path: '/category-add', component: CategoriesAdd, meta: { group: 'activities' } },
    { path: '/categories-edit/:id', component: CategoriesEdit, params: true, meta: { group: 'activities' } },

    // Content
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
