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
      <router-link v-if="actionButton.url" :to="actionButton.url">
        <button class="btn btn--medium btn--primary">
          {{ actionButton.title }}
        </button>
      </router-link>
      <button v-else class="btn btn--medium btn--primary" @click="handleAction">
        <spinner v-if="isLoading" size="small" />
        <template v-else>{{ actionButton.title }}</template>
      </button>
    </div>
  </div>
</template>

<script>
import Spinner from 'vue-simple-spinner'

export default {
  name: 'PageTitleDefault',
  components: {
    Spinner
  },
  props: {
    actionButton: Object,
    isLoading: Boolean
  },
  methods: {
    handleAction (e) {
      this.$emit('action')
    }
  }
}
</script>

<style>

</style>
