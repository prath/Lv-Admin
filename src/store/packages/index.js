import actions from '@/store/packages/actions'
import mutations from '@/store/packages/mutations'
import getters from '@/store/packages/getters'

const state = {
  // all users
  packages: [],
  // pagination data
  packagePagination: {}
}

export default {
  state,
  actions,
  mutations,
  getters
}
