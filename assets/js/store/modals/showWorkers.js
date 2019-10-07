export default {
  namespaced: true,
  state: {
    opened: false,
    workers: [],
    orderId: '',
    projectName: '',
  },
  mutations: {
    close(state) {
      state.opened = false;
      state.workers = false;
    },
    open(state) {
      state.opened = true;
    },
    setName(state, name){
      state.projectName = name;
    },
    saveData(state,id){
      axios.post('/api/getOrderWorkers',id)
          .then((resolve)=>{
            console.log(resolve);
            state.workers = resolve.data.value.workers;
            state.orderId = id.order_id;
            console.log(state.orderId);
          }).catch((error)=>{
        console.log(error);
      })
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
    getWorkers(state) {
      return state.workers;
    },
    getProjectName(state) {
      return state.projectName;
    },
    getOrderId(state){
      return state.orderId;
    },
  }
};