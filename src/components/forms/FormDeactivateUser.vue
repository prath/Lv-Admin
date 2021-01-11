<template>
  <section class="message is-light mt-2">
      <div class="message-header">
        <p class="is-gapless">Deactivate User</p>
      </div>
      <div class="message-body">
        Please be careful when deactivating a user, as it would affects all their activity throughout the platform
        <div class="block padding-t-m">
          <button @click="toggleActiveDel" class="btn btn--medium btn--muted">Deactivate Pratama Hasriyan</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'FormDeactivateUser'
}
</script>

<style>

</style>
