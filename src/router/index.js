import VueRouter from 'vue-router'

import {
  Login,
  Dashboard,
  // Users
  Users,
  UserAdd,
  UserEditHost,
  UserProfile,
  UserEditGuest,
  // Experiences
  TourPackages,
  TourPackagesDetail,
  TourPackagesDetailPrivate,
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
    { path: '/user-profile', component: UserProfile },
    { path: '/add-user', component: UserAdd },
    { path: '/active-tour', component: ActiveTour },
    {
      path: '/edit-user/:id',
      name: 'edithost',
      component: UserEditHost,
      params: true
    },
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
    { path: '/verification-detail/:id_req', name: 'requestdetail', component: VerificationDetail }

  ],
  mode: 'history'
})

export default router
