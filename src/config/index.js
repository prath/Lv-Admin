export default {
  /**
     * BASE URL FOR API
     */
  apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
  /**
     * SET HEADERS OBJECT WITH BEARER TOKEN
     */
  setHeader: function () {
    const accessToken = (localStorage.accessToken) ? localStorage.accessToken : ''
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  },
  /**
     * CHECK IF USER LOGGED IN
     */
  authCheck: function () {
    if (!localStorage.accessToken || localStorage.accessToken === undefined) {
      this.$router.push({ path: '/' })
    }
    return false
  }
}
