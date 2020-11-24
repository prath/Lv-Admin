<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from "./components/Header.vue";

export default {
  name: "App",
  components : {
    Header
  },
   methods: {
      handleStyles () {
        // Red style to the body tag for the home page
        if (['/'].includes(this.$route.path)) document.body.className = 'home'
        // Pink style to the body tag for all other pages
        else if (document.body.classList.contains('home')) document.body.className = ''
      }
    },
    // Handle styles when the app is initially loaded
    mounted () {
      this.handleStyles()
    },
    // Handle styles when the route changes
    watch: {
      '$route' () {
        this.handleStyles()
      }
    }
};
</script>