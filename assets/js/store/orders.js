export default {
  namespaced: true,
  state: {
    data: [],
    loaded: false,
  },
  mutations: {
    set(state, payload){
      state.data = payload;
    },

  },
  actions: {
    updateData(context, id){
     return  axios.post('api/getOrdersByProject',id)
        .then(response => {
          console.log(response);
          if(response.data.success){
            context.commit('set', response.data.value );
          }
        }).catch((error)=>{
        console.log(error);
      });
    }
  },
  getters: {
    data(state) {
      return state.data;
    },
    getOrderById: state => id => {
      return state.data.find(item => item.id === id );
    },

  }
};
