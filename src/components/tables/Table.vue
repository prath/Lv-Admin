<template>
  <table class="table is-fullwidth table--orders">

    <!--
      TABLE TITLES
      ~~~~~
      - Checks if the thead items is defined or not.
      - Loops the fields to set <th>
     -->
    <thead v-if="fields">
      <tr>

        <!-- the headings -->
        <th v-for="(field, i) in fields" :key="i">
          {{ field }}
        </th>
      </tr>
    </thead>

    <!--
      TABLE CONTENT
      ~~~~~
      - Checks if the tbody items is defined or not.
      - Loops the items to set the <tr> and <td>
     -->
    <tbody v-if="items">
      <tr v-for="(item, i) in items" :key="i">
        <td v-for="(el, i) in item" :key="i">
          <div class="wrapper">
            <div>
              <!-- Render the field value -->
              <span class="info">
                {{ el.value }}
              </span>

              <!--
                CHECKS ITEM CHILDREN
                ~~~~~
                - Checks if the value on each fields has children
                - If field has children, loop the items to render the children
                - The tags for these children can be set in the table config, if not <span> will be used
              -->
              <div v-if="el.child">
                <template v-for="(children) in el.child">
                  <template v-for="(child, idx) in children">
                    <component v-if="child.tag" :is="child.tag" :key="idx" :class="child.class">
                      {{ child.value }}
                    </component>
                    <span v-else :key="idx" :class="child.class">
                      {{ child.value }}
                    </span>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>

  </table>
</template>
<script>
// import _ from 'lodash'
export default {
  name: 'LvTable',
  props: {
    fields: Array,
    items: Array
  }
}
</script>

<style>

</style>
