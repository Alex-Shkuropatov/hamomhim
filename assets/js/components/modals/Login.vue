<template>
  <div class="wrapper">
  <transition v-bind:name="animaStyle">

  <modal v-if="$store.getters['modals/login/isOpened']" @close="closeB"  >

  <first-modal  v-if="modalL===0" @send='onFirst'  />

    <second-modal v-if="modalL===1" v-bind="{role:this.role}"  @send='onSecond' />

  </modal>

  </transition>
    <transition v-bind:name="animaStyle">
      <code-phone  v-if="$store.getters['modals/phoneCode/isOpened']" />
    </transition>
  </div>
</template>

<script>
  import Modal from './../common/Modal';
  import FirstModal from './modalsLogin/FirstModal.vue'
  import SecondModal from './modalsLogin/SecondModal.vue'
  import codePhone from './PhoneCode.vue'
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
              let res = response.data;
              if (response.data.access_token){
                this.$store.commit('user/auth', response.data.access_token );  //Login success
                this.$store.commit('user/saveData' , data);
                axios.get('/api/auth/user')
                    .then((response)=>{
                      console.log('then');
                      this.$store.commit('user/saveData' , response.data);
                    })
                    .then(() => {
                      if(this.$store.getters['user/isWorker']){
                        this.$router.push({name: 'requests'});
                      }
                      else{
                        this.$router.push({name: 'projects'});
                      }
                    })
                    .catch((error) => {
                      console.log('1');

                      console.log(error);
                    });

              }else if (response.data.error === 'User phone is not approved'){   //User dont approved by phone code
                console.log('2');
                this.$store.commit('modals/phoneCode/set', data);
                this.$store.commit('modals/phoneCode/open');
                this.$store.commit('modals/login/close');

              }
              else if(response.data.error === 'The user is not approved by the administrator.' ) {  //User dont approved by admin
                this.$store.commit('modals/alert/saveData', {
                  success: res.success,
                  text: 'המשתמש אינו מאושר על ידי מנהל המערכת.',
                });
                this.$store.commit('modals/alert/open');
                this.$store.commit('modals/login/close');
              }

            })
            .catch((error) => {
              console.log('3');
              console.log(error.response );
              this.$store.commit('modals/alert/saveData', {
                success: false,
                text:  'לא מורשה',
              });
              this.$store.commit('modals/login/close');
              this.$store.commit('modals/alert/open');

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
      codePhone,
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
