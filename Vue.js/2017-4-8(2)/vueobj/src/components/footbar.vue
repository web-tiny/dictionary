<template>
  <div class="foot-btn" >
    <ul>
      <li class="home">
        <router-link to="/home" @click.native="showNav"></router-link>
      </li>
      <li class="write">
        <router-link to="/fllow" @click.native="showNav"></router-link>
      </li>
      <li class="my"  >
        <router-link to="/user" @click.native="hideNav"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  export default{
    name:'footbar',
    /*methods:{
      change(){
        this.$store.commit('HIDE_NAV');
      }
    }*/
    methods:mapActions(
      ['hideNav','showNav']
    )
  }
</script>
<style></style>