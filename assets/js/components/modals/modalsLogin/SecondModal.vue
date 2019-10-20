<template>


  <div class="login-wrapper second-message">
    <h2 class="title">הרשמה לאתר - קבלנים</h2>
    <p class="projectName">הרשמה למערכת</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >אימייל</p>
          <div>
            <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedMail}, focusedMail ? 'fa-sync-alt':icon]"  ></i>
            <input
                    type="text"
                    ref="mail"
                    id="mail"
                    placeholder="מייל"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-model.trim.lazy="user.email"
                    :class="{ 'error': $v.user.email.$error, 'inputName': true }">
            <div class="error-wrapper" v-if="$v.user.email.$dirty">
              <p class="error-message" v-if="!$v.user.email.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.user.email.regexp">
                אימייל שגוי
              </p>
            </div>

          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >סיסמה</p>
          <input type="password" placeholder="סיסמה" v-model="user.password"   class="inputName">
        </div>


      </div>
    </form>
    <div class="wrapper-footer">
      <div class="wrapper-element">
        <button class="forget-pass" @click="forgetPass">
        <i class="fas fa-key"></i>
        <span class="underLine">שכחתי סיסמה?</span><!-- forgot password -->
        </button>
      </div>
      <div class="wrapper-element">
        <div class="checkbox">
          <label class="container">
            <input type="checkbox" id="check" value="check" v-model="user.remember">
            <label for="check">זכור אותי</label>
            <span class="checkmark"></span>
          </label>
        </div>
    </div>
    </div>
    <div class="buttons-wrapper">
      <button class="closeB" style="text-align:center" @click="send">שלח</button>
    </div>

  </div>

</template>

<script>
  import Modal from './../../common/Modal.vue';
  import axios from 'axios';
  import { required } from "vuelidate/lib/validators";

  export default {
validations:{
user:{
  email:{
    required,
    regexp(){
      let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let  check = regMail.test(this.user.email);
      return check;
    }
  }
}
},
    methods: {
      close() {
        this.$store.commit('modals/login/close');
      },
      send() {
        this.$v.user.email.$touch();

        if(!this.$v.$invalid) {
          this.$emit('send', {
            email: this.user.email,
            password: this.user.password,
            remember_me: this.user.remember,
          })
        }
      },
      onFocus(e) {
        console.log(e.target);
        let elem = e.target;
        if(elem.id ==="mail"){
          this.focusedMail = true;
        } else {
          this.focusedPhone = true;
        }
      },
      onBlur(e) {
        let elem = e.target;
        if(elem.id ==="mail"){
          this.focusedMail = false;
          this.icon = this.checkMail();
        } else {
          this.focusedPhone = false;
          this.changeIcon(false);
          this.iconS = this.checkPhone();
        }
      },
      checkMail(){
        let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let  check = regMail.test(this.user.email);
        return this.changeIcon(check);
      },
      changeIcon(value){
        if (value){
          return 'fa-check'
        } else {
          return  'fa-times'
        }
      },
      forgetPass(){
        this.$store.commit('modals/login/close');
        this.$store.commit('modals/forgetPassword/saveData', this.role);
        this.$store.commit('modals/forgetPassword/open');
      }
    },
    props: {
      role:{
        type:String,
      }
    },
    components: {
      Modal,
      axios
    },
    data : function () {
      return {
        focusedMail: false,
        focusedPhone: false,
        icon: "fa-sync-alt",
        iconS: 'fa-sync-alt',
       user: {
          email: '',
          password: '',
         remember: false,
       },
        source: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fa-times{
    color: red;
  }
  .fa-check{
    color: green;
  }
  .fa-sync-alt{
    color: #BDBDBD;
  }
  .login-wrapper{
    padding: 20px;
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
      @media screen and (max-width: 480px){
        margin-top:30px;
        font-size: 30px;
      }
    }
    .projectName{
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

  .second-message{
    form{
      .wrapper{
        display: flex;
        flex-direction: row;
        padding: 11px 30px 0 30px;
        @media screen and (max-width: 1000px){
          flex-direction: column;
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
        .selectWrapper{
          margin: 0px 9px 0 11px;
        }
      }
      hr{
        width: 90%;
        color: #80808030;
      }
    }
  }
  .textareaWrapper{
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
    textarea{
      padding: 10px 25px 0 0;
      resize: none;
      background: #FFFFFF;
      opacity: 0.5;
      border: 1px solid #BDBDBD;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 724px;
      height: 250px;
    }
  }
  .formItem{
    margin: 0;
    margin-right: 30px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #333333;
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
  }
  .checkbox{

    display: flex;
    align-items: center;
    width: 140px;
    height: 17px;
    justify-content: space-between;

    label{
      text-decoration: underline;
      color: #333333;
    }
  }
  .last-field{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 727px;
    .orderWrapper {
    .formItem{
      margin: 0;
      font-weight: bold;
      font-size: 18px;
      text-align: right;
      color: #333333;
    }
      .inputName{
        padding-right: 20px;

      }
    }
  }

.orderWrapper{
  div{
    position: relative;
    .fas {
      position: absolute;
      left: 17px;
      top: 11px;
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
  .wrapper-footer{
    margin-top:20px;
    width: 87%;
    display: flex;
    flex-direction: row-reverse;

    @media screen and (max-width: 1000px){
      width: 67%;
    }
    @media screen and (max-width:767px){
      width: 55%;
    }
    @media screen and (max-width: 480px){
      width: 69%;
    }
    .wrapper-element{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;
      width: 47%;
      .forget-pass{
        @media screen and (max-width:1000px){
          margin-bottom: 6px;
        }
        .fas{
          color: #3269B6;
        }
        i{
          .fa-key{
            color: #3269B6;
          }
        }
        .underLine{
          margin-left: 10px;
        }
      }
    }
  }
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @media screen and (max-width:767px){
      font-size: 17px;
    }
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 7px;
    right: -40px;
    height: 25px;
    width: 25px;
    background-color: #eee;
    @media screen and (max-width: 767px) {
      height: 17px;
      width: 17px;
    }
    @media screen and (max-width: 480px) {
      right: -27px;
    }
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: white;
    border: 1px solid gray;
    opacity: 0.6;
    border-radius: 2px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid blue;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

</style>
