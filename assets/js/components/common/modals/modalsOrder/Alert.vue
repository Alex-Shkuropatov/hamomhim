<template>


    <div class="content-wrapper">
      <svg class="msgOk" width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4876 22.5569C11.2012 22.8413 10.8105 23 10.4046 23C9.99878 23 9.60808 22.8413 9.32171 22.5569L0.673149 14.0163C-0.224383 13.1302 -0.224383 11.6932 0.673149 10.8086L1.75608 9.73913C2.65389 8.85295 4.10761 8.85295 5.00514 9.73913L10.4046 15.0706L24.9949 0.664636C25.8927 -0.221545 27.3478 -0.221545 28.2439 0.664636L29.3269 1.73415C30.2244 2.62033 30.2244 4.05705 29.3269 4.94184L11.4876 22.5569Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-2.23517e-07" y1="11.5" x2="30" y2="11.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
        </defs>
      </svg>
      <h3>{{title}}</h3>
      <p>{{text}}</p>
      <button class="sendData th-btn th-btn-blue th-btn-sm " style="text-align:center" @click='close' >חזור לאתר</button>
    </div>


</template>

<script>
  import Modal from './../../Modal.vue';


  export default {
    methods: {
      close() {
        this.$store.commit('modals/alert/close');
        this.$emit('send', {
          modal : -1,
        })
      },

    },

    props: {
      title : {
        type: Number,
        required: true
      },
      text : {
        type: Number,
        required: true
      },
      buttonText : {
        type: Number,
        required: true
      }
    },
    components: {
      Modal,
    }
  }
</script>

<style scoped>
  .sendData{
    padding-right: 141px;
    margin-top: 40px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 355px;
    height: 70px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    &:hover {
      color:  #2871D7 ;
    }
  }
  .content-wrapper{
    position: relative;
    margin-bottom: 49px;
    text-align: center;
    h3{
      margin: 0;
      margin-top: 26px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
    }
    p{
      margin:0;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
    }
  }
  .msgOk{
    margin-top: 66px;
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>