<template>
  <div class="top-projects-section">
    <div class="h-container">
      <div class="th-heading text-center">פרויקטי השבוע</div>
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
  padding: 30px 0;
  width: 100%;
}
.top-projects-slider-wrap{
  position: relative;
}
.slide-outer{
    padding: 32px 20px 20px 20px;
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
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 35px 16px 24px;
    color: $clr-dark;
    text-decoration: none;
    position: relative;
    .creator-avatar{
        position: absolute;
        top: -32px;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .title{
        font-size: 24px;
        font-weight: bold;
    }
    .category{
        font-weight: bold;
    }
    .description{
        font-size: 14px;
        margin-bottom: 25px;
    }
}
</style>
