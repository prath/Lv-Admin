import actions from '@/store/users/actions'
import mutations from '@/store/users/mutations'
import getters from '@/store/users/getters'

const state = {
  // all users
  users: {
    all: [],
    hosts: [],
    guests: [],
    pilothosts: [],
    pilotguests: []
  },
  // pagination data
  pagination: {
    users: {},
    hosts: {},
    guests: {},
    pilothosts: {},
    pilotguests: {}
  },
  // Unverified users
  unvUsers: [],
  // Single user data
  userData: {},
  // Single host data
  hostData: []
}

export default {
  state,
  actions,
  mutations,
  getters

}
