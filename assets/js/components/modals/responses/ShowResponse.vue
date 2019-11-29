<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/responseForm/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">שם הפרויקט</h2>
        <div class="subtitle">נתוני אדריכל</div>
        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">תיאור</div>
            <theme-textarea   v-model="description" disabled placeholder="תיאור"></theme-textarea>
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
  methods: {
    close() {
      this.$store.commit('modals/showResponse/close');
    },
  },
  components: {
    Modal,
    DropDown,
    ThemeInput,
    ThemeTextarea,
    FileUploadMultiple
  },
  props: {
    description: {
      type: String,
      default: ''
    },
    files: {
      type: Array,
      default: function(){
        return [];
      }
    },
  },
  methods: {
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
  @media screen and (max-width: 480px){
    justify-content: center;
  }
  button{
    @media screen and (max-width: 480px){
      margin: 5px 0;
    }
  }
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
