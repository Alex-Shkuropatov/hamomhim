<template>
  <div class="banner-section">
    <div class="banner">

      <swiper :options="sliderOptions" class="categories-slider" ref="categoriesSlider">
        <swiper-slide class="slide-outer" v-for="slide in slides" :key="slide.id">
            <a href="http://google.com/" class="cat-img">
              <img src="/static/images/main-page/banner.png" alt="">
            </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sliderOptions: {
        // spaceBetween: 30,
        slidesPerView: 1,
        slidesPerColumn: 1,
        autoplay: {
          delay: 4000,
        },
        touchRatio:0,
        speed: 600,
        loop: true,
        effect: 'cube',
        preventInteractionOnTransition: true,
        preventClicks: true,
        disableOnInteraction: true,
      },
      slides:[{id:1},{id:2},{id:3}]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.banner-section{
  pointer-events: none;
  margin-right: auto;
  margin-left: auto;
  width: $container-width1 + $scale1 * 130px;
  max-width: calc(100% - 30px);
  overflow: hidden;
  text-align: center;
}
.cat-img{
  display: block;
}
.categories-slider{
  pointer-events: none;
}
img{
  pointer-events: none;
  width: 100%;
  height: 100px;
  @media screen and (max-width:480px){
    height: 40px;
  }
}

@media(max-width: $breakpoint2){
  .banner-section{
    width: $container-width2 + $scale2 * 130px;
  }
}
</style>
