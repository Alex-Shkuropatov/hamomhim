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
    getNameById: state => id => {
      return state.data.find(item => item.id === id ).name;
    },
    getSubCategoriesById: state => id => {
      return state.data.find(item => item.id === id ).subcategories;
    },
    isLoaded(state) {
      return state.loaded;
    }
  }
};
