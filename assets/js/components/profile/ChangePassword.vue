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
                  Password must contain more than 6 symbols
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
                  Password must contain more than 6 symbols
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
                <p class="error-message" v-else-if="!$v.user.confirmPassword.regexp">
                 Passwords doesnt match
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

.editWrapper{
  z-index: 0;
  margin: 0 auto;
  padding: 30px 25px 0 25px;
  @media screen and (max-width: 900px){
    padding: 20px 5px 0 5px;
  }
  @media screen and (max-width: 1440px) {
    width: 900px;
    height: auto;
  }
  @media screen and (max-width: 900px){
    width: 500px;
  }
  @media screen and (max-width: 600px){
    width: 100%;
  }
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
}
.titleH{

  margin: 0;
  margin-top: 35px;
  font-family: Assistant;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 65px;
  text-align: center;
  letter-spacing: -0.02em;
  color : #333333;
  @media screen and (max-width: 600px){
    font-size: 42px;
  }
}
.cLeft{
  margin-left: 8px;
}
.cRight{
  margin-right: 8px;
  @media screen and (max-width: 900px){
    margin-right:0;
  }
}
.profileImg{
  margin-top: 20px;
  width: 189px;
  height: 189px;
  border-radius: 50%;
}
.addPhoto {
  background-image: url('/static/images/profile/addPic.png');
  background-repeat: no-repeat;
  background-position: 4px;
  outline: none;
  -moz-border-radius: 5px; /*закругляем углы для Mozilla*/
  -webkit-border-radius: 5px; /*закругляем углы для Chrome, Safari*/
  border-radius: 5px; /*закругляем углы для остальных браузеров*/
  padding-left: 20px; /*отступ слева от ввода, чтобы текст не был на картинке(выбирать по размеру картинки)*/
  height: 24px;
  font-size: 13px; /*размер шрифта*/
  width: 35px;
}
.imageW{
  display: flex;
  flex-direction: column-reverse;
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
input[type="file"] {
  display: none;
}
.custom-file-upload {
  margin-right: -15px;
  margin-top: -34px;
  display: block;
  cursor: pointer;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;

  .wrapper {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > * {
      position: relative;
    }
    .bg {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      transition-property: background;
      transition-duration: 3s;
      position: absolute;
      cursor: pointer;
    }
  }
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
