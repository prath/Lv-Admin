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
  }
}
