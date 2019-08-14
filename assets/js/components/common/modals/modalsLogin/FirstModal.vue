<template>

  <div class="content-wrapper second-message">
    <h2 class="title">םינלבק - רתאל המשרה</h2>
    <p class="projectName">תכרעמל המשרה</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >המסיס</p>
          <input type="password" placeholder="המסיס" v-model="user.password"   class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >ליימיא</p>
          <div>
            <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedMail}, focusedMail ? 'fa-sync-alt':icon]"  ></i>
            <input type="text" ref="mail" id="mail"  placeholder="E-mail"  @focus="onFocus" @blur="onBlur" v-model="user.email" class="inputName">
          </div>
        </div>

      </div>
    </form>
    <div class="wrapper-footer">
      <div class="wrapper-element">
        <i class="fas fa-key"></i>
        <span class="underLine">Forgot password</span>
      </div>

        <div class="checkbox">
          <input type="checkbox" id="check" value="check" v-model="user.remember">
          <label for="check">Remember me</label>
        </div>

    </div>
    <div class="buttons-wrapper">
      <button class="closeB" style="text-align:center" @click="send">Send</button>
    </div>

  </div>

</template>

<script>
  import Modal from './../../Modal.vue';


  export default {

    methods: {
      close() {
        this.$store.commit('modals/login/close');
      },
      send() {
        this.$emit('send', {
          email: this.user.email ,
          password: this.user.password,
          remember_me: this.user.remember,
        })
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
    },
    components: {
      Modal,
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

  .second-message{
    form{
      .wrapper{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding: 11px 30px 0 30px;
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
  .inputName{
    width: 350.28px;
    height: 46.47px;
    background: #FFFFFF;
    opacity: 0.5;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
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
  .wrapper-footer{
    margin-top:20px;
    width: 68%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    .wrapper-element{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      i{
        .fa-key{

        }
      }
      .underLine{
        margin-left: 10px;
      }
    }
  }
</style>