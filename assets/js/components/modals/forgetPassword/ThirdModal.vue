<template>

<div class="content-wrapper">
  <h2>Enter security code from mail</h2>
  <div class="orderWrapper">
    <p class="formItem" >New password</p>
    <div>
      <input type="text" placeholder="טלפון"   ref="password"  v-model="user.password" class="inputName">
    </div>
  </div>
  <div class="orderWrapper">
    <p class="formItem" >Confirm password</p>
    <div>
      <i class="fas  "  v-bind:class="[{ 'fa-spin': focusedCode}, focusedCode ? 'fa-sync-alt':iconS]" ></i>
      <input type="text" placeholder="טלפון" id="phone" ref="phone" @focus="onFocus" @blur="onBlur"  v-model="user.confirmPassword" class="inputName">
    </div>
  </div>

  <button class=" th-btn th-btn-blue th-btn-lg next" @click="send" ><span>Next</span></button>
</div>
</template>

<script>

  export default {
    data: function(){
     return{
       focusedCode: false,
       icon: "fa-sync-alt",
       iconS: 'fa-sync-alt',
       user: {
         code: '',
       },
       source: '',
     }
    },
    methods: {
      close() {
        this.$store.commit('modals/forgetPassword/close');
      },
      onFocus(e) {
          this.focusedCode = true;
      },
      onBlur(e) {
        this.focusedCode = false;
        this.iconS = this.checkPhone();
      },
      checkPhone(){
        let check = this.user.password === this.user.confirmPassword;
        return this.changeIcon(check);
      },
      changeIcon(value){
        if (value){
          return 'fa-check'
        } else {
          return  'fa-times'
        }
      },
      send(){
        this.$emit('onSend',{
          code : this.user.password,
        })
      },
    },
    components: {

    },

  }
</script>

<style lang="scss" scoped>
  .content-wrapper{
    width: 500px;
    margin-bottom: 0;
  }
  .fa-times{
    color: red;
  }
  .fa-check{
    color: green;
  }
  .fa-sync-alt{
    color: #BDBDBD;
  }
  .orderWrapper{
    margin: 0 10px 0 10px;
    p{
      margin: 0;
      margin-right: 20px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #333333;
    }
    .inputName{
      padding-right: 20px;
      width: 350.28px;
      height: 46.47px;
      background: #FFFFFF;
      opacity: 0.5;
      border: 1px solid #BDBDBD;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      @media screen and (max-width: 480px){
        width: 260.28px;
      }

    }
  }
  .orderWrapper{
    div{
      position: relative;
      .fas {
        position: absolute;
        left: 37px;
        top: 13px;
        z-index: 2;

        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        margin-right: -26px;
        float: left;
      }

      .fas + input {
        padding-left: 26px;
      }
    }
  }
  .next{
    margin-top: 17px;
    width: 225px;
    height: 49px;
    font-size: 26px;
    margin-bottom:10px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    font-weight: bold;
    padding: 0px;
    display: inline-block;
    text-align: center;
    @media screen and (max-width: 480px) {
      width: 200px;
      height: 50px;
    }
  }
</style>
