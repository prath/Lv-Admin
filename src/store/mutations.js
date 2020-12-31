import _ from 'lodash'
export default {
    /**
     * SET IF THE OBJECT IS LOADED
     *
     * @param {Object} state
     * @param {Boolean} isLoaded
     */
    SET_LOADED: (state, isLoaded) => {
        state.isLoaded = isLoaded
    },
    /**
     * SET IF THE API IS UPDATED
     *
     * @param {Object} state
     * @param {Boolean} loadingStatus
     */
    LOADING_STATUS: (state, loadingStatus) => {
        state.loadingStatus = loadingStatus
    },
    /**
     * SET IF THE PROCESS IS COMPLETED OR NOT
     *
     * @param {Object} state
     * @param {Boolean} processCompleted
     */
    PROCESS_COMPLETED: (state, processCompleted) => {
        state.processCompleted = processCompleted
    },
    /**
     * SET ERROR MESSAGE AND STATUS IF ERRORS
     *
     * @param {Object} state
     * @param {Object} errorMsg
     */
    SET_ERR_MSG: (state, errorMsg) => {
        state.errorMsg = errorMsg
    },
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
        if(data.response.status === 200) {
            // find updated index from unverified users array/object
            const i = _.findIndex(state.unvUsers, ['host_id', data.payload.host_id])

            // update the status of photo id and business license
            state.unvUsers[i].bussiness_id_status = data.payload.bussiness_id_status
            state.unvUsers[i].card_id_status = data.payload.card_id_status

            // if business license and photo id approved, means that the host is verified,
            // then, remove that host from unverified list of users
            if(data.payload.bussiness_id_status === 2 && data.payload.card_id_status === 2) {
                state.unvUsers.splice(i, 1)
            }
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
    }
}