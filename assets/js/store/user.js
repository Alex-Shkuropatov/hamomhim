export default {
  namespaced: true,
  state: {
    data: {},
    loaded: false,
    logged: false,
  },
  mutations: {
    auth(state, token) {
      state.logged = true;
      localStorage.setItem('auth', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    },
    saveData(state, data) {
      state.data = data;
    },
    logout(state) {
      state.data = {};
      state.logged = false;
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('auth');
    },
  },
  actions: {
    updateData(context) {
      return axios.get('/api/auth/user').then(res => {
        context.commit('saveData', res.data);
        return res.data;
      });
    }
  },
  getters: {
    token(state) {
      return localStorage.getItem('auth');
    },
    auth(state, getters) {
      if(getters.token) {
        return `Bearer ${getters.token}`;
      } else {
        return null;
      }
    },
    isLogged(state) {
      return state.logged;
    },
    isLoaded(state) {
      return state.loaded;
    },
    data(state) {
      return state.data;
    },
  }
};
