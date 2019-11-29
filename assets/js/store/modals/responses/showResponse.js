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
  },
  actions: {

  },
  getters: {
    isOpened(state) {
      return state.opened;
    },
    getOrderId(state){
      return state.orderId;
    }
  }
};
