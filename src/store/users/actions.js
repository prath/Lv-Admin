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
      const response = await axios.get(`${config.apiUrl}host/list?per_page=${limit}&page=${page}&param=${param}`, header)

      // assign data and pagination
      const data = await response.data.data
      const pagination = await response.data.paginate

      if (response.data.code === 200) {
        commit('SET_USERS', data)
        commit('SET_PAGINATION', pagination)
        commit('SET_LOADED', true)
        return data
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error,
        code: error.response.status
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
  getUnvUsers: async ({ commit }) => {
    commit('SET_ERR_MSG', {})
    commit('SET_LOADED', false)

    const header = config.setHeader()

    try {
      const response = await axios.get(config.apiUrl + 'host/list?per_page=100&page=1&param=request', header)
      const data = await response.data.data

      if (response.data.code === 200) {
        commit('SET_UNVERIFIED_USERS', response.data.data)
        commit('SET_LOADED', true)
        return data
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
  },
  /**
   * GET USER BY ID
   *
   * @param {Function} commit send data to mutate
   * @param {String} uid user id of a user
   */
  getUserByID: async ({ commit }, uid) => {
    commit('SET_ERR_MSG', {})
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
        msg: error,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
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
  },
  /**
   * DEACTIVATE ACCOUNT
   *
   * Deactivate user account by admin
   *
   * @param {Function} commit
   * @param {String} uid
   */
  deactivateUser: async ({ commit }, uid) => {
    commit('SET_ERR_MSG', {})
    commit('SET_LOADED', false)

    // set headers
    const header = config.setHeader()

    try {
      const response = await axios.get(`${config.apiUrl}auth/users/deactivate/${uid}`, header)

      if (response.status === 200) {
        commit('SET_LOADED', true)
        const deactivation = {
          uid: uid,
          status: true
        }
        commit('UPDATE_DEACTIVATION_USER', deactivation)
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
  },
  /**
   * REACTIVATE ACCOUNT
   *
   * Reactivate user account by admin
   *
   * @param {Function} commit
   * @param {String} uid
   */
  reactivateUser: async ({ commit }, uid) => {
    commit('SET_ERR_MSG', {})
    commit('SET_LOADED', false)

    // set headers
    const header = config.setHeader()

    try {
      const response = await axios.get(`${config.apiUrl}auth/users/reactivate/${uid}`, header)

      if (response.status === 200) {
        commit('SET_LOADED', true)
        const deactivation = {
          uid: uid,
          status: false
        }
        commit('UPDATE_DEACTIVATION_USER', deactivation)
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
  },
  /**
   * Permanently Delete User
   *
   * delete user permanently
   * @param {Function} commit
   * @param {String} uid
   */
  deleteUser: async ({ commit }, uid) => {
    commit('SET_LOADED', false)
    commit('SET_ERR_MSG', {})

    const payload = {
      uid: uid
    }

    console.log(uid)

    // set headers
    const header = config.setHeader()

    try {
      const response = await axios.post(`${config.apiUrl}auth/delete/permanently`, payload, header)

      console.log(response)

      if (response.status === 200) {
        commit('SET_LOADED', true)
        // commit('DELETE_USER', )
      }
    } catch (error) {
      const err = {
        status: true,
        msg: error,
        code: error.response.status
      }
      commit('SET_ERR_MSG', err)
      commit('SET_LOADED', true)
    }
  },
  SignGuestAsHost: ({ commit }, payload) => {
    console.log(payload)
  }
}
