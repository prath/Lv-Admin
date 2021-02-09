<template>
  <section class="table is-fullwidth">

    <!--
      TABLE TITLES
      ~~~~~
      - Checks if the thead items is defined or not.
      - Loops the fields to set <th>
     -->
    <header v-if="fields" class="table--head">
      <div class="table--row">

        <!-- the headings -->
        <div class="table--cell" v-for="(field, i) in fields" :key="i">
          {{ field }}
        </div>
      </div>
    </header>

    <!--
      TABLE CONTENT
      ~~~~~
      - Checks if the tbody items is defined or not.
      - Loops the items to set the <tr> and <td>
     -->
    <section class="table--body" v-if="items">

      <div class="table--row" v-for="(item, i) in items" :key="i">
        <!-- {{ item }} -->
        <div class="table--cell" v-for="(el, i) in item" :key="i">

          <!-- Render the field value -->
          <slot :name="`${i}`" :data="el">
            <span :class="el.className">
              {{ el.value }}
            </span>
          </slot>
          <!--
            ITEM/FIELD VALUE CHILDREN
            ~~~~~
            - Checks if the value on each fields has children
            - If field has children, loop the items to render the children
            - The tags for these children can be set in the table config, if not <span> will be used
          -->
          <div class="child" v-if="el.child">
            <template v-for="(children) in el.child">
              <template v-for="(child, idx) in children">
                <slot :name="`${idx}`" :data="child">
                  <img v-if="child.tag === 'img'" :src="child.value" :title="child.title" :class="child.className" :key="idx" />
                  <component v-else-if="child.tag" :is="child.tag" :key="idx" :class="child.className">
                    {{ child.value }}
                  </component>
                  <span v-else :key="idx" :class="child.className">
                    {{ child.value }}
                  </span>
                </slot>
              </template>
            </template>
          </div>

        </div>
      </div>
    </section>

  </section>
</template>
<script>
/**
 * TABLE COMPONENT
 * ~~~~~
 * @todo
 * - table footer
 * - table variants: striped, dark, whatever
 * - responsiveness
 */
export default {
  name: 'LvTable',
  props: {
    fields: Array,
    items: Array,
    actionButtons: Array
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: table;
  background: white;
  border-radius: 10px;

  .table--head {
    display: table-header-group;
    font-weight: 700;

    .table--row {
      .table--cell {
        padding: 30px;
      }

      &:last-child {
        .table--cell {
          border-bottom: 5px solid #edeff4;
        }
      }

    }
  }

  .table--body {
    display: table-row-group;
  }

  .table--row {
    display: table-row;

    .table--cell {
      display: table-cell;
      padding: 15px 30px;
      border-bottom: 5px solid #edeff4;

      .child {
        position: relative;
      }
    }

    &:last-child {
      .table--cell {
        border-bottom: 0;
      }
    }
  }
}
</style>
