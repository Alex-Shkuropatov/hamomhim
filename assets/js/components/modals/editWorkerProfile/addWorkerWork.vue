<template>
    <modal @close="close">
      <div class="content-wrapper">
        <h2 class="title clr-blue">הוסף גלריה \ פרויקט חדש </h2>

        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">שם הפרויקט </div>
            <theme-input v-model="name" placeholder="שם הפרויקט" class="less-rounded-corners"></theme-input>
          </div>
          <div class="col1-1 inp-group">
            <div class="label">תיאור</div>
            <theme-textarea v-model="description" placeholder="תיאור"></theme-textarea>
          </div>
          <div class="col1-1 inp-group">
            <div class="files-list w-100">
              <label class="add-new-file">
                <div class="image w-100"></div>
                <div class="th-btn th-btn-blue w-100">העלאת תמונה</div>
                <input type="file" @change="onFileUpload($event.taget.files)">
              </label>
              <div class="item" v-for="file in files" :key="">
                <div class="image" :style="{ backgroundImage: 'url()' }"></div>
                <div class="th-btn th-btn-empty w-100">העלאת תמונה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
</template>

<script>
import Modal from '../../common/Modal';
import ThemeInput from '../../common/ThemeInput';
import ThemeTextarea from '../../common/ThemeTextarea';

export default {
  data(){
    return {
      id: '',
      name: '',
      description: '',
      files: [],
    }
  },
  methods: {
    close() {
      this.$store.commit('modals/addWorkerWork/close');
    },
    onFileUpload(files){

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
    let data = this.$store.getters['modals/addWorkerWork/data'];
    console.log(data);
    this.id = data.id ? data.id : generateGuid();
    this.id = data.id || generateGuid();

    this.name = data.name;
    this.description = data.description;
    this.files = data.files;
  }
}
</script>

<style lang="scss" scoped>

.add-new-file{
  display: block;
  .image{
    background: url('/static/images/default/default-image-square-2.svg') no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
    padding-top: 100%;
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
</style>
