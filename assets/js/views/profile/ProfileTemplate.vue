<template>
  <div class="projects-wrapper">

    <workers-header v-if="!hideHeader"/>

    <router-view></router-view>


  </div>
</template>

<script>

import ProjectsHeader from './../../components/ProjectsHeader';
import WorkersHeader from './../../components/WorkersHeader.vue';
export default {
  components: {
    ProjectsHeader,
    WorkersHeader,
  },
  computed: {
    hideHeader(){
      return ((this.$route.name === 'profile-edit') && (this.$store.getters['user/getField']('role') === 'worker'));
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
