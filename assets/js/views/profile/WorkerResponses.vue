<template>
  <div class="h-container responses-list">
    <template v-if="responses.length">
      <div class="response-item" v-for="response in responses">
        <div class="response-inner">
          <div class="text-col">
            <div class="title">שם קטגוריה</div>
            <div class="phone">
              <span class="bold">שם האדריכל</span> |
              <a href="#" class="phone">{{response.phone}}</a>
            </div>
            <hr class="th-divider">
            <div class="description">
              קרה לכם שבאתם להעתיק טקטס מסוים בעברי מאתר וכאשר הדבקם הוא יצא הפוך? זה קורה בעיקר בתוכנות שלא מזהות עברית , כמו פוטושופ אז במקום לנסות לכתוב הפוך לבד יש לנו פה הופך טקסט, שיהפוך את הטקסט לבד פשוט תדביקו וזה יהפוך לכם את הטקסט או שתכתבו לבד את העברית שאתם רוצים פה בתוך ההופך והוא יהפוך את העברית
            </div>
          </div>
          <div class="img-col" :style="{ backgroundImage: 'url(/static/images/requests/request-thumb.png)' }"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return {
      responses: [
        {id: 1, name: 'Name of the order', phone: '972544594498+', date: '12.05.2019'},
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.responses-list{
  display: flex;
}
.response-inner{
  display: flex;
}
.response-item{
  margin: ceil($scale1 * 45px);
  background: #FFFFFF;
  box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.15);
  padding: ceil($scale1 * 40px) ceil($scale1 * 72px) ceil($scale1 * 50px) ceil($scale1 * 50px);
  color: $clr-gray;
  .text-col{
    width: 55%;
    margin-left: ceil($scale1 * 45px);
  }
  .phone{
    font-size: ceil($scale1 * 24px);
    color: #4F4F4F;
  }
  .title{
    color: #000;
    font-weight: bold;
    font-size: ceil($scale1 * 36px);
    line-height: 1.1;
  }
  .desc{
    font-size: 18px;
    line-height: 1.25;
  }
  .img-col{
    // height: 100%;
    height: ceil($scale1 * 245px);
    flex-grow: 1;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    border-radius: 5px;
  }
}
</style>
