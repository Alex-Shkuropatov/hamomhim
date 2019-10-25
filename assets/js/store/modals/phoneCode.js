export default {
  namespaced: true,
  state: {
    opened: false,
    data: {},
  },
  mutations: {
    close(state) {
      state.opened = false;
      state.data = {};
    },
    open(state) {
      state.opened = true;
    },
    set(state, data){
      state.data = data;
    },
    switch(state) {
      state.opened = !state.opened;
    },
  },
  actions: {

  },
  getters: {
    isOpened(state) {
      return state.opened;
    },
    getData(state){
      return state.data;
    }
  }
};