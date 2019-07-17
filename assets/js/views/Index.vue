<template>
  <main>
    <first-frame/>
    <categories-slider/>
    <top-projects/>
    <client-reviews/>
    <feedback-form/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';
import CategoriesSlider from './../components/index/CategoriesSlider.vue';
import TopProjects from './../components/index/TopProjects.vue';
import ClientReviews from './../components/index/ClientReviews.vue';
import FeedbackForm from './../components/index/FeedbackForm.vue';

export default {
  components: {
    FirstFrame,
    CategoriesSlider,
    TopProjects,
    ClientReviews,
    FeedbackForm
  }
}
</script>

<style lang="scss" scoped>

</style>
