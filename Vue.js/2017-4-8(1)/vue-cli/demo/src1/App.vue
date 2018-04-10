<template>
  <div id="app">
    <h1>msg</h1>
    <hr>
    <aa></aa>
    <bb></bb>
    <buycar></buycar>
  </div>
</template>

<script>
  import aa from './components/aa.vue';
  import bb from './components/bb.vue';
  import buycar from './components/buycar.vue';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'vue-cli'
      }
    },
    components:{
      aa,
      bb,
      buycar
    }
  }
</script>

<style>
  body{
    background: green;
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
