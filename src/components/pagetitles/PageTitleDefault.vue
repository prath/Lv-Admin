<template>
  <div class="columns">
    <div class="column generic-heading is-two-third">
      <slot></slot>
      <slot name="subtitle"></slot>
    </div>
    <!-- /end page title -->

    <!--
      ADD HOST BUTTON
      -->
    <div v-if="actionButton" class="column generic-heading is-one-third flex end-xs ">
      <router-link :to="actionButton.url">
        <button class="btn btn--medium btn--primary ">
          {{ actionButton.title }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitleDefault',
  props: {
    actionButton: Object
  }
}
</script>

<style>

</style>
