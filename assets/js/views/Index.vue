<template>
  <main>
    <first-frame/>
    <categories-slider/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';
import CategoriesSlider from './../components/index/CategoriesSlider.vue';

export default {
  components: {
    FirstFrame,
    CategoriesSlider
  }
}
</script>

<style lang="scss" scoped>

main {
  background-color: #f8f8f8;
}

</style>
