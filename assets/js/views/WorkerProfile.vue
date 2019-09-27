<template>
<div class="profile-wrapper" ref="nav">

<show-gallery />

 <worker-profile-first-screen :user="user"></worker-profile-first-screen>

 <div class="profile-about">

  <img class="bg-resume" src="/static/images/profile/resume-bg.png" alt="">
<div class="resume-wrapper">
 <div class="profile-resume">
 <div class="block-wrapper">
<div class="block-wrapper-element">
 <div class="element-padd">
 <div class="title"> <span>{{user.name}}</span> <favourite-icon v-bind="favourite" v-if="getData.role==='architect'"  /> </div>
 <div class="stats-block">
  <div class="stats">
   <div class="stats-element">
    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="0.285156" y="24.0635" width="29.1299" height="2.53303" fill="#FFB000"/>
     <rect x="25.6143" width="3.79955" height="22.7973" fill="#FFB000"/>
     <rect x="20.5508" y="5.06641" width="3.79955" height="17.7312" fill="#FFB000"/>
     <rect x="15.4844" y="10.1318" width="3.79955" height="12.6652" fill="#FFB000"/>
     <rect x="10.418" y="16.4648" width="3.79955" height="6.33258" fill="#FFB000"/>
     <rect x="4.08594" y="18.998" width="3.79955" height="3.79955" fill="#FFB000"/>
    </svg>
    גוריד :  <span>{{Math.round(user.average_rating)}}</span>
   </div>

   <div class="stats-element">
    <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M12.1815 8.09061C11.3853 7.29185 10.3035 6.84348 9.1757 6.84473C6.82755 6.8441 4.92348 8.7471 4.92285 11.0953C4.92223 13.4434 6.82522 15.3475 9.17338 15.3481C11.5215 15.3487 13.4256 13.4457 13.4262 11.0976C13.4265 9.96987 12.9788 8.8882 12.1815 8.09061Z" fill="#FFB000"/>
     <path d="M9.40164 16.7373H8.94827C4.17993 16.7491 0.317445 20.6117 0.305664 25.3799V25.9904C0.305664 26.3256 0.57733 26.5972 0.912539 26.5972H17.4338C17.769 26.5972 18.0407 26.3256 18.0407 25.9904V25.3799C18.0269 20.6138 14.1678 16.753 9.40164 16.7373Z" fill="#FFB000"/>
     <path d="M30.7091 2.06125C28.7425 0.684006 26.3911 -0.0368368 23.9906 0.00144989C21.59 -0.0368368 19.2387 0.684006 17.2721 2.06125C15.4872 3.37496 14.3877 5.20272 14.3877 7.23754C14.3906 8.1582 14.6159 9.0645 15.0445 9.87923C15.4276 10.6047 15.9337 11.2582 16.5403 11.8105L15.016 14.977C14.8701 15.2766 14.9947 15.6377 15.2943 15.7835C15.4819 15.8749 15.7034 15.8628 15.8799 15.7516L19.3855 13.5883C20.0522 13.8605 20.7431 14.0697 21.4489 14.213C22.2853 14.3843 23.1369 14.4704 23.9906 14.4701C26.3911 14.5083 28.7425 13.7875 30.7091 12.4103C32.494 11.0965 33.5935 9.26878 33.5935 7.23397C33.5935 5.19915 32.4904 3.37496 30.7091 2.06125ZM28.5432 6.2619C28.5429 6.26341 28.5425 6.26502 28.5422 6.26654C28.5184 6.3723 28.4667 6.46975 28.3922 6.54856L26.8358 8.33348L27.0428 10.7289C27.072 11.0627 26.8251 11.3571 26.4911 11.3863C26.3744 11.3965 26.2574 11.3728 26.1539 11.3179L23.9906 10.4076L21.7773 11.3464C21.4712 11.478 21.1163 11.3365 20.9848 11.0304C20.945 10.9377 20.929 10.8365 20.9384 10.736L21.1454 8.34062L19.5711 6.51643C19.3531 6.26181 19.3828 5.87876 19.6374 5.66073C19.7109 5.59782 19.7983 5.55337 19.8924 5.53115L22.2307 4.98853L23.4694 2.94658C23.6411 2.65876 24.0136 2.5646 24.3014 2.73622C24.3879 2.78781 24.4602 2.8601 24.5118 2.94658L25.7434 4.99567L28.0816 5.53829C28.4089 5.61067 28.6156 5.93463 28.5432 6.2619Z" fill="#FFB000"/>
    </svg>
    ןויצ :  <span>{{user.comments_count}}</span>
   </div>
   <div class="location">
    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M8 0C3.58878 0 0 3.57423 0 7.96753C0 13.4198 7.15922 21.4239 7.46403 21.762C7.75033 22.0796 8.25019 22.079 8.53597 21.762C8.84078 21.4239 16 13.4198 16 7.96753C15.9999 3.57423 12.4112 0 8 0ZM8 11.9762C5.7806 11.9762 3.97504 10.1779 3.97504 7.96753C3.97504 5.75713 5.78065 3.95889 8 3.95889C10.2194 3.95889 12.0249 5.75717 12.0249 7.96758C12.0249 10.178 10.2194 11.9762 8 11.9762Z" fill="url(#paint0_linear)"/>
     <defs>
      <linearGradient id="paint0_linear" x1="-1.19209e-07" y1="11" x2="16" y2="11" gradientUnits="userSpaceOnUse">
       <stop stop-color="#2871D7"/>
       <stop offset="1" stop-color="#3269B6"/>
      </linearGradient>
     </defs>
    </svg>

    <span class="bold">אזור עבודה:</span>
    <span>{{user.working_area}}</span>

   </div>
  </div>
  <div class="description">
   {{user.description}}
  </div>
  <hr class="h desktop">
 </div>
  <hr class="h mobile">
 </div>
  <div class="contacts">
  <div class="contacts-element mail">

   <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7995 16.7995L12.6427 13.1611L0.757812 23.3492C1.18981 23.75 1.77302 23.9996 2.41622 23.9996H31.1827C31.8235 23.9996 32.4043 23.75 32.8339 23.3492L20.9563 13.1611L16.7995 16.7995Z" fill="url(#paint0_linear)"/>
    <path d="M32.8412 0.650402C32.4092 0.247201 31.8284 0 31.1828 0H2.4163C1.7755 0 1.1947 0.249601 0.762695 0.655203L16.7996 14.4001L32.8412 0.650402Z" fill="url(#paint1_linear)"/>
    <path d="M-0.000976562 2.10742V22.0467L11.5983 12.1899L-0.000976562 2.10742Z" fill="url(#paint2_linear)"/>
    <path d="M22 12.1902L33.5992 22.0471V2.10059L22 12.1902Z" fill="url(#paint3_linear)"/>
    <defs>
     <linearGradient id="paint0_linear" x1="0.757812" y1="18.5804" x2="32.8339" y2="18.5804" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2871D7"/>
      <stop offset="1" stop-color="#3269B6"/>
     </linearGradient>
     <linearGradient id="paint1_linear" x1="0.762695" y1="7.20003" x2="32.8412" y2="7.20003" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2871D7"/>
      <stop offset="1" stop-color="#3269B6"/>
     </linearGradient>
     <linearGradient id="paint2_linear" x1="-0.000976649" y1="12.0771" x2="11.5983" y2="12.0771" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2871D7"/>
      <stop offset="1" stop-color="#3269B6"/>
     </linearGradient>
     <linearGradient id="paint3_linear" x1="22" y1="12.0738" x2="33.5992" y2="12.0738" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2871D7"/>
      <stop offset="1" stop-color="#3269B6"/>
     </linearGradient>
    </defs>
   </svg>

   <span>{{user.email}} </span>
  </div>
   <div class="contacts-element phone">
    <span>{{user.phone}}</span>
    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M0.996429 20.519C0.941299 20.9414 1.07001 21.3086 1.38202 21.6207L5.04515 25.2562C5.21041 25.4398 5.42611 25.596 5.69235 25.7244C5.9586 25.853 6.2202 25.9356 6.47717 25.9723C6.49553 25.9723 6.55075 25.977 6.64261 25.9862C6.73428 25.9953 6.85363 26 7.00052 26C7.34948 26 7.91414 25.9403 8.69451 25.8209C9.47488 25.7015 10.4296 25.4077 11.5588 24.9396C12.6882 24.4714 13.9689 23.7689 15.401 22.8326C16.8332 21.8963 18.3572 20.6109 19.973 18.9767C21.2584 17.7097 22.3233 16.4979 23.168 15.3411C24.0126 14.1843 24.692 13.1147 25.2061 12.1324C25.7203 11.1501 26.1059 10.2595 26.3629 9.46079C26.62 8.66206 26.7944 7.9735 26.8862 7.39511C26.978 6.81672 27.0147 6.36228 26.9964 6.03177C26.978 5.70126 26.9688 5.51765 26.9688 5.48092C26.9321 5.22386 26.8495 4.96221 26.721 4.69597C26.5924 4.42972 26.4364 4.21398 26.2527 4.04872L22.5896 0.385593C22.3326 0.128531 22.0388 0 21.7083 0C21.4696 0 21.2584 0.0688558 21.0748 0.206567C20.8912 0.344279 20.7351 0.514123 20.6066 0.7161L17.6595 6.30719C17.4943 6.60098 17.4484 6.9223 17.5218 7.27117C17.5953 7.62004 17.7513 7.91383 17.99 8.15253L19.3396 9.5021C19.3763 9.53883 19.4085 9.5985 19.436 9.68113C19.4636 9.76375 19.4773 9.83261 19.4773 9.88769C19.4039 10.2733 19.2386 10.714 18.9816 11.2097C18.7612 11.6504 18.4215 12.1875 17.9625 12.821C17.5035 13.4544 16.8516 14.1843 16.007 15.0105C15.1807 15.8552 14.4463 16.5116 13.8036 16.9799C13.1611 17.4479 12.6238 17.7923 12.1923 18.0127C11.7608 18.233 11.4303 18.3661 11.2009 18.4119L10.8567 18.4808C10.82 18.4808 10.7601 18.467 10.6776 18.4395C10.595 18.4119 10.5353 18.3798 10.4985 18.3431L8.92867 16.7456C8.59798 16.4519 8.21256 16.305 7.77184 16.305C7.4596 16.305 7.21186 16.36 7.02824 16.4702H7.00075L1.68512 19.61C1.2994 19.8489 1.06992 20.1518 0.996429 20.519Z" fill="url(#paint0_linear)"/>
     <defs>
      <linearGradient id="paint0_linear" x1="27.001" y1="13" x2="0.984028" y2="13" gradientUnits="userSpaceOnUse">
       <stop stop-color="#2871D7"/>
       <stop offset="1" stop-color="#3269B6"/>
      </linearGradient>
     </defs>
    </svg>
   </div>
  </div>
 <button class="th-btn th-btn-blue th-btn-sm resume-b">רשק רוצ</button>
 </div>

</div>
  <div class="content-image">
   <img :src="user.avatar===null? '/static/images/profile/defaultAvatar.png' : $env.API_URL+user.avatar"  alt="">
  </div>
 </div>
 </div>
</div>
 <div class="all-works" v-if="posts.length!==0">
  <div class="last-projects-wrapper">
  <hr class="line">
 <div class="last-projects">
  םינורחא םיטקייורפ
 </div>
  </div>
</div>

 <div class="slider-wrap h-container-works" v-if="posts.length!==0 ">
  <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="8"></div>
  <swiper :options="sliderOptions" class="works-slider" ref="newsSlider">
   <swiper-slide class="slide-outer-post" v-for="post in posts" :key="post.id">
    <work-post class="slide-inner-post" @openImg="openImg" v-bind="post"></work-post>
   </swiper-slide>
  </swiper>
  <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="7"></div>
 </div>

<feedback  v-bind="feed" v-if="feed.posts.length!==0" />

<download v-bind="feed" v-if="feed.files.length!==0"/>

</div>

</template>

<script>
import ShowGallery from '../components/modals/ShowGallery.vue'
import FavouriteIcon from '../components/common/FavouriteIcon.vue'
import WorkPost from '../components/profile/WorkPost.vue'
import Download from '../components/profile/Download'
import Feedback from '../components/profile/Feedback'
import WorkerProfileFirstScreen from '../components/profile/WorkerProfileFirstScreen'

export default {
 components: {
  FavouriteIcon,
  WorkPost,
  Download,
  Feedback,
  ShowGallery,
  WorkerProfileFirstScreen
 },
 data: function () {
  return {
   imgSrc: '/static/images/profile/profileImg.png',
   files: [],
   user: {

   },
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
    is_favourite: '',
    user_id: '',
   },
   }
 },
 methods: {
  openImg(data){
   console.log(data.id);
   this.posts.filter((post)=>{
    if (post.id === data.id){
     this.$store.commit('modals/showGallery/saveData', post);
     this.$store.commit('modals/showGallery/open');
    }
   });

  }
 },
 mounted() {
  axios.post('/api/getWorkerProfile',{'user_id': this.$route.params.id})
      .then((response)=>{
      console.log(response.data.value);
      this.user = response.data.value.user;
       this.posts = response.data.value.workerWork;
      this.favourite.is_favourite= this.user.is_favourite;
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
.element-padd{
 padding-right: 195px;
 padding-left: 75px;
 @media screen and (max-width: 1035px) {
padding: 0
 }
}
 .profile-wrapper{
  width: 100%;
 .profile-about{
  margin: 70px auto;
  padding: 70px 10px 0 10px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1035px) {
   margin-top: 0;
   padding-top: 0;
  }
  .bg-resume{
   z-index:0;
   top: 0;
   position: absolute;
   object-fit: cover;
   @media screen and (max-width: 1035px) {
    display: none;
   }
  }
  .profile-resume{
   background: rgba(255,255,255,0.85);
   position: relative;
   margin-top: 116px;
   z-index: 3;

   width: 1056px;
   height: 478px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media screen and (max-width: 1440px){
    width: unset;
    margin-top: unset;
   }
   @media screen and (max-width: 1035px){
    height: auto;
    flex-direction: column-reverse;
   }
   @media screen and (max-width: 767px){
    padding: 0 20px 0 20px;
   }
   @media screen and (max-width: 480px){
    padding: 0 5px 0 5px;
    width: 310px;
   }
  }
 }
 }
.resume-wrapper{
 display: flex;
 flex-direction: row;
 box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
 .profile-resume{

 }
}
.block-wrapper{
 width: 100%;
 display: flex;
 justify-content: center;
.block-wrapper-element{
 margin-right: 70px;

 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;
 @media screen and (max-width: 1035px){
  align-items: center;
  margin-right: 5px;
 }
 .title{
  margin-top: 53px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 48px;
  line-height: 30px;
  color: #333333;
  margin-right:10px;
  @media screen and (max-width:767px){
   display: block;
   margin-right: 0;
   text-align: center;
  }
  @media screen and (max-width: 480px) {
   font-size: 38px;
  }

 }
}

}
 .content-image{
  position: absolute;
  width: 191px;
  height: 191px;
  right: 48px;
  top: 64px;
  @media screen and (max-width: 1035px) {
   position: relative;
  }
  @media screen and (max-width:767px) {
   width: 120px;
   height: 120px;
   right: 3px;
   top: 39px;
  }
  img{
   width: 191px;
   height: 191px;
   border-radius: 50%;
   @media screen and (max-width:767px) {
    width: 120px;
    height: 120px;
   }
  }
 }
 .stats {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 144px;
  margin-top: 33px;
  left: 20px;
  @media screen and (max-width: 767px){
   flex-direction: column;
   margin-left: 0;
  }
  .stats-element{
   display: flex;
   align-items: center;
   padding: 8px;
   font-size: 24px;
   line-height: 30px;
   color: #4F4F4F;
   @media screen and (max-width: 767px){
    display: flex;
    align-items: center;
    justify-content: center;
   }
   span {
    font-weight: bold;
   }
  }
  svg{
   margin-left: 7px;
  }
 }

 .location{
  display: flex;
  flex-direction: row;
  align-items: center;
  .bold{
   font-weight: bold;
   color: #333333;
   margin-left: 8px;
  }
  span{
   font-size: 24px;
   line-height: 30px;
   display: flex;
   align-items: center;
   text-align: right;
   color: #828282;
  }
  svg{
   margin-left: 8px;
  }
 }
 .stats-block{
  .description{
   min-height: 110px;
   @media screen and (max-width:767px){
    min-height: 19px;
   }
  }

 }
 .contacts{
  display: flex;
 @media screen and (max-width: 1035px){
  margin-top: 15px;
  width: 100%;
  justify-content: center;
 }
  .contacts-element{
  }
  .phone{
   margin-right: 50px;
   @media screen and (max-width: 767px) {
    margin-right: 25px;
   }
   span{
   }
  }
 }
 .resume-b{
  margin-top: 30px;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
 padding-right: 89px;
  width: 295.06px;
  height: 58.18px;
  @media screen and (max-width: 1035px) {
margin-bottom: 20px;
  }
  @media screen and (max-width: 480px){
   font-size: 25px;
   padding-right: 46px;
   width: 176.06px;
   height: 47.18px;
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
  padding: 0 229px 0 235px;
  margin-bottom:40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1440px) {
   padding: 0 100px 0 100px;
  }
  @media screen and (max-width: 1035px) {
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
  width: 1315px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  @media screen and (max-width: 1650px) {
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
  width: 129%;
  margin-right: -226px;
  border: 1px solid #E0E0E0;
  transform: rotate(180deg);
 }
 .desktop{
  @media screen and (max-width: 1035px) {
   display: none;
  }
 }
 .mobile{
  display: none;
  @media screen and (max-width: 1035px) {
   display: block;
   width: 98%;
   margin-right: 0;
  }
 }

</style>
