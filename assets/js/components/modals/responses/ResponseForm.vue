<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/responseForm/isOpened']" @close="close">
    <div class="content-wrapper third-message">
        <h2 class="title">טקייורפה םש</h2>
        <div class="subtitle">נתוני אדריכל</div>
        <!-- <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">סוג התמחות</div>
            <drop-down v-bind="catSelect" :items="categories"></drop-down>
          </div>
          <div class="col1-2 inp-group">
            <div class="label">קטגוריות משנה</div>
            <drop-down v-bind="catSelect" :items="categories"></drop-down>
          </div>
          <div class="col1-2 inp-group">
            <div class="label">איזור עבודה</div>
            <drop-down v-bind="catSelect" :items="categories"></drop-down>
          </div>
        </div> -->
    </div>
    </modal>
    </transition>
</template>

<script>
import Modal from '../../common/Modal.vue'
import DropDown from '../../common/DropDown.vue'

export default {
  methods: {
    close() {
      this.$store.commit('modals/responseForm/close');
    },
  },
  components: {
    Modal,
    DropDown
  },
  data: function () {
    return {
      catSelect: {
        value: '',
        placeholder : '',
        labelKey: 'name',
      }
    }
  },
  computed: {
    categories(){
      return this.$store.getters['categories/data'];
    }
  },
  mounted(){
  },
  destroyed(){

  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';

.content-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 20px;
  width: 600px;
  @media screen and (max-width: 650px) {
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 315px;
  }
  .title{
      margin:0;
      margin-top: 27px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
  }
  .subtitle{
    color: #828282;
    font-size: ceil($scale1 * 24px);
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
