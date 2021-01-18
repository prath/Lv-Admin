// import axios from 'axios'
// import config from '@/config'

export default {
  /**
   * SET PROCESS STATUS INTO STARTED/NOT COMPLETED
   *
   * @param {Function} commit
   */
  processStarted: ({ commit }) => {
    commit('PROCESS_COMPLETED', false)
  }
}
