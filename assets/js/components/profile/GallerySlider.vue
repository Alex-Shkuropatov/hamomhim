<template>
  <div class="  s-container">
    <show-gallery />
    <div class="slider-wrap">
      <swiper :options="sliderOptions" class="news-slider" ref="gallerySlider">
        <swiper-slide class="slide-outer" v-for="post in posts" :key="post.id">
          <work-post class="slide-inner"   @openImg="openImg"  v-bind="post"></work-post>
        </swiper-slide>
      </swiper>
      <div  v-show="this.posts.length > 5"   class="swiper-button-next th-slider-arrow media-b th-slider-arrow-left" slot="button-next" data-uid="7"></div>
      <div  v-show="this.posts.length > 5"   class="swiper-button-prev th-slider-arrow media-b th-slider-arrow-right" slot="button-prev" data-uid="8"></div>
    </div>
  </div>
</template>

<script>
import GalleryItem from './GalleyItem.vue';
import WorkPost from './WorkPost.vue'
import ShowGallery from './../../components/modals/ShowGallery.vue'

export default {
  components: {
    GalleryItem,
    WorkPost,
    ShowGallery,
  },
  data(){
    return {
      sliderOptions: {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next[data-uid="7"]',
          prevEl: '.swiper-button-prev[data-uid="8"]',
        },
        breakpoints: {
          1440: {
            slidesPerView: 4,
          },
          1023: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 1
          }
        },
      },
    };
  },
  props: {
    posts:{
      type: Array,
    }
  },
  methods: {
    openImg(data){
      console.log(data.id);
      this.posts.filter((post)=>{
        if (post.id === data.id){
          this.$store.commit('modals/showGallery/saveData', post);
          this.$store.commit('modals/showGallery/open');
        }
      });

    },
  },
  computed: {
    getSlidesCount(){
      this.sliderOptions.slidesPerView =  this.posts.length<5 ? this.posts.length :  5;
    }
  },

  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.news-section{
  margin-top: ceil($scale1 * 40px);
  margin-bottom: ceil($scale1 * 40px);
}
.s-container{
  margin: 0 auto;
  width: 1230px;
  margin-bottom: 60px;
  @media screen and (max-width: 1440px){
    width: 900px;
  }
  @media screen and (max-width: 1023px){
    width: 600px;
  }
  @media screen and (max-width: 600px){
    width: 300px;
  }
}
.slider-wrap{
  position: relative;
  padding-right: 2px;
  padding-left: 2px;
}
.slider-wrpap{
  .news-slider{
    ::v-deep .swiper-wrapper{
        display: flex;
      justify-content: center;
    }
  }
}
.h-container{
  margin-bottom: 45px;
}
.news-slider{
  margin: ceil($scale1 * -15px);
}
.slide-outer{
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ceil($scale1 * 15px);
}

.blog-link{
  margin-top: ceil($scale1 * 35px);
  padding-right: ceil($scale1 * 140px);
  padding-left: ceil($scale1 * 140px);
}

@media (max-width: $breakpoint2){
  .news-section{
    margin-top: ceil($scale2 * 40px);
    margin-bottom: ceil($scale2 * 40px);
  }
  .slide-outer{
    padding: ceil($scale2 * 15px);
  }

}
@media(max-width: $breakpoint3){
  .h-container{
    width: $container-width3 - 30px;
  }
}

@media(max-width: $breakpoint4){
  .slide-outer{
    padding: ceil($scale4 * 15px);
  }
  .slider-wrap{
    padding: 0 8px;
  }
  .h-container{
    width: $container-width4 - 30px;
  }
  .blog-link{
    margin-top: ceil($scale2 * 35px);
    padding-right: ceil($scale3 * 140px);
    padding-left: ceil($scale3 * 140px);
  }
}

@media(max-width: $breakpoint4){
  .h-container{
    width: calc(100% - 40px);
  }
}
.media-b{
  @media screen and (max-width: 1035px){
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 670px){
    display: none;
  }
}
  .news-slider{
    ::deep{
      .swiper-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

    }

  }


</style>
