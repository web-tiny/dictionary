<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <hr>
    <input type="button" @click="increment" value="+">
    <input type="button" @click="decrement" value="-">
    <input type="button" @click="async" value="异步+">
    <hr>
    {{getCount}}
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'store'
      }
    },
    methods:mapActions(
      ['increment','decrement','async']
    ),
    computed:mapGetters(
      ['getCount']
    )
  }
</script>

<style>
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
