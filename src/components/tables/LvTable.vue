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
     * HELPERS
     */

    // render child element(s) of a field
    function renderChild (children) {
      const c = _.map(children, (child, key) => {
        const k = Object.keys(child)
        const tag = (child[k[0]].tag) ? `${child[k[0]].tag}` : 'span'
        return h(tag, { class: `${child[k[0]].class}` }, `${child[k[0]].value}`)
      })
      return c
    }

    /**
     * RENDER TABLE ELEMENTS
     */

    // Render <th>
    const headings = this.fields ? _.map(this.fields, (field) => h('th', `${field}`)) : null
    // Render <thead>
    const thead = this.fields ? h('thead', [h('tr', headings)]) : null

    // Render <tr>
    const tr = this.items ? _.map(this.items, (item) => {
      return h('tr',
        // Render <td>
        _.map(item, (el, k) => {
          return h('td', [
            // Render <div class=wrapper>
            h('div', {
              class: 'wrapper'
            },
            [
              // Render another div
              h('div', [
                // Render <span>
                h('span', { class: 'info' }, `${el.value}`),
                // Render child element is exist
                (el.child) ? h('div', renderChild(el.child)) : ''
                // h('div', this.$scopedSlots.default({ el: `${el.value}` }))
              ])
            ])
          ])
        })
      )
    }) : null
    // Render <tbody>
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
