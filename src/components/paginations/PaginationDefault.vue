<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list">
      <li v-if="pageData.current_page > 2">

        <router-link
          to="/users"
          class="pagination-link"
          aria-label="Goto page 1">
          1
        </router-link>

      </li>

      <li v-if="pageData.current_page > 2">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <li v-if="pageData.current_page > 1">

        <router-link
          :to="`/users/page/${pageData.current_page - 1}`"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.current_page - 1}`">
          {{ pageData.current_page - 1 }}
        </router-link>

      </li>

      <li>

        <span
          class="pagination-link is-current"
          :aria-label="`Page ${pageData.current_page}`"
          aria-current="page">
          {{ pageData.current_page }}
        </span>

      </li>

      <li v-if="pageData.current_page < pageData.total_page">

        <router-link
          :to="`/users/page/${pageData.current_page + 1}`"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.current_page + 1}`">
          {{ pageData.current_page + 1 }}
        </router-link>

      </li>

      <li v-if="pageData.current_page < pageData.total_page - 1">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <li>

        <router-link
          :to="`/users/page/${pageData.total_page}`"
          v-if="pageData.current_page < pageData.total_page - 1"
          class="pagination-link"
          :aria-label="`Goto page ${pageData.total_page}`">
          {{ pageData.total_page }}
        </router-link>

      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationDefault',
  props: {
    pageData: Object
  }
}
</script>

<style>

</style>
