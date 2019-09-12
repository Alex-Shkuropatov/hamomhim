<template>
  <div class="cats-section">
    <div class="h-container">
      <div class="th-heading text-center">בואו נתחיל! איזה בעל מקצוע דרוש לכם?</div>
      <div class="categories-slider-wrap">
        <swiper :options="sliderOptions" class="categories-slider" ref="categoriesSlider">
          <swiper-slide class="slide-outer" v-for="category in categories" :key="category.id">
            <div class="slide-inner" @click="onClickCategory(category)">
              <div class="cat-img">
                <img src="/static/images/main-page/category-placeholder.svg" alt="">
              </div>
              <div class="description">{{category.name}}</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="1"></div>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="2"></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data(){
    return {
      sliderOptions: {
        // spaceBetween: 30,
        slidesPerView: 6,
        slidesPerColumn: 2,
        navigation: {
          nextEl: '.swiper-button-next[data-uid="1"]',
          prevEl: '.swiper-button-prev[data-uid="2"]',
        },
        breakpoints: {
          1340: {
            slidesPerView: 5,
          },
          1023: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          570: {
            slidesPerView: 2,
          }
        }
      },
    }
  },
  computed: {
    categories(){
      return this.$store.getters['categories/data'];
    }
  },
  methods: {
    onClickCategory(category){
      this.$emit('category:select', category);
    }
  },
  mounted(){
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.categories-slider-wrap{
  position: relative;
}
.categories-slider{
  margin-bottom: ceil($scale1 * 34px);
  margin-right: ceil($scale1 * -15px);
  margin-left: ceil($scale1 * -15px);
}
.slide-outer{
  padding: ceil($scale1 * 15px);
}
.slide-inner{
  text-align: center;
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  box-shadow: 0px 0px ceil($scale1 * 20px) rgba(0, 0, 0, 0.1);
  padding-top: ceil($scale1 * 35px);
  padding-bottom: ceil($scale1 * 13px);
  font-size: ceil($scale1 * 18px);
  color: #fff;
  .cat-img{
    width: ceil($scale1 * 50px);
    margin-bottom: ceil($scale1 * 15px);
    margin-right: auto;
    margin-left: auto;
  }
  img{
    width: 100%;
  }
}

@media (max-width: $breakpoint2){
  .categories-slider{
    margin-bottom: ceil($scale2 * 34px);
    margin-right: ceil($scale2 * -15px);
    margin-left: ceil($scale2 * -15px);
  }
  .slide-outer{
    padding: ceil($scale2 * 15px);
  }
  .slide-inner{
    box-shadow: 0px 0px ceil($scale2 * 20px) rgba(0, 0, 0, 0.1);
    padding-top: ceil($scale2 * 35px);
    padding-bottom: ceil($scale2 * 13px);
    font-size: ceil($scale2 * 18px);
    .cat-img{
      //width: ceil($scale2 * 50px);
      margin-bottom: ceil($scale2 * 15px);
    }
  }
}

@media (max-width: $breakpoint3){
  .h-container{
    width: $container-width3 - 30px;
  }
}
@media (max-width: $breakpoint4){
  .h-container{
    width: $container-width4 - 30px;
  }
}

@media (max-width: $breakpoint5){
  .h-container{
    width: calc(100% - (#{$gutters} * 3));
  }
  .th-heading{
    color: #333333;
    margin-bottom: 0;
    margin-top: 10px;
  }
}
</style>
