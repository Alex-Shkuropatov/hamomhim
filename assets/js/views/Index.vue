<template>
  <main>
    <first-frame/>
    <categories-slider/>
    <top-projects/>
    <client-reviews/>
    <feedback-form/>
    <div class="stats-section h-container">
      <div class="th-heading text-center">קצת עלינו במספרים</div>
      <stats/>
    </div>
    <news-slider/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';
import CategoriesSlider from './../components/index/CategoriesSlider.vue';
import TopProjects from './../components/index/TopProjects.vue';
import ClientReviews from './../components/index/ClientReviews.vue';
import FeedbackForm from './../components/index/FeedbackForm.vue';
import Stats from './../components/Stats.vue';
import NewsSlider from './../components/index/NewsSlider.vue';

export default {
  components: {
    FirstFrame,
    CategoriesSlider,
    TopProjects,
    ClientReviews,
    FeedbackForm,
    Stats,
    NewsSlider
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/vars.scss';
  .stats-section{
    margin-top: ceil($scale1 * 40px);
    .th-heading{
      margin-bottom: ceil($scale1 * 40px);
    }
  }
</style>
