import loading from './loading.vue';
export default {
  install:function(Vue){
    //Vue.component('组件名',组件变量名)
    Vue.component('loading',loading);
  }
}