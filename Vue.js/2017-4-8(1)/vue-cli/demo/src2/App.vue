<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <hr>
    <!--调用-->
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>
    <router-link to="/user">用户</router-link>
    <transition
      enter-active-class="animated zoomInLeft"
      leave-active-class="animated zoomOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'vue-cli+router'
      }
    }
  }
</script>

<style>
  .router-link-active{
    background: #399;
    color:#fff;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
