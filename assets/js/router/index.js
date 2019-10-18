import Vue from 'vue';
import VueRouter from 'vue-router';
import Multiguard from 'vue-router-multiguard';

import store from './../store';
Vue.use(VueRouter);

import auth from './auth';
import profile from './profile';
import projects from './projects'

import Index from './../views/Index.vue';
import AboutUs from './../views/AboutUs.vue';
import ContactUs from './../views/ContactUs.vue';
import Blog from './../views/Blog.vue';

import BlogPost from './../views/BlogPost.vue';
import HowItWorks from './../views/HowItWorks.vue';
import WorkerProfile from "./../views/WorkerProfile.vue";
import Search from './../views/Search.vue';
import PrivacyPolicy from './../views/PrivacyPolicy.vue'
import Terms from './../views/Terms'

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
  {
    path: '/blog/:id/post',
    component: BlogPost,
    name: 'blog-post',
  },
  {
    path: '/how-it-works',
    component: HowItWorks,
    name: 'how-it-works',
  },
  {
    path: '/search/:categoryId/:subcategories',
    component: Search,
    name: 'search',
  },

  {
    path: '/view-profile/:id',
    component: WorkerProfile,
    name: 'view-profile',
  },

  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
    name: 'privacy-policy',
  },
  {
    path: '/terms-and-conditions',
    component: Terms,
    name: 'terms-and-conditions',
  },

];


//routes.push(auth);
routes.push(profile);
routes.push(projects);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach(async (to, from, next) => {
  if(!store.getters['user/isLoaded']) {

    if(store.getters['user/token']) {

      await axios.get('/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${store.getters['user/token']}`
        }
      }).then(res => {
        store.commit('user/auth', store.getters['user/token']);
        store.commit('user/saveData', res.data);
      }).catch(res => {
        console.error('Wrong token!')
      });
    } else {
      store.state.user.logged = false;
    }
    store.state.user.loaded = true;
  }

  if(!store.getters['categories/isLoaded']) {
    store.dispatch('categories/updateData');
  }

  next();
});

export default router;
