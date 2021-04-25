import actions from '@/store/bookings/actions'
import mutations from '@/store/bookings/mutations'
import getters from '@/store/bookings/getters'

const state = {
  // bookings
  bookings: [],
  // pagination
  pagination: {}
}

export default {
  state,
  actions,
  mutations,
  getters

}
