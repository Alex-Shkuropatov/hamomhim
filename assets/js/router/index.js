import Vue from 'vue';
import VueRouter from 'vue-router';
import Multiguard from 'vue-router-multiguard';

import store from './../store';
Vue.use(VueRouter);

import auth from './auth';
import profile from './profile';


import Index from './../views/Index.vue';
import AboutUs from './../views/AboutUs.vue';
import ContactUs from './../views/ContactUs.vue';
import Blog from './../views/Blog.vue';

import BlogPost from './../views/BlogPost.vue';
import HowItWorks from './../views/HowItWorks.vue';
import Projects from "./../views/Projects.vue";
import Orders from "./../views/Orders.vue";
import ClosedProjects from "./../views/ClosedProjects.vue";
import PreferWorker from "./../views/PreferWorker.vue";
import WorkerProfile from "./../views/WorkerProfile.vue";
import NewOrder from "./../views/NewOrder.vue";
import SearchWorkers from "./../views/SearchWorkers.vue";
import ProjectFeedback from './../views/ProjectFeedback.vue';
import EditOrder from './../views/EditOrder.vue';
import ClosedOrders from './../views/ClosedOrders.vue'
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
    path: '/blog/post',
    component: BlogPost,
    name: 'blog-post',
  },
  {
    path: '/how-it-works',
    component: HowItWorks,
    name: 'how-it-works',
  },
  {
    path: '/projects',
    component: Projects,
    name: 'projects',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/projects/:id/orders/',
    component: Orders,
    name: 'orders',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/closed-projects/:id/closed-orders',
    component: ClosedOrders,
    name: 'closed-orders',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/search/:categoryId/:subcategories',
    component: Search,
    name: 'search',
  },
  {
    path: '/closed-projects',
    component: ClosedProjects,
    name: 'closed-projects',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/prefer-worker',
    component: PreferWorker,
    name: 'prefer-worker',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/view-profile/:id',
    component: WorkerProfile,
    name: 'view-profile',
  },
  {
    path: '/projects/:id/orders/new-order/',
    component: NewOrder,
    name: 'new-order',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/projects/:id/orders/:orderId/edit-order/',
    component: EditOrder,
    name: 'edit-order',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/projects/:id/orders/:orderId/search-workers',
    component: SearchWorkers,
    name: 'search-workers',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/projects/:id/leave-feedback',
    component: ProjectFeedback,
    name: 'project-feedback',
    beforeEnter(to, from, next) {
      if (store.getters['user/isLogged']) {
        next();
      } else {
        next('/');
      }
    }
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

const router = new VueRouter({
  routes,
  mode: 'history',
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
