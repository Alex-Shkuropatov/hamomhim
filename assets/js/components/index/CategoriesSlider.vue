<template>
  <div class="cats-section">
    <div class="h-container">
      <div class="th-heading text-center">בואו נתחיל! איזה בעל מקצוע דרוש לכם?</div>
      <div class="categories-slider-wrap">
        <swiper :options="sliderOptions" class="categories-slider" ref="categoriesSlider">
          <swiper-slide class="slide-outer" v-for="(category, index) in categories" :key="index">
            <div class="slide-inner">
              <div class="cat-img">
                <img src="/static/images/main-page/category-placeholder.svg" alt="">
              </div>
              <div class="description">{{category}}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev"></div>
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      sliderOptions: {
        // spaceBetween: 30,
        slidesPerView: 8,
        slidesPerColumn: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      categories: [
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
        'םיטקיורפ ילהנמ',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.cats-section{
  background: url('/static/images/main-page/bg2.png') no-repeat center top;
  -webkit-background-size: cover;
  background-size: cover;
}
.categories-slider-wrap{
  position: relative;
}
.categories-slider{
  margin-bottom: 34px;
}
.slide-outer{
  padding: 15px;
}
.slide-inner{
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-top: 35px;
  padding-bottom: 13px;
  font-size: 18px;
  .cat-img{
    margin-bottom: 15px;
  }
}
</style>
