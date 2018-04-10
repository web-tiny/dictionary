<template>
  <div id="app">
    <!--头部-->
    <navbar v-if="getNav"></navbar>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <!--尾部-->
    <footbar v-if="getFoot"></footbar>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import footbar from './components/footbar.vue'
  import home from './components/home.vue'
  import {mapGetters} from 'vuex';
  export default{
    name:'app',
    data(){
      return {
        blFoot: true
      }
    },
    mounted(){
      this.change(this.$route.path)//去除路由路径给change去修改状态
    },
    watch:{
      /*'$route':function(to){
        // to 路由
      }*/
      $route(to){ //路由监听
        //console.log(to);  to == 到哪去的一个路由对象
        this.change(to.path);
      }
    },
    methods:{
      change(path){
        path=path.substring(1);
        if(
          path=='user'||
          path=='login'||
          path=='reg'||
          path.indexOf('article') !=-1
        ){
          //隐藏
          this.$store.dispatch('hideNav');
        }else{
          //显示
          this.$store.dispatch('showNav');
          this.$store.dispatch('showFoot');
        }
        if(path=='login'||path=='reg'){
          this.$store.dispatch('hideFoot');
        }else{
          this.$store.dispatch('showFoot');
        }
      }
    },
    components: {
      navbar, footbar
    },
    computed:mapGetters(
      ['getNav','getFoot']
    )
  }
</script>

<style>
  @import url('./assets/css/index.css');
</style>
