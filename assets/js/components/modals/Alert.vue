<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/alert/isOpened']" @close="close">
      <div class="content-wrapper">
        <div class="wrap" v-show="icon==='success'">
        <svg class="msgOk" width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M11.4876 22.5569C11.2012 22.8413 10.8105 23 10.4046 23C9.99878 23 9.60808 22.8413 9.32171 22.5569L0.673149 14.0163C-0.224383 13.1302 -0.224383 11.6932 0.673149 10.8086L1.75608 9.73913C2.65389 8.85295 4.10761 8.85295 5.00514 9.73913L10.4046 15.0706L24.9949 0.664636C25.8927 -0.221545 27.3478 -0.221545 28.2439 0.664636L29.3269 1.73415C30.2244 2.62033 30.2244 4.05705 29.3269 4.94184L11.4876 22.5569Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="-2.23517e-07" y1="11.5" x2="30" y2="11.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
          </defs>
        </svg>
        </div>
        <div class="wrap" v-show="icon==='fail'">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.493 2.95448L9.94806 7.4999L14.493 12.0451C15.169 12.7214 15.169 13.8169 14.493 14.4932C14.1552 14.831 13.7123 15 13.2697 15C12.8263 15 12.3834 14.8312 12.0459 14.4932L7.50002 9.94748L2.95446 14.4932C2.61673 14.8309 2.17383 15 1.73081 15C1.28791 15 0.845321 14.8312 0.507283 14.4932C-0.16875 13.8172 -0.16875 12.7216 0.507283 12.0451L5.05207 7.49985L0.507025 2.95448C-0.169008 2.27845 -0.169008 1.18268 0.507025 0.506641C1.18293 -0.16888 2.27804 -0.16888 2.95421 0.506641L7.49998 5.05206L12.0454 0.506641C12.7217 -0.16888 13.8169 -0.16888 14.4927 0.506641C15.169 1.18268 15.169 2.27845 14.493 2.95448Z" fill="#EB5757"/>
          </svg>
        </div>

        <h3>{{title}}</h3>
        <p>{{text}}</p>
        <button class="sendData th-btn th-btn-blue th-btn-sm " style="text-align:center" @click='close' >חזור לאתר</button>
      </div>
    </modal>
  </transition>
</template>

<script>
  import Modal from './../common/Modal';


  export default {
    methods: {
      close() {
        this.$store.commit('modals/alert/close');

      }
    },
    props: {
      title : {
        type: String,
        required: true
      },
      text : {
        type: String,
        required: true
      },
      buttonText : {
        type: String,
        required: true
      },
      icon: {
        type: String,
      }
    },
    components: {
      Modal,
    }
  }
</script>

<style lang="scss" scoped>
  .sendData{
    padding-right: 119px;
    margin-top: 40px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 355px;
    height: 70px;

    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    &:hover {
      color:  #2871D7 ;
    }

    @media screen and (max-width: 900px) {
      display: unset;
      padding-right: 55px;
    }
    @media screen and (max-width: 480px) {
      width: 289px;
      height: 62px;

    }
  }

  .content-wrapper{
    position: relative;
    margin-bottom: 49px;
    text-align: center;
    width: 555px;
    @media screen and (max-width: 900px) {
      width: 440px;
    }
    @media screen and (max-width: 480px) {
      width: 310px;
    }
    h3{
      margin: 0;
      margin-top: 26px;
      font-weight: 800;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      color: #2871D7;
      @media screen and (max-width: 600px) {
        font-size: 30px;
      }
    }
    p{
      margin:0;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #828282;
      @media screen and (max-width: 600px) {
        font-size: 25px;
      }
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
