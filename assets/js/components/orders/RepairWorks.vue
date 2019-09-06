<template>

  <div class="repair-wrapper">
    <h2 class="title">תורקתו סבג תודובע</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
 <div class="form-wrapper">
   <form class="form" action="">
     <div class="row-wrapper">
       <div class="row" >
         <p class="formItem" > ץופיש רוזיא</p>
         <div class="selectWrapper ">
           <drop-down class="dropDown inputName" placeholder="אזור עבודה" v-model="workArea.value" v-bind="workArea"/>
         </div>
       </div>
       <div class="row" >
         <p class="formItem" >ךרעב הרידה חטש</p>
         <input type="text" placeholder="ךרעב הרידה חטש" v-model="formData.name" class="inputName">
       </div>
     </div>
     <div class="add-files">
       <div class="title">םיטנוולר םיצבק רחב אנ</div>
       <div class="row">
         <button class="th-btn th-btn-blue th-btn-md upload" v-bind:disabled="isDisabled" @click="upload">Upload</button>
         <div class="upload-element">
           <span>םיפסונ םיצבק תאלעה</span>
           <label for="file-upload" class="custom-file-upload addPhoto">
             <i class="fas fa-cloud-upload-alt"></i>
           </label>
           <input
                   id="file-upload"
                  type="file"
                  @change="previewFiles"
                  accept="image/x-png,image/gif,image/jpeg,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
           />
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
       <div class="title">תוישפוח תורעה</div>
       <textarea v-model="formData.description" name="text" id="" cols="30" placeholder="ץופישה תודוא ןלבקל תורעהו טסקט םושרל ולכות ןאכ..." rows="10">

       </textarea>
     </div>
     <button class="next-b th-btn th-btn-blue th-btn-md" @click.prevent="sendOrder"><span>Next</span></button>
   </form>
 </div>
  </div>
</template>

<script>
import Document from './../orders/Document'
import DropDown from './../common/DropDown'
  export default {
    data(){
      return {
        files: [],
        currentFile: '',
        formData: {
          name: '',
          description: '',
        },
        isDisabled: true,
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
        this.isDisabled=!this.isDisabled;
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
        let myFormData = new FormData();
        for(let i=0; i<this.files.length; i++){
          myFormData.append('files[]', this.files[i]);
        }
        myFormData.append('name', this.formData.name);
        myFormData.append('description', this.formData.description);
        myFormData.append('work_area', this.workArea.value);

console.log(myFormData);
        this.$emit('send', myFormData)
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
    border-radius: 50px;
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
    margin-right: -35px;
    margin-top: -34px;
    color: #2871D7;
    display: block;
    cursor: pointer;
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
    }
    .description{
      font-size: 36px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
      margin: 0;
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
       border-radius: 50px;
       @media screen and (max-width:1440px) {
         width: 333px;
         height: 60px;
       }
       @media screen and (max-width:767px) {
         width: 450px;
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
  margin-right: 40px;
  @media screen and (max-width: 480px){
    margin: 20px 0 0 0 ;

  }
}
  .add-files{
    display: flex;
    width: 940px;
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width:1440px) {
      width: unset;
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
        margin: 0 auto;
        padding-top: 10px;
        padding-right: 20px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
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
    width: 374px;
    height: 74.49px;
    @media screen and (max-width:480px) {
      width: 200px;
      height: 50px;
     margin: unset;
      margin-top: 50px;
    }
  }
</style>