import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user.js';

const store = new Vuex.Store({
  modules: {
    user,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

export default store;