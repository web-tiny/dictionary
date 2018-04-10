<template>
  <!--fllow列表-->
  <div class="newsList">
    <ul>
      <li v-for="item in arr">
        <a href="javascript:;">
          <h2>{{item.id}}.{{item.title}}</h2>
          <p>{{item.detail}}</p>
        </a>
      </li>

    </ul>
  </div>
</template>
<script>
  export  default{
    data(){
      return {
        arr:[]
      }
    },
    mounted(){
      this.$http.get('/src/data/follow.data')
        .then((res)=>{
          this.arr=res.data;
        },(error)=>{
          alert('follow.vue'+error.status);
        });
    }
  }
</script>
<style>
  @import "../assets/css/index.css";
  .newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>