<template>

<div class="content-wrapper">
  <h2>נא רשום את הסיסמה החדשה</h2><!-- Enter security code from mail -->
  <div class="orderWrapper">
    <p class="formItem" >סיסמה חדשה</p><!--New password -->
    <div>
      <input type="password" placeholder="טלפון"  :style="[ flag!==true ? {border: '2px solid red'} : ''  ]"  ref="password"  v-model="user.password" class="inputName">
    </div>
  </div>
  <div class="orderWrapper">
    <p class="formItem" >אימות סיסמה</p><!-- Confirm password -->
    <div>
      <i class="fas  "  v-bind:class="[{ 'fa-spin': focusedCode}, focusedCode ? 'fa-sync-alt':iconS]" ></i>
      <input type="password" :style="[ flag!==true ? {border: '2px solid red'} : ''  ]" placeholder="טלפון" id="phone" ref="phone" @focus="onFocus" @blur="onBlur"  v-model="user.confirmPassword" class="inputName">
    </div>
    <p class="error-message" v-if="flag!==''">סיסמאות אינן תואמות</p><!-- Passwords don't match -->
  </div>

  <button class=" th-btn th-btn-blue th-btn-lg next" @click="send" ><span>לשלב הבא</span></button>
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
         password:'',
         confirmPassword: '',
       },
       flag: true,
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

      },

      changeIcon(value){
        if (value){
          return 'fa-check'
        } else {
          return  'fa-times'
        }
      },
      send(){
        this.iconS = this.checkPhone();
        this.$emit('onSend',{
          password : this.user.password,
          success: this.flag,
        })
      },
      checkPhone(){
        this.flag = this.user.password === this.user.confirmPassword;
        return this.changeIcon(this.flag);
      },
    },
    components: {

    },
      computed:{

      },
  }
</script>

<style lang="scss" scoped>
  .content-wrapper{
    width: 500px;
    margin-bottom: 0;
  }
  .red-error{
    color:red;
    text-align: center;
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
    .formItem{
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
