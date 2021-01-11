import VueRouter from 'vue-router'

import Login from '@/views/_common/Login'
import Dashboard from '@/views/Dashboard'
// Users
import Users from '@/views/users/Users'
import UserAdd from '@/views/users/UserAdd'
import UserEditHost from '@/views/users/UserEditHost'
import UserProfile from '@/views/users/UserProfile'
import UserEditGuest from '@/views/users/UserEditGuest'
// Experiences
import TourPackages from '@/views/experiences/TourPackages'
import TourPackagesDetail from '@/views/experiences/TourPackagesDetail'
import TourPackagesDetailPrivate from '@/views/experiences/TourPackagesDetailPrivate'
// Featured Experiences
import ContentList from '@/views/featured-experiences/ContentList'
import ContentAdd from '@/views/featured-experiences/ContentAdd'
import ContentEdit from '@/views/featured-experiences/ContentEdit'
// Categories
import CategoriesTags from '@/views/categories/CategoriesTags'
import CategoriesAdd from '@/views/categories/CategoriesAdd'
import CategoriesEdit from '@/views/categories/CategoriesEdit'
// Tour Prefernces
import TourPreferences from '@/views/preferences/TourPreferences'
import TourPreferencesAdd from '@/views/preferences/TourPreferencesAdd'
import TourPreferencesEdit from '@/views/preferences/TourPreferencesEdit'
// Refund
import RefundList from '@/views/refund/RefundList'
import RefundAdd from '@/views/refund/RefundAdd'
import RefundEdit from '@/views/refund/RefundEdit'
// Booking by Contact
import BookingContact from '@/views/booking-contact/BookingContact'
// Bookings
import BookingList from '@/views/bookings/BookingList'
import BookingEdit from '@/views/bookings/BookingEdit'
// Tours
import ActiveTour from '@/views/tours/ActiveTour'
// Financial Report
import FinancialReport from '@/views/financial-reports/FinancialReport'
// Verification Reqs
import VerificationRequests from '@/views/verification-reqs/VerificationRequests'
import VerificationDetail from '@/views/verification-reqs/VerificationDetail'

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
      path: '/edit-user/:user_name',
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
