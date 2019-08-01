<template>
    <div class="modal">
       <div class="bg" @click="close"></div>
       <div class="formMessage">
         <modal-close class="closeB" @click="close"/>
         <slot></slot>
         <div class="messageFooter"></div>
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

<style scoped>
  .formMessage{
    position: fixed;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
    min-width: 660px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1600px){
      min-width: 400px;
    }
  }
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-top: 150px;
    z-index: 200;
    display: flex;
    justify-content: center;
  }
  #closeWindow{
    fill:#BDBDBD;
    left: 25px;
    top: 25px;
    position: absolute;
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
    position: absolute;
    bottom: 0;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    width: 100%;
    height: 13px;
  }


</style>