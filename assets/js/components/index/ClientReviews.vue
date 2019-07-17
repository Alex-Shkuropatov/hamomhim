<template>
  <div class="client-reviews-section">
    <div class="h-container">

      <div class="th-heading clr-blue text-center">פרויקט נבחר</div>
      <div class="content-container">

        <swiper :options="reviewsSliderOptions" class="reviews-slider" ref="reviewsSlider">
          <swiper-slide class="slide-outer" v-for="review in reviews" :key="review.id">
            <div class="slide-inner">
              <div class="name clr-blue">{{review.name}}</div>
              <div class="text">{{review.text}}</div>
              <div class="socials">
                <a :href="review.facebook" class="facebook">Lorem ipsum dolor sit amet</a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="photos-slider-row">
          <swiper :options="photosSliderOptions" class="photos-slider" ref="photosSlider">
            <swiper-slide class="slide-outer" v-for="review in reviews" :key="review.id">
              <div class="slide-inner">
                <img :src="review.avatar" alt="">
              </div>
            </swiper-slide>
          </swiper>
          <div class="controls">
            <div class="swiper-button-next slider-arrow" slot="button-next" data-uid="5"></div>
            <div class="swiper-button-prev slider-arrow" slot="button-prev" data-uid="6"></div>
          </div>
        </div>

      </div>
    </div>
    <banner-section class="banner"></banner-section>
  </div>
</template>

<script>
import BannerSection from './BannerSection.vue';

export default {
  components: {
    BannerSection
  },
  data(){
    return {
      reviewsSliderOptions: {
        //effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next[data-uid="5"]',
          prevEl: '.swiper-button-prev[data-uid="6"]',
        },
      },
      photosSliderOptions: {
        navigation: {
          nextEl: '.swiper-button-next[data-uid="5"]',
          prevEl: '.swiper-button-prev[data-uid="6"]',
        },
      },
      reviews: [
        {id: 1, name: 'Name of client', avatar: '/static/images/main-page/client-review-avatar.png', text: 'Lorem ipsum dolor sit amet, vim at nemore elaboraret, qui ea expetenda vituperata. Ex esse percipit iracundia vel. Vim no ipsum quaeque detracto, antiopam definitionem in eum, inani habemus referrentur duo et. Mea affert discere mnesarchum ei, impedit inermis id sit. Ut error quaestio atomorum quo,r.', facebook: '#'},
        {id: 2, name: 'Name of client', avatar: '/static/images/main-page/client-review-avatar.png', text: 'Lorem ipsum dolor sit amet, vim at nemore elaboraret, qui ea expetenda vituperata. Ex esse percipit iracundia vel. Vim no ipsum quaeque detracto, antiopam definitionem in eum, inani habemus referrentur duo et. Mea affert discere mnesarchum ei, impedit inermis id sit. Ut error quaestio atomorum quo,r.', facebook: '#'},
        {id: 3, name: 'Name of client', avatar: '/static/images/main-page/client-review-avatar.png', text: 'Lorem ipsum dolor sit amet, vim at nemore elaboraret, qui ea expetenda vituperata. Ex esse percipit iracundia vel. Vim no ipsum quaeque detracto, antiopam definitionem in eum, inani habemus referrentur duo et. Mea affert discere mnesarchum ei, impedit inermis id sit. Ut error quaestio atomorum quo,r.', facebook: '#'},
        {id: 4, name: 'Name of client', avatar: '/static/images/main-page/client-review-avatar.png', text: 'Lorem ipsum dolor sit amet, vim at nemore elaboraret, qui ea expetenda vituperata. Ex esse percipit iracundia vel. Vim no ipsum quaeque detracto, antiopam definitionem in eum, inani habemus referrentur duo et. Mea affert discere mnesarchum ei, impedit inermis id sit. Ut error quaestio atomorum quo,r.', facebook: '#'},
      ]

    };
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.client-reviews-section{
  background: url('/static/images/main-page/bg-house.png') no-repeat top left;
  -webkit-background-size: calc(100vw - $container-width) auto;
  background-size: calc(100vw - $container-width + ($container-width * 0.3)) auto;
}
.content-container{
  width: 66%;
}

.reviews-slider{
  margin: -20px;
  color: #000;
  .slide-outer{
    padding: 20px;
  }
  .slide-inner{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    padding: 35px 50px 15px 75px;
  }
  .name{
    font-size: 36px;
    font-weight: bold;
  }
  .text{
    font-size: 24px;
  }
  .socials,
  .socials a{
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  .socials{
    .facebook{
      display: block;
      min-height: 50px;
      line-height: 50px;
      padding-right: 60px;
      background: url('/static/images/icons/facebook.svg') no-repeat right center;
      -webkit-background-size: 36px;
      background-size: 36px;
    }
  }
}

//photos slider
.photos-slider-row{
  display: flex;
  .controls{
    position: relative;
    background: #333333;
    margin-top: auto;
    &:after{
      content: '';
      display: block;
      width: 80%;
      background: #fff;
      height: 1px;
      position: absolute;
      right: 10%;
      top: 50%;
    }
    .slider-arrow{
      position: static;
      height: 114px;
      width: 82px;
      margin: 0;
      &.swiper-button-next{
        background: url('/static/images/icons/arrow-left.svg') no-repeat center !important;
        background-size: 25px;
      }
      &.swiper-button-prev{
        background: url('/static/images/icons/arrow-right.svg') no-repeat center !important;
        background-size: 25px;
      }
    }
  }
}
.photos-slider{
  width: 470px;
  margin: 0;
  img{
    width: 100%;
    height: auto;
  }
}

.banner{
  margin-top: 75px;
  margin-bottom: 30px;
}
</style>
