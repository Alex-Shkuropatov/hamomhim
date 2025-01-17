export default {
  namespaced: true,
  state: {
    opened: false,
    data: {},
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state) {
      state.opened = true;
    },
    saveData(state,post){
      state.data = post;
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
    getPost(state) {
      return state.data;
    },
  }
};