<template>

  <header class="header-n">
    <div class="nav-bar" ref="navMenu">
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

  import FavouriteIcon from '../common/FavouriteIcon.vue'
  import Registration from '../modals/Registration.vue'
  import Login from '../modals/Login.vue'
  import axios from 'axios';
  import BurgerMenu from '../common/BurgerMenu.vue'
  export default {
    data: function () {
      return {}
    },
    components: {
      FavouriteIcon,
      Registration,
      Login,
      axios,
      BurgerMenu
    },
    methods: {
      openReg(e) {
        e.preventDefault();
        this.$store.commit('modals/reg/open');
      },
      openLogin(e) {
        e.preventDefault();
        this.$store.commit('modals/login/open');
      },
      logout(e) {
        axios.get('/api/auth/logout')
            .then(() => {
              this.$store.commit('user/logout');
            })
            .catch((error) => {
              console.log(error.response.data);
            });
      },
      profile() {
        let role = this.getData.role;
        role === 'worker' ? this.$router.push({name: 'requests'}) : this.$router.push({name: 'projects'});
      },
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

  .header-n{
    background-image: url(/static/images/profile/header-image.png);
    height: 814px;
    width: 100%;
    -ms-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
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
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 43px 81px 0 81px;
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
  }
  .contact-b{
    margin-top: 20px ;
    font-weight: bold;
    font-size: 24px;
    width: 257.89px;
    height: 76.37px ;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: #30588E;
    border-radius: 50px;
    &:hover{
      color: black;
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
</style>
