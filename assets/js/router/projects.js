import Multiguard from 'vue-router-multiguard';

import Projects from "./../views/Projects.vue";
import Orders from "./../views/Orders.vue";
import NewOrder from "./../views/NewOrder.vue";
import ProjectFeedback from './../views/ProjectFeedback.vue';
import EditOrder from './../views/EditOrder.vue';
import SearchWorkers from "./../views/SearchWorkers.vue";

import middleware from './middleware'
import store from "../store";

export default {
 projects : [
      {
  path: '/projects',
  component: Projects,
  name: 'projects',
      },
    {
      path: ':id/orders/',
      component: Orders,
      name: 'orders',
    },
    {
      path: '/:id/orders/new-order/',
      component: NewOrder,
      name: 'new-order',
    },
    {
      path: '/:id/orders/:orderId/edit-order/',
      component: EditOrder,
      name: 'edit-order',
    },
    {
      path: '/:id/orders/:orderId/search-workers',
      component: SearchWorkers,
      name: 'search-workers',
    },
    {
      path: '/:id/leave-feedback',
      component: ProjectFeedback,
      name: 'project-feedback',
    },
    ]
};
