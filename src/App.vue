<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App" />

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