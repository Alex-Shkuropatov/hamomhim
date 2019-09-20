export default {
  namespaced: true,
  state: {
    opened: false,
    data: {
      id: '',
      name: '',
      description: '',
      files: [],
    }
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state, work) {
      state.opened = true;
      state.data = work;
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
