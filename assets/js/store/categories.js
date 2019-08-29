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
    load(state) {
      state.loaded = true;
    }
  },
  actions: {
    updateData(context){
      axios.post('api/admin/getAllCategories')
        .then(response => {
          if(response.data.success){
            context.commit('set', response.data.value );
            context.commit('load');
          }
        });
    }
  },
  getters: {
    data(state) {
      return state.data;
    },
    isLoaded(state) {
      return state.loaded;
    }
  }
};
