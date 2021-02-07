<template>
  <aside class="message is-light">
    <header class="message-header">
      <h6 class="is-gapless">{{ title }}</h6>
    </header>
    <section class="message-body">

      <slot name="default"></slot>

      <div class="block padding-t-m">
        <button @click="buttonAction" class="btn btn--medium" :class="buttonClass">{{ buttonLabel }}</button>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'ActionCard',
  props: {
    title: String,
    buttonLabel: String,
    buttonClass: String
  },
  methods: {
    buttonAction: function () {
      this.$emit('buttonAction')
    }
  }
}
</script>
