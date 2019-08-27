<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/login/isOpened']" @close="closeB"  >

  <first-modal  v-if="modalL===0" @send='onFirst'  />

    <second-modal v-if="modalL===1"  @send='onSecond' />

  </modal>
  </transition>

</template>

<script>
  import Modal from './../Modal';
  import FirstModal from './modalsLogin/FirstModal.vue'
  import SecondModal from './modalsLogin/SecondModal.vue'
  import axios from 'axios';

  export default {
    data: function(){
      return {
        modalL:0,
        animaStyle: 'slide-fade',
        user: {
        token: ''
        },
        role: '',
        modalContent: {
          title: 'החלצהב עצוב תומיאה',
          text: 'תכרעמב רשואמו תמוא ךלש ןובשחה',
          buttonText: 'רתאל רוזח',
        },
      }
    },
    methods: {
      closeB() {
        this.$store.commit('modals/login/close');
        this.modalL = 0;
      },
      onFirst (data) {
        this.role = data.role;
        this.modalL=data.modal;
      },
      onSecond (data) {
        console.log(data);
        data.role = this.role;
        axios.post('/api/auth/login', data)
            .then((response) => {

              this.$store.commit('user/auth', response.data.access_token );
              this.$store.commit('user/saveData' , data);
              axios.get('/api/auth/user')
                  .then((response)=>{
                    console.log(response.data);
                    this.$store.commit('user/saveData' , response.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
            })
            .catch((error) => {
              console.log(error.response.data);
            });

        this.$store.commit('modals/login/close');
        this.modalL=0;
      },
    },
    components: {
      Modal,
      FirstModal,
      SecondModal,
      axios,


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
    margin-bottom: 49px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Assistant;
    .title{
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
        text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
    }
    p{
      margin: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

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