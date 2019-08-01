<template>
  <transition v-bind:name="animaStyle">
  <modal v-if="$store.getters['modals/alert/isOpened']" @close="closeB"  >

    <first-modal  v-if="modalCount===0" @send='onFirst' v-bind="prop" />

    <second-modal v-else-if="modalCount===1" @send='onSecond' @back="PrevModal"  v-bind="prop" />

    <third-modal v-else-if="modalCount===2" @back="PrevModal" @send='onThird'  v-bind="prop" />

    <fourth-modal v-else-if="modalCount===3" @back="PrevModal" @send='onFourth'  v-bind="prop"/>

    <alert-modal  v-else-if="modalCount===4" @back="PrevModal"  @send='onMessage' v-bind="modalContent"/>

    <close-project v-else-if="modalCount===5" @click="closeProject"  />

  </modal>
  </transition>

</template>

<script>
  import Modal from './../Modal';
  import FirstModal from './../modals/modalsProject/FirstModal.vue'
  import SecondModal from './../modals/modalsProject/SecondModal.vue'
  import ThirdModal from './../modals/modalsProject/ThirdModal.vue'
  import FourthModal from './../modals/modalsProject/FourthModal.vue'
  import AlertModal from './../modals/modalsProject/Alert.vue'
  import CloseProject from './../modals/modalsProject/CloseProject.vue'

  export default {
    props : {
      modalCount: {
        type: Number,
        default: 0,
      },
    },
    data: function(){
      return {
        prop: {
          modalQuantity: 4,
        },
        animaStyle: 'slide-fade',
        project: {
          name: '',
          description: '',
          category: '',
          image: '',
          price: '',
          order: {
            name : '',
            description: '',
            category: '',
            subcategory: '',
          }
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
        this.$store.commit('modals/alert/close');

        if(this.modalCount<5){
          this.modalCount=0;
        }else {
          this.modalCount=5;
        }
      },
      closeProject(data){
        this.$store.commit('modals/alert/open');
        this.modal = data.modal;
      },
      PrevModal(data){
         this.modalCount= data.modal;
      },
      onFirst (data) {
        this.project.name = data.name;
        this.project.description = data.description;
        this.modalCount=data.modal;
      },
      onSecond (data) {
        this.project.category = data.value;
        this.modalCount=data.modal;
        this.project.order.name = data.name;
        this.project.order.description = data.description;
        this.project.image = data.image;
      },
      onThird (data) {
        this.project.order.category = data.value;
        this.modalCount=data.modal;
      },
      onFourth (data) {
        this.project.order.subcategory = data.value;
        this.modalCount=data.modal;
      },
      onMessage (data){
        this.modalCount=data.modal;
        this.add();
      },
      add () {
        this.$emit('add', {
          project: this.project,
        })
      },
    },
    components: {
      Modal,
      FirstModal,
      SecondModal,
      ThirdModal,
      FourthModal,
      AlertModal,
      CloseProject
    },
    created(){
      this.animaStyle='slide-fade';
    },
    destroyed() {
      this.animaStyle='';
      this.$store.commit('modals/alert/close');
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