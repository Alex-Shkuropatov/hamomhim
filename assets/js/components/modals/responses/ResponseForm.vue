<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/responseForm/isOpened']" @close="close">
    <div class="content-wrapper">
        <h2 class="title">טקייורפה םש</h2>
        <div class="subtitle">נתוני אדריכל</div>
        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">Description</div>
            <theme-textarea v-model="comment" placeholder="comment"></theme-textarea>
          </div>
        </div>
        <div class="popup-form-row">

        </div>
        <div class="popup-form-row two-buttons">
          <button class="th-btn th-btn-md wide th-btn-blue">send</button>
          <button class="th-btn th-btn-md wide th-btn-gray">close</button>
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

export default {
  methods: {
    close() {
      this.$store.commit('modals/responseForm/close');
    },
  },
  components: {
    Modal,
    DropDown,
    ThemeInput,
    ThemeTextarea
  },
  data() {
    return {
      name: '',
      phone: '',
      comment: '',
    }
  },
  computed: {

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
