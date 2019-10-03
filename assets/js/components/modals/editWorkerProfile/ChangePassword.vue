<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/changePassword/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">Change password</h2>
        <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">סיסמה נוכחית</div>
            <theme-input v-model="curPass" placeholder="סיסמה נוכחית" />
          </div>
          <div class="col1-2 inp-group">
            <div class="label">אימייל</div>
            <theme-input v-model="email" placeholder="אימייל" />
          </div>
        </div>
        <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">סיסמה חדשה</div>
            <theme-input v-model="newPass" placeholder="סיסמה חדשה" />
          </div>
          <div class="col1-2 inp-group">
            <div class="label">אשר סיסמה</div>
            <theme-input v-model="confirmPass" placeholder="אשר סיסמה" />
          </div>
        </div>
        <div class="popup-form-row submit-btn-wrap">
          <button class="th-btn th-btn-blue th-lg-btn">רומש</button>
        </div>
      </div>
    </modal>
  </transition>
</template>

<script>
import Modal from '../../common/Modal.vue'
import ThemeInput from '../../common/ThemeInput.vue'

export default {
  data(){
    return {

    }
  },
  methods: {
    close() {
      this.$store.commit('modals/changePassword/close');
    },
  },
  components: {
    Modal,
    ThemeInput,
  },
  data() {
    return {
      newPass: '',
      curPass: '',
      confirmPass: '',
    }
  },
  methods: {

  },
  mounted(){
  },
  destroyed(){

  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.modal .content-wrapper .title{
  margin-bottom: 25px;
}
.submit-btn-wrap{
  justify-content: center;
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
