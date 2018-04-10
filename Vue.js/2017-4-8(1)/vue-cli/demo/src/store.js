import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
  count:0
};
const actions={
  increment:({
    commit,
    state
  })=>{
    //办其他事,处理事件
    // alert(commit);
    commit('jia');
  },
  decrement:({
    commit,
    state
  })=>{
    //办其他事,处理事件
    // alert(commit);
    commit('jian');
  },
  async:({
    commit,
    state
  })=>{
    //办其他事,处理事件
    // alert(commit);
    new Promise((resolve)=>{
      setTimeout(()=>{
        commit('jia');
      },1000);
      resolve()
    });
  },
  even:({
    commit,
    state
  })=>{
    if(state.count%2==0){
      commit('jia');
    }
  }
};
const mutations={
  jia(state){
    state.count++;
  },
  jian(state){
    state.count--;
  }
};
const getters={
  count(state){
    return state.count;
  },
  getCount(state){
    return state.count%2==0?'偶数':'奇数';
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
