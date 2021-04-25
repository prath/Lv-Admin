export default {
  /**
   * SET PACKAGES DATA
   *
   * @param {Object} state host users data
   * @param {Array} packages host users data
   */
  SET_PACKAGES: (state, packages) => {
    state.packages = packages
  },
  /**
   * SET PACKAGE PAGINATION DATA
   *
   * @param {Object} state host users data
   * @param {Array} pagination host users data
   */
  SET_PACKAGE_PAGINATION: (state, pagination) => {
    state.packagePagination = pagination
  }
}
