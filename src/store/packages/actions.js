import axios from 'axios'
import config from '@/config'

export default {
  getPackages: async ({ commit }, params) => {
    commit('SET_ERR_MSG', {})
    commit('SET_LOADED', false)

    // params
    const limit = params.limit || 50
    const page = params.page || 1
    const param = params.param || 'new'

    // set headers
    const header = config.setHeader()

    try {
      // get data from server
      const response = await axios.get(`${config.apiUrl}package?page=${page}&per_page=${limit}&param=${param}`, header)

      // assign data and pagination
      const data = await response.data.data
      const pagination = await response.data.paginate

      if (response.status === 200) {
        commit('SET_PACKAGES', data)
        commit('SET_PACKAGE_PAGINATION', pagination)
        commit('SET_LOADED', true)
        return data
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', false)
    }
  }
}
