<template>
  <main>
    <show-subcategories />
    <first-frame/>
    <div class="bricks-bg">
      <categories-slider @category:select="searchWorkersByCategory"/>
      <banner-section/>
    </div>
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
import BannerSection from './../components/index/BannerSection.vue'
import CategoriesSlider from './../components/index/CategoriesSlider.vue';
import TopProjects from './../components/index/TopProjects.vue';
import ClientReviews from './../components/index/ClientReviews.vue';
import FeedbackForm from './../components/index/FeedbackForm.vue';
import Stats from './../components/Stats.vue';
import NewsSlider from './../components/index/NewsSlider.vue';
import showSubcategories from './../components/modals/Subcategories.vue'

export default {
  components: {
    FirstFrame,
    CategoriesSlider,
    TopProjects,
    ClientReviews,
    FeedbackForm,
    Stats,
    NewsSlider,
    BannerSection,
    showSubcategories,
  },
  methods: {
    searchWorkersByCategory(category){
      this.$store.commit('modals/showSubcategories/saveData',category.id);
      this.$store.commit('modals/showSubcategories/open');
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '~@/vars.scss';
  .bricks-bg{
    background: url('/static/images/main-page/bg2.png') no-repeat top;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
  }
  .stats-section{
    margin: 0 auto;
    margin-top: ceil($scale1 * 40px);
    width: 860px;
    @media  screen and (max-width: 900px){
      width: unset;
    }
    .th-heading{
      margin-bottom: ceil($scale1 * 40px);
    }
  }
  @media(max-width: $breakpoint5){
    .bricks-bg{
      background: none;
    }
  }
</style>
