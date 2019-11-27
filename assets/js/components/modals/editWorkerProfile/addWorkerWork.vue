<template>
    <modal @close="close">
      <div class="content-wrapper">
        <h2 class="title clr-blue">הוסף גלריה \ פרויקט חדש </h2>

        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">שם הפרויקט </div>
            <theme-input
                    @input="$v.name.$touch()"
                    v-model.trim="name"
                    placeholder="שם הפרויקט"
                    :class="{ 'error': $v.name.$error, 'less-rounded-corners': true }"
            ></theme-input>
          </div>
          <div class="col1-1 inp-group">
            <div class="label">תיאור</div>
            <theme-textarea
                    v-model.trim="description"
                    @input="$v.description.$touch()"
                    placeholder="תיאור"
                    :class="{ 'error': $v.description.$error }"
            ></theme-textarea>
          </div>
          <div class="col1-1 inp-group">
            <div class="files-list w-100">
              <label class="add-new-file">
                <div class="image w-100"  :style="[ flag===false ? {border: '2px solid red'} : ''  ]" ></div>
                <div class="th-btn th-btn-blue w-100">העלאת תמונה</div>
                <input type="file" multiple @change="onFileUpload($event.target.files)">
              </label>
              <div class="item" v-for="file in files" :key="">
                <div class="image" :style="getBackgoroundImage(file)"></div>
                <div class="th-btn th-btn-empty w-100" @click="deleteFile(file)">העלאת תמונה</div>
              </div>
            </div>
          </div>
          <div class="col1-1 inp-group text-center">
            <button class="th-btn th-btn-blue th-btn-lg submit-btn" @click.prevent="saveWorkItem">הוסף לאתר</button>
          </div>
        </div>
      </div>
    </modal>
</template>

<script>
import Modal from '../../common/Modal';
import ThemeInput from '../../common/ThemeInput';
import ThemeTextarea from '../../common/ThemeTextarea';
import { required } from "vuelidate/lib/validators";

function getInitialData(){

  return {
    id: '',
    name: '',
    description: '',
    files: [],
    deleted_files: [],
    flag: true,
  }
}

export default {
  validations:{
    name:{
      required,
    },
    description:{
      required,
    },
  },
  data(){
    return getInitialData();
  },
  methods: {
    close() {
      Object.assign(this.$data, getInitialData());
      this.$store.commit('modals/addWorkerWork/close');
    },
    onFileUpload(files){
      [...files].forEach(file => {
        this.fileToBase64(file);
      });
    },
    fileToBase64(file){
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        //push files
        this.files.push({
          id: generateGuid(),
          status: 'new',
          src: reader.result,
          value: file
        });
      }, false);
      reader.readAsDataURL(file);
    },
    deleteFile(file){
      if(!file.hasOwnProperty('status')){
        this.deleted_files.push(file);
        this.files = this.files.filter(e => e !== file);
      }
      else{
        this.files = this.files.filter(e => e.id !== file.id);
      }

    },
    getBackgoroundImage(file){
      let src = '';
      if(file.hasOwnProperty('src')){
        src = file.src;
      }
      else{
        src = this.$env.API_URL+file;
      }
      return { backgroundImage: 'url('+src+')'};
    },
    saveWorkItem() {
      this.$v.name.$touch();
      this.$v.description.$touch();

      if (this.files.length===0){
        this.flag=false;
      } else {
        this.flag=true;
      if (!this.$v.$invalid) {
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('description', this.description);
        this.files.forEach(file => {
          //if it's not old file
          if (typeof file !== 'string') {
            formData.append('images[]', file.value, file.value.name);
          }
        });
        this.deleted_files.forEach(file => {
          formData.append('deleted_images[]', file);
        });
        let route = '/api/addNewWorkerWork';
        if (!isNaN(+this.id)) {
          route = '/api/editWorkerWork';
          formData.append('id', this.id);
        }
        axios.post(route, formData)
            .then(response => {
              if (response.data.success) {
                if (isNaN(+this.id)) {
                  this.$emit('add:work', response.data.value);
                } else {
                  this.$emit('update:work', response.data.value);
                }
                this.close();
              } else {
                alert(response.data.errors.join('.'));
              }
            });
      }
    }
    }
  },
  components: {
    Modal,
    ThemeInput,
    ThemeTextarea,
  },
  computed: {

  },
  mounted() {
    //get data to display
    let data = this.$store.getters['modals/addWorkerWork/getData'];
    console.log('mounted');

    this.id = data.id || generateGuid();
    this.name = data.name;
    this.description = data.description;
    if(data.images){
      this.files = [...data.images];
    }
  }

}
</script>

<style lang="scss" scoped>
.item,
.add-new-file{
  margin-bottom: 10px;
  .image{
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    padding-top: 100%;
  }
}
.add-new-file{
  display: block;
  .image{
    background-image: url('/static/images/default/default-image-square-2.svg');
  }
  input{
    display: none;
  }
}
$gutter: 12px;
.files-list{
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  .item,
  .add-new-file{
    margin-right: $gutter;
    margin-left: $gutter;
    width: calc(33.33% - #{$gutter} * 2);
  }
  .th-btn{
    margin-top: 9px;
    justify-content: center;
  }
}
.submit-btn{
  height: 50px;
}

@media (max-width: 768px){
  .files-list{
    .item,
    .add-new-file{
      width: calc(50% - #{$gutter} * 2);
    }
  }
}
</style>
