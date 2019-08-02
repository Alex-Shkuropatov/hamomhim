<template>
  <transition name="slide-fade">
  <modal v-if="$store.getters['modals/alert/isOpened']" @close="closeB">

    <first-modal @send='onFirst' v-if="modalCount===0"  v-bind="prop" />

    <second-modal @send='onSecond' @back="PrevModal" v-else-if="modalCount===1"  v-bind="prop" />

    <third-modal v-else-if="modalCount===2" @back="PrevModal" @send='onThird'  v-bind="prop" />

    <alert-modal  v-else-if="modalCount===3"  @send='onMessage' v-bind="modalContent"/>

      <close-order  v-else-if="modalCount===-1" @click="closeOrder"  />

  </modal>
  </transition>
</template>

<script>
  import Modal from './../Modal';
  import FirstModal from './../modals/modalsOrder/FirstModal.vue'
  import SecondModal from './../modals/modalsOrder/SecondModal.vue'
  import ThirdModal from './../modals/modalsOrder/ThirdModal.vue'
  import AlertModal from './../modals/modalsOrder/Alert.vue'
  import CloseOrder from '../modals/modalsOrder/CloseOrder.vue'
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
          modalQuantity: 3,
        },
        modalCount: 0,
          order: {
            name : '',
            description: '',
            category: '',
            subcategory: '',

        },
        modalContent: {
          title: 'החלצהב עצוב תומיאה',
          text: 'תכרעמב רשואמו תמוא ךלש ןובשחה',
          buttonText: 'רתאל רוזח',
        },
      }
    },
    methods: {
      close() {

      },
      closeB() {
        this.$store.commit('modals/alert/close');

      },
      PrevModal(data){
         this.modalCount= data.modal;
      },
      onFirst (data) {
        this.modalCount=data.modal;
        this.order.name = data.name;
        this.order.description = data.description;
        this.order.image = data.image;
      },
      onSecond (data) {
        this.order.category = data.value;
        this.modalCount=data.modal;
      },
      onThird (data) {
        this.order.subcategory = data.value;
        this.modalCount=data.modal;

      },
      onMessage (data){
        this.modalCount=data.modal;
        this.add();
        this.$store.commit('modals/alert/close');
      },
      add () {
        this.$emit('add', {
          order: this.order,
        })
      },
      closeOrder(data){
        this.$store.commit('modals/alert/open');
        this.modal = data.modal;
      }
    },
    components: {
      Modal,
      FirstModal,
      SecondModal,
      ThirdModal,
      AlertModal,
      CloseOrder
    },
    destroyed() {
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