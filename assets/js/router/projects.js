import Multiguard from 'vue-router-multiguard';

import Projects from "./../views/projects/Projects.vue";
import Orders from "./../views/projects/Orders.vue";
import NewOrder from "./../views/projects/NewOrder.vue";
import ProjectFeedback from './../views/projects/ProjectFeedback.vue';
import EditOrder from './../views/projects/EditOrder.vue';
import ClosedProjects from './../views/projects/ClosedProjects.vue';

import ClosedOrders from './../views/projects/ClosedOrders.vue';
import SearchWorkers from "./../views/projects/SearchWorkers.vue";
import ProjectsTemlate from './../views/projects/ProjectsTemplate.vue';
import PreferWorker from './../views/projects/PreferWorker.vue';
import EditProfile from './../components/profile/EditArchitectProfile.vue'
import middleware from './middleware'
import store from "../store";

export default {
  path: '/acc',
  component: ProjectsTemlate,
  name: 'projects-template',
  beforeEnter: Multiguard([middleware.isLogged, middleware.isArchitect]),
  children:[
    {
      path: 'projects',
      component: Projects,
      name: 'projects',
    },
    {
      path: 'projects/:id/:name/orders/',
      component: Orders,
      name: 'orders',
    },
    {
      path: 'projects/:id/:name/orders/new-order/',
      component: NewOrder,
      name: 'new-order',
    },
    {
      path: 'projects/:id/:name/orders/:orderId/edit-order/',
      component: EditOrder,
      name: 'edit-order',
    },
    {
      path: 'projects/:id/:name/orders/:orderId/search-workers',
      component: SearchWorkers,
      name: 'search-workers',
    },
    {
      path: 'projects/:id/:name/leave-feedback',
      component: ProjectFeedback,
      name: 'project-feedback',
    },
    {
      path: 'closed-projects',
      component: ClosedProjects,
      name: 'closed-projects',
    },
    {
      path: 'prefer-worker',
      component: PreferWorker,
      name: 'prefer-worker',
    },
    {
      path: 'closed-projects/:id/:name/closed-orders',
      component: ClosedOrders,
      name: 'closed-orders',
    },
    {
      path: 'profile-edit',
      component: EditProfile,
      name: 'edit-profile',
    },
  ],
};
