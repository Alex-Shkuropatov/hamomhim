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
    setWorkers(state,workers){
      state.workers = workers;
    },
    setId(state, orderId){
      state.orderId = orderId;
    },
    setName(state, name){
      state.projectName = name;
    },
    removeWorker(state,id){
      let index ;
     for(let i=0; i<state.workers.length; i++){
      if ( state.workers[i].id === id){
        index = i;
      }
     }
     state.workers.splice(index,1);
    },
    switch(state) {
      state.opened = !state.opened;
    },
  },
  actions: {
    saveData(context,id){
      return axios.post('/api/getOrderWorkers',id)
          .then((resolve)=>{
            console.log('resolve');
            console.log(resolve);
            context.commit('setWorkers',  resolve.data.value.workers);
            context.commit('setId',   id.order_id);
          }).catch((error)=>{
        console.log(error);
      })
    },
  },
  getters: {
    isOpened(state) {
      return state.opened;
    },
    getWorkers(state) {
      console.log('log');
      console.log(state.workers);
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