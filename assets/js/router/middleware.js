import store from "../store";

const guard1 = function(to, from, next) {
  if (store.getters['user/isLogged']) {
    next();
  } else {
    next('/');
  }
};