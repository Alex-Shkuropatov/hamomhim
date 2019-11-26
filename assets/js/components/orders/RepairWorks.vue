<template>
  <div class="repair-wrapper">
    <h2 class="title">פירוט אודות העבודה</h2>
    <h4 class="description">נא מלאו את הפרטים הבאים</h4>
 <div class="form-wrapper">
   <form class="form" action="">
     <div class="row-wrapper">
       <div class="row" >
         <p class="formItem" > איזור שיפוץ</p>
         <div class="selectWrapper ">
           <drop-down
                   placeholder="אזור עבודה"
                   v-model="workArea.value"
                   v-bind="workArea"
                   @input="$v.workArea.value.$touch()"
                   :class="{ 'error': $v.workArea.value.$error, 'dropDown inputName': true }"
           />
           <div class="error-wrapper" v-if="$v.workArea.value.$dirty">
             <p class="error-message" v-if="!$v.workArea.value.required">
               שדה נדרש
             </p>
           </div>
         </div>
       </div>
       <div class="row" >
         <p class="formItem" >שם מלא</p>
         <input
                 type="text"
                 placeholder="שם מלא"
                 v-model.trim="formData.name"
                 @input="$v.formData.name.$touch()"
                 :class="{ 'error': $v.formData.name.$error, 'dropDown inputName': true }"
         >
         <div class="error-wrapper" v-if="$v.formData.name.$dirty">
           <p class="error-message" v-if="!$v.formData.name.required">
             שדה נדרש
           </p>
           <p class="error-message" v-else-if="!$v.formData.name.maxLength">
             Description must contain less than 50 symbols
           </p>
         </div>
       </div>
     </div>
     <div class="add-files">
       <div class="title">נא בחר קבצים עבור העבודה</div>
       <div class="row">
         <div class="upload-element">
           <span>העלאת קבצים</span>
           <label for="file-upload" class="custom-file-upload addPhoto">
             <div class="th-btn th-btn-blue th-btn-md upload" >העלאת תמונות</div>
           </label>
           <input
                   id="file-upload"
                  type="file"
                  @change="previewFiles"
                  accept="image/*,
                  application/msword
                  application/vnd.ms-powerpoint,
                  text/plain,
                  application/pdf,
                  application/vnd.ms-excel,
                  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
           />
           <i class="fas fa-cloud-upload-alt"></i>
         </div>
       </div>
     </div>
     <div class="document-wrapper">
       <document
               v-bind:file="file"
               v-for="(file) in files"
               @close="closeD"
               :key="file.id"
       />
     </div>
     <div class="row">
       <div class="title">תיאור חופשי</div>
       <textarea
               v-model.trim="formData.description"
               name="text"
               @input="$v.formData.description.$touch()"
               :class="{ 'error': $v.formData.description.$error }"
               cols="30"
               placeholder=" כאן תוכלו פירוט עבור העבודה..."
               rows="10"
       >
       </textarea>
       <div class="error-wrapper" v-if="$v.formData.description.$dirty">
         <p class="error-message" v-if="!$v.formData.description.required">
           שדה נדרש
         </p>
         <p class="error-message" v-else-if="!$v.formData.description.minLength">
           Description must contain more than 10 symbols
         </p>
         <p class="error-message" v-else-if="!$v.formData.description.maxLength">
           Description must contain less than 150 symbols
         </p>
       </div>
     </div>
     <button
       class="next-b th-btn th-btn-blue th-btn-md"
       v-bind:disabled="spinFlag"
       @click.prevent="sendOrder">
       <i v-show="spinFlag" class="fas fa-spinner fa-spin"></i>
       <span id="sendBid">   לשלב הבא</span>
     </button>
   </form>
 </div>
  </div>
</template>

<script>
import Document from './../orders/Document'
import DropDown from './../common/DropDown'
import { required, minLength, maxLength} from "vuelidate/lib/validators";

  export default {
  validations:{
workArea: {
  value:{
    required,
  }
},
    formData:{
  name:{
    required,
    maxLength: maxLength(50),
  },
      description: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(150),

      }
  }
  },
    data(){
      return {
        files: [],
        currentFile: '',
        formData: {
          name: '',
          description: '',
        },
        isDisabled: true,
        spinFlag: false,
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
      }
    },
    methods: {
      previewFiles(event) {
        let file = event.target.files[0];
        this.currentFile = file;
        this.currentFile.id = generateGuid();
        this.upload(event);
      },
      upload (e){
        e.preventDefault();
       this.files.push(this.currentFile);
        this.isDisabled=!this.isDisabled;
      },
      closeD(data){
        this.files = this.files.filter(file => file.id !== data.id);
      },
      sendOrder(){
        this.$v.workArea.value.$touch();
        this.$v.formData.name.$touch();
        this.$v.formData.description.$touch();

        if(!this.$v.$invalid) {
            this.spinFlag = true;
          let myFormData = new FormData();
          for (let i = 0; i < this.files.length; i++) {
            myFormData.append('files[]', this.files[i]);
          }
          myFormData.append('name', this.formData.name);
          myFormData.append('description', this.formData.description);
          myFormData.append('work_area', this.workArea.value);


          this.$emit('send', myFormData)
        }
      },
    },
    mounted() {
    },
    components: {
      Document,
      DropDown
    }
  }
</script>

<style lang="scss" scoped >
  .next-b{
    margin-top: 32px;
    margin-bottom:50px;
    width: 295.06px;
    height: 58.18px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    padding: 0px;
    display: inline-block;
    text-align: center;
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
    margin-right: 545px;
    margin-top: -34px;
    color: #2871D7;
    display: block;
    cursor: pointer;
    @media screen and (max-width:1440px){
      margin-right: 486px;
    }
    @media screen and (max-width: 767px){
      margin-right: 210px;
    }
    @media screen and (max-width:480px){
      margin-right: -50px;
    }
  }
  .fa-cloud-upload-alt{
    margin-top: -76px;
    margin-right: -39px;
    color: #3269B6;
    @media screen and (max-width:480px) {
      margin-top: -141px;
      margin-right: -37px;
    }
  }
  .repair-wrapper{
    margin-top: 50px;
    .title{
      font-weight: bold;
      font-size: 48px;
      line-height: 40px;
      text-align: center;
      color: #333333;
      margin: 0;
      @media screen and (max-width:1340px){
        font-size: 40px;
      }

      @media screen and (max-width:1340px){
        font-size: 40px;
      }

      @media screen and (max-width:1023px){
        font-size: 31px;
      }
      @media screen and (max-width:767px){
        font-size: 27px;
      }
    }
    .description{
      font-size: 36px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
      margin: 0;
      @media screen and (max-width:1023px){
        font-size: 25px;
      }
      @media screen and (max-width:767px){
        font-size: 20px;
      }
    }
  }
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  @media screen and (max-width:1440px) {
    width: 710px;
  }
  @media screen and (max-width:767px) {
    width: 510px;
  }
  @media screen and (max-width:480px) {
    width: 318px;
  }
  .row-wrapper{

    display: flex;
    flex-direction: row;
    @media screen and (max-width:767px) {
      flex-direction: column;
    }
    .row{
      .formItem{
        margin: 0;
        margin-right: 20px;
        font-weight: bold;
        font-size: 24px;
        line-height: 65px;
        text-align: right;
        color: #333333;
      }
      margin: 10px;
     input{
       padding-right: 20px;
       width: 372px;
       height: 42px;
       border: 1px solid #E0E0E0;
       box-sizing: border-box;
       box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
       border-radius: 5px;
       @media screen and (max-width:1440px) {
         width: 333px;
       }
       @media screen and (max-width:767px) {
         width: 367px;
       }
       @media screen and (max-width:480px) {
         width: 300px;
         height: 40px;
       }

     }
    }
  }
}
.upload{
  border-radius: 5px;
  @media screen and (max-width: 480px){
    margin: 47px 70px 0 0 ;

  }
}
  .add-files{
    display: flex;
    width: 762px;
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width:1440px) {
      width:705px;
    }
    @media screen and (max-width:1340px){
      width:661px;
    }
    @media screen and (max-width:1340px){
      width:661px;
    }
    @media screen and (max-width:767px){
      width: 394px;
    }
    @media screen and (max-width:480px){
      width: 246px;
    }

    .title{
      font-weight: bold;
      font-size: 24px;
      text-align: right;
      color: #333333;
    }
    .row{
      display: flex;
      flex-direction: row-reverse;
      font-size: 24px;
      text-align: right;
      color: #000000;
      @media screen and (max-width: 480px){
        flex-direction: column-reverse;
        align-items: center;
      }
      .upload-element{
        margin-right: 26px;
      }
    }
  }
  .document-wrapper{
    margin-top: 15px;
  }
  .form{
    margin-bottom: 100px;
    .row{

      .title{
        font-weight: bold;
        font-size: 24px;
        text-align: right;
        color: #333333;
        margin-right: 59px;
      }
      textarea {
        resize: none;
        margin: 0 auto;
        padding-top: 10px;
        padding-right: 20px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        width: 1070px;
        height: 239px;
        @media screen and (max-width:1440px) {
          width: 600px;
          height: 200px;
        }
        @media screen and (max-width:767px) {
          width: 450px;
        }
        @media screen and (max-width:480px) {
          width: 300px;
          height: 100px;
        }
      }
    }
  }
  .next-b{
    margin-top: 40px ;
    width: 1070px;
    height: 74.49px;
    border-radius: 5px;
    @media screen and (max-width:1440px){
      width: 600px;
    }
    @media screen and (max-width:767px){
      width: 450px;
    }
    @media screen and (max-width:480px) {
      width: 200px;
      height: 50px;
     margin: unset;
      margin-top: 50px;
    }
  }
  .selectWrapper{
    .inputName{
      width: 367px;
      border-radius: 5px;
      @media screen and (max-width: 480px) {
        width: 300px;
      }
    }
  }
</style>