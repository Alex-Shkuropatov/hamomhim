<template>

<div class="content-wrapper">
  <h2>נא הזן את כתובת המייל שלך</h2><!-- enter your email -->
  <div class="orderWrapper">
    <p class="formItem" >אימייל</p>
    <div>
      <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedMail}, focusedMail ? 'fa-sync-alt': (flag? iconS : 'fa-sync-alt')]"  ></i>
      <input type="text" ref="mail" id="mail" :style="[ flag!=='' ? {border: '2px solid red'} : ''  ]"  placeholder="מייל"  @focus="onFocus" @blur="onBlur" v-model.trim="user.email" class="inputName">
    </div>
    <p class="error-message" v-if="flag!==''">{{flag}}</p>
  </div>

  <button class=" th-btn th-btn-blue th-btn-lg next" @click="send"><i v-show="spinFlag" class="fas fa-spinner fa-spin"></i><span>לשלב הבא</span></button>
</div>
</template>

<script>

  export default {
    data: function(){
     return{
       focusedMail: false,
       icon: "fa-sync-alt",
       iconS: 'fa-sync-alt',
       user: {
         email: '',
       },
       flag: '',
       spinFlag : false,
     }
    },
    props: {
      role: {
        type: String
      }
    },
    methods: {
      close() {
        this.$store.commit('modals/forgetPassword/close');
      },
      onFocus(e) {
          this.focusedMail = true;
          this.flag= '';
      },
      onBlur(e) {
          this.focusedMail = false;
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
      send(){
      this.spinFlag = true;
        axios.post('/api/auth/forgotPassword',{'email':this.user.email, 'role':this.role})
            .then((response)=>{
              if(response.data.success){
                this.$emit('onSend',{
                  email: this.user.email,
                  role: this.role,
                  success: true,
                });
                this.iconS = true;
              } else {
                this.$emit('onSend',{
                  success: false,
                });
                this.flag  =  this.translations(response.data.message);
                this.iconS = this.changeIcon(false);
                this.spinFlag= false;
              }
              console.log(response);
            }).catch((error)=>{
          console.log(error);
        });
      },
      translations(str){
        if (str === 'User not found'){
          return 'מייל לא קיים במערכת'
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
