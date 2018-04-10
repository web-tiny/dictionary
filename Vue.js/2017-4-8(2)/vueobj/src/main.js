import Vue from 'vue'
import App from './App.vue'

//全局资源在这里引入
import './assets/css/base.css';
import './assets/js/font.js';

//路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);//注册
import routes from './router.config';//引入路由配置

const router = new VueRouter({
  routes,
  mode:'history'  // hash # / history
});

//axios 配置
import axios from 'axios';
Vue.prototype.$http=axios;

//过滤器配置
import filters from './filters' //找index
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//状态管理
import store from './store'

//动画
import 'animate.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
