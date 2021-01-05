export default {
  /**
     * GET ALL VERIFICATION REQUESTs
     *
     * Filter unverified users that already request to be verified
     * @param state
     */
  getUnvReqs: (state) => {
    // return state.unvUsers
    const requests = []
    state.unvUsers.forEach(item => {
      if ((item.card_id || item.bussiness_id) && item.is_verified !== true) {
        requests.push(item)
      }
    })
    return requests
  },
  /**
     * GET ONE VERIFICATION REQUEST
     *
     * Retrieve one request data from unvUsers state
     * @param state
     */
  getSingleReq: (state) => (id) => {
    return state.unvUsers.find(user => user.host_id === id)
  },

  /**
     * UPDATE LOADING STATUS
     *
     * @param {Object} state
     */
  loadingStatus: (state) => {
    console.log(state.loadingStatus)
    return state.loadingStatus
  },

  /**
     * UPDATE PROCESS COMPLETION STATUS
     *
     * @param {Object} state
     */
  processCompleted: (state) => {
    return state.processCompleted
  }
}
