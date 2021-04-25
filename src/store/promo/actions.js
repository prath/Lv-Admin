import axios from 'axios'
import config from '@/config'

export default {
  /**
   * GET ALL PROMOS
   *
   * @param {Function} commit
   * @param {Number} limit
   * @param {Number} page
   */
  getPromos: async ({ commit }, params) => {
    commit('SET_ERR_MSG', {})
    commit('SET_LOADED', false)

    // check and set params
    const limit = params.limit || 20
    const page = params.page || 1
    const param = params.param || 'all'

    // set headers
    const header = config.setHeader()

    try {
      // get data from server
      // param: all | exp | newest
      const response = await axios.get(`${config.apiUrl}auth/promotion/lists/administrator?per_page=${limit}&page=${page}&param=${param}`, header)

      // assign data and pagination
      const data = await response.data.data
      const pagination = await response.data.paginate

      if (response.data.code === 200) {
        // console.log(data)
        commit('SET_PROMO', data)
        commit('SET_PROMO_PAGINATION', pagination)
        commit('SET_LOADED', true)
        return data
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error.response.data.title,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', false)
    }
  }
}
