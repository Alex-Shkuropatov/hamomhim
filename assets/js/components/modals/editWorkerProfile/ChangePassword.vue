<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/changePassword/isOpened']" @close="close">
      <form class="content-wrapper">
        <h2 class="title">שנה סיסמא</h2>
        <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">אימייל</div>
            <theme-input :value="$store.getters['user/getField']('email')" disabled placeholder="אימייל" />
          </div>
          <div class="col1-2 inp-group">
            <div class="label">סיסמה נוכחית</div>
            <theme-input v-model="curPass" type="password" required placeholder="סיסמה נוכחית" />
          </div>
        </div>
        <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">סיסמה חדשה</div>
            <theme-input v-model="newPass" type="password" required minlength="6" placeholder="סיסמה חדשה" />
          </div>
          <div class="col1-2 inp-group">
            <div class="label">אשר סיסמה</div>
            <theme-input v-model="confirmPass" type="password" required minlength="6" placeholder="אשר סיסמה" />
          </div>
        </div>
        <div class="popup-form-row submit-btn-wrap">
          <button class="th-btn th-btn-blue th-btn-lg" @click.prevent="changePassword">שמור</button>
        </div>
      </form>
    </modal>
  </transition>
</template>

<script>
import Modal from '../../common/Modal.vue'
import ThemeInput from '../../common/ThemeInput.vue'

export default {
  data() {
    return {
      newPass: '',
      curPass: '',
      confirmPass: '',
    }
  },
  methods: {
    close() {
      this.$store.commit('modals/changePassword/close');
    },
    changePassword(){
      if(this.newPass === this.confirmPass){
        let data = {
          userId: this.$store.getters['user/getField']('id'),
          oldPassword: this.curPass,
          newPassword: this.newPass,
        }
        axios.post('/api/changePassword', data)
          .then(response => {
            if(response.data.success){
              this.close();
              alert('הסיסמא שונתה בהצלחה');//Password successfully changed
            }
            else{
              alert(response.data.message);
            }
          });
      }
      else{
        alert('סיסמאות לא תואמות');
      }
    }
  },
  components: {
    Modal,
    ThemeInput,
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
  margin-bottom: ceil($scale1 * 25px);
}
.submit-btn-wrap{
  justify-content: center;
  margin-top: ceil($scale1 * 25px);
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
