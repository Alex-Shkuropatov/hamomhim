<template>

 <div class="editWrapper">

   <alert-modal v-bind="modalContent"/>

<div class="editP">

 <h1 class="titleH">Edit profile</h1>
 <form action="" class="editForm">
  <div class="imageW">
   <label for="file-upload" class="custom-file-upload addPhoto">
    <i class="fa fa-cloud-upload " ></i>
   </label>
   <input id="file-upload" type="file" @change="previewFiles"  accept="image/x-png,image/gif,image/jpeg"  />

   <img :src="source" class="profileImg" alt="">
  </div>
  <div class="textFields">
   <div class="column cLeft">
    <span>שם מלא</span>
    <input class="foemField" v-model.trim="user.fullName" placeholder="אלמ םש"  type="text">
    <span>אזור מגורים</span>
    <input class="foemField" v-model.trim="user.area" placeholder="אזור מגורים" type="text">
    <span>כתובת</span>
    <input class="foemField" v-model.trim="user.adress" placeholder="כתובת" type="text">
    <span>טלפון</span>
    <input class="foemField" v-model.trim="user.phone" placeholder="טלפון" type="text">
   </div>
   <div class="column cRight">
    <span>שם העסק</span>
    <input class="foemField" v-model.trim="company.name" placeholder="שם העסק"  type="text">
    <span>אזור עבודה</span>
     <div class="selectWrapper">
      <drop-down placeholder="אזור עבודה" v-model="workArea.value" :items="workArea.items"/>
     </div>
    <span>קטגוריות</span>
    <div class="selectWrapper">
     <drop-down placeholder="נא בחר קטגוריה אחת" v-model="categories.value" :items="categories.items"/>
    </div>
    <span>פקס</span>
    <input class="foemField" v-model.trim="company.fax" placeholder="פקס"  type="text" >
   </div>
  </div>
  <button class="sendData th-btn th-btn-blue th-btn-sm" ref="sendData" style="text-align:center"   @click="openModal">שמור</button>
 </form>
</div>
  <div class="editP_section editP">
  <h2 class="titleH"> Change password</h2>
   <form action="" class="changePass">
    <div class="textFields">
    <div class="column cLeft">
     <span>Email</span>
     <input class="foemField" v-model.trim="user.mail" placeholder="example@gmail.com"  type="text">
     <span>New password</span>
     <input class="foemField" v-model.trim="user.passNew" placeholder="**********" type="text">
    </div>
    <div class="column cRight">
     <span>Current password</span>
     <input class="foemField" v-model.trim="user.passCurrent" placeholder="**********" type="password">
     <span>Confirm password</span>
     <input class="foemField" v-model.trim="user.passConfirm" placeholder="**********" type="password">
    </div>
    </div>
    <button class="sendData th-btn th-btn-blue th-btn-sm"  @click="openModal">שמור</button>
   </form>
  </div>
 </div>
</template>

<script>


  import AlertModal from '../components/common/modals/Alert.vue';
  import DropDown from '../components/common/DropDown.vue';

export default {
 components: {
  AlertModal,
  DropDown,

 },
 data: function () {
  return {
   source: '/static/images/profile/defPic.png',
   company: {
    selectedZone: '',
    selectedCategory: '',
    name: '',
    fax: '',
   },
   user: {
    fullName: '',
    area: '',
    adress: '',
    phone: '',
    mail: '',
    passNew: '',
    passCurrent: '',
    passConfirm: ''
   },
   workArea: {
    items: [ { label: 'אזור עבודה', value: 1 },{ label: 'אזור עבודה', value: 2 }],
    value: '',
   },
   categories: {
    items: [ { label: 'נא בחר קטגוריה אחת', value: 1 },{ label: 'נא בחר קטגוריה אחת', value: 2 },{ label: 'נא בחר קטגוריה אחת', value: 3 } ],
    value: '',
   },
   modalContent: {
    title: 'New information have been saved',
    text: 'Lorem Ipsum dolor set amet',
    buttonText: 'חזור לאתר',
   }
  }
 },
 methods: {
  previewFiles(event) {
   let file = event.target.files;
   console.log(event.target.files);
   this.createImage(file[0]);
  },
  createImage(file) {
   let image = new Image();
   let reader = new FileReader();
   let vm = this;
   reader.onload = (e) => {
    vm.source = e.target.result;
   };
   reader.readAsDataURL(file);
  },
  openModal (e) {
   e.preventDefault();
   this.$store.commit('modals/alert/open');
  }
 }
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
 height: 838px;
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
  .editP_section{
   margin-top: 24px;
   height: 449px;
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
 }
 .sendData{
  padding-right: 141px;
  margin-top: 40px;
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  border-radius: 50px;
  width: 355px;
  height: 70px;
  font-family: Assistant;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1440px) {
   margin-bottom: 25px;
  }
  @media screen and (max-width: 400px) {
   width: 283px;
   padding-right: 113px;
  }
  &:hover {
   color:  #2970D5 ;

  }
 }
 .textFields{
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 900px){
   flex-direction: column;
  }
  .column{
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