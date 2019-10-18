<template>
  <div class="editWrapper">

    <alert-modal  />

    <div class="editP">

      <h1 class="titleH">עריכת פרופיל</h1>
      <form action="" class="editForm">
        <div class="imageW">
          <label for="file-upload" class="custom-file-upload addPhoto">
            <i class="fa fa-cloud-upload " ></i>
          </label>
          <input id="file-upload" type="file" @change="previewFiles"  accept="image/x-png,image/gif,image/jpeg"  />
          <img :src="user.avatar==='http://api.hamomhim.coelix.online/null'? '/static/images/profile/defaultAvatar.png': user.avatar " class="profileImg" alt="">
        </div>
        <div class="textFields">
          <div class="row-wrapper">
            <div class="row">
            <span>שם מלא</span>
            <input
                    @input="$v.user.name.$touch()"
                    :class="{ 'error': $v.user.name.$error, 'foemField': true }"
                    v-model.trim.lazy="user.name"
                    placeholder="שם מלא"
                    type="text"
            >
            <div class="error-wrapper" v-if="$v.user.name.$dirty">
              <p class="error-message" v-if="!$v.user.name.required">
                שדה נדרש
              </p>
            </div>
          </div>
            <div class="row">
              <span>שם העסק</span>
              <input
                      @input="$v.user.name_of_business.$touch()"
                      :class="{ 'error': $v.user.name_of_business.$error, 'foemField': true }"
                      v-model.trim.lazy="user.name_of_business"
                      placeholder="שם העסק"
                      type="text"
              >
              <div class="error-wrapper" v-if="$v.user.name_of_business.$dirty">
                <p class="error-message" v-if="!$v.user.name_of_business.required">
                  שדה נדרש
                </p>
              </div>
            </div>
          </div>
          <div class="row-wrapper">
            <div class="row">
            <span>אזור מגורים</span>
            <input
                    @input="$v.user.city.$touch()"
                    :class="{ 'error': $v.user.city.$error, 'foemField': true }"
                    v-model.trim.lazy="user.city"
                    placeholder="אזור מגורים"
                    type="text"
            >
            <div class="error-wrapper" v-if="$v.user.city.$dirty">
              <p class="error-message" v-if="!$v.user.city.required">
                שדה נדרש
              </p>
            </div>
          </div>
            <div class="row">
              <span>אזור עבודה</span>
              <div class="selectWrapper">
                <drop-down
                        class="dropDown"
                        placeholder="אזור עבודה"
                        v-model="workArea.value"
                        v-bind="workArea"
                />
              </div>
            </div>
          </div>
         <div class="row-wrapper">
           <div class="row">
             <span>כתובת</span>
             <vue-google-autocomplete
                     ref="addressAutoComplete"
                     id="map"
                     @input="$v.user.address.$touch()"
                     :class="{'error': $v.user.address.$error,'foemField': true }"
                     placeholder="כתובת"
                     v-on:change="getAddressData"
                     country="il"
             />
             <div class="error-wrapper" v-if="$v.user.address.$dirty">
               <p class="error-message" v-if="!$v.user.address.required">
                 שדה נדרש
               </p>
             </div>
           </div>
           <div class="row">
             <span>טלפון עסקי</span>
             <input
                     @input="$v.user.business_phone.$touch()"
                     :class="{ 'error': $v.user.business_phone.$error, 'foemField': true }"
                     v-model.trim.lazy="user.business_phone"
                     placeholder="טלפון עסקי"
                     type="text"
             >
             <div class="error-wrapper" v-if="$v.user.business_phone.$dirty">
               <p class="error-message" v-if="!$v.user.business_phone.required">
                 שדה נדרש
               </p>
             </div>
           </div>
         </div>
      <div class="row-wrapper">
        <div class="row">
          <span>פקס</span>
          <input
                  @input="$v.user.fax.$touch()"
                  :class="{ 'error': $v.user.fax.$error, 'foemField': true }"
                  v-model.trim.lazy="user.fax"
                  placeholder="פקס"
                  type="text"
          >
          <div class="error-wrapper" v-if="$v.user.fax.$dirty">
            <p class="error-message" v-if="!$v.user.fax.required">
              שדה נדרש
            </p>
          </div>
        </div>
        <div class="row">
          <span>טלפון</span>
          <input
                  @input="$v.user.phone.$touch()"
                  :class="{ 'error': $v.user.phone.$error, 'foemField': true }"
                  v-model.trim.lazy="user.phone"
                  placeholder="טלפון"
                  type="text"
          >
          <div class="error-wrapper" v-if="$v.user.phone.$dirty">
            <p class="error-message" v-if="!$v.user.phone.required">
              שדה נדרש
            </p>
          </div>
        </div>
      </div>

          </div>


        <button class="sendData th-btn th-btn-blue th-btn-sm" ref="sendData" style="text-align:center"   @click="openModal">שמור</button>
      </form>
    </div>
 <change-password :email="user.email" :userId="user.userId" />
  </div>

</template>
<script>
  import AlertModal from '../modals/Alert.vue';
  import DropDown from '../common/DropDown.vue';
  import VueGoogleAutocomplete from 'vue-google-autocomplete';
import { required, minLength } from "vuelidate/lib/validators";
import ChangePassword from '../profile/ChangePassword.vue'
export default {
  validations:{
    user:{
      name:{
        required,
      },
      city:{
        required,
      },
      phone:{
        required,
      },
      name_of_business: {
        required,
      },
      address:{
        required,
      },
      business_phone: {
        required,
      },
      fax:{
        required,
      },
    },
  },
  components: {
 ChangePassword,
    AlertModal,
    VueGoogleAutocomplete,
    DropDown,
  },
  data: function () {
    return {
      user: {
        avatar: '',
        name: '',
        city: '',
        name_of_business: '',
        business_phone: '',
        address: '',
        phone: '',
        email: '',
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
        working_area: '',
        fax: '',
        userId: '',
      },
      preload: '',
      workArea: {
        items: [
          { label: 'כל הארץ', value: "1" },
          { label: 'תל אביב', value: "2" },
          { label: 'חיפה והסביבה', value: "3" },
          { label: 'השרון והסביבה', value: "4" },
          { label: 'באר שבע', value: "5" },
        ],
        value: '',
        labelKey: 'label',
        valueKey: 'label',
      },
      categories: {
        items: [
        ],
        value: '',
        labelKey: 'name',
        valueKey: 'id',
      },
    }
  },
  computed: {
    getData() {
      return this.$store.getters['user/data'];
    },
    fillData(){
      let data = this.getData;
      console.log(data);
      this.user.avatar= "http://api.hamomhim.coelix.online/"+data.avatar;
      this.user.name= data.name;
      this.user.city= data.city;
      this.user.name_of_business= data.name_of_business;
      this.user.business_phone = data.business_phone;
      this.$refs.addressAutoComplete.autocompleteText = data.address;
      this.user.address = data.address;
      this.user.email= data.email;
      this.user.phone= data.phone;
      this.user.fax= data.fax;
      this.workArea.value= data.working_area;
      this.user.userId = data.id;
      this.user.working_area =  this.workArea.value;
    },
    getCategories(){
      return this.$store.getters['categories/data'];
    }
  },
  methods: {
    previewFiles(event) {
      let file = event.target.files;
      this.preload = file[0];
      this.createImage(file[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.user.avatar= e.target.result;
      };
      reader.readAsDataURL(file);
    },
    openModal (e) {
      e.preventDefault();
      this.changeInfo();
    },
    changeInfo(){
      this.$v.user.name.$touch();
      this.$v.user.city.$touch();
      this.$v.user.name_of_business.$touch();
      this.$v.user.business_phone.$touch();
      this.$v.user.address.$touch();
      this.$v.user.phone.$touch();
      this.$v.user.fax.$touch();

      if(!this.$v.$invalid  ) {
        let data = this.setFromData();
        axios.post('/api/changePersonalInfo', data)
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
              this.$store.commit('modals/alert/open');
            });
      }
    },

    setFromData() {
      let myFormData = new FormData();
      myFormData.append('avatar', this.preload);
      myFormData.append('name',  this.user.name);
      myFormData.append('city',  this.user.city);
      myFormData.append('name_of_business',  this.user.name_of_business);
      myFormData.append('address', this.user.address);
      myFormData.append('email', this.user.email);
      myFormData.append('phone', this.user.phone);
      myFormData.append('fax', this.user.fax);
      myFormData.append('business_phone', '099012312');
      myFormData.append('working_area', this.user.working_area );
      myFormData.append('userId', this.user.userId);
      return myFormData;
    },
    getAddressData(addressData, placeResultData, id){

      this.user.address = this.$refs.addressAutoComplete.autocompleteText.trim();
    },
  },
  mounted(){
    this.fillData;
    this.categories.items = this.getCategories;
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
