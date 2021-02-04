import moment from 'moment'

export default {
  filters: {
    /**
     * FORMAT DATE INTO A MORE READABLE FORMAT
     */
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMM YYYY, h:mm:ss')
      }
    },
    /**
     * FORMAT DATE W/O TIME
     */
    formatOnlyDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMM YYYY')
      }
    }
  }
}
