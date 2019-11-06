<template>
  <main>
    <div class="main-bg">

      <show-subcategories />
      <first-frame/>
      <categories-slider @category:select="searchWorkersByCategory"/>
      <banner-section/>
    </div>
    <top-projects/>
    <client-reviews/>
    <feedback-form/>
    <div class="stats-section h-container">
      <div class="th-heading text-center clr-blue">קצת עלינו במספרים</div>
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
  .stats-section{
    margin: 0 auto;
    padding: 0;
    margin-top: ceil($scale1 * 40px);
    .th-heading{
      margin-bottom: ceil($scale1 * 40px);
    }
  }
  .main-bg{
    position: relative;
    background-image: url('/static/images/main-page/main-bg.png');
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    padding-bottom: 20px;
    box-shadow: 0px 4px 4px rgba(156, 156, 156, 0.25);
    &::v-deep{
      .cats-section{
        .th-heading{
          color: #fff;
        }
        .slide-inner{
          background-color: rgba(255,255,255,.3);
          border: none;
          border-radius: 4px;
          color: #fff;
          &:hover{
            background: #2970D5;
          }
          .cat-img{
            filter: none;
          }
          img{
            filter: none;
          }
        }
      }
    }
  }
</style>
