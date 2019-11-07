<template>
  <div class="client-reviews-section">
    <div class="th-heading clr-blue text-center h-container2">
      <span class="light">פרויקט נבחר</span>
      <span>אירה זינגר</span>
    </div>
    <div class="sec-outer">
      <div class="h-container2">
        <div class="content-container">
          <div class="reviews-slider" ref="reviewsSlider">
            <div class="slide-outer">
              <div class="slide-inner">
                <div class="name clr-blue" @click="$router.push({ name: 'blog-post', params: { id: post.id } })">{{post.name}}</div>
                <div class="text">{{post.text}}</div>
                <div class="socials">
                  <a :href="post.facebook" class="facebook">לעמוד הפייסבוק שלנו</a>
                </div>
              </div>
            </div>
          </div>
          <div class="photos-slider-row">
            <swiper :options="photosSliderOptions" class="photos-slider" ref="photosSlider">
              <swiper-slide class="slide-outer" v-for="image, index in post.images" :key="index">
                <div class="slide-inner" :style="bgImage(image)" @click="$router.push({ name: 'blog-post', params: { id: post.id } })">
                  <!-- <img :src="image" alt=""> -->
                </div>
              </swiper-slide>
            </swiper>
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
        spaceBetween: 20,
      },
      post: {
        id: 1,
        name: '',
        images: [],
        text: '',
        facebook: ''
      },

    };
  },
  methods: {
    bgImage(url){
      //console.log({ backgroundImage: "url('" + url + "')"});
      return { backgroundImage: "url('" + url + "')"};
    }
  },
  mounted(){
    //this.$refs.reviewsSlider.swiper.controller.control = this.$refs.photosSlider.swiper;
    //this.$refs.photosSlider.swiper.controller.control = this.$refs.reviewsSlider.swiper;

    // setTranslate(a){
    //   console.log(a);
    //   console.log(this);
    //   this.$refs.photosSlider.setTranslate(a);
    // }
    axios.post('/api/admin/getAllBlogs', {
        sortBy: 'id',
        orderBy: 'DESC',
        page: 0,
        take: 2,
        tag: 'main page'
      })
      .then(response => {
        let post = response.data.value.records[0];
        this.post.id = post.id;
        this.post.name = post.title;
        this.post.text = post.description;
        //get facebook link
        let parser = new DOMParser();
        let textHtml = parser.parseFromString(post.contents, 'text/html');
        this.post.facebook = textHtml.getElementsByTagName('a')[0].getAttribute("href");
        let imagesCollection = textHtml.getElementsByTagName('img');
        for(let i = 0; i < imagesCollection.length; i++){
          this.post.images.push(imagesCollection[i].getAttribute('src'));
        }
      });
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.client-reviews-section{
  background: url('/static/images/main-page/main-top-news.png') no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
}
.light{
  font-weight: normal;
  color: #333;
}
.h-container2{
  position: relative;
}
.content-container{
  width: 58%;
  margin-right: -$gutters;
  margin-left: -$gutters;
  height: ceil( ($container-width1 + 130px * $scale1) * 0.27 + 50px * $scale1);//hight of images slider + it's top margin
}

.reviews-slider{
  margin: ceil($scale1 * -20px);
  color: #000;
  .slide-outer{
    padding: ceil($scale1 * 20px);
  }
  .slide-inner{
    background: #FFFFFF;
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.2);
    padding: ceil($scale1 * 35px) ceil($scale1 * 50px) ceil($scale1 * 15px) 13%;
  }
  .name{
    font-size: ceil($scale1 * 55px);
    margin-bottom: ceil($scale1 * 20px);
    font-weight: bold;
    cursor: pointer;
  }
  .text{
    font-size: ceil($scale1 * 24px);
    margin-bottom: ceil($scale1 * 20px);
  }
  .socials,
  .socials a{
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  .socials{
    margin-top: 20px;
    .facebook{
      display: block;
      min-height: ceil($scale1 * 50px);
      line-height: ceil($scale1 * 50px);
      padding-right: ceil($scale1 * 60px);
      background: url('/static/images/icons/facebook.svg') no-repeat right center;
      -webkit-background-size: ceil($scale1 * 36px);
      background-size: ceil($scale1 * 36px);
    }
  }
}

//photos slider
.photos-slider-row{
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: ceil( 50px * $scale1 );
  left: 0;
  width: 46%;
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
      height: ceil($scale1 * 114px);
      width: ceil($scale1 * 82px);
      margin: 0;
      &.swiper-button-next{
        background: url('/static/images/icons/arrow-left.svg') no-repeat center !important;
        background-size: ceil($scale1 * 25px);
      }
      &.swiper-button-prev{
        background: url('/static/images/icons/arrow-right.svg') no-repeat center !important;
        background-size: ceil($scale1 * 25px);
      }
    }
  }
}
.photos-slider{
  width: 100%;
  margin: 0;
  // img{
  //   width: 100%;
  //   height: auto;
  // }
  .slide-inner{
    padding-top: 58%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.banner{
  margin-top: ceil($scale1 * 30px);
  margin-bottom: ceil($scale1 * 30px);
}

@media(max-width: $breakpoint2){
  .content-container{
    height: ceil( ($container-width2 + 130px * $scale2) * 0.27 + 50px * $scale2);//hight of images slider + it's top margin
  }
  .th-heading{
    margin-bottom: 15px;
  }
  .reviews-slider{
    .slide-inner{
      padding: ceil($scale2 * 35px) ceil($scale2 * 50px) ceil($scale2 * 15px) 13%;
    }
    .name{
      font-size: ceil($scale2 * 55px);
    }
    .text{
      font-size: ceil($scale2 * 24px);
    }
    .socials{
      .facebook{
        min-height: ceil($scale2 * 50px);
        line-height: ceil($scale2 * 50px);
        padding-right: ceil($scale2 * 60px);
        -webkit-background-size: ceil($scale2 * 36px);
        background-size: ceil($scale2 * 36px);
      }
    }
  }

  //photos slider
  .photos-slider-row{
    top: ceil( 50px * $scale2 );
  }
  .banner{
    margin-top: ceil($scale2 * 75px);
  }
}

@media(max-width: $breakpoint3){

}
@media(max-width: $breakpoint4){
  .content-container{
    width: 100%;
    height: auto;
  }
  .photos-slider-row{
    position: static;
    width: 100%;
  }
}
@media(max-width: $breakpoint5){
  .content-container{
    margin-right: 0;
    margin-left: 0;
  }
  .reviews-slider{
    .name{
      font-size: ceil($scale3 * 55px);
      margin-bottom: 5px;
    }
    .text{
      margin-bottom: 5px;
    }
  }
  .banner{
    margin-top: 24px;
  }
}

</style>
