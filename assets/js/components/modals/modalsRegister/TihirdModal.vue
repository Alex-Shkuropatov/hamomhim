<template>

  <div class="content-wrapper second-message">
    <h2 class="title">םינלבק - רתאל המשרה</h2>
    <p class="projectName">תכרעמל המשרה</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >נא המתן 30 שניות עד לקבלת קוד האימות</p>
          <div>
            <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedPhone}, focusedPhone ? 'fa-sync-alt':icon]"  ></i>
            <input type="text"  :style="[ flag ? {border: '2px solid red'} : ''  ]" ref="mail" id="phoneC"  placeholder="נא הזן 4 ספרות"  @focus="onFocus" @blur="onBlur" v-model="phoneCode" class="inputName">
          </div>
          <div v-if="flag" class="red">
            <div class="red scale-up-center ">Code is invalid</div>
          </div>
        </div>
      </div>
    </form>

    <div class="buttons-wrapper">
      <button class="closeB" style="text-align:center" @click="send">Send</button>
    </div>

  </div>

</template>

<script>
  import Modal from './../../common/Modal.vue';
  import DropDown from './../../common/DropDown.vue';

  export default {

    methods: {
      close() {
        this.$store.commit('modals/reg/close');
      },
      send() {

        this.$emit('send', {
        phoneCode: this.phoneCode
        })

      },
      onFocus() {
          this.focusedPhone = true;
      },
      onBlur() {
          this.focusedPhone = false;
          this.iconS = this.checkPhone();
      },
      checkPhone() {
        let check = this.phoneCode;
        return this.changeIcon(true);
      },
      changeIcon(value) {
        if (value) {
          return 'fa-check'
        } else {
          return 'fa-times'
        }
      },

    },
    props:{
      flag:{
        type: Boolean,
        default: false
      }
    },
    components: {
      Modal,
      DropDown,
    },
    data: function () {
      return {
        focusedPhone: false,
        icon: "fa-sync-alt",
        iconS: 'fa-sync-alt',
        phoneCode: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
    animation: scale-up-center 0.4s cubic-bezier(0.860, 0.000, 0.070, 1.000) forwards;
  }
  .red{
    color: red;
    @-webkit-keyframes scale-up-center {
      0% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes scale-up-center {
      0% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
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
        flex-direction: row;
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
    .saveB{
      margin-left: 10px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      border-radius: 50px;
    }
  }
  .checkbox{
    display: flex;
    align-items: center;
    margin-top: 41px;
    width: 230px;
    justify-content: space-between;
    margin-right: 47px;
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
</style>
