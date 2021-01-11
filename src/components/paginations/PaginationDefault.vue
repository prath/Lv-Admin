<template>
  <nav class="pagination" role="navigation" aria-label="pagination">

    <!--
      PREVIOUS
     -->
    <router-link
      v-if="pageData.current_page > 1"
      v-on:click.native="handlePaging"
      :to="`/users/page/${pageData.current_page - 1}`"
      class="pagination-previous">
      Previous
    </router-link>
    <!-- /end previous -->

    <!--
      NEXT
     -->
    <router-link
      v-if="pageData.current_page < pageData.total_page - 1"
      v-on:click.native="handlePaging"
      :to="`/users/page/${pageData.current_page + 1}`"
      class="pagination-next">
      Next page
    </router-link>
    <!-- /end next -->

    <ul class="pagination-list">
      <!--
        GOTO PAGE 1
       -->
      <li
        v-if="pageData.current_page > 2"
        v-on:click="handlePaging">

        <router-link
          to="/users"
          class="pagination-link"
          aria-label="Goto page 1">
          1
        </router-link>
      </li>
      <!-- /end goto page 1 -->

      <!--
        LEFT ELLIPSIS
       -->
      <li v-if="pageData.current_page > 2">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <!-- /end left ellipsis -->

      <!--
        CURRENT PAGE -1
       -->
      <li
        v-if="pageData.current_page > 1"
        v-on:click="handlePaging">

        <router-link
          :to="`/users/page/${pageData.current_page - 1}`"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.current_page - 1}`">
          {{ pageData.current_page - 1 }}
        </router-link>
      </li>
      <!-- /end current page - 1 -->

      <!--
        CURRENT PAGAE
       -->
      <li>
        <span
          class="pagination-link is-current"
          :aria-label="`Page ${pageData.current_page}`"
          aria-current="page">
          {{ pageData.current_page }}
        </span>
      </li>
      <!-- /end current page -->

      <!--
        CURRENT PAGE + 1
       -->
      <li
        v-on:click="handlePaging"
        v-if="pageData.current_page < pageData.total_page">

        <router-link
          :to="`/users/page/${pageData.current_page + 1}`"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.current_page + 1}`">
          {{ pageData.current_page + 1 }}
        </router-link>
      </li>
      <!-- end current page + 1 -->

      <!--
        RIGHT ELLIPSIS
       -->
      <li v-if="pageData.current_page < pageData.total_page - 1">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <!-- /end right ellipsis -->

      <!--
        GOTO LAST PAGE
       -->
      <li
        v-on:click="handlePaging">

        <router-link
          :to="`/users/page/${pageData.total_page}`"
          v-if="pageData.current_page < pageData.total_page - 1"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.total_page}`">
          {{ pageData.total_page }}
        </router-link>
      </li>
      <!-- /end goto last page -->

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationDefault',
  props: {
    pageData: Object
  },
  methods: {
    /**
     * EMIT EVENT INTO PARENT
     */
    handlePaging () {
      this.$emit('changePage')
    }
  }
}
</script>

<style>

</style>
