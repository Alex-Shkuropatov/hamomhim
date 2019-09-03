export default {
  namespaced: true,
  state: {
    opened: false,
    id: '',
  },
  mutations: {
    close(state) {
      state.opened = false;
      state.id= '';
    },
    open(state,id) {
      state.opened = true;
      console.log(id);
      state.id= id;
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
      return state.id;
    },

  }
};