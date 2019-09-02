<template>

    <div class="content-wrapper first-message">
      <h2 class="title">שדח טקיורפ תפסוה</h2>
      <p class="projectName"> טקיורפ םש ןזה</p>
      <form action="">
        <input class="inputName" placeholder=" טקיורפ םש" v-model="name" type="text"  >
        <textarea class="description" name="description" v-model="description" placeholder="רואית" ></textarea>
      </form>
      <div class="buttons-wrapper">
        <button class="saveB" style="text-align:center" @click='send' >Save</button>
        <button class="closeB" style="text-align:center" @click='close' >Close</button>
      </div>
    </div>

</template>

<script>
  import Modal from './../../common/Modal.vue';
  export default {
    methods: {
      close() {
        this.$store.commit('modals/alert/close');
      },
      send () {
        this.$emit('send', {
          name: this.name,
          description: this.description,
        })
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

<style lang="scss" scoped>
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

</style>
