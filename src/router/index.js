import VueRouter from 'vue-router'

import {
  Login,
  Dashboard,
  // Users
  Users,
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
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/users/page/:page', component: Users },
    {
      path: '/user/:id',
      name: 'userdetail',
      component: UserDetail,
      params: true
    },
    { path: '/add-user', component: UserAdd },
    { path: '/active-tour', component: ActiveTour },
    { path: '/edit-user-guest', component: UserEditGuest },
    { path: '/packages', component: Packages },
    { path: '/packages/page/:page', component: Packages },
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
    { path: '/package-detail/:id_tour', name: 'tourdetail', component: PackageDetail },
    { path: '/package-detail-private/:id_tour', name: 'tourdetailprivate', component: PackagePrivateDetail, params: true },
    { path: '/tour-preferences-add', component: TourPreferencesAdd },
    { path: '/tour-preferences-edit', component: TourPreferencesEdit },
    { path: '/financial-report', component: FinancialReport },
    { path: '/verification-requests', component: VerificationRequests },
    { path: '/verification-detail/:id_req', name: 'requestdetail', component: VerificationDetail, params: true }

  ],
  mode: 'history'
})

export default router
