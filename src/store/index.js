import state from '@/store/state.js'
import mutations from '@/store/mutations.js'
import actions from '@/store/actions.js'
import getters from '@/store/getters.js'

// import modules
import users from '@/store/users'

export default {
  state,
  mutations,
  getters,
  actions,

  modules: {
    users
  }
}
