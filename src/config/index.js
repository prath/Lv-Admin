export default {
  /**
     * BASE URL FOR API
     */
  apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
  apiProdUrl: `${process.env.VUE_APP_API_PROD_URL}`,
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
  }
}
