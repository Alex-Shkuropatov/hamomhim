<template>
  <div class="cats-section">
    <div class="h-container">
      <div class="th-heading text-center">בואו נתחיל! איזה בעל מקצוע דרוש לכם?</div>
      <div class="categories-slider-wrap">
        <swiper :options="sliderOptions" class="categories-slider" ref="categoriesSlider">
          <swiper-slide class="slide-outer" v-for="category in categories" :key="category.id">
            <div class="slide-inner" @click="onClickCategory(category)">
              <div class="cat-img">
                <img :src="$env.API_URL+ category.image" alt="">
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
        slidesPerGroup: 8,
        slidesPerView: 8,
        slidesPerColumn: 2,
        navigation: {
          nextEl: '.swiper-button-next[data-uid="1"]',
          prevEl: '.swiper-button-prev[data-uid="2"]',
        },
        breakpoints: {
          1340: {
            slidesPerGroup: 5,
            slidesPerView: 5,
          },
          1023: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          767: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          570: {
            slidesPerGroup: 2,
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
      // this.$emit('category:select', category);
       let string = JSON.stringify(category.subcategories);
      // console.log(category);
      this.$router.push({name: 'search', params: { categoryId:category.id , subcategories: string }});

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
.th-heading{
  color: #333333;
  margin-bottom: 11px;
  margin-top: 10px;
}
.categories-slider{
  margin-bottom: ceil($scale1 * 34px);
  margin-right: ceil($scale1 * -15px);
  margin-left: ceil($scale1 * -15px);
  user-select: none;
}
.slide-outer{
  padding: ceil($scale1 * 15px);
  &:hover{
    .slide-inner{
      transition: all 0.2s ease-in;
      background: #2970D5;
      color: #fff;
      border: 2px solid #3269B6;
      .cat-img{
        filter: unset;
        img{
            filter: unset;
        }
      }
    }
  }
}

.slide-inner{
  text-align: center;
  background: #F6F6F6;
  box-shadow: 0px 0px ceil($scale1 * 20px) rgba(0, 0, 0, 0.1);
  padding-top: ceil($scale1 * 35px);
  padding-bottom: ceil($scale1 * 13px);
  font-size: ceil($scale1 * 18px);
  color: #4F4F4F;
  border: 2px solid #BDBDBD;
  .cat-img{
    width: ceil($scale1 * 50px);
    height: 40px;
    margin-bottom: ceil($scale1 * 15px);
    margin-right: auto;
    margin-left: auto;
    filter: sepia(100%) hue-rotate(172deg) saturate(467%);
  }
  img{
    width: 100%;
    height: 40px;
    filter: brightness(0.34) saturate(100%);
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

}
</style>
