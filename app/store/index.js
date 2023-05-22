import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
});

Vue.prototype.$store = store;

export default store;