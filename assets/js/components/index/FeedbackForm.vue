<template>
  <div class="feedback-section">
    <div class="section-container">

      <div class="th-heading text-center">מימון פרויקטים</div>
      <div class="feedback-form">
        <div class="form-group">
          <label class="label">
            <div class="caption">שם מלא</div>
            <input type="text" class="th-input" placeholder="שם מלא">
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <div class="caption">טלפון</div>
            <input type="text" class="th-input" placeholder="טלפון">
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <div class="caption">מייל</div>
            <input type="text" class="th-input" placeholder="מייל">
          </label>
        </div>
        <div class="form-group">
          <label class="label">
            <div class="caption">סכום נדרש</div>
            <input type="text" class="th-input" placeholder="סכום נדרש">
          </label>
        </div>
        <div class="form-group">
          <button class="th-btn th-btn-md th-btn-yellow text-center">שלח</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  background: url('/static/images/main-page/bg3.png') no-repeat center;
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
    }
    .th-btn{
      width: 100%;
      justify-content: center;
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
</style>
