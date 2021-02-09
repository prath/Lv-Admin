<template>
  <div class="columns filter-table-list">
    <div class="column is-full filter-wrapper">
      <div class="form-group icon-search">
        <img
          src="@/assets/img/ic-search.svg"
          alt=""
        />
        <input
          id="form1"
          type="text"
          class="form-control"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInPage',
  props: {
    value: String,
    placeholder: String
  }
}
</script>

<style>

</style>
