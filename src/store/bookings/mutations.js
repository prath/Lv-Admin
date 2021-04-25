// import _ from 'lodash'

export default {
  /**
   * SET ALL BOOKINGS
   *
   * @param {Object} state Bookings data
   * @param {Array} users Bookings data
   */
  SET_BOOKINGS: (state, data) => {
    state.bookings = data
  },
  /**
   * SET PAGINATION DATA
   *
   * @param {Object} state pagination
   * @param {Array} pagination
   */
  SET_PAGINATION: (state, pagination) => {
    state.pagination = pagination
  }
}
