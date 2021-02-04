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
    }
  }
}
