<template>
<div class="wrapper">
  <categories-slider @category:select='onCategory' />

  <div class="servives-wrapper" @send='OnCategories'  >
    <img class="img-plan" src='/static/images/orders/AddOrderBg.png' alt="">
    <h2 class="title">םיתוריש ץופיש</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
    <div class="services">
      <div class="service-wrapper">
        <div class="service" v-for="(subcategory, index) in getSubcategory" :key="index">
          <div class="checkbox">
            <label class="container">{{subcategory.name}}
              <input type="checkbox" :value="subcategory.id"  v-model="checkedServices">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

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
            <p class="formItem" >שם מלא</p>
            <input type="text" placeholder="שם מלא" v-model="name" class="inputName">
          </div>
        </div>
        <div class="add-files">
          <div class="title">םיטנוולר םיצבק רחב אנ</div>
          <div class="row">
            <div class="upload-element">
              <span>םיפסונ םיצבק תאלעה</span>
              <label for="file-upload" class="custom-file-upload addPhoto">
                <div class="th-btn th-btn-blue th-btn-md upload" >העלאת תמונות</div>
              </label>
              <input
                      id="file-upload"
                      type="file"
                      @change="previewFiles"
                      accept="image/x-png,image/gif,image/jpeg,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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
          <textarea v-model="description" name="text" id="" cols="30" placeholder="ץופישה תודוא ןלבקל תורעהו טסקט םושרל ולכות ןאכ..." rows="10">
       </textarea>
        </div>
        <button class="next-b th-btn th-btn-blue th-btn-md" @click.prevent="sendOrder"><span>לשלב הבא</span></button>
      </form>
    </div>
  </div>

</div>

</template>

<script>
import CategoriesSlider from '../components/index/CategoriesSlider.vue'
import Document from '../components/orders/Document'
import DropDown from '../components/common/DropDown'

export default {
  data() {
    return {
      files: [],
      name: '',
      description: '',
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
      subcategories: [],
      checkedServices: [],
      categoryId: '',
      deleted_files: [],
    };
  },
  components: {
    CategoriesSlider,
    Document,
    DropDown,
  },
  methods:{
    onCategory(data){
      this.subcategories = data.subcategories;
      this.categoryId = data.id;
      this.checkedServices= [];
    },
    OnCategories(data){
      this.showWorks= true;
      this.checked = data.checked;
    },
    onForm(data){
     for(let i=0; i<this.checked.length; i++){
       data.append('subcategories[]', this.checked[i]);
     }
      data.append('categoryId', this.category.id);
      data.append('projectId', this.$route.params.id);

      axios.post('/api/changeOrder', data ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
          .then((response) => {
            console.log(response);
            this.$router.push({ name: 'orders' });
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    },
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
      this.deleted_files.push(data.id);
    },
    sendOrder(){
      let myFormData = new FormData();
      for(let i=0; i<this.files.length; i++){
        myFormData.append('files[]', this.files[i]);
      }
      for(let i=0; i<this.deleted_files.length; i++){
        myFormData.append('deleted_files[]', this.deleted_files[i]);
      }
      for(let i=0; i<this.checkedServices.length; i++){
        myFormData.append('subcategories[]', this.checkedServices[i]);
      }
      myFormData.append('order_id', this.$route.params.orderId);
      myFormData.append('categoryId',this.categoryId);
      myFormData.append('name', this.name);
      myFormData.append('description', this.description);
      myFormData.append('work_area', this.workArea.value);

      axios.post('/api/changeOrder', myFormData)
          .then((response)=>{
            console.log(response);
            this.deleted_files= [];
            this.$router.push({ name: 'orders' });
          }).catch(()=>{
            console.log(error);
      })
    },
  },
  computed: {
    getSubcategory(){
      if(this.$store.getters['categories/isLoaded'] && this.categoryId!==''){
        return this.$store.getters['categories/getSubCategoriesById'](this.categoryId)
      }
    }
  },
  mounted() {
    console.log(this.$route.params.orderId);
    axios.post('/api/getSingleOrder',{'id' : this.$route.params.orderId})
        .then((response)=>{
          console.log(response);
          this.categoryId = response.data.value.category.id;
          response.data.value.subcategories.forEach((subcat,index)=>{
            this.checkedServices[index]= subcat.id;
          });
          this.name = response.data.value.name;
          this.description = response.data.value.description;
          this.workArea.value = response.data.value.work_area;
          this.files = response.data.value.files;

        }).catch((error)=>{
          console.log(error);
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
padding-top: 20px;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 7px;
  right: -40px;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: white;
  border: 1px solid gray;
  opacity: 0.6;
  border-radius: 2px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid blue;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.servives-wrapper{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-plan{
    position: absolute;
    left: -71px;
    top: 62px;
    @media screen and (max-width:1400px){
      width: 355px;
    }
    @media screen and (max-width:1240px){
      display: none;
    }
  }
  .title{
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
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
    margin:0;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;
    @media screen and (max-width:1023px){
      font-size: 25px;
    }
    @media screen and (max-width:767px){
      font-size: 20px;
    }
  }
  .services{
    padding: 50px 100px 50px 100px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1099px;
    height: auto;
    @media screen and (max-width: 1440px) {
      width: 700px;
    }
    @media screen and (max-width: 767px) {
      width: 510px;
    }
    @media screen and (max-width: 480px) {
      width: 318px;
    }
    .service-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap:wrap;
      width: 80%;
      margin-right: 55px;
      @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 300px;
      }
      .service{
        label{
          font-family: Rubik;
          font-size: 24px;
          line-height: 40px;
          text-align: center;
          letter-spacing: -0.02em;
          color: #000000;
        }
      }
    }
    .next-b{
      margin-top: 32px;
      margin-bottom:50px;
      width: 1070px;
      height: 74.49px;
      border-radius: 5px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      font-weight: bold;
      font-size: 24px;
      padding: 0px;
      display: inline-block;
      text-align: center;
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
  }
}
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
    border-radius: 5px;
    width: 367px;
    @media screen and (max-width: 480px) {
      width: 300px;
    }
  }
}
</style>
