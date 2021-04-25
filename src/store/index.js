import state from '@/store/state.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'
import getters from '@/store/getters.js'

// import modules
import users from '@/store/users'
import packages from '@/store/packages'
import promo from '@/store/promo'
import bookings from '@/store/bookings'

export default {
  state,
  mutations,
  getters,
  actions,

  modules: {
    users,
    packages,
    promo,
    bookings
  }
}
