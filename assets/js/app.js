import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format'
import VueMask from 'v-mask'
//import VueModal from 'vue-js-modal'

import App from './App.vue';

import './env';
import './preferences';

import store from './store';
import router from './router';

//Vue.use(VueModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueFilterDateFormat);
Vue.use(VueMask);

window.app = new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app');
