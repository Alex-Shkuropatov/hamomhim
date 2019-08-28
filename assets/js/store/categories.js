export default {
  namespaced: true,
  state: {
    data: {},
  },
  mutations: {
    saveData(state, data) {
      state.data = data;
    },
  },
  getters: {
    data(state) {
      return state.data;
    },
  }
};
