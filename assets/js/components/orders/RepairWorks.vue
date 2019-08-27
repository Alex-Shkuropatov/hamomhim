<template>

  <div class="repair-wrapper">
    <h2 class="title">תורקתו סבג תודובע</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
 <div class="form-wrapper">
   <form class="form" action="">
     <div class="row">
     </div>
     <div class="row-wrapper">
      <div class="row">
        <p class="formItem" >המוק הזיא</p>
        <input type="text" placeholder="המוק הזיא" v-model="sex" class="inputName">
      </div>
         <div class="row" >
       <p class="formItem" >םירדח המכ</p>
       <input type="text" placeholder="םירדח המכ" v-model="rooms" class="inputName">
     </div>
     </div>
     <div class="row-wrapper">
       <div class="row" >
         <p class="formItem" > ץופיש רוזיא</p>
         <input type="text" placeholder="ץופיש רוזיא" v-model="area" class="inputName">
       </div>
       <div class="row" >
         <p class="formItem" >ךרעב הרידה חטש</p>
         <input type="text" placeholder="ךרעב הרידה חטש" v-model="apartments" class="inputName">
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
       <textarea name="text" id="" cols="30" placeholder="ץופישה תודוא ןלבקל תורעהו טסקט םושרל ולכות ןאכ..." rows="10">

       </textarea>
     </div>
     <button class="next-b th-btn th-btn-blue th-btn-md"><span>Next</span></button>
   </form>
 </div>
  </div>

</template>

<script>
import Document from './../orders/Document'

  export default {
    data(){
      return {
        files: [],
        currentFile: '',
        formData: new FormData(),
        sex: '',
        rooms: '',
        area: '',
        apartments: '',
        isDisabled: true,
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

    },
    mounted() {
    },
    components: {
      Document,
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
    margin-top: -41px;
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
  .row-wrapper{

    display: flex;
    flex-direction: row;
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
       width: 487px;
       height: 65px;
       border: 1px solid #E0E0E0;
       box-sizing: border-box;
       box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
       border-radius: 50px;
     }
    }
  }
}
.upload{
  margin-right: 40px;
}
  .add-files{
    display: flex;
    width: 940px;
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
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
        padding-top: 10px;
        padding-right: 20px;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        width: 1070px;
        height: 239px;
      }
    }
  }
  .next-b{
    margin-top: 70px ;
    width: 374px;
    height: 74.49px;
  }
</style>