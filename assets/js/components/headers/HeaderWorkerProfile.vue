<template>

  <header class="header-n" ref="navMenu"  >
    <div class="nav-bar"  v-bind:class="{ position: flag }">
      <div class="social-links">
        <a href="#" class="whatsapp-wrap">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" class="youtube-wrap">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#" class="facebook-wrap">
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
      <div class="element-wrapper">
        <div class="pages-links">
          <ul class="desktop-menu"  v-bind:style="[ flag ? 'color: #333333' : 'color: white' ]" >
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
            <img :src=" flag ? '/static/images/logo/logo-blue.png' : '/static/images/logo/logo-white.png'" alt="">
          </router-link>
        </a>
      </div>
    </div>
    <div class="info-wrapper" v-bind:class="{marginT : getData.role==='worker'}" >
      <div class="title">  בולואש ןויצ
        <favourite-icon
              v-if="getData.role==='architect'"
        />

      </div>
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
      return {
        flag: false,
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
      checkCord(){
        let coordY =  this.$refs.navMenu.getBoundingClientRect().y ; // delete event listener
        if(coordY<-65 && this.flag === false){
         this.flag = true;
        }  if (coordY>-65){
          this.flag = false;
       }
      }
    },
    destroyed() {
      document.removeEventListener('scroll', this.checkCord, false);
    },
    mounted() {
      document.addEventListener('scroll',  this.checkCord)
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
    a{
      font-size: 25px;
      color: white;
    }
    .youtube-wrap{
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .nav-bar{
    z-index: 99999999999999999;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 43px 81px 0 81px;
    position: fixed;
    width: 100%;
    transition: all 0.5s ease-out;
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
  .position{
    transition: all .4s ease;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    background: white;
    padding: 12px 81px 5px 81px;
    font-size: 24px;
    line-height: 65px;
    color: #333333;
    .element-wrapper{
      .pages-links{
        .desktop-menu{
          .menu-item{
            a{
              color: #333333;
            }
          }
        }
      }
      .logo-wrap{
        margin-bottom: 15px;
      }
    }
    .social-links{
      a{
        color: #333333;
        i {
        }
      }
    }
  }
.marginT{
  margin-top: 300px;
}

</style>
