import Vue from 'vue/dist/vue.js'
Vue.component('v-select', VueSelect.VueSelect)

new Vue({
  el: '.v-select',
  data: {
    options: [
      'Cm',
      'Px',
      'Inch'
    ]
  }
})

new Vue({
  el: '.v-select-2',
  data: {
    options: [
      'Cm',
      'Px',
      'Inch'
    ]
  }
})

new Vue({
  el: '.v-select-3',
  data: {
    options: [
      'Cm',
      'Px',
      'Inch'
    ]
  }
})
