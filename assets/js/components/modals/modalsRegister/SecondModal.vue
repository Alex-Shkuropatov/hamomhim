-<template>

  <div class="contentW second-message">
    <h2 class="title">הרשמה לאתר - קבלנים</h2>
    <p class="projectName">הרשמה למערכת</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >שם מלא</p>
          <input
                  :class="{ 'error': $v.name.$error, 'inputName': true, 'form__input': true }"
                  type="text"
                  placeholder="שם מלא"
                  @input="$v.name.$touch()"
                  v-model.trim="name"
          >
          <div class="error-wrapper" v-if="$v.name.$dirty">
            <p class="error-message" v-if="!$v.name.required">
              אנא הכנס את שמך
            </p>
          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >מייל</p>
          <div>
            <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedMail}, focusedMail ? 'fa-sync-alt':icon]"  ></i>
            <input
                    type="text"
                    ref="mail"
                    id="mail"
                    placeholder="מייל"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-model.trim="email"
                    @input="$v.email.$touch()"
                    :class="{'error': $v.email.$error, 'inputName': true}"
            >
            <div class="error-wrapper" v-if="$v.email.$dirty">
              <p class="error-message" v-if="!$v.email.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.email.regexp">
                אימייל שגוי
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >עיר מגורים</p>
          <input
                  type="text"
                  placeholder="עיר מגורים"
                  v-model.trim="city"
                  @input="$v.city.$touch()"
                  :class="{ 'error': $v.city.$error, 'inputName': true }">
          <div class="error-wrapper" v-if="$v.city.$dirty">
            <p class="error-message" v-if="!$v.city.required">
              אנא הכנס את עירך
            </p>
          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >טלפון</p>
          <div>
            <i class="fas  "  v-bind:class="[{ 'fa-spin': focusedPhone}, focusedPhone ? 'fa-sync-alt':iconS]" ></i>
            <input
                    type="text"
                    placeholder="טלפון"
                    id="phone"
                    ref="phone"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-model.trim="phone"
                    @input="$v.phone.$touch()"
                    :class="{ 'error': $v.phone.$error, 'inputName': true }">
            <div class="error-wrapper" v-if="$v.phone.$dirty">
              <p class="error-message" v-if="!$v.phone.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.phone.regexp"> <!--Phone is invalid -->
                הטלפון שהוזן לא תקין
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >שם העסק</p>
          <input
                  type="text"
                  placeholder="שם העסק"
                  v-model.trim="company"
                  @input="$v.company.$touch()"
                  :class="{ 'error': $v.company.$error, 'inputName': true }">
          <div class="error-wrapper" v-if="$v.company.$dirty">
            <p class="error-message" v-if="!$v.company.required">
              שדה נדרש
            </p>
          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >טלפון עסקי</p>
          <input type="text"
                 placeholder="טלפון עסקי"
                 v-model.trim="businessPhone"
                 @input="$v.businessPhone.$touch()"
                 :class="{ 'error': $v.businessPhone.$error, 'inputName': true }">
          <div class="error-wrapper" v-if="$v.businessPhone.$dirty">
            <p class="error-message" v-if="!$v.businessPhone.required">
              שדה נדרש
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="selectWrapper">
          <p class="formItem">איזור עבודה</p>
          <drop-down
                  placeholder="איזור עבודה"
                  v-model="workArea.value"
                  v-bind="workArea"
                  @input="$v.workArea.value.$touch()"
                  :class="{ 'error': $v.workArea.value.$error, 'dropDown': true }"
          />
          <div class="error-wrapper" v-if="$v.workArea.value.$dirty">
            <p class="error-message" v-if="!$v.workArea.value.required">
              שדה נדרש
            </p>
          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >כתובת</p>
          <vue-google-autocomplete
            ref="addressAutoComplete"
            id="map"
            :class="{ 'error': $v.address.$error, 'inputName': true }"
            @input="$v.address.$touch()"
            placeholder="כתובת"
            v-on:change="getAddressData"
            country="il"
          />
          <div class="error-wrapper" v-if="$v.adress">
            <p class="error-message" v-if="!$v.address.required">
              שדה נדרש
            </p>
          </div>
        </div>

      </div>
      <div class="wrapper">

        <div class="selectWrapper"  v-if="role==='worker'">
          <p class="formItem">קטגוריות</p>
          <drop-down
                  :class="{ 'error': $v.categories.value.$error, 'dropDown': true }"
                      placeholder="קטגוריות"
                     v-model="categories.value"
                     v-bind="categories"
                  @input="$v.categories.value.$touch()"
          />
          <div class="error-wrapper" v-if="$v.categories.value.$dirty">
            <p class="error-message" v-if="!$v.categories.value.required">
              שדה נדרש
            </p>
          </div>
        </div>

        <div class="selectWrapper" v-if="role==='worker'" @click="showWarn">
          <p class="formItem">    קטגוריות משנה</p>
          <theme-multiselect
                  v-bind="subcategories"
                  v-model="subcategories.value"
                  :class="{ 'error': subcatFlag || $v.subcategories.value.$error, 'less-rounded-corners': true, 'dropDown': true, 'dropdown':true,}"
          />
          <div class="error-wrapper" v-if="$v.subcategories.value.$dirty">
            <p class="error-message" v-if="!$v.subcategories.value.required">
              שדה נדרש
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >סיסמה (יותר מ-6 סמלים)</p>
          <input
                  type="password"
                  placeholder="סיסמה חדשה"
                  v-model.trim.lazy="pass"
                  :class="{ 'error': $v.pass.$error, 'inputName': true }"
          >
          <div class="error-wrapper" v-if="$v.pass.$dirty">
            <p class="error-message" v-if="!$v.pass.required">
              שדה נדרש
            </p>
            <p class="error-message" v-else-if="!$v.pass.minLength">
              <!-- Password must contain more than 6 symbols -->
              הסיסמה חייבת להכיל לפחות 6 ספרות
            </p>
          </div>
        </div>
        <div class="orderWrapper">
          <p class="formItem" >חזור על הסיסמה</p>
          <input
                  type="password"
                  placeholder="חזור על הסיסמה"
                  v-model.trim.lazy="repass"
                  :class="{ 'error': $v.repass.$error, 'inputName': true }"
          >
          <div class="error-wrapper" v-if="$v.repass.$dirty">
            <p class="error-message" v-if="!$v.repass.required">
              שדה נדרש
            </p>
            <p class="error-message" v-else-if="!$v.repass.sameAsPassword">
              <!-- passwords do not match -->
              סיסמאות לא תואמות
            </p>
          </div>
        </div>

      </div>
      <div class="wrapper">
        <div class="check-wrapper">
          <div class="checkbox">
            <input type="checkbox" id="check" value="check" v-model="license">
            <router-link :to="{name:'privacy-policy'}"  target="_blank" for="check">אני מאשר את תנאי השימוש</router-link>
          </div>
            <div class="error-wrapper" v-if="$v.license.$dirty">
              <p class="error-message" v-if="!$v.license.required">
                שדה נדרש
              </p>
            </div>
        </div>
      </div>
    </form>

    <div class="buttons-wrapper">
      <button class="closeB" style="text-align:center" @click="send">שלח</button>
    </div>

  </div>

</template>
<script>
  import Modal from './../../common/Modal.vue';
  import DropDown from './../../common/DropDown.vue';
  import ThemeMultiselect from './../../common/ThemeMultiselect.vue'
  import { required, minLength, requiredIf, sameAs } from "vuelidate/lib/validators";
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
const checkRole =  () => {
  return this.role === 'worker'
};
  export default {
    validations: {
      name:{
        required,
      },
      city:{
        required,
      },
      license:{
        required,
      },
      email:{
        required,
        regexp(){
          let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let  check = regMail.test(this.email);
          return check;
        }
      },
      company:{
        required,
      },
      businessPhone:{
        required,
      },
      // fax:{
      //   required,
      // },
      address: {
        required,
      },
      phone:{
        required,
        regexp(){
          let regex = /^0(\d{9})$/;
          let  check = regex.test(this.phone);
          return check;
        }
      },
      categories:{
        value:{
          required: requiredIf('isOptional'),
        }
      },
      subcategories:{
        value:{
          required: requiredIf('isOptional'),
        }
      },
      workArea:{
        value:{
          required,
        }
      },
      pass:{
        required,
        minLength:minLength(6),
      },
      repass: {
        required,
        sameAsPassword: sameAs('pass'),
      },
    },
    methods: {
      getAddressData(addressData, placeResultData, id){
        //console.log({addressData, placeResultData, id});
        //console.log(this.$refs.addressAutoComplete.autocompleteText);
        this.address = this.$refs.addressAutoComplete.autocompleteText;
      },
      close() {
        this.$store.commit('modals/reg/close');
      },
      send() {
        console.log('yoba');
        this.$v.name.$touch();
        this.$v.company.$touch();
        this.$v.businessPhone.$touch();
        //this.$v.fax.$touch();
        this.$v.email.$touch();
        this.$v.phone.$touch();
        this.$v.license.$touch();
        this.$v.city.$touch();
        this.$v.address.$touch();
        this.$v.workArea.value.$touch();
        this.$v.pass.$touch();
        this.$v.repass.$touch();

        if (this.role==='worker'){
          this.$v.categories.value.$touch();
          this.$v.subcategories.value.$touch();
        }
        console.log(this.$v);
        if(!this.$v.$invalid  ) {
          let subcat = [];
          if (this.role === 'worker') {

            console.log(this.subcategories.value);
            this.subcategories.value.forEach((item) => {
              subcat.push(item.id);
            });
          }
          this.$emit('send', {
            name: this.name,
            email: this.email,
            phone: this.phone,
            business_phone: this.businessPhone,
            name_of_business: this.company,
            fax: '0',
            address: this.address,
            city: this.city,
            working_area: this.workArea.value,
            password: this.pass,
            category_id: this.categories.value,
            password_confirmation: this.pass,
            subcategories: subcat,
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
        let  check = regMail.test(this.email);
        return this.changeIcon(check);
      },
      checkPhone(){
        let regMail = /^0(\d{9})$/;
        let check = regMail.test(this.phone);
        return this.changeIcon(check);
      },
      changeIcon(value){
        if (value){
          return 'fa-check'
        } else {
          return  'fa-times'
        }
      },
      showWarn(){
       if(this.categories.value === ''){
         this.subcatFlag = true;
       } else {
         this.subcatFlag = false;
       }
      }
    },
    components: {
      Modal,
      DropDown,
      ThemeMultiselect,
      VueGoogleAutocomplete,
    },
    props: {
      role: {
        type: String,
      }
    },
    watch: {
      'categories.value'(){
        this.subcategories.disabled = false;
        this.subcategories.value = [];
        this.subcategories.items = this.getSubcategories;
      }
    },


    data : function () {
      return {
        focusedMail: false,
        focusedPhone: false,
        icon: "fa-sync-alt",
        iconS: 'fa-sync-alt',
        modal:2,
        name: '',
        email:'',
        license: '',
        phone: '',
        businessPhone : '',
        fax: '',
        address: '',
        company: '',
        city: '',
        check: '',
        pass: '',
        repass: '',
        categories: {
          items: [

          ],
          value: '',
          labelKey: 'name',
          valueKey: 'id',
        },
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
        source: '',
        subcategories: {
          placeholder: 'קטגוריות משנה',
          labelKey: 'name',
          items: [],
          value: [],
          disabled: true,
        },
        subcatFlag : false,
      }
    },
    computed: {
      getCategories(){
        if (this.$store.getters['categories/isLoaded']) {
          return this.$store.getters['categories/data'];
        } else {
          return [];
        }
      },
      getSubcategories(){
        if (this.$store.getters['categories/isLoaded']) {
          return this.$store.getters['categories/getSubCategoriesById'](this.categories.value);
        } else {
          return [];
        }
      },
      isOptional() {
        return this.checkRole() // some conditional logic here...
      }
    },

    mounted() {
      this.categories.items = this.getCategories;
    }
  }
</script>

<style lang="scss" scoped>
  .error-wrapper-block{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 545px;
    @media screen and (max-width:900px){
      width: unset;
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
  .contentW{
    margin-bottom: 49px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Assistant;
    width: 810px;
    @media screen and (max-width: 700px){

    }
    .title{
      text-align: center;
      margin: 0;
      margin-top: 30px;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
      @media screen and (max-width:600px) {
        margin-top: 46px;
        font-size: 31px;
      }
    }
    .projectName{
      text-align: center;
      margin: 0;
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
        @media screen and (max-width: 900px) {
          flex-direction: column-reverse;
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
          }
        }
        .selectWrapper{
          margin: 0px 9px 0 11px;
        }
      }
      hr{

        width: 90%;
        color: #80808030;
        @media screen and (max-width: 900px) {
          margin-top: 20px;
        }
      }
    }
  }
  .textareaWrapper{
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
    width: 345.28px;
    height: 41.47px;
    background: #FFFFFF;
    opacity: 0.5;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    @media screen and (max-width: 900px) {
      height: 41.47px;
    }
    @media screen and (max-width: 480px) {
      width: 300.28px;
    }
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
      @media screen and (max-width: 900px) {
        margin: unset;
      }
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
    @media screen and (max-width: 900px){
      margin-left: 50px;
      width: 209px;
    }
    a{
      text-decoration: underline;
      color: #333333;
    }
  }
  .last-field{
    display: flex;
    flex-direction: row;
    width: 727px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: unset;
    }
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
    a{
      color: #333333;
      text-decoration: none;
    }
  }

  div{
    position: relative;
    .fas {
      position: absolute;
      left: 18px;
      top: 9px;
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
  .dropDown{
    border-radius: 5px;
    width: 345px;
    @media screen and (max-width: 900px) {
      height: 41.47px;
    }

    @media screen and (max-width: 480px) {
      width: 304px;
    }
  }
  .dropDown >>> .arr {
    @media screen and (max-width: 480px) {
      right: 267px;
    }
  }

</style>
