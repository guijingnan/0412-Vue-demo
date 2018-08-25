import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
/*全局映射成标签*/

new Vue({
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
