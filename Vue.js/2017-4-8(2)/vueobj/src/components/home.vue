<template>
  <div class="home">
    <!--banner-->
    <slider></slider>
    <!--home列表-->
    <div class="newsList">
      <ul>
        <li v-for="item in arr">
          <router-link :to="'/article/'+item.id">
          <!--<router-link :to="{name:'article',params:{aid:item.id}}">-->
            <h2>{{item.id}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import slider from './slider.vue';
  export default{
    data(){
      return {
        arr:[]
      }
    },
    created(){
      //取数据  -> 回来修改arr
      this.$http.get('./src/data/index.data')
        .then((res)=>{  //res.data 是数组么？
          this.arr=res.data;
        },(error)=>{
          alert('home.vue'+error.status);
        });
    },
    components:{
      slider
    }
  }
</script>
<style></style>