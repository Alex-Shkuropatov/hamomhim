export default {
  namespaced: true,
  state: {
    opened: false,
    data: [],
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state) {
      state.opened = true;
    },
    saveData(state,id){
      state.data = id;
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
    getId(state) {
      return  state.data;
    },
  }
};