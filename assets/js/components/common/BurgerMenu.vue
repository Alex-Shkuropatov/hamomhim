<template>

  <div class="outer-menu">
    <input class="checkbox-toggle" type="checkbox" id="checkB" />
    <label class="hamburger burger" id="menuB">
      <div></div>
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
          </ul>
        </div>
        </div>
      </div>
    </div>



</template>

<script>
  export default {
    methods: {

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
    .th-btn{
      padding-right: ceil($scale1 * 40px);
      padding-left: ceil($scale1 * 40px);
    }
    .profile-links{

    }
  }
  .outer-menu {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: 36px;
    right: 10px;
    z-index:2000;
@media  screen and (max-width: 1240px) {
  display: block;
}
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
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  .outer-menu .checkbox-toggle:checked + .hamburger > div:before,
  .outer-menu .checkbox-toggle:checked + .hamburger > div:after {
    top: 0;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .outer-menu .checkbox-toggle:checked + .hamburger > div:after {
    opacity: 0;
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
  .outer-menu .checkbox-toggle:hover + .hamburger {
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  }
  .outer-menu .checkbox-toggle:checked:hover + .hamburger > div {
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  }
  .outer-menu .hamburger {
    position: absolute;


    z-index: 1;
    width: 59px;
    height: 47px;
    padding: 0.2em 0.8em;
    border-radius: 10px;
    cursor: pointer;
    transition: box-shadow 0.4s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  }
  .outer-menu .hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #FEFEFE;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer-menu .hamburger > div:before,
  .outer-menu .hamburger > div:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: inherit;
    transition: all 0.4s ease;
  }
  .outer-menu .hamburger > div:after {
    top: 10px;
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
    background: white   ;
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
    margin: 0;
    display: block;
    max-height: 100vh;
  }
  .outer-menu .menu > div > div > ul > li {
    padding: 0;
    margin: 1em;
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
          font-size: 50px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #333333;
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



</style>