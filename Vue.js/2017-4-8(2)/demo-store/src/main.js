import Vue from 'vue'
import App from './App.vue'
import store from './store' //自动找index

new Vue({
  el: '#app',
  render: h => h(App),
  store
});
