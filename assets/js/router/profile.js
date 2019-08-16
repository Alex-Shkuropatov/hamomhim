import Multiguard from 'vue-router-multiguard';

import ProfileTemplate from './../views/profile/ProfileTemplate.vue';
import WorkerRequests from './../views/profile/WorkerRequests.vue';

export default {
  path: '/profile',
  component: ProfileTemplate,
  name: 'profile',
  children: [
    {
      path: 'requests',
      component: WorkerRequests,
      name: 'requests',
    },
  ]
};
