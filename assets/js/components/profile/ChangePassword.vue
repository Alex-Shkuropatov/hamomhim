<template>
    <div class="editP_section editP">
      <h2 class="titleH">שינוי סיסמה</h2>
      <form action="" class="changePass">
        <div class="textFields">
          <div class="row-wrapper ">
            <div class="row">
            <span>אמייל</span>
            <input class="foemField" v-model="email" placeholder="example@gmail.com"  type="text" disabled>
          </div>
            <div class="row">
              <span>סיסמה נוכחית</span>
              <input
                      @input="$v.user.oldPassword.$touch()"
                      :class="{ 'error': $v.user.oldPassword.$error, 'foemField': true }"
                      v-model.trim.lazy="user.oldPassword"
                      placeholder="**********"
                      type="password">
              <div class="error-wrapper" v-if="$v.user.oldPassword.$dirty">
                <p class="error-message" v-if="!$v.user.oldPassword.required">
                  שדה נדרש
                </p>
                <p class="error-message" v-else-if="!$v.user.oldPassword.minLength">
                  הסיסמה חייבת להכיל לפחות 6 ספרות
                </p>
              </div>
          </div>
          </div>
          <div class="row-wrapper ">
            <div class="row">
              <span>סיסמה חדשה</span>
              <input
                      @input="$v.user.newPassword.$touch()"
                      :class="{ 'error': $v.user.newPassword.$error, 'foemField': true }"
                      v-model.trim="user.newPassword"
                      placeholder="**********"
                      type="password">
              <div class="error-wrapper" v-if="$v.user.newPassword.$dirty">
                <p class="error-message" v-if="!$v.user.newPassword.required">
                  שדה נדרש
                </p>
                <p class="error-message" v-else-if="!$v.user.newPassword.minLength">
                  הסיסמה חייבת להכיל לפחות 6 ספרות
                </p>
              </div>
          </div>
            <div class="row">
            <span>אישור סיסמה חדשה</span>
            <input
                    @input="$v.user.confirmPassword.$touch()"
                    :class="{ 'error': $v.user.confirmPassword.$error, 'foemField': true }"
                    v-model.trim="user.confirmPassword"
                    placeholder="**********"
                    type="password">
              <div class="error-wrapper" v-if="$v.user.confirmPassword.$dirty">
                <p class="error-message" v-if="!$v.user.confirmPassword.required">
                  שדה נדרש
                </p>
                <p class="error-message" v-else-if="!$v.user.confirmPassword.regexp"> <!-- Passwords don't match -->
                  סיסמאות אינן תואמות
                </p>
              </div>
          </div>
          </div>
        </div>
        <button class="sendData th-btn th-btn-blue th-btn-sm"  @click="openModalPass">שמור</button>
      </form>
    </div>
</template>
<script>

import { required, minLength } from "vuelidate/lib/validators";

export default {
  validations:{

     user:{
       confirmPassword:{
         required,
         regexp(){
           return  this.user.newPassword === this.user.confirmPassword;
         }
       },
       newPassword: {
         required,
         minLength: minLength(6),
       },
       oldPassword: {
         required,
         minLength: minLength(6),
       }
     }
  },
  props:{
    email:{
      type: String,
    },
    userId:{
      type:Number,
    }
  },
  data: function () {
    return {
      user: {
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
      },
    }
  },
  computed: {

  },
  methods: {

    openModalPass (e) {
      e.preventDefault();
      this.changePassword();
    },

    changePassword(){
      this.$v.user.newPassword.$touch();
      this.$v.user.confirmPassword.$touch();
      this.$v.user.oldPassword.$touch();

      console.log( this.$v.user.oldPassword.$touch());
      if(!this.$v.$invalid) {
        axios.post('/api/changePassword', {userId: this.userId,oldPassword:this.user.oldPassword,newPassword:this.user.newPassword})
            .then((response) => {
              let res = response.data;
              this.$store.commit('modals/alert/saveData', {
                success: res.success,
                text: res.message ? res.message : 'Information successfully saved'
              });
              this.$store.commit('modals/alert/open');
              this.$store.dispatch('user/updateData');
            })
            .catch((error) => {
              console.log(error.response.data);
            });
      }
    },

  },

}
</script>

<style lang="scss" scoped>


  .editP{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    width: 1166px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 1440px) {
      width: 100%;
      height: auto;
    }
    .editForm{
      width: 718px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 700px){
        width: 100%;
      }
    }
  }
  .dropDown{
    width: 350.28px;
    height: 46.47px;
    @media screen and (max-width: 900px){
      width: 353px;
    }
    @media screen and (max-width: 400px) {
      width: 270.28px;
    }
  }
  .editP_section{
    margin-top: 24px;
    height: auto;
    margin-bottom: 60px;
    @media screen and (max-width: 1440px) {
      height: auto;
    }
    .changePass{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }





.foemField{
  background: #FFFFFF;

  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  width: 350.28px;
  height: 46.47px;
  @media screen and (max-width: 400px) {
    width: 270.28px;
  }
}
.sendData{
  margin-top: 40px;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  border-radius: 10px;
  width: 731px;
  height: 70px;
  font-family: Assistant;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 39px;
  display: inline-block;
  text-align: center;
  @media screen and (max-width: 1440px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 900px) {
    width: 358px;
    height: 58px;
  }
  @media screen and (max-width: 400px) {
    width: 287px;
  }
  &:hover {
    color:  #2970D5 ;

  }
}
.textFields{
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
  .row-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media screen and (max-width:900px){
      flex-direction: column;
    }
    .row{
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      span{
        margin-top: 15px;
        margin-right: 10px;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        text-align: right;

        color: #333333;
        @media screen and (max-width: 400px) {
          text-align: center;
        }
      }
      input{
        padding-right: 25px;
      }
    }
  }

}



.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;


  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-to {
    opacity: 1;
  }
  &.fade-leave {
    opacity: 1;
  }
  &.fade-leave-to {
    opacity: 0;
  }
  &.fade-leave-active,
  &.fade-enter-active {
    transition: opacity 0.3s ease;
  }
}
</style>
