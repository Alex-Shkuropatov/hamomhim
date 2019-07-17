<template>
  <main>
    <first-frame/>
    <categories-slider/>
    <top-projects/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';
import CategoriesSlider from './../components/index/CategoriesSlider.vue';
import TopProjects from './../components/index/TopProjects.vue';

export default {
  components: {
    FirstFrame,
    CategoriesSlider,
    TopProjects
  }
}
</script>

<style lang="scss" scoped>

main {
  background-color: #f8f8f8;
}

</style>
