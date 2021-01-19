<script>
import _ from 'lodash'
export default {
  name: 'LvTable',
  props: {
    fields: Array,
    items: Array
  },
  render: function (h) {
    /**
     * SET TABLE HEADINGS
     */
    const headings = this.fields ? this.fields.map((field) => h('th', `${field}`)) : null
    const thead = this.fields ? h('thead', [h('tr', headings)]) : null

    /**
     * SET TABLE BODY
     */
    const tr = this.items ? this.items.map((item) => {
      return h('tr',
        _.map(item, (el) => {
          return h('td',
            `${el}`
          )
        })
      )
    }) : null
    const tbody = this.items ? h('tbody', tr) : null

    return h(
      'table',
      {
        class: 'table is-fullwidth table--orders'
      },
      [thead, tbody]
    )
  }
}
</script>

<style>

</style>
