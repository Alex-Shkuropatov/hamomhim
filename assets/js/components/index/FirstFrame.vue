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
  padding: 50px 0 60px 0;
}
.title{
  font-size: 56px;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: bold;
  line-height: 1;
}
.search-cat-form{
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-top: 25px;
  .input-container{
    border-radius: 50px;
    overflow: hidden;
    height: 65px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
  .input{
    border: none;
    padding-right: 33px;
    width: 500px;
  }
}
.search-btn{
  height: 100%;
  // background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-weight: bold;
  padding-left: 70px;
  padding-right: 40px;
  background: url('/static/images/icons/search.svg') no-repeat 45px center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  -webkit-background-size: 25px 25px, cover;
  background-size: 25px 25px, cover;
}



</style>
