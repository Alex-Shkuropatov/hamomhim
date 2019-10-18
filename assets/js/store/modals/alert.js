export default {
  namespaced: true,
  state: {
    opened: false,
    loaded : true,
   data: {},
  },
  mutations: {
    close(state) {
      state.opened = false;

    },
    open(state) {
      state.opened = true;
    },
    saveData(state,data){
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
    },
  }
};