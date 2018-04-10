<template>
  <div class="user">
    {{msg}}
    <br>
    {{$route.params}}
    <br>
    {{$route.query}}
    <br>
    {{$route.path}}
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg:'我是新闻详情页'
      }
    }
  }
</script>
<style>

</style>