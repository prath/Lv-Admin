import _ from 'lodash'

const auth = {
  methods: {
    /**
     * Logout
     */
    logout: function () {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('hostId')
      this.$router.push({ path: '/' })
    },
    /**
     * CHECK IF USER LOGGED IN
     */
    isloggedIn: function () {
      if (!localStorage.accessToken || localStorage.accessToken === undefined) {
        this.$router.push({ path: '/' })
      }
      return false
    },
    /**
     * LOGOUT IF ERROR 401
     */
    isUnauthorized: function () {
      if (!_.isEmpty(this.errorMsg) && this.errorMsg.code === 401) {
        this.logout()
      }
    }
  },
  mounted () {
    this.isloggedIn()
  }
}

export default auth
