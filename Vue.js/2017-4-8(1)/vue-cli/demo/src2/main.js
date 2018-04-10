import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
Vue.use(VueRouter);//注册

import routes from './router.config';

import 'animate.css';//导入css

//创建路由实例
const router=new VueRouter(routes);

new Vue({
  el: '#app',
  render: h => h(App),
  router  //挂载
});
