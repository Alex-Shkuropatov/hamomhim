<template>
  <div class="profile-wrapper" ref="nav">

    <worker-profile-first-screen
    :user="user"
    :subcategories="subcategories"
    :favourite="favourite"
    @anchor="onScroll"
    @update:is_favourite="onUpdateIsFavourite"
    />

    <div class="profile-about" id="resume">
     <div class="image-wrapper">
       <img :src="user.avatar===null? '/static/images/profile/defaultAvatar.png' : $env.API_URL+user.avatar"  alt="">
     </div>

      <div class="user-info">
      <div class="main-block">
        <div class="title">
          <span class="title-element">{{user.name}}</span>
          <favourite-icon
            v-bind="favourite"
            v-if="getData.role==='architect'"
          />
          <span
            v-if="getData.role==='architect'"
            class="fav-msg">הסוף למועדפים</span>
        </div>

      <div class="socials-element">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4706 18.4775C35.4706 8.81313 27.6361 0.977539 17.9706 0.977539C8.30521 0.977539 0.470703 8.81313 0.470703 18.4775C0.470703 28.1429 8.30509 35.9774 17.9706 35.9774C27.6361 35.9774 35.4706 28.143 35.4706 18.4775ZM22.3552 13.0247H20.0999C19.4928 13.0247 19.0663 13.5388 19.0663 14.1798V15.1849H22.2873L21.7657 18.4475H19.0652V27.193H15.7686V18.4475H13.5812V15.1849H15.7686V13.5213H15.7752C15.8333 11.6247 16.4916 9.81894 19.704 9.70517V9.69315H22.3552V13.0247Z" fill="#2F80ED"/>
        </svg>

        <svg width="47" height="33" viewBox="0 0 47 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.2701 0.155273H10.3352C5.0506 0.155273 0.766602 4.44499 0.766602 9.73665V23.2193C0.766602 28.5109 5.0506 32.8006 10.3352 32.8006H37.2701C42.5547 32.8006 46.8387 28.5109 46.8387 23.2193V9.73665C46.8387 4.44499 42.5547 0.155273 37.2701 0.155273ZM30.7989 17.1339L18.2006 23.1506C17.8649 23.3109 17.4771 23.0658 17.4771 22.6935V10.284C17.4771 9.90637 17.8751 9.66159 18.2115 9.83232L30.8098 16.2251C31.1844 16.4151 31.1779 16.953 30.7989 17.1339Z" fill="#2F80ED"/>
        </svg>

        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5232 0.0673828H17.5145C7.9299 0.0673828 0.135742 7.86371 0.135742 17.4505C0.135742 21.2531 1.36125 24.7775 3.44505 27.6392L1.27868 34.097L7.96032 31.961C10.709 33.7819 13.9879 34.8336 17.5232 34.8336C27.1078 34.8336 34.902 27.0351 34.902 17.4505C34.902 7.86588 27.1078 0.0673828 17.5232 0.0673828Z" fill="#2F80ED"/>
        </svg>
      </div>


      </div>
        <div class="icons-block">
          <div class="stats-element">
            <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.225586" y="30.9092" width="40.4946" height="3.24945" fill="#2F80ED"/>
              <rect x="35.4365" y="0.0400391" width="5.2819" height="29.2451" fill="#2F80ED"/>
              <rect x="28.3975" y="6.53906" width="5.2819" height="22.7462" fill="#2F80ED"/>
              <rect x="21.3555" y="13.0371" width="5.2819" height="16.2473" fill="#2F80ED"/>
              <rect x="14.3115" y="21.1611" width="5.2819" height="8.12363" fill="#2F80ED"/>
              <rect x="5.50977" y="24.4111" width="5.2819" height="4.87418" fill="#2F80ED"/>
            </svg>

            ציון :  <span>{{Math.round(user.average_rating)}}</span>
          </div>

          <div class="stats-element">
            <svg width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3376 12.2527C16.2307 11.0482 14.7269 10.3721 13.1591 10.374C9.89486 10.3731 7.24794 13.2426 7.24707 16.7834C7.2462 20.3242 9.89163 23.1953 13.1559 23.1963C16.4202 23.1972 19.0671 20.3277 19.068 16.7869C19.0683 15.0864 18.4459 13.4554 17.3376 12.2527Z" fill="#2F80ED"/>
              <path d="M13.4718 25.29H12.8416C6.21292 25.3078 0.843525 31.1322 0.827148 38.3222V39.2427C0.827148 39.7482 1.2048 40.1578 1.67079 40.1578H24.6376C25.1036 40.1578 25.4813 39.7482 25.4813 39.2427V38.3222C25.4622 31.1354 20.0974 25.3137 13.4718 25.29Z" fill="#2F80ED"/>
              <path d="M43.0923 3.16089C40.3585 1.08414 37.0898 -0.00281168 33.7527 0.0549207C30.4156 -0.00281168 27.1469 1.08414 24.4131 3.16089C21.9318 5.14183 20.4033 7.89791 20.4033 10.9662C20.4073 12.3545 20.7206 13.7211 21.3164 14.9496C21.8489 16.0436 22.5525 17.0289 23.3958 17.8618L21.2767 22.6365C21.0739 23.0882 21.2471 23.6327 21.6636 23.8526C21.9244 23.9904 22.2323 23.9723 22.4777 23.8046L27.3509 20.5425C28.2778 20.953 29.2382 21.2684 30.2193 21.4845C31.3821 21.7428 32.5659 21.8726 33.7527 21.8721C37.0898 21.9298 40.3585 20.8429 43.0923 18.7661C45.5736 16.7852 47.102 14.0291 47.102 10.9608C47.102 7.89252 45.5686 5.14183 43.0923 3.16089ZM40.0815 9.49503C40.081 9.49732 40.0805 9.49974 40.08 9.50203C40.047 9.6615 39.975 9.80846 39.8716 9.92729L37.7079 12.6188L37.9957 16.2307C38.0363 16.7342 37.693 17.178 37.2287 17.2222C37.0666 17.2375 36.9038 17.2017 36.76 17.1189L33.7527 15.7463L30.6759 17.162C30.2503 17.3604 29.7571 17.1471 29.5742 16.6855C29.5188 16.5456 29.4966 16.393 29.5097 16.2415L29.7975 12.6295L27.609 9.87884C27.3059 9.4949 27.3472 8.91731 27.7012 8.58854C27.8033 8.49367 27.9249 8.42665 28.0556 8.39314L31.3061 7.57493L33.0281 4.49587C33.2668 4.06187 33.7847 3.91989 34.1848 4.17868C34.305 4.25646 34.4055 4.36547 34.4772 4.49587L36.1893 7.58569L39.4398 8.40391C39.8948 8.51305 40.1821 9.00155 40.0815 9.49503Z" fill="#2F80ED"/>
            </svg>

            דירוג :  <span>{{user.comments_count}}</span>
          </div>
          <div class="location">
            <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7782 0.863281C6.46193 0.863281 0.509766 6.33372 0.509766 13.0578C0.509766 21.4025 12.3837 33.6531 12.8892 34.1705C13.3641 34.6566 14.1931 34.6557 14.6671 34.1705C15.1726 33.6531 27.0466 21.4025 27.0466 13.0578C27.0464 6.33372 21.0943 0.863281 13.7782 0.863281ZM13.7782 19.1931C10.0972 19.1931 7.10257 16.4408 7.10257 13.0578C7.10257 9.6747 10.0973 6.92244 13.7782 6.92244C17.4591 6.92244 20.4537 9.67476 20.4537 13.0578C20.4537 16.4409 17.4591 19.1931 13.7782 19.1931Z" fill="#2F80ED"/>
            </svg>


          אזור עבודה:
            <span class="bold">{{user.working_area}}</span>

          </div>
      </div>
      <div class="description-block">
        {{user.bio === 'null' ? '': user.bio}}
      </div>
      <div class="buttons-block">
        <div class="email-block">
          <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7256 15.9573L11.9151 12.6221L1.02051 21.9613C1.41652 22.3287 1.95113 22.5575 2.54074 22.5575H28.9105C29.4979 22.5575 30.0303 22.3287 30.4241 21.9613L19.5361 12.6221L15.7256 15.9573Z" fill="#2F80ED"/>
            <path d="M30.4303 1.15383C30.0342 0.784222 29.5018 0.557617 28.91 0.557617H2.54025C1.95283 0.557617 1.42042 0.786422 1.02441 1.15823L15.7251 13.7579L30.4303 1.15383Z" fill="#2F80ED"/>
            <path d="M0.324219 2.49023V20.7682L10.957 11.7326L0.324219 2.49023Z" fill="#2F80ED"/>
            <path d="M20.4922 11.7324L31.125 20.768V2.4834L20.4922 11.7324Z" fill="#2F80ED"/>
          </svg>

          <span>{{user.email}} </span>
        </div>
        <button
          class="th-btn th-btn-blue th-btn-lg  phone-b"
                @click="showPhone"
        >
          <span>{{phoneFlag === false ? 'צור קשר' : this.user.phone}}</span>
        </button>
      </div>
      </div>

    </div>

    <div class="all-works" v-if="posts.length!==0">
      <div class="last-projects-wrapper">

        <div class="last-projects">
          פרויקטים אחרונים
        </div>
      </div>
    </div>

    <gallery-slider ref="gallery" id="gallery-l" v-if="posts.length!==0" v-bind="{posts:posts}" />

    <feedback ref="feedback" id="feedback-l"  v-bind="feed" v-if="feed.posts.length!==0" />

    <download ref="download" id="download-l" v-bind="feed" v-if="feed.files.length!==0"/>

  </div>

</template>

<script>
import FavouriteIcon from '../components/common/FavouriteIcon.vue'
import WorkPost from '../components/profile/WorkPost.vue'
import Download from '../components/profile/Download'
import Feedback from '../components/profile/Feedback'
import WorkerProfileFirstScreen from '../components/profile/WorkerProfileFirstScreen'
import GallerySlider from '../components/profile/GallerySlider.vue'
export default {
  components: {
    GallerySlider,
    FavouriteIcon,
    WorkPost,
    Download,
    Feedback,
    WorkerProfileFirstScreen
  },
  data() {
    return {
      imgSrc: '/static/images/profile/profileImg.png',
      files: [],
      user: {

      },
      phoneFlag: false,
      subcategories: [],
      sliderOptions: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next[data-uid="7"]',
          prevEl: '.swiper-button-prev[data-uid="8"]',
        },
        breakpoints: {
          1500: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1
          },
          700: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 1
          },
        }
      },
      posts: [

      ],
      feed: {
        posts: [
        ],
        files: [],
      },
      favourite:{
        is_favourite: false,
        user_id: 0,
      },
    }
  },
  methods: {
    onUpdateIsFavourite(){
      console.log('updated value');
      this.favourite.is_favourite=!this.favourite.is_favourite;
    },
    onScroll(data){
        let gallery = document.getElementById('gallery-l');
      let download = document.getElementById('download-l');
      let feedback = document.getElementById('feedback-l');
     switch (data) {
       case 'download':
         this.$nextTick(() => {
           download.scrollIntoView({block: "center", behavior: "smooth"});
         });
         break;
       case 'gallery':
         this.$nextTick(() => {
           gallery.scrollIntoView({block: "center", behavior: "smooth"});
         });
         break;
       case 'feedback' :
         this.$nextTick(() => {
           feedback.scrollIntoView({block: "center", behavior: "smooth"});
         });
         break;
     }
    },
    showPhone(){
      if(this.$store.getters['user/isLogged']){
        this.phoneFlag=!this.phoneFlag;
      }

    }
  },
  mounted() {
    axios.post('/api/getWorkerProfile',{'user_id': this.$route.params.id})
    .then((response)=>{
      console.log(response.data.value);
      this.user = response.data.value.user;
      this.subcategories = response.data.value.subcategories;
      this.posts = response.data.value.workerWork;
      this.favourite.is_favourite= !!this.user.is_favourite;
      this.favourite.user_id= this.user.id;
      this.feed.files= response.data.value.files;
      console.log(this.user);
      axios.post('/api/getCommentsOnUser',{'worker_id':this.user.id})
      .then((response)=>{
        console.log(response.data.value);
        this.feed.posts = response.data.value;
      }).catch((error)=>{
        console.log(error);
      });
    }).catch((error)=>{
      console.log(error);
    });
    window.scroll(0, 0);
  },
  computed: {
    getData() {
      return this.$store.getters['user/data'];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.main-row{
  display: flex;
  @media(max-width: 767px){
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
.profile-wrapper {
  width: 100%;
  background: rgb(250,250,250);
  .profile-about{
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 50px auto;
    width: 1230px;
    height: 330px;
    display: flex;
    border-bottom: 6px solid #2F80ED;
    @media screen and (max-width:1650px){
      width: 1010px;
      height: 339px;
    }
    @media screen and (max-width: 1440px){
      width: 900px;
      height: auto;
    }
    @media screen and (max-width: 1035px){
      width: 670px;
      flex-direction: column;
    }
    @media screen and (max-width: 767px){
      width: 470px;
     }
    @media screen and (max-width: 480px){
      width: 305px;
    }
    .image-wrapper{
      padding-right: 20px;
      display: flex;
      align-items: center;
      img{
        width: 255px;
        height: 255px;
        @media screen and (max-width: 1440px){
          width: 180px;
          height: 180px;
        }
      }
      @media screen and (max-width: 1035px){
        justify-content: center;
        padding-right: 0;
        padding-top: 10px;
      }

    }
    .user-info{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .main-block{
        margin-top: 50px;
        padding: 0 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media screen and (max-width:1440px){
          margin-top: 20px;
        }
        @media screen and (max-width:1035px){
          flex-direction: column-reverse;
          align-items: center;
        }
        .title{
          display: flex;
          align-items: center;
          @media screen and (max-width: 480px){
            align-items: unset;
          }
          .title-element{
            font-weight: bold;
            font-size: 46px;
            color: #4F4F4F;
            @media screen and (max-width:1650px){
              font-size: 34px;
            }
            @media screen and (max-width: 480px){
              font-size: 20px;
            }
          }
          .fav-msg{
            font-size: 24px;
            color: #BDBDBD;
            @media screen and (max-width:1650px){
              font-size: 20px;
            }
            @media screen and (max-width: 480px){
              display: none;
            }
          }
        }
        .socials-element{
          width: 150px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          svg{
            @media screen and (max-width: 767px){
              width: 28px;
              height: 28px;
            }
          }
        }
      }
      .icons-block{
        border-right: 3px solid #2F80ED;
        padding: 3px 10px;
        margin-right: 20px;
        display: flex;

        @media screen and (max-width: 1440px){
          margin: 5px 20px;
        }
        @media screen and (max-width: 1035px){
          justify-content: center;
          border-right: none;
        }
        @media screen and (max-width: 480px){
          flex-direction: column;
        }
      .stats-element{
        display: flex;
        margin: 0 5px;
        font-size: 22px;
        color: #4F4F4F;
        @media screen and (max-width:1650px){
          font-size: 20px;
        }
        span{
          font-weight: bold;
        }
        svg{
          width: 35px;
          height: 35px;
          @media screen and (max-width:1440px){
            width: 28px;
            height: 28px;
          }
        }
      }
        .location{
          display: flex;
          font-size: 22px;
          color: #4F4F4F;
          margin: 0 5px;
          @media screen and (max-width:1650px){
            font-size: 20px;
          }
          span{
            font-weight: bold;
          }
          svg{
            width: 30px;
            height: 30px;
            @media screen and (max-width:1440px){
              width: 28px;
              height: 28px;
            }
          }
        }
      }
      .description-block{
        border-right: 3px solid #2F80ED;
        padding: 3px 10px;
        margin-right: 20px;
        min-height: 50px;
        max-height: 100px;
        font-size: 20px;
        @media screen and (max-width:1650px){
          font-size: 18px;
        }
        @media screen and (max-width: 1440px){
          margin: 5px 20px;
          max-height: 300px;
        }
        @media screen and (max-width:1035px){
          margin-top: 0;
          border-right: none;
          text-align: center;
        }
      }
      .buttons-block{
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 767px){
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .phone-b{
          width: 350px;
          height: 56px;
          background: #2F80ED;
          border-radius: 5px;
          border: 2px solid #2F80ED;
          border-bottom-left-radius: unset;
          border-bottom-right-radius: unset;
          text-align: center;
          display: inline-block;
          @media screen and (max-width:1650px){
            width: 290px;
          }
          @media screen and (max-width: 1440px){
            width: 200px;
          }
          @media screen and (max-width: 767px){
            height: 35px;
          }
        }
        .email-block{
          display: flex;
          align-items: center;
          span{
            margin: 0 25px;
            @media screen and (max-width: 480px){
              margin: 0 10px;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }


}

.slide-inner-post {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  line-height: 1.16;
  margin: 0px 5px 0 5px;

}
.slide-outer-post{
  padding: 8px;
}
.h-container-works{
  position: relative;
  background-color: white;
  margin: 0 auto;
  width: 1770px;
  margin-bottom:40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1440px) {
    padding: 0 100px 0 100px;
  }
  @media screen and (max-width: 1235px) {
    padding: 0 25px 0 25px;
  }
  .swiper-button-prev{
    right: 150px;
    @media screen and (max-width: 1440px) {
      display: none;
    }
  }
  .swiper-button-next {
    left: 164px;
    @media screen and (max-width: 1440px) {
      display: none;
    }
  }
}
.all-works{
  width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  @media screen and (max-width: 1440px) {
    width: unset;
    justify-content: center;
  }
  .view-all{
    color: #074DAC;
    font-weight: bold;
    font-size: 18px;
    .fas{
      margin-right: 10px;
    }
  }
  .last-projects-wrapper{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 25px;
    .line{
      width: 260px;
      height: 0px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      margin-top: 38px;
      margin-right: 35px;
      @media screen and (max-width: 767px){
        width: 150px
      }
      @media screen and (max-width: 570px){
        display: none;
      }
    }
    .last-projects{
      font-weight: bold;
      font-size: 48px;
      color: #333333;
      @media screen and (max-width: 767px){
        font-size: 40px;
      }
      @media screen and (max-width: 570px){
        font-size: 33px;
      }
    }
  }
}
.h{
  opacity: 0.7;
  width: 100%;
  border: 1px solid #E0E0E0;
  transform: rotate(180deg);

}
.desktop{
  @media screen and (max-width: 1235px) {
    display: none;
  }
}
.mobile{
  display: none;
  @media screen and (max-width: 1235px) {
    display: block;
    width: 98%;
    margin-right: 0;
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
}

</style>
