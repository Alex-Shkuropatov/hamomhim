<template>

  <header v-if="headDefault" class="header profile-header">
    <login/>

    <registration />

    <div class="h-container">
      <a href="#" class="logo-wrap">
        <router-link :to="{ name: 'index'}">
          <img src="/static/images/logo/logo-blue.png" alt="">
        </router-link>
      </a>
      <ul class="desktop-menu">
        <li class="menu-item">
          <router-link :to="{ name: 'index'}">דף</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'about-us'}">אודות</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'blog'}">בלוג</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'how-it-works'}">איך זה עובד</router-link>
        </li>
        <li class="menu-item">
          <router-link :to="{ name: 'contact-us'}">צור קשר</router-link>
        </li>
      </ul>
      <burger-menu class="mobile-menu" />
      <div class="auth-btns"  v-if="!$store.getters['user/isLogged']">
        <button class="th-btn th-btn-blue th-btn-sm" @click="openLogin">התחברות למערכת</button>
        <button class="th-btn th-btn-empty th-btn-sm" @click="openReg">הרשמה למערכת</button>
      </div>
      <div class="auth-btns profile-links"  v-else-if="$store.getters['user/isLogged']">
       <button class="logout" @click="logout">
         <span> קתנתה </span>
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0.0754738 10.6187C0.126476 10.4967 0.199465 10.3857 0.292469 10.2927L3.29165 7.29349C3.68265 6.90347 4.3147 6.90347 4.70571 7.29349C5.09671 7.6845 5.09671 8.31753 4.70571 8.70755L3.41264 10.0006H8.99898C9.552 10.0006 9.99902 10.4486 9.99902 11.0007C9.99902 11.5527 9.552 12.0007 8.99898 12.0007H3.41268L4.70575 13.2938C5.09676 13.6848 5.09676 14.3178 4.70575 14.7078C4.51074 14.9038 4.25475 15.0009 3.9987 15.0009C3.74266 15.0009 3.48666 14.9039 3.29165 14.7078L0.292469 11.7087C0.199465 11.6166 0.126476 11.5056 0.0754738 11.3826C-0.0255003 11.1387 -0.0255003 10.8627 0.0754738 10.6187Z" fill="#2871D7"/>
           <path d="M6.99912 14.0008C7.55214 14.0008 7.99916 14.4488 7.99916 15.0008V20.0011H11.9994V4.0002C11.9994 3.55918 12.2894 3.16915 12.7124 3.04216L16.1856 2.00012H7.99916V7.00041C7.99916 7.55244 7.55214 8.00045 6.99912 8.00045C6.44611 8.00045 5.99908 7.55244 5.99908 7.00041V1.00008C5.99908 0.448008 6.44611 0 6.99912 0H23C23.036 0 23.068 0.0150008 23.103 0.0189854C23.15 0.0240013 23.193 0.0319705 23.238 0.0429867C23.343 0.0699881 23.438 0.111006 23.527 0.166978C23.5489 0.180994 23.5759 0.181979 23.5969 0.197964C23.605 0.204011 23.608 0.215027 23.616 0.221027C23.725 0.307001 23.816 0.412006 23.882 0.537029C23.896 0.56403 23.899 0.593047 23.91 0.621033C23.942 0.697022 23.977 0.771041 23.989 0.855046C23.994 0.885047 23.985 0.913033 23.986 0.942051C23.987 0.962067 24 0.980068 24 1.00004V21.0011C24 21.4782 23.663 21.8882 23.196 21.9812L13.1954 23.9813C13.1304 23.9953 13.0644 24.0013 12.9994 24.0013C12.7704 24.0013 12.5454 23.9223 12.3654 23.7743C12.1344 23.5843 11.9994 23.3013 11.9994 23.0012V22.0012H6.99912C6.44611 22.0012 5.99908 21.5532 5.99908 21.0012V15.0008C5.99908 14.4488 6.44611 14.0008 6.99912 14.0008Z" fill="#2871D7"/>
         </svg>
       </button>
        <button class="th-btn th-btn-empty th-btn-sm profileB" @click="profile" >לחשבון שלי</button>
      </div>
    </div>
  </header>

  <header v-else-if="headProfile" class="header-n">
    <div class="nav-bar">
      <div class="social-links">
        <a href="#" class="whatsapp-wrap">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6041 0H11.6098C17.8906 0 22.9981 5.11035 22.9981 11.3911C22.9981 17.6719 17.8906 22.7823 11.6098 22.7823C9.29314 22.7823 7.14448 22.0931 5.34326 20.8999L0.964788 22.2996L2.38441 18.0678C1.0189 16.1925 0.21582 13.883 0.21582 11.3911C0.21582 5.10893 5.32333 0 11.6041 0ZM16.0031 17.6933C16.8731 17.5054 17.9638 16.8618 18.2386 16.0858C18.5134 15.3083 18.5134 14.6462 18.4336 14.5052C18.3693 14.3934 18.217 14.3201 17.9897 14.2107C17.9305 14.1822 17.8663 14.1512 17.7972 14.1165C17.4626 13.9499 15.835 13.1454 15.5275 13.0386C15.2256 12.9247 14.938 12.9646 14.7102 13.2864C14.6668 13.3471 14.6236 13.4079 14.5806 13.4683C14.3057 13.8549 14.0406 14.2277 13.8202 14.4654C13.6195 14.679 13.292 14.706 13.0172 14.5921C12.9872 14.5796 12.9529 14.5657 12.9144 14.5502C12.4793 14.3745 11.5142 13.9847 10.3459 12.9446C9.3606 12.0675 8.69137 10.9754 8.49772 10.6479C8.30759 10.3194 8.47159 10.1267 8.62317 9.94869C8.62597 9.94539 8.62877 9.9421 8.63157 9.93881C8.72929 9.8179 8.82413 9.71722 8.91943 9.61603C8.98799 9.54325 9.05679 9.47021 9.12708 9.38919C9.13752 9.37716 9.14768 9.36548 9.15757 9.35411C9.30683 9.18249 9.39572 9.08029 9.49587 8.86662C9.60978 8.64592 9.52862 8.41809 9.44746 8.25008C9.39162 8.13241 9.04667 7.29548 8.75055 6.577C8.62383 6.26952 8.50604 5.98375 8.42368 5.78532C8.20298 5.25705 8.03496 5.23712 7.70034 5.22288C7.69009 5.22237 7.67973 5.22184 7.66926 5.22131C7.5635 5.21596 7.44701 5.21006 7.31874 5.21006C6.88303 5.21006 6.42881 5.33821 6.154 5.61872C6.14439 5.62853 6.13438 5.63871 6.124 5.64927C5.77242 6.00683 4.98925 6.80332 4.98925 8.39104C4.98925 9.98183 6.11798 11.5214 6.32682 11.8062C6.33258 11.8141 6.33763 11.821 6.34195 11.8269C6.35452 11.8434 6.3782 11.8777 6.41267 11.9276C6.8391 12.5452 8.91611 15.553 12.0133 16.8361C14.6304 17.9212 15.4079 17.8201 16.0031 17.6933Z" fill="white"/>
          </svg>
        </a>
        <a href="#" class="youtube-wrap">
          <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.4552 0H7.65812C3.97015 0 0.980469 2.99368 0.980469 6.68657V16.0957C0.980469 19.7886 3.97015 22.7823 7.65812 22.7823H26.4552C30.1432 22.7823 33.1329 19.7886 33.1329 16.0957V6.68657C33.1329 2.99368 30.1432 0 26.4552 0ZM21.9392 11.8489L13.1472 16.0478C12.9129 16.1597 12.6423 15.9887 12.6423 15.7288V7.06859C12.6423 6.80502 12.92 6.6342 13.1548 6.75334L21.9468 11.2147C22.2082 11.3473 22.2037 11.7227 21.9392 11.8489Z" fill="white"/>
          </svg>
        </a>
        <a href="#" class="facebook-wrap">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7823 11.3912C22.7823 5.10038 17.6826 0 11.3911 0C5.09968 0 0 5.10038 0 11.3912C0 17.6826 5.0996 22.7823 11.3911 22.7823C17.6826 22.7823 22.7823 17.6827 22.7823 11.3912ZM14.2456 7.84213H12.7775C12.3823 7.84213 12.1047 8.17676 12.1047 8.59398V9.24824H14.2014L13.8618 11.3719H12.104V17.0646H9.95818V11.3719H8.53432V9.24824H9.95818V8.16535H9.96248C10.0002 6.93082 10.4288 5.75542 12.5198 5.68136V5.67354H14.2456V7.84213Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div class="element-wrapper">
        <div class="pages-links">
          <ul class="desktop-menu">
            <li class="menu-item">
              <router-link :to="{ name: 'index'}">דף</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'about-us'}">אודות</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'blog'}">בלוג</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'how-it-works'}">איך זה עובד</router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'contact-us'}">צור קשר</router-link>
            </li>
          </ul>
        </div>

        <a href="#" class="logo-wrap">
          <router-link :to="{ name: 'index'}">
            <img src="/static/images/logo/logo-white.png" alt="">
          </router-link>
        </a>
      </div>
    </div>
    <div class="info-wrapper">
      <div class="title">  בולואש ןויצ   <favourite-icon/> </div>
      <div class="description">
        <span class="bold">םיאבה םיסקדניאב סולפ םיצופישב עיפומ בולואש ןויצ</span>
        <span >.הלק הינב ,םיקינצופיש ,םיצופיש ינלבק</span>
      </div>
      <button class="contact-b">רשק רוצ</button>
    </div>
  </header>

</template>

<script>

  import FavouriteIcon from './common/FavouriteIcon.vue'
  import Registration from './common/modals/Registration.vue'
  import Login from './common/modals/Login.vue'
  import axios from 'axios';
  import BurgerMenu from './common/BurgerMenu.vue'
  export default {
    data: function (){
      return {

      }
    },
    props: {
      headDefault: {
        type: Boolean,
        required: true
      },
      headProfile: {
        type: Boolean,
        default: true
      }
    },
    components: {
      FavouriteIcon,
      Registration,
      Login,
      axios,
      BurgerMenu
    },
    methods: {
      openReg(e){
        e.preventDefault();
        this.$store.commit('modals/reg/open');
      },
      openLogin(e){
        e.preventDefault();
        this.$store.commit('modals/login/open');
      },
      logout(e){
        axios.get('/api/auth/logout')
            .then(() => {
              this.$store.commit('user/logout' );
            })
            .catch((error) => {
              console.log(error.response.data);
            });
      },
      profile(){
        let role  = this.getData.role;
         role==='worker'?this.$router.push({name: 'projects'}) : this.$router.push({name: 'requests'})
      },
    },
    computed: {
      getData() {
        return this.$store.getters['user/data'];
      }
    },

  }
</script>

<style lang="scss" scoped>

  @import '~@/vars.scss';
.mobile-menu{
  display: none;
  @media  screen and (max-width: 1240px) {
    display: block;
  }
}
  .fa-door-open{
    color: #2871D7;
  }
  .header{
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    position: fixed;
    z-index: 3000;
    height: ceil($scale1 * 100px);//80px//
    width: 100%;
    background-color: rgba(255,255,255,0.95);
    display: flex;

  -ms-align-items: center;
  align-items: center;
  .h-container{
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1240px){
      justify-content: flex-end;
    }
  }
  .logo-wrap{
    width: ceil($scale1 * 220px);
    img{
      width: 100%;
      height: auto;
    }
  }
  .auth-btns{
    .th-btn{
      padding-right: ceil($scale1 * 40px);
      padding-left: ceil($scale1 * 40px);
    }
    .th-btn-blue{
       margin-left:  6px;
      @media screen and (max-width: 750px) {
        margin-left:  0;
        margin-top:  6px;
      }
     }
    .profile-links{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      @media screen and (max-width: 900px) {
        display: none;
      }
  }
  .profile-links{
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
}
.desktop-menu{
  display: flex;
  font-size: ceil($scale1 * 24px);
  margin: 0;
  .menu-item{
    margin-left: ceil($scale1 * 37px);
    &:last-child{
      margin-left: 0;
    }
  }
  a{
    color: $clr-dark;
  }
  @media screen and (max-width: 1240px) {
    display: none;
  }
}

@media (max-width: $breakpoint2){
  .header{
    height: ceil($scale2 * 110px);
  }
  .logo-wrap{
    width: ceil($scale2 * 220px);
  }
  .desktop-menu{
    font-size: ceil($scale2 * 24px);
    .menu-item{
      margin-left: ceil($scale2 * 37px);
    }
  }
}
.header-n{
  background-image: url('/static/images/profile/header-image.png');
  height: 814px;
  .desktop-menu{
    display: flex;
    font-size: ceil($scale1 * 24px);
    margin: 0;
    .menu-item{
      margin-left: ceil($scale1 * 37px);
      &:last-child{
        margin-left: 0;
      }
    }
    a{
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 65px;
      color: #FFFFFF;
    }
  }
}
.element-wrapper{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.social-links{
  display: flex;
  flex-direction: row;
  align-items: center;
  .youtube-wrap{
    margin-left: 10px;
    margin-right: 10px;
  }
}
.nav-bar{
  padding-top: 43px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 1515px;
  max-width: 1920px;
}
.logo-wrap{
  margin-left: 70px;

  svg{

  }
}
.info-wrapper{
  margin: 200px auto 0;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-weight: bold;
    font-size: 64px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  .description{
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    .bold{
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
  .profile-links{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    @media screen and (max-width: 900px) {
      display: none;
    }
    .logout{
      span{
        font-weight: bold;
        font-size: 20px;
        line-height: 61px;
        text-align: center;
        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

</style>
