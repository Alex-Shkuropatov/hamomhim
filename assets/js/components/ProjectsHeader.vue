<template>
  <div class="page-subhead" :style="styles">
    <div class="head-container">
      <img :src="user.imageProfile" class="userImage" alt="user-image">
      <div class="head-txt-container">
        <div class="about-info">
          <div class="th-heading title">{{user.title}}</div>
          <div class="th-heading position">{{user.position}}</div>
        </div>
        <hr>
        <div class="summary-info">
          <div class="sum" ><svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.13511 14.4287C8.92198 14.4287 9.68256 14.3779 10.4023 14.2832V6.39439C9.68263 6.29985 8.92198 6.24902 8.13511 6.24902C3.64222 6.24902 0 7.90092 0 9.93872V10.7389C0 12.7766 3.64222 14.4287 8.13511 14.4287Z" fill="white"/>
            <path d="M8.13511 18.5474C8.92198 18.5474 9.68256 18.4965 10.4023 18.4021V16.0897C9.68242 16.1842 8.92219 16.2358 8.13511 16.2358C4.2133 16.2358 0.939977 14.977 0.171095 13.3018C0.0591233 13.5458 0 13.7984 0 14.0575V14.8577C0 16.8955 3.64222 18.5474 8.13511 18.5474Z" fill="white"/>
            <path d="M10.4023 20.3895V20.2098C9.68242 20.3043 8.92218 20.3559 8.13511 20.3559C4.2133 20.3559 0.939977 19.0971 0.171095 17.4219C0.0591233 17.6658 0 17.9185 0 18.1775V18.9777C0 21.0156 3.64222 22.6675 8.13511 22.6675C9.0336 22.6675 9.89779 22.6012 10.7059 22.4792C10.5056 22.0695 10.4023 21.6373 10.4023 21.1897V20.3895Z" fill="white"/>
            <path d="M19.8649 0C15.372 0 11.7298 1.6519 11.7298 3.6897V4.48989C11.7298 6.52769 15.372 8.17959 19.8649 8.17959C24.3577 8.17959 28 6.52769 28 4.48989V3.6897C28 1.6519 24.3577 0 19.8649 0Z" fill="white"/>
            <path d="M19.8649 9.98771C15.9431 9.98771 12.6698 8.72903 11.9009 7.05371C11.7889 7.29766 11.7298 7.55033 11.7298 7.80942V8.6096C11.7298 10.6474 15.372 12.2993 19.8649 12.2993C24.3577 12.2993 28 10.6474 28 8.6096V7.80942C28 7.55033 27.9409 7.29766 27.8289 7.05371C27.06 8.72903 23.7867 9.98771 19.8649 9.98771Z" fill="white"/>
            <path d="M19.8649 14.1059C15.9431 14.1059 12.6698 12.8471 11.9009 11.1719C11.7889 11.4158 11.7298 11.6685 11.7298 11.9276V12.7278C11.7298 14.7656 15.372 16.4175 19.8649 16.4175C24.3577 16.4175 28 14.7656 28 12.7278V11.9276C28 11.6685 27.9409 11.4158 27.8289 11.1719C27.06 12.8472 23.7867 14.1059 19.8649 14.1059Z" fill="white"/>
            <path d="M19.8649 18.4486C15.9431 18.4486 12.6698 17.1899 11.9009 15.5146C11.7889 15.7587 11.7298 16.0113 11.7298 16.2703V17.0705C11.7298 19.1083 15.372 20.7602 19.8649 20.7602C24.3577 20.7602 28 19.1083 28 17.0705V16.2703C28 16.0113 27.9409 15.7585 27.8289 15.5146C27.06 17.1898 23.7867 18.4486 19.8649 18.4486Z" fill="white"/>
            <path d="M19.8649 22.5678C15.9431 22.5678 12.6698 21.3091 11.9009 19.6339C11.7889 19.8779 11.7298 20.1306 11.7298 20.3895V21.1897C11.7298 23.2275 15.372 24.8794 19.8649 24.8794C24.3577 24.8794 28 23.2275 28 21.1897V20.3894C28 20.1304 27.9409 19.8777 27.8289 19.6338C27.06 21.309 23.7867 22.5678 19.8649 22.5678Z" fill="white"/>
          </svg> <span>{{user.valueText}}</span>{{user.value}}
          </div>
          <div class="sum valet"><svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.54308 5.11639L17.7054 2.06957L17.1142 0.874731C16.7275 0.0980891 15.7842 -0.22263 15.0075 0.164119L5.01495 5.11639H6.54308Z" fill="white"/>
            <path d="M21.1703 2.15723C21.0319 2.15723 20.8936 2.17609 20.7552 2.21382L18.1329 2.93072L10.1243 5.11601H19.2145H23.1763L22.6858 3.31747C22.4972 2.61629 21.862 2.15723 21.1703 2.15723Z" fill="white"/>
            <path d="M24.8148 6.21777H24.4564H23.969H23.4816H19.7619H6.09366H4.3014H2.79214H2.5123H1.57529C1.0785 6.21777 0.635149 6.44731 0.345873 6.8089C0.213812 6.97555 0.113195 7.16735 0.0565974 7.37802C0.0220101 7.51008 0 7.64843 0 7.78992V7.97858V9.77083V25.3068C0 26.1747 0.704323 26.879 1.57215 26.879H24.8117C25.6795 26.879 26.3838 26.1747 26.3838 25.3068V20.9205H17.0547C15.58 20.9205 14.382 19.7225 14.382 18.2479V16.8078V16.3204V15.833V14.7514C14.382 14.0282 14.6713 13.3711 15.1398 12.89C15.5549 12.4624 16.1114 12.1731 16.734 12.1008C16.8377 12.0882 16.9446 12.0819 17.0515 12.0819H25.0758H25.5632H26.0505H26.3838V7.78992C26.387 6.9221 25.6826 6.21777 24.8148 6.21777Z" fill="white"/>
            <path d="M27.4874 13.5837C27.3301 13.4391 27.1446 13.3291 26.9371 13.2567C26.7767 13.2033 26.607 13.1719 26.4277 13.1719H26.3869H26.3554H25.868H24.1104H17.0546C16.1867 13.1719 15.4824 13.8762 15.4824 14.744V15.5269V16.0143V16.5017V18.2436C15.4824 19.1114 16.1867 19.8158 17.0546 19.8158H26.3869H26.4277C26.607 19.8158 26.7768 19.7843 26.9371 19.7309C27.1446 19.6617 27.3301 19.5485 27.4874 19.4038C27.8018 19.1177 27.9999 18.7027 27.9999 18.2436V14.744C27.9999 14.2849 27.8018 13.8698 27.4874 13.5837ZM20.3372 16.8067C20.3372 17.2406 19.9851 17.5927 19.5511 17.5927H19.0292C18.5953 17.5927 18.2431 17.2406 18.2431 16.8067V16.2847C18.2431 16.0332 18.3595 15.8099 18.545 15.6684C18.6802 15.5646 18.8469 15.4986 19.0292 15.4986H19.1613H19.5511C19.9851 15.4986 20.3372 15.8508 20.3372 16.2847V16.8067Z" fill="white"/>
          </svg>
            <span>{{user.valueText}}</span> {{user.valet}}</div>
        </div>
      </div>

    </div>
    <div class="nav">
      <ul class="nav-links" >
        <a href="#"> <li>פרויקטים</li> </a>
        <hr>
        <a href="#"> <li>פרויקטים שבוצעו</li>  </a>
        <hr>
        <a href="#"> <li>הגדרות חשבון</li> </a>
        <hr>
        <a href="#"> <li> קבלנים מועדפים</li> </a>
        <hr>
        <a href="#"><li>
          התנתק
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.0754738 10.6187C0.126476 10.4967 0.199465 10.3857 0.292469 10.2927L3.29165 7.29349C3.68265 6.90347 4.3147 6.90347 4.70571 7.29349C5.09671 7.6845 5.09671 8.31753 4.70571 8.70755L3.41264 10.0006H8.99898C9.552 10.0006 9.99902 10.4486 9.99902 11.0007C9.99902 11.5527 9.552 12.0007 8.99898 12.0007H3.41268L4.70575 13.2938C5.09676 13.6848 5.09676 14.3178 4.70575 14.7078C4.51074 14.9038 4.25475 15.0009 3.9987 15.0009C3.74266 15.0009 3.48666 14.9039 3.29165 14.7078L0.292469 11.7087C0.199465 11.6166 0.126476 11.5056 0.0754738 11.3826C-0.0255003 11.1387 -0.0255003 10.8627 0.0754738 10.6187Z" fill="white"/>
          <path d="M6.99912 14.0008C7.55214 14.0008 7.99916 14.4488 7.99916 15.0008V20.0011H11.9994V4.0002C11.9994 3.55918 12.2894 3.16915 12.7124 3.04216L16.1856 2.00012H7.99916V7.00041C7.99916 7.55244 7.55214 8.00045 6.99912 8.00045C6.44611 8.00045 5.99908 7.55244 5.99908 7.00041V1.00008C5.99908 0.448008 6.44611 0 6.99912 0H23C23.036 0 23.068 0.0150008 23.103 0.0189854C23.15 0.0240013 23.193 0.0319705 23.238 0.0429867C23.343 0.0699881 23.438 0.111006 23.527 0.166978C23.5489 0.180994 23.5759 0.181979 23.5969 0.197964C23.605 0.204011 23.608 0.215027 23.616 0.221027C23.725 0.307001 23.816 0.412006 23.882 0.537029C23.896 0.56403 23.899 0.593047 23.91 0.621033C23.942 0.697022 23.977 0.771041 23.989 0.855046C23.994 0.885047 23.985 0.913033 23.986 0.942051C23.987 0.962067 24 0.980068 24 1.00004V21.0011C24 21.4782 23.663 21.8882 23.196 21.9812L13.1954 23.9813C13.1304 23.9953 13.0644 24.0013 12.9994 24.0013C12.7704 24.0013 12.5454 23.9223 12.3654 23.7743C12.1344 23.5843 11.9994 23.3013 11.9994 23.0012V22.0012H6.99912C6.44611 22.0012 5.99908 21.5532 5.99908 21.0012V15.0008C5.99908 14.4488 6.44611 14.0008 6.99912 14.0008Z" fill="white"/>
        </svg>

        </li> </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
        imageBg : '/static/images/bg-header-projects.png',
        user : {
          title : 'שמתשמ םש',
          imageProfile: '/static/images/profile/defPicCutted.png',
          position: 'האדר שייכל',
          valet: ' $235 ',
          value : '$235',
          valueText: 'לכייש רדאה:'
        }
    }
  }
  ,
  computed: {
    styles() {
      return {
        backgroundImage: 'url('+this.imageBg+')',
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.page-subhead{
  position: relative;
  height:451px;
  width: 100%;
  display: flex;

  @media screen and (max-width:1605px ){
    height: 400px;
  }
  flex-direction: row;
  justify-content: flex-start;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  .head-container{

    height: 317px;
    margin-right: 358px;
    width: unset;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    @media screen and (max-width:1605px ){

    }
    @media screen and (max-width:1440px ){
      margin: 0 auto;
    }
    .userImage{
      pointer-events: none;
    }
    .title{
      pointer-events:none;
      margin: 0;
      margin-bottom: -27px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 65px;
      text-align: right;
      color: #FFFFFF;
    }
    .position{
      pointer-events:none;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 65px;
      text-align: right;
      color: #F2F2F2;
    }
  }
}
.head-txt-container{
  margin-right: 13px;
  hr{
    margin-left: 15px;
    width: 185px;
    height: 0px;
    color: white;
    border: 1px solid #FFFFFF;
    transform: rotate(-180deg);
  }
  .about-info{
    margin-bottom: -36px;
  }
  .summary-info{
    .sum{
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 65px;
      margin-top: -17px;
      text-align: center;
      display: flex;
      align-items: center;
      color: #F2F2F2;
      span{
        font-weight: normal;
      }
      svg{
        margin-left: 10px;
      }
    }
    .valet{
      margin-top: -24px;
    }
  }
}
.nav{
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  .nav-links{
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
     width: 1000px;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;

a{

  li{
    list-style-type: none;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 65px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    svg {
      margin-right: 12px;
    }
      @media screen and (max-width:1605px ){
        font-size: 20px;
        line-height: 45px;
      }
  }
  &:hover{
    text-decoration: underline;
  }
}
    hr{
      width: 46px;
      border: 1px solid #FFFFFF;
      transform: rotate(90deg);
    }
    @media screen and (max-width:1605px){
      width: 900px;
    }
  }
}

.userImage{

  width: 200px;
  height: 200px;
  border-radius: 50%;
}

</style>
