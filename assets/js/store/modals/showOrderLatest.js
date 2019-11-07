export default {
  namespaced: true,
  state: {
    opened: false,
    order: {},
    loaded: false,
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state) {
      state.opened = true;
    },
    saveData(state,order){
      state.order = order;
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
    getOrder(state) {
      return state.order;
    },
    isLoaded(state){
      return state.loaded;
    }
  }
};
