export default {
  namespaced: true,
  state: {
    opened: false,
    orderId: 0
  },
  mutations: {
    close(state) {
      state.opened = false;
    },
    open(state, orderId) {
      state.opened = true;
      state.orderId = orderId;
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
