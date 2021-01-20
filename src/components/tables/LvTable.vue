<script>
import _ from 'lodash'
export default {
  name: 'LvTable',
  props: {
    fields: Array,
    items: Array
  },
  render: function (h) {
    // Render <thead>
    const headings = this.fields ? _.map(this.fields, (field) => h('th', `${field}`)) : null
    const thead = this.fields ? h('thead', [h('tr', headings)]) : null

    // Render <tbody>
    const tr = this.items ? _.map(this.items, (item) => {
      return h('tr',
        _.map(item, (el, k) => {
          if (el.render !== false) {
            return h('td', [
              h('div', { class: 'wrapper' }, [
                h('span', { class: 'info' }, `${el.value}`),
                this.$slots[k]
              ])
            ])
          }
        })
      )
    }) : null
    const tbody = this.items ? h('tbody', tr) : null

    // Render <table>
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
