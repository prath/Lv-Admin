import _ from 'lodash'

export default {
  computed: {
    isErrorEmpty: function () {
      return _.isEmpty(this.errorMsg)
    }
  }
}
