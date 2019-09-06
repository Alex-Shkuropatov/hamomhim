<template>
  <div class="projects-wrapper">


    <workers-header/>

    <router-view></router-view>


  </div>
</template>

<script>

import ProjectsHeader from './../../components/ProjectsHeader';
import WorkersHeader from './../../components/WorkersHeader.vue';
export default {
  data(){
    return {

    };
  },
  components: {
    ProjectsHeader,
    WorkersHeader,
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>


</style>
