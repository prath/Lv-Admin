import actions from '@/store/users/actions'
import mutations from '@/store/users/mutations'
import getters from '@/store/users/getters'

const state = {
  // all users
  users: [],
  // Unverified users
  unvUsers: [],
  // Single user data
  userData: [],
  // Single host data
  hostData: [],
  // pagination data
  pagination: {}
}

export default {
  state,
  actions,
  mutations,
  getters

}
