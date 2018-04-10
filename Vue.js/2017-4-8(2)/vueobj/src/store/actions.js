import * as types from './types'
export default {
  showNav:({
    commit,
    state
  })=>{
    commit(types.SHOW_NAV);
  },
  hideNav:({
    commit,
    state
  })=>{
    commit(types.HIDE_NAV);
  },
  showFoot:({
    commit,
    state
  })=>{
    commit(types.SHOW_FOOT);
  },
  hideFoot:({
    commit,
    state
  })=>{
    commit(types.HIDE_FOOT);
  },
}