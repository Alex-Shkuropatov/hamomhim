<template>
  <div class="big-bg">
    <p class="title">אדריכלים מעצבי פנים בואו לקבל הצעות</p>
    <p class="title clr-blue">מבעלי מקצוע בתחום הבנייה?</p>
    <div class="search-cat-form">
      <div class="input-container">
        <input type="text" class="input" placeholder="חיפוש קבלנים">
        <button class="search-btn">חיפוש</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },

}
</script>

<style lang="scss" scoped>

@import '~@/vars.scss';

.big-bg{
  display: flex;
  justify-content: center;
  text-align: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background: url('/static/images/main-page/bg1.png') no-repeat center top;
  -webkit-background-size: cover;
  background-size: cover;
  color: #fff;
  padding: ceil($scale1 * 50px) 0 ceil($scale1 * 60px) 0;
}
.title{
  font-size: ceil($scale1 * 56px);//50px
  margin-bottom: 0;
  margin-top: 0;
  font-weight: bold;
  line-height: 1;
}
.search-cat-form{
  display: flex;
  justify-content: center;
  font-size: ceil($scale1 * 24px);
  margin-top: ceil($scale1 * 25px);
  .input-container{
    border-radius: ceil($scale1 * 50px);
    overflow: hidden;
    height: ceil($scale1 * 65px);//56px
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
  .input{
    border: none;
    padding-right: ceil($scale1 * 33px);
    width: ceil($scale1 * 500px);
  }
}
.search-btn{
  height: 100%;
  // background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 10px) rgba(0, 0, 0, 0.25);
  color: #fff;
  font-weight: bold;
  padding-left: ceil($scale1 * 70px);
  padding-right: ceil($scale1 * 40px);
  background: url('/static/images/icons/search.svg') no-repeat ceil($scale1 * 36px) center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  -webkit-background-size: ceil($scale1 * 25px) ceil($scale1 * 25px), cover;
  background-size: ceil($scale1 * 25px) ceil($scale1 * 25px), cover;
}

@media(max-width: $breakpoint2){
  .big-bg{
    padding: ceil($scale2 * 50px) 0 ceil($scale2 * 60px) 0;
  }
  .title{
    font-size: ceil($scale2 * 56px);
  }
  .search-cat-form{
    font-size: ceil($scale2 * 24px);
    margin-top: ceil($scale2 * 25px);
    .input-container{
      height: ceil($scale2 * 65px);
    }
    .input{
      padding-right: ceil($scale2 * 33px);
      width: ceil($scale2 * 500px);
    }
  }
  .search-btn{
    padding-left: ceil($scale2 * 70px);
    padding-right: ceil($scale2 * 40px);
    background: url('/static/images/icons/search.svg') no-repeat ceil($scale2 * 45px) center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    -webkit-background-size: ceil($scale2 * 25px) ceil($scale2 * 25px), cover;
    background-size: ceil($scale2 * 25px) ceil($scale2 * 25px), cover;
  }
}



</style>
