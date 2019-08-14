<template>
  <transition name="slide-fade">
  <modal v-if="$store.getters['modals/newProject/isOpened']" @close="closeB"  >

    <div class="content-wrapper first-message">
      <h2 class="title">שדח טקיורפ תפסוה</h2>
      <p class="projectName"> טקיורפ םש ןזה</p>
      <form action="">
        <input class="inputName" placeholder=" טקיורפ םש" v-model="name" type="text"  >
        <textarea class="description" name="description" v-model="description" placeholder="רואית" ></textarea>
      </form>
      <div class="buttons-wrapper">
        <button class="saveB" style="text-align:center" @click='send' >Save</button>
        <button class="closeB" style="text-align:center" @click='closeB' >Close</button>
      </div>
    </div>

  </modal>
  </transition>

</template>

<script>
  import Modal from './../Modal.vue';
  export default {
    methods: {
      closeB() {
        this.$store.commit('modals/newProject/close');
      },
      send () {
        this.$router.push('orders');
      },
    },
    components: {
      Modal,
    },
    data: function () {
      return {
        name : '',
        description: '',
      }
    } ,

  }
</script>

<style  lang="scss" scoped>
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
        width: 350.28px;
        height: 46.47px;
        background: #FFFFFF;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
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