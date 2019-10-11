import Multiguard from 'vue-router-multiguard';

import Projects from "./../views/Projects.vue";
import Orders from "./../views/Orders.vue";
import NewOrder from "./../views/NewOrder.vue";
import ProjectFeedback from './../views/ProjectFeedback.vue';
import EditOrder from './../views/EditOrder.vue';
import ClosedProjects from './../views/ClosedProjects.vue'
import ClosedOrders from './../views/ClosedOrders.vue';
import SearchWorkers from "./../views/SearchWorkers.vue";
import ProjectsTemlate from './../views/projects/ProjectsTemplate.vue';
import PreferWorker from './../views/PreferWorker.vue';
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
      path: 'projects/:id/orders/',
      component: Orders,
      name: 'orders',
    },
    {
      path: 'projects/:id/orders/new-order/',
      component: NewOrder,
      name: 'new-order',
    },
    {
      path: 'projects/:id/orders/:orderId/edit-order/',
      component: EditOrder,
      name: 'edit-order',
    },
    {
      path: 'projects/:id/orders/:orderId/search-workers',
      component: SearchWorkers,
      name: 'search-workers',
    },
    {
      path: 'projects/:id/leave-feedback',
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
      path: 'closed-projects/:id/closed-orders',
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
