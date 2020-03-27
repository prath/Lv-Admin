<template>
  <div id="app">
    <Header
      v-if="this.$route.path !== '/'"
      data="$router.path"
      msg="Welcome to Your Vue.js App"
    />

    <p>{{ this.$route.path }}</p>

    <router-view />
  </div>
</template>

<script>

import Header from "./components/Header.vue";


export default {
  name: "App",
  components : {
    Header
  }
};
</script>