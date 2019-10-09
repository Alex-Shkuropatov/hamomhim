<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/reg/isOpened']" @close="closeB"  >

  <first-modal  v-if="modal===0" @send='onFirst'  />

  <second-modal  v-if="modal===1" v-bind="user" @send='onSecond' />

    <third-modal v-if="modal===2" v-bind="code"  @send='onThird' />

  <alert v-if="modal===3" v-bind="modalContent"  @send='onFourth'   />

  </modal>
  </transition>

</template>

<script>
  import Modal from './../common/Modal';
  import FirstModal from './modalsRegister/FirstModal.vue'
  import SecondModal from './modalsRegister/SecondModal.vue'
  import ThirdModal from './modalsRegister/TihirdModal.vue'
  import  Alert from './modalsProject/Alert.vue'
  import axios from 'axios';
  export default {
    data: function(){
      return {
        modal:0,
        animaStyle: 'slide-fade',
        user: {
          name: '',
          mail: '',
          city: '',
          adress: '',
          company: '',
          fax: '',
          workArea: '',
          phone: '',
          category:'',
          pass: '',
          role: '',
        },
        code:{
          flag: false,
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
        this.$store.commit('modals/reg/close');
        this.modal = 0;
        this.code.flag = false;
      },
      closeProject(data){
        this.$store.commit('modals/reg/open');
        this.modal = data.modal;
      },
      onFirst (data) {
        this.user.role = data.role;
        this.modal++;
      },
      onSecond (data) {
        data.role = this.user.role;
        this.user.email = data.email  ;
       this.modal++;
       if ( data.role==='worker'){
         axios.post('/api/auth/signupWorker', data)
             .then((response) => {
               console.log(response);
             })
             .catch((error) => {
               console.log(error.response.data);
             });
       } else {
           axios.post('/api/auth/signupArchitect', data)
               .then((response) => {
                 console.log(response);
               })
               .catch((error) => {
                 alert(error.data.message);
                 console.log(error.response.data);
               });
       }
      },
      onThird(data){

        console.log(data.phoneCode);
        axios.post('/api/auth/confirmPhone',{email:this.user.email, role: this.user.role, code: data.phoneCode})
            .then((response)=>{
             if (response.data.success){
               this.code.flag = false;
               this.modal++;
             } else {
               this.code.flag = true;
             }
              console.log(response);
            }).catch((error)=>{
              console.log(error);

        })
      },
      onFourth(data){
        this.modal = data.modal;
        this.$store.commit('modals/reg/close');
      },
      PrevModal(){
         this.modal= 0;
      },

    },
    components: {
      Modal,
      FirstModal,
      SecondModal,
      axios,
      Alert,
      ThirdModal

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
    width: 500px;
    margin-bottom: 49px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Assistant;
    @media screen  and (max-width: 550px){
      width:unset;
    }
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
