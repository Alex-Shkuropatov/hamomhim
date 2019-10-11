<template>
  <div class="projects-wrapper">
    <projects-header />

    <router-view></router-view>


  </div>
</template>

<script>
import ProjectsHeader from './../../components/ProjectsHeader';
export default {
  components: {
ProjectsHeader,
  },
}
</script>

<style lang="scss" scoped>


</style>
