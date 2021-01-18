export default {
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
