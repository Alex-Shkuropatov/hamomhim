<template>
  <div class="  h-container">
    <div class="th-heading text-center">בלוג</div>
    <div class="slider-wrap">
      <swiper :options="sliderOptions" class="news-slider" ref="newsSlider">
        <swiper-slide class="slide-outer" v-for="post in posts" :key="post.id">
          <news-post-item class="slide-inner" v-bind="post"></news-post-item>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="7"></div>
      <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="8"></div>
    </div>
    <div class="text-center">
      <router-link :to="{name: 'blog'}"  class="th-btn th-btn-blue th-btn-lg blog-link">לבלוג</router-link>
    </div>
  </div>
</template>

<script>
import NewsPostItem from './../posts/NewsPostItem.vue';
export default {
  components: {
    NewsPostItem
  },
  data(){
    return {
      sliderOptions: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next[data-uid="7"]',
          prevEl: '.swiper-button-prev[data-uid="8"]',
        },
        breakpoints: {
          1023: {
            slidesPerView: 2,
          },
          570: {
            slidesPerView: 1
          }
        }
      },
      posts: [

       ],
    };
  },
  mounted(){
    axios.post('/api/admin/getAllBlogs',{'sortBy':'id','orderBy': 'DESC', page: '0', take: '20'})
        .then((response)=>{
          console.log(response);
          this.posts = response.data.value.records;
        }).catch((error)=>{
      console.log(error);
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.news-section{
  margin-top: ceil($scale1 * 40px);
  margin-bottom: ceil($scale1 * 40px);
}
.slider-wrap{
  position: relative;
  padding-right: 2px;
  padding-left: 2px;
}
.h-container{
  margin-bottom: 45px;
}
.news-slider{
  margin: ceil($scale1 * -15px);
}
.slide-outer{
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
  .h-container{
    width: $container-width2 - 20px;
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
</style>
