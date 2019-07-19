<template>
<div class="content">
<page-subheader v-bind="headData"/>
<div class="ourGoals">
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/workerE.png" alt="workerLogo">
    <div class="element_text">
      <div class="title">םיחוורל םיבייחתמ</div>
      <div class="description">
        .טקש שארב תויהל ולכותש ךכ ,קפסה/ןלבקה לומ הלמעה תייבג תא תעצבמ םיחמומה תצובק
      </div>
    </div>
  </div>
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/painter.png" alt="paint brush">
    <div class="element_text">
      <div class="title">תוסנכה תלדגה</div>
      <div class="description">
        .קסעה תויחוור תא יתועמשמ ןפואב לידגהל ולכוי םינלבקו םינפ יבצעמ ,םילכירדא םיחמומ תצובק םע
      </div>
    </div>
  </div>
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/moneyE.png" alt="$">
    <div class="element_text">
      <div class="title">ןמזב םיכסוח</div>
      <div class="description">
        .רתאב ועצבתש זרכמ "ינימ" ידי לע היינבה תויולעב חוקלל ךוסחל םכל תרשפאמ םיחמומה תצובק
      </div>
    </div>
  </div>
</div>
  <div class="howItWorks_wrapper">
  <div class="howItWorks">
    <div class="txt_wrapper">
      <div class="title">
        חוקל דצ – דבוע הז ךיא
      </div>
      <div class="description">
        ?דבוע הז ךיא .שגפיהל םכנוצרב ימ םע רוחבלו ץופישה תויולע תא דומאל ולכות ,ריהמ ןולאש יולימ ידי לע .עוצקמה ילעב בטיממ תיבה ץופישל ריחמ תועצה 5 דע לבקל םכל תרשפאמ םיחמומה תצובק
      </div>
    </div>

  </div>
    <div class="stages">
      <div class="stage_wrapper">
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/1.svg" alt="1">
          <div class="stage_txt">
            בוחרים בעל מקצוע – בשלב הראשון יהיה עליכם לבחור את בעל המקצוע מתוך המגוון הרחב המוצע לרשותכם. כלל בעלי המקצוע נבחרו בקפידה ועומדים בסטנדרטים הגבוהים ביותר.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/2.svg" alt="2">
          <div class="stage_txt">
            ממלאים פרטים – המערכת תנתב אתכם לשאלון הרלוונטי על פי אופי השיפוץ וסוג בעל המקצוע שבחרתם. באפשרותכם למלא את פרטי השיפוץ כגון גודל במ”ר, כמות, שטח הדירה ופרמטרים נוספים שיידרשו.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/3.svg" alt="3">
          <div class="stage_txt">
            מעלים תמונות – ניתן לעלות למערכת תמונות רלוונטיות שיועברו לבעלי המקצוע לצורך מתן הצעת מחיר מדויקת.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/4.svg" alt="4">
          <div class="stage_txt">
            נכנסים לאזור האישי – בשלב הבא תקבלו שם וסיסמא שיאפשרו לכם להיכנס לאזור האישי ולצפות בהצעות שיתקבלו מבעלי המקצוע.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/5.svg" alt="5">
          <div class="stage_txt">
            בוחרים עם מי להיפגש – לאחר שקיבלתם את הצעות המחיר ושוחחתם עם בעלי המקצוע, תוכלו לבחור עם מי ברצונכם להתקדם לפגישה.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <img src="/static/images/how-it-works/numbers/6.svg" alt="6">
          <div class="stage_txt">
            משפצים – כעת נותר לכם ליהנות משיפוץ מקצועי הניתן על ידי מיטב בעל המקצוע. בתום השיפוץ תוכלו לדרג את נותן השירות, כדי שלקוחות נוספים יוכלו לקבל מכם חוות דעת מקצועית.
          </div>

        </div>
        <img src="/static/images/how-it-works/worker1.png" alt="worker" class="workerImg">
      </div>

    </div>
  </div>

</div>
</template>


<script>
  import PageSubheader from './../components/PageSubheader.vue';

  export default {
    components: {PageSubheader},
    data : function () {
      return {
        headData : {
          title :'תודוא',
          image: './static/images/aboutUs/team.png'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.content{
  width: 100%;

.ourGoals{
  padding: 50px 200px 50px 200px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .ourGoals_element{
    display: flex;
    flex-direction: row;
    align-items: center;
    .element_text{
      .title{
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        text-align: right;
        letter-spacing: -0.02em;
        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .description{
        width: 285px;
      }
    }
    img{
      margin-left: 30px;
    }
  }
}
 .howItWorks_wrapper{
   position: relative;
   padding: 0 200px 0 200px;
   .howItWorks{
     position: relative;
     background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
     height: 176px;
     .txt_wrapper{
       padding-right: 44px;
       .title{
         padding-top: 23px;
         font-family: Assistant;
         font-style: normal;
         font-weight: bold;
         font-size: 48px;
         line-height: 40px;
         letter-spacing: -0.02em;
         color: #FFFFFF;
       }
       .description{
         width: 966px;
         font-family: Assistant;
         font-style: normal;
         font-weight: bold;
         font-size: 24px;
         line-height: 40px;
         color: #FFFFFF;
       }
     }
   }
   .stages{
     z-index: 1;
     width: 1400px;
     background : url("/static/images/how-it-works/bg1.png");
     height: 876px;
     .stage_wrapper{
       padding-top: 30px;
       margin-right: 30px;
       display: flex;
       flex-direction: column;
       .stage{
         margin-top: 15px;
         width: 827px;
         height: 90px;
         display: flex;
         flex-direction: row;
         align-items: center;
         .stats_txt{
           margin-right: 33px;
           font-family: Assistant;
           font-style: normal;
           font-weight: bold;
           font-size: 24px;
           line-height: 30px;
           text-align: right;
           letter-spacing: -0.02em;
           color: #4F4F4F;
         }
         .hoverBlock{
           position: absolute;
           width: 10px;
           height: 100px;
           background-color: white;
         }
         img{
           width: 35px;
           height: 65px;
           margin-right: 42px;
           margin-left: 33px;
         }
         &:hover {
           background-color: white;
           .hoverBlock{
             background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
             box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
           }
         }
       }
     }
   }
   .workerImg{
     background: url("/static/images/how-it-works/worker1.png");
       z-index: 0;
     top:  277px; left: 0; bottom: 0;
     position: absolute;
     max-width: 100%;
     height: auto;
     width: auto\9;
   }
 }
}
</style>