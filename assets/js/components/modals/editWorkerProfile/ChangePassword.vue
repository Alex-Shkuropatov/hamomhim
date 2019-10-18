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
            <theme-input
                    v-model.trim.lazy="curPass"
                    @input="$v.curPass.$touch()"
                    :class="{ 'error': $v.curPass.$error }"
                    type="password"
                    required
                    placeholder="סיסמה נוכחית"
            />
            <div class="error-wrapper" v-if="$v.curPass.$dirty">
              <p class="error-message" v-if="!$v.curPass.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.curPass.minLength">
                Password must contain more than 6 symbols
              </p>
            </div>
          </div>
        </div>
        <div class="popup-form-row">
          <div class="col1-2 inp-group">
            <div class="label">סיסמה חדשה</div>
            <theme-input
                    v-model.trim.lazy="newPass"
                    @input="$v.newPass.$touch()"
                    :class="{ 'error': $v.newPass.$error }"
                    type="password"
                    required
                    minlength="6"
                    placeholder="סיסמה חדשה"
            />
            <div class="error-wrapper" v-if="$v.newPass.$dirty">
              <p class="error-message" v-if="!$v.newPass.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.newPass.minLength">
                Password must contain more than 6 symbols
              </p>
            </div>
          </div>
          <div class="col1-2 inp-group">
            <div class="label">אשר סיסמה</div>
            <theme-input
                    v-model.trim.lazy="confirmPass"
                    @input="$v.confirmPass.$touch()"
                    :class="{ 'error': $v.confirmPass.$error }"
                    type="password"
                    required
                    minlength="6"
                    placeholder="אשר סיסמה"
            />
            <div class="error-wrapper" v-if="$v.confirmPass.$dirty">
              <p class="error-message" v-if="!$v.confirmPass.required">
                שדה נדרש
              </p>
              <p class="error-message" v-else-if="!$v.confirmPass.regexp">
                Passwords doesnt match
              </p>
            </div>
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      newPass: '',
      curPass: '',
      confirmPass: '',
    }
  },
  validations: {
    confirmPass: {
      required,
      regexp() {
        return this.newPass === this.confirmPass;
      }
    },
    newPass: {
      required,
      minLength: minLength(6),
    },
    curPass: {
      required,
      minLength: minLength(6),
    }
  },
  methods: {
    close() {
      this.$store.commit('modals/changePassword/close');
    },
    changePassword() {
      this.$v.newPass.$touch();
      this.$v.curPass.$touch();
      this.$v.confirmPass.$touch();

      if (!this.$v.$invalid) {
        let data = {
          userId: this.$store.getters['user/getField']('id'),
          oldPassword: this.curPass,
          newPassword: this.newPass,
        };
        axios.post('/api/changePassword', data)
            .then(response => {
              if (response.data.success) {
                this.close();
                alert('הסיסמא שונתה בהצלחה');//Password successfully changed
              } else {
                alert(response.data.message);
              }
            });
      }
      }
    },
    components: {
      Modal,
      ThemeInput,

    },
    mounted() {
    },
    destroyed() {

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
