import _ from 'lodash'

export default {
  /**
   * SET UNVERIFIED USERS OBJECT
   *
   * @param {Object} state
   * @param {Array} unvUsers
   */
  SET_UNVERIFIED_USERS: (state, unvUsers) => {
    state.unvUsers = unvUsers
  },
  /**
   * UPDATE UNVERIFIED USERS OBJECT
   *
   * Update unverified users object after admin verify one verification requests
   * @param {Object} state
   * @param {Array} data payload from updated function
   */
  UPDATE_UNVERIFIED_USERS: (state, data) => {
    if (data.response.status === 200) {
      // find updated index from unverified users array/object
      const i = _.findIndex(state.unvUsers, ['host_id', data.payload.host_id])

      // update the status of photo id and business license
      state.unvUsers[i].bussiness_id_status = data.payload.bussiness_id_status
      state.unvUsers[i].card_id_status = data.payload.card_id_status

      // if business license and photo id approved, means that the host is verified,
      // then, remove that host from unverified list of users
      if (data.payload.bussiness_id_status === 2 && data.payload.card_id_status === 2) {
        state.unvUsers.splice(i, 1)
      }
    }
  },
  /**
   * UPDATE DEACTIVATED USER
   *
   * Update deactivated user, after admin deactivated and server respons with 200
   * @param {Object} state
   * @param {Boolean} deactivationStatus payload from updated function
   */
  UPDATE_DEACTIVATED_USER: (state, uid) => {
    if (state.users) {
      const i = _.findIndex(state.users, ['user_uid', uid])
      state.users[i].is_deactivate = true
    }
    state.userData.is_deactivate = true
  },
  /**
   * SET SINGLE USER DATA OBJECT
   *
   * @param {Object} state
   * @param {Array} userData
   */
  SET_USER_DATA: (state, userData) => {
    state.userData = userData
  },
  /**
   * SET SINGLE HOST DATA OBJECT
   *
   * @param {Object} state
   * @param {Array} hostData
   */
  SET_HOST_DATA: (state, hostData) => {
    state.hostData = hostData
  },
  /**
   * SET ALL USERS
   *
   * @param {Object} state host users data
   * @param {Array} hostUsers host users data
   */
  SET_USERS: (state, users) => {
    state.users = users
  },
  /**
   * SET PAGINATION DATA
   *
   * @param {Object} state host users data
   * @param {Array} pagination host users data
   */
  SET_PAGINATION: (state, pagination) => {
    state.pagination = pagination
  }
}
