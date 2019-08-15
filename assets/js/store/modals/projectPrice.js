export default {
  namespaced: true,
  state: {
    opened: false,
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state) {
      state.opened = true;
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

  }
};