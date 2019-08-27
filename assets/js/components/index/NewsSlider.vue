<template>
  <div class="news-section h-container">
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
      <a href="#" class="th-btn th-btn-blue th-btn-lg blog-link">לבלוג</a>
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
          }
        }
      },
      posts: [
        {id: 1, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 3, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 4, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 5, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 6, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 7, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 8, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 9, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
      ],
    };
  }
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
}
</style>
