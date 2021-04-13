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
   *
   * @param {Object} state
   * @param {Boolean} deactivationStatus payload from updated function
   */
  UPDATE_DEACTIVATION_USER: (state, deactivation) => {
    if (!_.isEmpty(state.users)) {
      const i = _.findIndex(state.users, ['user_uid', deactivation.uid])
      state.users[i].is_deactivate = deactivation.status
    }
    state.userData.is_deactivate = deactivation.status
  },
  /**
   * UPDATE CONVERTED HOST
   *
   * Update user data with recently added/updated host data
   * guest is converted into host
   *
   * @param {Object} state
   * @param {Object} userData updated user data with host data
   */
  UPDATE_CONVERTED_HOST: (state, userData) => {
    if (!_.isEmpty(state.users)) {
      const updatedIdx = _.findIndex(state.users, ['user_uid', userData.user_uid])
      state.users[updatedIdx] = userData
    }
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
   * @param {Array} users users data
   */
  SET_USERS: (state, data) => {
    switch (data.param) {
      case 'host':
        state.users.hosts = data.data
        break
      case 'guest':
        state.users.guests = data.data
        break
      case 'pilot host':
        state.users.pilothosts = data.data
        break
      case 'pilot guest':
        state.users.pilotguests = data.data
        break
      default:
        state.users.all = data.data
        break
    }
  },
  /**
   * SET PAGINATION DATA
   *
   * @param {Object} state host users data
   * @param {Array} pagination host users data
   */
  SET_PAGINATION: (state, data) => {
    switch (data.param) {
      case 'host':
        state.pagination.hosts = data.pagination
        break
      case 'guest':
        state.pagination.guests = data.pagination
        break
      case 'pilot host':
        state.pagination.pilothosts = data.pagination
        break
      case 'pilot guest':
        state.pagination.pilotguests = data.pagination
        break
      default:
        state.pagination.users = data.pagination
        break
    }
  },
  /**
   * UPDATE DELETED USER
   *
   * @param {Object} state
   * @param {Object} data
   */
  UPDATE_DELETED_USER: (state, data) => {
    if (!_.isEmpty(state.users)) {
      const deletedIdx = _.findIndex(state.users, ['user_uid', data.user_uid])
      console.log('deletedIdx ', deletedIdx)
      state.users[deletedIdx] = data
    }
    state.userData = data
  }
}
