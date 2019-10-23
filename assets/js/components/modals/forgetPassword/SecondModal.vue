<template>

<div class="content-wrapper">
  <h2>נא הזן את הקוד שקיבלת למייל</h2><!-- Enter security code from mai -->
  <div class="orderWrapper">
    <p class="formItem" >נא הזן את הקוד</p><!-- code -->
    <div>
      <input type="text" placeholder="טלפון" id="phone" ref="phone" @focus="onFocus" @blur="onBlur"  :style="[ flag!=='' ? {border: '2px solid red'} : ''  ]"   v-model.trim="token" class="inputName">
    </div>
    <p class="error-message" v-if="flag!==''">{{flag}}</p>
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
       token: '',
       flag: '',
     }
    },
    props:{
      email:{
        type: String,
      },
      role: {
        type: String,
      },

    },
    methods: {
      close() {
        this.$store.commit('modals/forgetPassword/close');
      },
      onFocus(e) {
          this.focusedCode = true;
          this.flag= '';
      },
      onBlur(e) {
        this.focusedCode = false;
      },
      checkPhone(){
        let regMail = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        let check = regMail.test(this.token);
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

        axios.post('/api/auth/forgotPasswordVerification',{role: this.role, email: this.email, token: this.token})
            .then((response)=>{
              console.log(response);
              if(response.data.success){
                this.modalL++;
                this.iconS = this.changeIcon(true);
                this.$emit('onSend',{
                  code : this.token,
                  success: true,
                });
                this.iconS = true;
              } else {
                this.$emit('onSend',{
                  success: false,
                });
                this.flag  = this.translations(response.data.message);
                this.iconS = this.changeIcon(false);
              }

            }).catch((error)=>{
          console.log(error);
        });
      },
      translations(str){
        if (str === 'Token is invalid'){
          return 'קוד אימות שגוי'
        }
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
