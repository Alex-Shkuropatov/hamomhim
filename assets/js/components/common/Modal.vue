<template>
    <div class="modal">
       <div class="bg" @click="close"></div>
      <div class="formWrapper">
       <div class="formMessage">
         <modal-close class="closeB" @click="close"/>
         <slot></slot>
         <div class="messageFooter"></div>
       </div>
      </div>
     </div>
</template>

<script>
  import  ModalClose from  './ModalClose.vue'

  export default {
    methods: {
      close(e) {
        this.$emit('close', e);
      }
    },
    components: {
      ModalClose,
    },
    beforeDestroy() {
      this.$store.commit('modals/alert/close');
    }
  }
</script>

<style lang="scss" scoped>
  .formWrapper{
    position: relative;
    overflow: auto;
    max-height: 100%;
    margin-bottom: auto;
  }
  .formMessage{
    overflow-x: hidden;
    overflow-y: auto !important;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-top: 105px;
    z-index: 3001;
    display: flex;
    justify-content: center;
    @media screen and (max-width:480px){
      padding-top: 50px;
    }
    @media (max-width: 380px){
      padding-top: 25px;
    }
  }
  .closeB{
    fill:#BDBDBD;
    left: 15px;
    top: 15px;
    z-index: 100;
    animation: forwards;
    animation-duration: 1s;
    cursor: pointer;
    &:hover{
      path {
        fill: #2970D5;
      }
    }
  }
  .bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    transition-property: background;
    transition-duration: 3s;
    position: absolute;
    cursor: pointer;
  }


  .messageFooter{
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    width: 100%;
    height: 13px;
  }


</style>
