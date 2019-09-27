<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/forgetPassword/isOpened']" @close="closeB"  >

  <first-modal  v-if="modalL===0" v-bind="getRole" @onSend="onFirst"   />

    <second-modal v-if="modalL===1"  @onSend="onSecond"   />

    <third-modal v-if="modalL===2"  @onSend="onThird"  />

    <alert v-if="modalL===3" @send="onFourth" v-bind="modalContent" />

  </modal>
  </transition>

</template>

<script>
  import Modal from './../common/Modal';
  import FirstModal from './forgetPassword/FirstModal.vue'
  import SecondModal from './forgetPassword/SecondModal.vue'
  import ThirdModal from  './forgetPassword/ThirdModal.vue'
  import Alert from './modalsProject/Alert.vue'
  export default {
    data: function(){
      return {
        modalL:0,
        animaStyle: 'slide-fade',
        user: {
        token: '',
        mail: '',
        code: '',
        role: '',
        },
        modalContent: {
          title: 'Your password was changed',
          text: '',
          buttonText: 'רתאל רוזח',
        },
      }
    },
    computed: {
        getRole(){
            return  this.$store.getters['modals/forgetPassword/getRole'];
        },
    },
    methods: {
      closeB() {
        this.$store.commit('modals/forgetPassword/close');
        this.modalL = 0;
      },
      onFirst(data){
        this.user.mail = data.mail;
        this.modalL++;
      },
      onSecond(data){
        this.user.code = data.code;
        this.modalL++;
      },
      onThird(data){
        this.user.password = data.password;
        this.modalL++;
      },
      onFourth(){
        this.modalL = 0;
        this.$store.commit('modals/forgetPassword/close');
      }
    },
    components: {
      Modal,
      FirstModal,
      SecondModal,
      ThirdModal,
      Alert
    },
    created(){
      this.animaStyle='slide-fade';
    },
    destroyed() {
      this.animaStyle='';
      this.$store.commit('modals/reg/close');
    }
  }
</script>

<style  lang="scss" scoped>


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
