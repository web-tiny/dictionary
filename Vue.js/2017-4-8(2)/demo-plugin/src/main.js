import Vue from 'vue'
import App from './App.vue'

import loading from './loading' //默认找index.js
Vue.use(loading);//使用插件（组件)

new Vue({
  el: '#app',
  render: h => h(App)
});
