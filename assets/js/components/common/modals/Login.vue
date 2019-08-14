<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/login/isOpened']" @close="closeB"  >

  <first-modal  v-if="modalL===0" @send='onFirst'  />

  </modal>
  </transition>

</template>

<script>
  import Modal from './../Modal';
  import FirstModal from './modalsLogin/FirstModal.vue'
  import axios from 'axios';

  export default {
    data: function(){
      return {
        modalL:0,
        animaStyle: 'slide-fade',
        user: {
        token: ''
        },
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
      closeProject(data){
        this.$store.commit('modals/login/open');
        this.modalL = data.modal;
      },
      onFirst (data) {
        console.log(data);
        axios.post('/api/auth/login', data)
            .then((response) => {

              this.$store.commit('user/auth', response.data.access_token );
              this.$store.commit('user/saveData' , data);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        this.$store.commit('modals/login/close');
      },
    },
    components: {
      Modal,
      FirstModal,
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
  .first-message{
    font-style: normal;
    line-height: 40px;
    letter-spacing: -0.02em;
    .title{

      font-weight: bold;
      font-size: 36px;
      text-align: center;
      color: #333333;
      margin: 0;
      margin-top: 20px;
    }
    .projectName{
      font-weight: normal;
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
      margin-top: 5px;
    }
    form {
      input{
        padding-right: 15px;
        margin-top: 10px;
        background: #FFFFFF;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
      }
      textarea{
        padding: 10px 20px 0 0;
        margin-top: 15px;
        background: #FFFFFF;
        resize: none;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 350px;
        height: 250px;
      }
    }
   .buttons-wrapper{
     display: flex;
     flex-direction: row;
     margin-top: 30px;
     button{
       color: white;
       width: 250px;
       height: 50px;
       &:hover  {
         color:black;
       }
     }
     .closeB{
       margin-right: 10px;
       background: #E0E0E0;
       border-radius: 50px;
     }
     .saveB{
       margin-left: 10px;
       background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
       border-radius: 50px;
     }
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