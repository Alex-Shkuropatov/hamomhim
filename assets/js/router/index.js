import Vue from 'vue';
import VueRouter from 'vue-router';
import Multiguard from 'vue-router-multiguard';

import store from './../store';
Vue.use(VueRouter);

import auth from './auth';
import account from './account';

import Index from './../views/Index.vue';
import AboutUs from './../views/AboutUs.vue';
import ContactUs from './../views/ContactUs.vue';
import Blog from './../views/Blog.vue';

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/about-us',
    component: AboutUs,
    name: 'about-us',
  },
  {
    path: '/contact-us',
    component: ContactUs,
    name: 'contact-us',
  },
  {
    path: '/blog',
    component: Blog,
    name: 'blog',
  },
];

//routes.push(auth);
//routes.push(account);

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  // if(!store.state.user.loaded) {
  //   console.log(store.getters.token);
  //   if(store.state.user.token) {
  //
  //     await app.$http.get('/user/info', {
  //       headers: {
  //         'Authorization': store.state.user.token
  //       }
  //     }).then(res => {
  //       axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.user.token;
  //       store.state.user.data = res.data;
  //       store.state.user.logged = true;
  //     }).catch(res => {
  //       store.state.user.logged = false;
  //     });
  //   } else {
  //     store.state.user.logged = false;
  //   }
  //   store.state.user.loaded = true;
  // }

  next();
});

export default router;
