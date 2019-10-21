<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/responseForm/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">שם הפרויקט</h2>
        <div class="subtitle">נתוני אדריכל</div>
        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">תיאור</div>
            <theme-textarea   v-model="description" placeholder="תיאור"></theme-textarea>
          </div>
        </div>
        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">מסמכים</div>
            <file-upload-multiple v-model="files"></file-upload-multiple>
          </div>
        </div>
        <div class="popup-form-row two-buttons">
          <button class="th-btn th-btn-md wide th-btn-blue" @click="addResponse">שלח הצעה</button>
          <button class="th-btn th-btn-md wide th-btn-gray" @click="close">חזור אחורה</button>
        </div>
      </div>
    </modal>
    </transition>
</template>

<script>
import Modal from '../../common/Modal.vue'
import DropDown from '../../common/DropDown.vue'
import ThemeInput from '../../common/ThemeInput.vue'
import ThemeTextarea from '../../common/ThemeTextarea.vue'
import FileUploadMultiple from '../../common/FileUploadMultiple.vue'

export default {
  data(){
    return {

    }
  },
  methods: {
    close() {
      this.$store.commit('modals/responseForm/close');
    },
  },
  components: {
    Modal,
    DropDown,
    ThemeInput,
    ThemeTextarea,
    FileUploadMultiple
  },
  data() {
    return {
      description: '',
      files: [],
    }
  },
  methods: {
    addResponse(){
      var formData = new FormData();
      formData.append('order_id', this.$store.getters['modals/responseForm/getOrderId']);
      formData.append('author_id', this.$store.getters['user/getField']('id'));
      formData.append('description', this.description);
      for(let i = 0; i < this.files.length; i++){
        formData.append('files[]', this.files[i].file);
      }

      axios.post('api/addResponse', formData)
        .then(response => {
          if(response.data.success){
            this.$emit('request:delete', this.$store.getters['modals/responseForm/getOrderId']);
            this.close();
          }
          else{
            alert(response.data.message);
          }
        });
    },
    close() {
      this.description = '';
      this.files = [];
      this.$store.commit('modals/responseForm/close');
    },
  },
  mounted(){
  },
  destroyed(){

  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';

.two-buttons{
  margin-top: 20px;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
}
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
