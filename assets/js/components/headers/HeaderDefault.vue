<template>

  <header class="header profile-header">
    <login/>
    <forget-password />
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
        <button class="th-btn th-btn-empty th-btn-sm profileB" @click="profile" >לחשבון שלי</button>
       <button class="logout" @click="logout">
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0.0754738 10.6187C0.126476 10.4967 0.199465 10.3857 0.292469 10.2927L3.29165 7.29349C3.68265 6.90347 4.3147 6.90347 4.70571 7.29349C5.09671 7.6845 5.09671 8.31753 4.70571 8.70755L3.41264 10.0006H8.99898C9.552 10.0006 9.99902 10.4486 9.99902 11.0007C9.99902 11.5527 9.552 12.0007 8.99898 12.0007H3.41268L4.70575 13.2938C5.09676 13.6848 5.09676 14.3178 4.70575 14.7078C4.51074 14.9038 4.25475 15.0009 3.9987 15.0009C3.74266 15.0009 3.48666 14.9039 3.29165 14.7078L0.292469 11.7087C0.199465 11.6166 0.126476 11.5056 0.0754738 11.3826C-0.0255003 11.1387 -0.0255003 10.8627 0.0754738 10.6187Z" fill="#2871D7"/>
           <path d="M6.99912 14.0008C7.55214 14.0008 7.99916 14.4488 7.99916 15.0008V20.0011H11.9994V4.0002C11.9994 3.55918 12.2894 3.16915 12.7124 3.04216L16.1856 2.00012H7.99916V7.00041C7.99916 7.55244 7.55214 8.00045 6.99912 8.00045C6.44611 8.00045 5.99908 7.55244 5.99908 7.00041V1.00008C5.99908 0.448008 6.44611 0 6.99912 0H23C23.036 0 23.068 0.0150008 23.103 0.0189854C23.15 0.0240013 23.193 0.0319705 23.238 0.0429867C23.343 0.0699881 23.438 0.111006 23.527 0.166978C23.5489 0.180994 23.5759 0.181979 23.5969 0.197964C23.605 0.204011 23.608 0.215027 23.616 0.221027C23.725 0.307001 23.816 0.412006 23.882 0.537029C23.896 0.56403 23.899 0.593047 23.91 0.621033C23.942 0.697022 23.977 0.771041 23.989 0.855046C23.994 0.885047 23.985 0.913033 23.986 0.942051C23.987 0.962067 24 0.980068 24 1.00004V21.0011C24 21.4782 23.663 21.8882 23.196 21.9812L13.1954 23.9813C13.1304 23.9953 13.0644 24.0013 12.9994 24.0013C12.7704 24.0013 12.5454 23.9223 12.3654 23.7743C12.1344 23.5843 11.9994 23.3013 11.9994 23.0012V22.0012H6.99912C6.44611 22.0012 5.99908 21.5532 5.99908 21.0012V15.0008C5.99908 14.4488 6.44611 14.0008 6.99912 14.0008Z" fill="#2871D7"/>
         </svg>
         <span> התנתק </span>
       </button>

      </div>
    </div>
  </header>

</template>

<script>

  import FavouriteIcon from '../common/FavouriteIcon.vue'
  import Registration from '../modals/Registration.vue'
  import Login from '../modals/Login.vue'
  import ForgetPassword from '../modals/ForgetPassword.vue'
  import axios from 'axios';
  import BurgerMenu from '../common/BurgerMenu.vue'
  import Alert from './../modals/Alert.vue'
  export default {
    data: function (){
      return {

      }
    },
    components: {
      FavouriteIcon,
      Registration,
      Login,
      axios,
      BurgerMenu,
      ForgetPassword,
      Alert,
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
        axios.post('/api/auth/logout')
            .then(() => {
              this.$store.commit('user/logout' );
              this.$router.push({name: 'index'});
            })
            .catch((error) => {
              console.log(error.response.data);
            });
      },
      profile(){
        let role  = this.getData.role;
         role==='worker'? this.$router.push({name: 'requests'}):this.$router.push({name: 'projects'}) ;
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
     position: fixed;
    z-index: 3000;
    height: ceil($scale1 * 100px);//80px//
    width: 100%;
    background-color: rgba(255,255,255,1);
    display: flex;
    -ms-align-items: center;
    align-items: center;
    .h-container{
      display: flex;
      -ms-align-items: center;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 1024px){
        justify-content: flex-end;
      }
    }
  }
  .logo-wrap{
    width: ceil($scale1 * 220px);
    img{
      width: 100%;
      height: auto;
    }
    @media screen and (max-width: 1244px){
      margin-right: 100px;
    }
    @media screen and (max-width: 1024px){
      margin-right: 0;
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

    }
    @media screen and (max-width: 1024px) {
      display: none;
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
      font-size: 24px;
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
  .profileB{
    height: 34px;
    font-size: 16px;
  }
  .logout{
    span{
      color: $clr-dark;
      font-size: 21px;
    }
  }
</style>
