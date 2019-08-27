<template>
  <div class="top-projects-section">
    <div class="h-container">
      <div class="th-heading text-center">פרויקטים אחרונים</div>
      <div class="top-projects-slider-wrap">
        <swiper :options="sliderOptions" class="top-pojects" ref="topProjectsSlider">
          <swiper-slide class="slide-outer" v-for="project in projects" :key="project.id">
            <div class="slide-inner">
              <div class="creator-avatar">
                <img :src="project.avatar" alt="">
              </div>
              <div class="title">{{project.name}}</div>
              <div class="category">{{project.category}}</div>
              <div class="description">{{project.description}}</div>
              <a :href="project.url" class="th-btn th-btn-empty th-btn-sm">קרא את הפוסט הזה</a>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="3"></div>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      sliderOptions: {
          slidesPerView: 4,
          navigation: {
            nextEl: '.swiper-button-next[data-uid="3"]',
            prevEl: '.swiper-button-prev[data-uid="4"]',
          },
          breakpoints: {
            1700: {
              slidesPerView: 3
            },
            1023: {
              slidesPerView: 2
            },
            556: {
              slidesPerView: 1
            },
          }
      },
      projects: [
        {id: 0, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 1, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 2, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 3, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 4, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 5, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 6, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 7, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 8, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 9, name: 'שם הפרויקט',  avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 10, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 11, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 12, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 13, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 14, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {id: 15, name: 'שם הפרויקט', avatar: '/static/images/main-page/top-avatar.png', category: 'Lorem ipsum dolor', url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.top-projects-section{
  padding: ceil($scale1 * 25px) 0 0 0;
  width: 100%;
}
.top-projects-slider-wrap{
  position: relative;
}
.slide-outer{
    padding: ceil($scale1 * 32px) ceil($scale1 * 20px) ceil($scale1 * 20px) ceil($scale1 * 20px);
}
.top-pojects{
  margin-right: ceil($scale1 * -20px);
  margin-left: ceil($scale1 * -20px);
}
.slide-inner{
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-align-items: center;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: ceil($scale1 * 35px) ceil($scale1 * 16px) ceil($scale1 * 24px);
    color: $clr-dark;
    text-decoration: none;
    position: relative;
    .creator-avatar{
        position: absolute;
        top: ceil($scale1 * -32px);
        width: ceil($scale1 * 65px);
        height: ceil($scale1 * 65px);
        border-radius: 50%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .title{
        font-size: ceil($scale1 * 24px);
        font-weight: bold;
    }
    .category{
        font-weight: bold;
    }
    .description{
        font-size: ceil($scale1 * 14px);
        margin-bottom: ceil($scale1 * 25px);
    }
}

@media(max-width: $breakpoint3){
  .h-container{
    width: $container-width3 - 30px;
  }
}

@media(max-width: $breakpoint4){
  .h-container{
  width: $container-width4 - 30px;
  }
}

@media(max-width: $breakpoint5){
  .h-container{
    width: calc(100% - (#{$gutters} * 3));
  }
}
</style>
