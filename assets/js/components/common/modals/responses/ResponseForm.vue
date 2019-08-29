<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/responses/responseForm/isOpened']" @close="close">
    <div class="content-wrapper third-message">
        <h2 class="title">טקייורפה םש</h2>
        <drop-down></drop-down>
    </div>
    </modal>
    </transition>
</template>

<script>
import Modal from '../../Modal.vue'
import DropDown from '../../DropDown.vue'

export default {
  methods: {
    close() {
      this.$store.commit('modals/responses/responseForm/close');
    },
  },
  components: {
    Modal
  },
  data: function () {
    return {
      catSelect: {
        value: '',
        placeholder : '',
        items: [],
        labelKey: 'name',
      }
    }
  },
  mounted(){
    // this.catSelect.items = 
  },
  destroyed(){

  },
}
</script>

<style lang="scss" scoped>


    .content-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-bottom: 20px;
        width: 600px;
        @media screen and (max-width: 650px) {
            width: 450px;
        }
        @media screen and (max-width: 480px) {
            width: 315px;
        }
        .title{
            margin:0;
            margin-top: 27px;
            font-family: Assistant;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #333333;
        }

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
