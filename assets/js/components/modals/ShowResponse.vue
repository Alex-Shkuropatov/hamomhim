<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showOrder/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">Response</h2>

      </div>
    </modal>
  </transition>
</template>

<script>
  import Modal from '../common/Modal';


  export default {
    data() {
      return {

      }
    },
    components: {
      Modal,

    },

    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

  .content-wrapper {
    position: relative;
    margin-bottom: 49px;
    text-align: center;
    width: 600px;
    @media screen and (max-width: 900px) {
      width: 440px;
    }
    @media screen and (max-width: 480px) {
      width: 310px;
    }

    .title {
      font-weight: bold;
      font-size: 40px;
      text-align: center;
      color: #2871D7;
      margin: 0;
    }

    .description {
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
    }
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
