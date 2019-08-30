import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user.js';
import modals from './modals';
import categories from './categories';


const store = new Vuex.Store({
  modules: {
    user,
    modals,
    categories,
    },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

export default store;
