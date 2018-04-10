import * as types from './types'
export default {
  increment:({
    commit,
    state
  })=>{
    //处理
    commit(types.INCREMENT)
  },
  decrement({
    commit,
    state
  }){
    commit(types.DECREMENT)
  },
  async({
    commit,
    state
  }){
    new Promise((reslove)=>{
      setTimeout(()=>{
        commit(types.INCREMENT);
      },1000);
      reslove();
    });

  }
};