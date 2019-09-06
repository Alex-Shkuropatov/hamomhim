import Multiguard from 'vue-router-multiguard';

import ProfileTemplate from './../views/profile/ProfileTemplate.vue';

import WorkerRequests from './../views/profile/WorkerRequests.vue';
import WorkerResponses from './../views/profile/WorkerResponses.vue';
import WorkerPackages from './../views/profile/WorkerPackages.vue';

import EditProfile from './../views/profile/EditProfile.vue';

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
    {
      path: 'responses',
      component: WorkerResponses,
      name: 'responses',
    },
    {
      path: 'packages',
      component: WorkerPackages,
      name: 'packages',
    },
    {
      path: 'edit',
      component: EditProfile,
      name: 'profile-edit',
    },
  ]
};
