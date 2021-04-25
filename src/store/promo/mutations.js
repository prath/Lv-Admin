// import _ from 'lodash'

export default {
  /**
   * SET ALL USERS
   *
   * @param {Object} state host users data
   * @param {Array} users users data
   */
  SET_PROMO: (state, data) => {
    state.promo = data
    console.log('mutation: ', state.promo)
  },
  /**
   * SET PAGINATION DATA
   *
   * @param {Object} state host users data
   * @param {Array} pagination host users data
   */
  SET_PROMO_PAGINATION: (state, pagination) => {
    state.pagination = pagination
  }
}
