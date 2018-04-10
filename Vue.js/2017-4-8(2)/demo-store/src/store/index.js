//导入
import Vue from 'vue';
import Vuex from 'vuex';  // 插件
Vue.use(Vuex);
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


//导出
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});