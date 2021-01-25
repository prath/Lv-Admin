import axios from 'axios'
import config from '@/config'

export default {
  /**
   * GET ALL USERS
   *
   * @param {Function} commit
   * @param {Number} limit
   * @param {Number} page
   */
  getUsers: async ({ commit }, params) => {
    commit('SET_LOADED', false)

    // check and set params
    const limit = params.limit || 20
    const page = params.page || 1
    const param = params.param || 'all'

    // set headers
    const header = config.setHeader()

    try {
      // get data from server
      const response = await axios.get(`${config.apiUrl}host/list?per_page=${limit}&page=${page}&param=${param}`, header)

      // assign data and pagination
      const data = await response.data.data
      const pagination = await response.data.paginate

      if (response.data.code === 200) {
        commit('SET_USERS', data)
        commit('SET_PAGINATION', pagination)
        commit('SET_LOADED', true)
        return data
      } else {
        throw response.data
      }
    } catch (error) {
      const err = {
        status: true,
        msg: `${error.code} - ${error.title}`
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', false)
    }
  },
  /**
   * GET ALL UNVERIFIED USERS
   *
   * @todo
   * - change isloaded and put it in local state, not global state
   *
   * @param {Function} commit send data to mutate
   */
  getUnvUsers: ({ commit }) => {
    commit('SET_LOADED', false)
    const header = config.setHeader()
    axios.get(config.apiUrl + 'host/list?per_page=100&page=1&param=unverified', header)
      .then(response => {
        commit('SET_UNVERIFIED_USERS', response.data.data)
      })
      .catch(error => {
        const err = {
          status: true,
          msg: error
        }
        commit('SET_ERR_MSG', err)
      })
      .finally(() => {
        commit('SET_LOADED', true)
      })
  },
  getUserByID: async ({ commit }, uid) => {
    commit('SET_LOADED', false)

    // set headers
    const header = config.setHeader()

    try {
      const res = await axios.get(`${config.apiUrl}auth/users/${uid}/details`, header)
      const resData = await res.data.data

      if (res.status === 200) {
        commit('SET_USER_DATA', resData)
        commit('SET_LOADED', true)
      }
    } catch (error) {
      const err = {
        status: true,
        msg: `${error.code} - ${error.title}`
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
  },
  /**
   * GET HOST USER DATA BY ID
   *
   * @param {Function} commit send data to mutate
   * @param {String} uid user id
   */
  getHostByID: ({ commit }, uid) => {
    commit('SET_LOADED', false)
    axios.get(config.apiUrl + 'host/get/gets/' + uid)
      .then(response => {
        commit('SET_USER_DATA', response.data.data)
      })
      .catch(error => {
        const err = {
          status: true,
          msg: error
        }
        commit('SET_ERR_MSG', err)
      })
      .finally(() => {
        commit('SET_LOADED', true)
      })
  },
  /**
   * UPDATE VERIFICATION REQUEST DATA
   *
   * PATCH verification data with approval or rejection. The user/host will be verified if apporoved
   * @param {Function} commit
   * @param {Object} payload
   */
  patchVerificationData: ({ commit }, payload) => {
    commit('LOADING_STATUS', true)
    const header = config.setHeader()
    axios.patch(config.apiUrl + 'hosts/api/verification/status', payload, header)
      .then(response => {
        commit('UPDATE_UNVERIFIED_USERS', { response, payload })
      })
      .catch(error => {
        const err = {
          status: true,
          msg: error
        }
        commit('SET_ERR_MSG', err)
      })
      .finally(() => {
        commit('LOADING_STATUS', false)
        commit('PROCESS_COMPLETED', true)
      })
  }
}
