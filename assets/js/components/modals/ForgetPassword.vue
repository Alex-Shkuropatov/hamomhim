<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/forgetPassword/isOpened']" @close="closeB"  >

  <first-modal  v-if="modalL===0" v-bind="getRole" @onSend="onFirst"   />

    <second-modal v-if="modalL===1" v-bind="user"  @onSend="onSecond"   />

    <third-modal v-if="modalL===2" v-bind="user"  @onSend="onThird"  />

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
        email: '',
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
        if(data.success){
          this.user.email = data.email;
          this.user.role = data.role;
          this.modalL++;
        }
      },
      onSecond(data){
       if(data.success){
         this.user.code = data.code;
         this.modalL++;
       }

      },
      onThird(data){
        this.user.password = data.password;
        if(data.success){
          axios.post('/api/auth/changePasswordUnauthorized',{role:this.user.role,token:this.user.code,email:this.user.email, new_password: data.password})
              .then((response)=>{
                console.log(response);
                this.modalL++;
              }).catch((error)=>{
            console.log(error);
          })
        }
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
