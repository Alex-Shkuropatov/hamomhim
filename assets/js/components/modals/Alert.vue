<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/alert/isOpened']" @close="close">

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
