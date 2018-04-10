import * as types from './types'
export default {
  [types.SHOW_NAV](state){
    state.blNav=true;
  },
  [types.HIDE_NAV](state){
    state.blNav=false;
  },
  [types.SHOW_FOOT](state){
    state.blFoot=true;
  },
  [types.HIDE_FOOT](state){
    state.blFoot=false;
  }
}