<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <input type="button" value="+" @click="increment">
    <input type="button" value="-" @click="decrement">
    <input type="button" value="异步+" @click="async">
    <input type="button" value="偶数+" @click="even">
    <br>
    {{count}}
    <br>
    数据是:{{getCount}}
    <!--{{$store.state.count}}-->
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'vuex'
      }
    },
    methods:mapActions(
      ['increment','decrement','async','even']
    ),
    computed:mapGetters(
      ['count','getCount']
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
