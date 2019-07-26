<template>
  <div class="project-item">
    <svg width="38" class="close" height="38" viewBox="0 0 38 38"  xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6123 0.793945C8.4616 0.793945 0.204102 9.04411 0.204102 19.1858C0.204102 29.3274 8.4616 37.5776 18.6123 37.5776C28.7629 37.5776 37.0204 29.3274 37.0204 19.1858C37.0204 9.04411 28.7629 0.793945 18.6123 0.793945ZM25.3912 23.7913C25.9909 24.3907 25.9909 25.3592 25.3912 25.9586C25.092 26.2575 24.6994 26.4077 24.3064 26.4077C23.9137 26.4077 23.521 26.2575 23.2219 25.9586L18.6123 21.3528L14.0026 25.9586C13.7035 26.2575 13.3108 26.4077 12.9181 26.4077C12.5252 26.4077 12.1325 26.2575 11.8334 25.9586C11.2337 25.3592 11.2337 24.3907 11.8334 23.7913L16.4433 19.1858L11.8334 14.5802C11.2337 13.9808 11.2337 13.0123 11.8334 12.4129C12.4333 11.8137 13.4027 11.8137 14.0026 12.4129L18.6123 17.0187L23.2219 12.4129C23.8219 11.8137 24.7912 11.8137 25.3912 12.4129C25.9909 13.0123 25.9909 13.9808 25.3912 14.5802L20.7813 19.1858L25.3912 23.7913Z" fill="url(#paint0_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0.204101" y1="19.1858" x2="37.0204" y2="19.1858" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2871D7"/>
          <stop offset="1" stop-color="#3269B6"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="content-wrapper">
      <div class="thumb">
        <img :src="imgSrc" alt="">
      </div>
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
      <a :href="url" class="th-btn th-btn-empty th-btn-sm">קרא את הפוסט הזה</a>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      imgSrc: {
        default: '',
        type: String,
      },
      title: {
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
      url: {
        default: '#',
        type: String,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project-item{

    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;
    width: 451px;
    height: 629px;
    @media screen and (max-width:1700px){
      width: 400px;
      height: 600px;
    }
    .close{
      left: 5px;
      top: 7px;
      position: absolute;
      z-index: 2;
       opacity: 1;
      transition: all 0.1s ease-out;

      &:hover {
        opacity: 0.8;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        path {

        }
      }

        }
    .content-wrapper{
      padding: 32px 27px 0 27px;

    img{
      pointer-events: none;
      width: 100%;
    }
    .title{
      margin: 0;
      margin-top: 18px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: right;
      letter-spacing: -0.02em;
      color: #4F4F4F;
    }
      .description{
        margin-top: 10px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-align: right;
        color: #4F4F4F;
      }
    .meta{
      color: #828282;
    }
      a{
        margin-top: 14px;
      }
      button{
        width: 167.51px;
        height: 36.78px;
      }
  }
  }

</style>