<template>
  <div class="projects-wrapper">


    <projects-header v-if="!hideHeader"  />

    <router-view></router-view>


  </div>
</template>

<script>

import ProjectsHeader from './../../components/ProjectsHeader';

export default {
  components: {
    ProjectsHeader,
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
