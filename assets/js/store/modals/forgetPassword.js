export default {
  namespaced: true,
  state: {
    opened: false,
    role: '',
    load: false,
  },
  mutations: {
    close(state) {
      state.opened = false;
      state.id= '';
    },
    open(state) {
      state.opened = true;
    },
    saveData(state,role){
      state.role = role;
      state.load = true;
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
    getRole(state) {
      return {role: state.role};
    },
    isLoaded(state){
      return state.load;
    }
  }
};