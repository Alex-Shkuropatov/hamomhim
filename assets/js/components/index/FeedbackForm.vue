<template>
  <div class="feedback-section">
    <alert/>
    <div class="section-container">

      <div class="th-heading text-center">מימון פרויקטים</div>
      <form class="feedback-form">
        <div class="form-group">
          <label class="label">
            <theme-input v-model="name" type="text" class="th-input less-rounded-corners" placeholder="שם מלא" required />
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <theme-input v-model="phone" type="text" class="th-input less-rounded-corners" placeholder="טלפון" required />
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <theme-input v-model="email" type="text" class="th-input less-rounded-corners" placeholder="מייל" required />
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <theme-input v-model="amount_required" type="number" class="th-input less-rounded-corners" placeholder="סכום נדרש" required />
          </label>
        </div>
        <div class="form-group">
          <button class="th-btn th-btn-md th-btn-yellow text-center" @click.prevent="sendForm">שלח בקשה</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ThemeInput from './../common/ThemeInput.vue';
import Alert from './../modals/Alert.vue'
export default {
  data(){
    return {
      name: '',
      phone: '',
      email: '',
      amount_required: '',
    };
  },
  components: {
    ThemeInput,
    Alert,
  },
  methods: {
    sendForm(){
      let data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        amount_required: this.amount_required
      };
      axios.post('/api/sendContactForm2', data)
        .then(response => {
          let res = response.data;
          if(response.data.success){
            this.$store.commit('modals/alert/saveData', {
              success: res.success,
              text: res.message ? res.message : 'תודה על ההודעה שלך!',//Thank you for your post
            });
          }
          else{
            this.$store.commit('modals/alert/saveData', {
              success: res.success,
              text:  'אירעה שגיאה, אנא צור קשר עם מנהל המערכת או נסה מאוחר יותר.',//An error occurred, please contact administrator or try later.
            });
          }
          this.$store.commit('modals/alert/open');
        });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.section-container{
  width: $container-width1 + 130px * $scale1;
  margin-right: auto;
  margin-left: auto;
}
.feedback-section{
  background: url('/static/images/main-page/feedback-bg.png') no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  padding: ceil($scale1 * 25px) 0 ceil($scale1 * 50px);
  color: #fff;
  font-size: ceil($scale1 * 24px);
}
.th-heading{
  color: #fff;
  margin-bottom: 0;
  line-height: 1.1;
  margin-bottom: ceil($scale1 * 10px);
  margin-bottom: 20px;
}
.feedback-form{
  display: flex;
  .form-group{
    padding: 0 ceil($scale1 * 12px);
    width: 20%;
    &:last-child{
      margin-top: auto;
    }
    .th-input{
      border: 1px solid #fff;
      background: transparent;
      width: 100%;
      color: #fff;
      border-radius: 4px;
      &::placeholder{
        color: #fff;
      }
      &[type=number]::-webkit-inner-spin-button,
      &[type=number]::-webkit-outer-spin-button{
        -webkit-appearance: none;
      }
    }
    .th-btn{
      width: 100%;
      justify-content: center;
      border-radius: 4px;
    }
    .caption{
      font-weight: bold;
      padding-right: ceil($scale1 * 25px);
    }
  }
}

@media (max-width: $breakpoint2){
  .section-container{
    width: $container-width2;
  }
  .feedback-section{
    padding: ceil($scale2 * 25px) 0 ceil($scale2 * 50px);
    font-size: ceil($scale2 * 24px);
  }
  .feedback-form{
    .form-group{
      padding: 0 ceil($scale2 * 12px);
      .caption{
        padding-right: ceil($scale2 * 25px);
      }
      .th-input{
        height: 31px;
        font-size: 14px;
      }
    }
  }
}

@media(max-width: $breakpoint3){
  .section-container{
    width: $container-width3;
  }
  .feedback-form{
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    .form-group{
      width: 25%;
      margin-bottom: 10px;
      &:last-child{
        margin-right: auto;
        margin-left: auto;
        margin-top: 10px;
      }
    }
  }
}

@media (max-width: $breakpoint4){
  .section-container{
    width: $container-width4;
  }
  .feedback-form{
    .form-group{
      width: 50%;
    }
  }
}

@media (max-width: $breakpoint5){
  .section-container{
    width: $container-width5;
  }
  .feedback-form{
    .form-group{
      width: 100%;
    }
  }
}
</style>
