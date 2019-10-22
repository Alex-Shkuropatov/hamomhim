<template>

  <div class="outer-menu">
    <input class="checkbox-toggle" type="checkbox" id="checkB" />
    <label class="hamburger burger" id="menuB">
      <div class="lines">
        <span class="line"></span>
      </div>
    </label>
    <div class="menu">

      <div class="mobileMenuWrapper" style="display: flex;flex-direction: column;">

        <div>
          <ul id="burger-menu">
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
            <div class="auth-btns"  v-if="!$store.getters['user/isLogged']">
              <button class="th-btn th-btn-blue th-btn-sm login" @click="openLogin">התחברות למערכת</button>
              <button class="th-btn th-btn-empty th-btn-sm registr" @click="openReg">הרשמה למערכת</button>
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
          </ul>
        </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
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
              this.$router.push({name: 'index'});
            })
            .catch((error) => {
              console.log(error.response.data);
            });
      },
      profile(){
        let role  = this.getData.role;
        role==='architect'?this.$router.push({name: 'projects'}) : this.$router.push({name: 'requests'})
      },
    },
    computed: {
      getData() {
        return this.$store.getters['user/data'];
      }
    },
    mounted() {
      let check = document.getElementById('checkB');
      let menu = document.getElementById('burger-menu');

      menu.addEventListener('click', function (e) {
         if(e.target.href!==null){
           check.checked = false;
         }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/vars.scss';
  .auth-btns{
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    width: 186px;
    .th-btn{
      margin-top: 10px;
      display: inline-block;
      padding-right: ceil($scale1 * 40px);
      padding-left: ceil($scale1 * 40px);
    }
    .logout{
      margin-top: 13px;
      span{
        font-size: 23px;
      }
    }
    .profileB{
      height: 43px;
      font-size: 23px;

    }
    .registr{
      border: 2px solid white;
      color: white;
    }
  }
  .profile-links{

  }
  .outer-menu {

    box-sizing: border-box;
    position: absolute;
    top: 13px;
    right: 10px;
    z-index:150;

  }
  .mobileMenu{
    width: 28.84px;
    height: 20px;
  }
  .outer-menu .checkbox-toggle {
    position: absolute;

    z-index: 20000;
    cursor: pointer;
    width: 49px;
    height: 38px;
    opacity: 0;
  }
  .outer-menu .checkbox-toggle:checked + .hamburger > div {

  }
  .outer-menu .checkbox-toggle:checked ~ .menu {
    pointer-events: auto;
    visibility: visible;
  }
  .outer-menu .checkbox-toggle:checked ~ .menu > div {
    -webkit-transform: scale(1);
    transform: scale(1);
    transition-duration: 0.75s;
  }
  .outer-menu .checkbox-toggle:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease 0.4s;
  }
  .outer-menu .hamburger {
    position: absolute;
    z-index: 1;
    width: 59px;
    height: 47px;
    padding: 0.2em 1.1em;
    border-radius: 10px;
    cursor: pointer;
    transition: box-shadow 0.4s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    -ms-align-items: center;
    align-items: center;
  }
  .outer-menu .hamburger{

    & > div {
      position: relative;
      width: 100%;
      height: 16px;
      flex: none;
      display: flex;
      align-items: center;
      // justify-content: center;
    }

    & > div:before,
    & > div:after{
      content: '';
    }
    .line,
    & > div:before,
    & > div:after{
      display: block;
      position: absolute;
      z-index: 1;
      height: 2px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    }
    & > div:before{
      top: 0;
      transition: transform .1s, top .2s .2s;//plays when menu closes
      width: 56%;
    }
    .line{
      width: 78%;
      transition: opacity 0s .1s;
    }
    & > div:after{
      bottom: 0;
      transition: transform .1s, bottom .2s .2s, width 0s .1s;//plays when menu closes
      width: 100%;
    }

  }

  //animation for hamburger
  .outer-menu .checkbox-toggle:checked + .hamburger{
    & > div:before{
      top: calc(50% - 1px);
      transform: rotate(45deg);
      width: 100%;
      transition: top .1s, transform .2s .2s;//playes when menu opens

    }
    & > div:after{
      bottom: calc(50% - 1px);
      transform: rotate(-45deg);

      transition: top .1s, transform .2s .2s, width 0s .1s;
    }
    & > div .line{
      opacity: 0;
    }
  }

  @keyframes scale{
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(2);
    }
  }

  .outer-menu .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    visibility: hidden;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    outline: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer-menu .menu > div {
    width: 100%;
    height: 100%;
    color: black;
    background: url('/static/images/mobile-menu-bg.png');
    background-size: cover;
    position: fixed;
    transition: all 0.4s ease;
    flex: none;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer-menu .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
    overflow-y: auto;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer-menu .menu > div > div > ul {
    list-style: none;
    padding: 0 1em;
    margin-top: -25px;
    display: block;
    max-height: 100vh;
  }
  .outer-menu .menu > div > div > ul > li {
    padding: 0;
    margin: 0.3em;
    font-size: 24px;
    display: block;
  }
  .outer-menu .menu > div > div > ul > li > a {
    position: relative;
    display: inline;
    cursor: pointer;
    transition: color 0.4s ease;
  }
  .outer-menu .menu > div > div > ul > li > a:hover {

  }
  .outer-menu .menu > div > div > ul > li > a:hover:after {
    width: 100%;
  }
  .outer-menu .menu > div > div > ul > li > a:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -0.15em;
    left: 0;
    width: 0;
    height: 2px;
    background: #e5e5e5;
    transition: width 0.4s ease;
  }
  .mobileMenuWrapper img{


  }
  .mobileMenuWrapper {
    ul{
      li{
        a{
          font-weight: bold;

          line-height: 65px;
          color: #FFFFFF;
          @media screen and (max-width: 1250px){
            font-size: 50px;
          }
          @media screen and (max-width: 1000px){
            font-size: 40px;
          }
          @media screen and (max-width: 650px){
            font-size: 30px;
          }
          @media screen and (max-width: 480px){
            font-size: 21px;
          }
          &:hover{
            color: #2871D7;
          }
          @media screen and (max-width:480px) {
            font-size : 30px;
          }
        }
      }
    }
  }
.logout{
  span {
    font-size: 21px;
    color: #FFFFFF;
  }
}

</style>
