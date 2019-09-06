import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import user from './user.js';
import modals from './modals';
import categories from './categories'
import orders from  './orders'
const store = new Vuex.Store({
  modules: {
    user,
    modals,
    categories,
    orders,
    },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

export default store;
