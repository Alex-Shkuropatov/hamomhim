import store from "../store";

export default {
   isLogged : function(to, from, next) {
    if (store.getters['user/isLogged']) {
      next();
    } else {
      next('/');
    }
  },
  isWorker : function(to, from, next) {
    if (store.getters['user/isWorker']) {
      next();
    } else {
      next('/');
    }
  },
  isArchitect : function(to, from, next) {
    if (!store.getters['user/isWorker']) {
      next();
    } else {
      next('/');
    }
  },
}