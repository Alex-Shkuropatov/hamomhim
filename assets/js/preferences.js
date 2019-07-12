import Vue from 'vue';
window.axios = require('axios');

axios.defaults.baseURL = (env.API_URL);

Vue.prototype.$env = env;
Vue.prototype.$http = axios;

if(env.mobile) {
  document.documentElement.className += ' mobile';
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
