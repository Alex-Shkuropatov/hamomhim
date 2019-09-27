<template>
<div class="content">
<page-subheader v-bind="headData"/>
<div class="ourGoals">
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/workerE.png" alt="workerLogo">
    <div class="element_text">
      <div class="title">מתחייבים לרווחים</div>
      <div class="description">
         קבוצת המומחים מבצעת את גביית העמלה מול הקבלן/הספק, כך שתוכלו להיות בראש שקט.
      </div>
    </div>
  </div>
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/painter.png" alt="paint brush">
    <div class="element_text">
      <div class="title">הגדלת הכנסות</div>
      <div class="description">
        עם קבוצת מומחים אדריכלים, מעצבי פנים וקבלנים יוכלו להגדיל באופן משמעותי את רווחיות העסק.
      </div>
    </div>
  </div>
  <div class="ourGoals_element">
    <img src="/static/images/how-it-works/moneyE.png" alt="$">
    <div class="element_text">
      <div class="title">חוסכים בזמן</div>
      <div class="description">
        קבוצת המומחים מאפשרת לכם לחסוך ללקוח בעלויות הבנייה על ידי "מיני" מכרז שתבצעו באתר.
      </div>
    </div>
  </div>
</div>
  <div class="howItWorks_wrapper">
  <div class="howItWorks">
    <div class="txt_wrapper">
      <div class="title">
        איך זה עובד – צד לקוח
      </div>
      <div class="description">
        קבוצת המומחים מאפשרת לכם לקבל עד 5 הצעות מחיר לשיפוץ הבית ממיטב בעלי המקצוע. על ידי מילוי שאלון מהיר, תוכלו לאמוד את עלויות השיפוץ ולבחור עם מי ברצונכם להיפגש. איך זה עובד?
      </div>
    </div>

  </div>
    <div class="stages">
      <div class="stage_wrapper">
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
            1
          </div>
          <div class="stage_txt">
            בוחרים בעל מקצוע – בשלב הראשון יהיה עליכם לבחור את בעל המקצוע מתוך המגוון הרחב המוצע לרשותכם. כלל בעלי המקצוע נבחרו בקפידה ועומדים בסטנדרטים הגבוהים ביותר.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
            2
          </div>
          <div class="stage_txt">
            ממלאים פרטים – המערכת תנתב אתכם לשאלון הרלוונטי על פי אופי השיפוץ וסוג בעל המקצוע שבחרתם. באפשרותכם למלא את פרטי השיפוץ כגון גודל במ”ר, כמות, שטח הדירה ופרמטרים נוספים שיידרשו.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
            3
          </div>
          <div class="stage_txt">
            מעלים תמונות – ניתן לעלות למערכת תמונות רלוונטיות שיועברו לבעלי המקצוע לצורך מתן הצעת מחיר מדויקת.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
            4
          </div>
          <div class="stage_txt">
            נכנסים לאזור האישי – בשלב הבא תקבלו שם וסיסמא שיאפשרו לכם להיכנס לאזור האישי ולצפות בהצעות שיתקבלו מבעלי המקצוע.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
            5
          </div>
          <div class="stage_txt">
            בוחרים עם מי להיפגש – לאחר שקיבלתם את הצעות המחיר ושוחחתם עם בעלי המקצוע, תוכלו לבחור עם מי ברצונכם להתקדם לפגישה.
          </div>

        </div>
        <div class="stage">
          <div class="hoverBlock">

          </div>
          <div class="digit">
           6
          </div>
          <div class="stage_txt">
            משפצים – כעת נותר לכם ליהנות משיפוץ מקצועי הניתן על ידי מיטב בעל המקצוע. בתום השיפוץ תוכלו לדרג את נותן השירות, כדי שלקוחות נוספים יוכלו לקבל מכם חוות דעת מקצועית.
          </div>

        </div>
         <img src="/static/images/how-it-works/worker1.png" alt="worker" class="workerImg">

      </div>
      <button class="th-btn th-btn-blue th-btn-lg next moreInfo"><span>העלה פוסטים נוספים</span></button>
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
          title :'איך זה עובד',
          image: './static/images/aboutUs/team.png'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes scaleAnim {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

.content{
  width: 100%;

.ourGoals{
  padding: 50px 200px 50px 200px;
  max-width: 1900px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 1680px){
    padding: 50px 100px 50px 100px;
  }
  @media screen and (max-width:1240px){
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .ourGoals_element{
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width:1440px){
      margin: 20px 0 20px 0;
    }
    @media screen and (max-width:600px){
      flex-direction: column;
      text-align: center;
    }
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
        @media screen and (max-width: 1605px){
          font-size: 30px;
        }
        @media screen and (max-width:600px){
          text-align: center;
        }
      }
      .description{
        width: 285px;
        font-size: 24px;
        line-height: 25px;
        text-align: right;
        letter-spacing: -0.02em;
        color: #333333;
        @media screen and (max-width: 1900px){
          width: 100%;
        }
        @media screen and (max-width:1605px){
          font-size:20px ;
          width: 285px;
        }
        @media screen and (max-width: 1440px){
          width: unset;
        }
        @media screen and (max-width: 1240px){
          width: 285px;
        }
        @media screen and (max-width:600px){
          text-align: center;
        }
      }
    }
    img{
      width: 155px;
      height: 155px;
      margin-left: 9px;
      margin-right: 10px;
      transition: all .3s ease-out;
      &:hover{
       transform: scale(1.1);
      }
      @media screen and (max-width: 1615px){
        width: 107px;
        height: 107px;
      }
      @media screen and (max-width:600px){
       margin: 0;
      }
    }
  }
}
 .howItWorks_wrapper{
   position: relative;
   padding: 0 200px 0 200px;
   width: 100%;
   max-width: 1900px;
   margin: 0 auto;
   @media screen and (max-width: 1680px){
     padding: 0 100px 0 100px;
   }
   @media screen and (max-width: 1300px){
     margin: 0 auto;
     padding: 0 25px 0 25px;
   }
   @media screen and (max-width: 750px){
     padding: 0 5px 0 5px;

   }
   .howItWorks{
     position: relative;
     background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
     height: 176px;
     width: 100%;
     @media screen and (max-width: 1320px){
       height: auto;
       padding-bottom: 16px;
   }
     .txt_wrapper{
       padding-right: 44px;
       @media screen and (max-width: 750px){
         text-align: center;
         padding-right: 5px;
       }
       .title{
         padding-top: 23px;
         font-family: Assistant;
         font-style: normal;
         font-weight: bold;
         font-size: 48px;
         line-height: 40px;
         letter-spacing: -0.02em;
         color: #FFFFFF;
         @media screen and (max-width: 1605px){
           font-size: 40px;
         }
         @media screen and (max-width: 1320px){
           text-align: center;
         }
         @media screen and (max-width: 750px){
           font-size: 40px;
         }
       }


       .description{
         width: 966px;
         font-family: Assistant;
         font-style: normal;
         font-weight: bold;
         font-size: 24px;
         line-height: 40px;
         color: #FFFFFF;
         @media screen and (max-width: 1700px){
           width: 80%;
         }
         @media screen and (max-width: 1605px){
           font-size: 20px;
         }
         @media screen and (max-width: 1320px){
           width: 98%;
         }
       }
     }
   }
   .stages{
     z-index: 1;
     width: 1400px;
     background : url("/static/images/how-it-works/bg1.png");
     background-repeat: no-repeat;
     background-size: cover;
     height: 827px;
      @media screen and (max-width: 1880px){
        width: 93%;
      }
     @media screen and (max-width: 1320px){
        width: 100%;
       height: auto;
      }
     @media screen and (max-width: 750px){
       display: flex;
       flex-direction: column;
       align-items: center;
     }


     .stage_wrapper{
       padding-top: 30px;
       margin-right: 30px;
       display: flex;
       flex-direction: column;
       @media screen and (max-width: 750px) {
         margin-right: 0;
       }
       .stage{

         &:nth-child(odd){
           font-weight: bold;
         }

         position: relative;
         margin-top: 15px;
         width: 827px;
         height: 90px;
         display: flex;
         flex-direction: row;
         align-items: center;
         @media screen and (max-width: 1700px){
           width: 80%;
         }
         @media screen and (max-width: 1320px){
           width: 98%;
           margin-top: 33px;
         }
         @media screen and (max-width: 750px){
           height: unset;
           flex-direction: column;
           margin: 0 auto;
         }
         .hoverBlock{
           position: absolute;
           width: 10px;
           height: 100px;
           background-color: white;
           @media screen and (max-width: 750px) {
             display: none;
           }
         }
         .digit{
           line-height: 65px;
           margin-right: 42px;
           margin-top: -7px;
           font-family: Assistant;
           font-style: normal;
           font-weight: bold;
           font-size: 72px;
           letter-spacing: -0.02em;
           background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           @media screen and (max-width: 750px){
             margin-top: 20px;
             margin-bottom: 29px;
           }
           @media screen and (max-width: 600px){
             margin-right: 0;
           }
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
   .moreInfo{
     margin-right: 35px;
     margin-top: 30px;
     width: 355px;
     height: 70px;

     background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
     border-radius: 50px;
     font-family: Assistant;
     font-style: normal;
     font-weight: bold;
     font-size: 24px;
     line-height: 31px;
     padding: 0px;
     display: inline-block;
     text-align: center;

     &:hover{

     }
     @media screen and (max-width: 1320px) {
       margin-bottom: 40px;
     }
     @media screen and (max-width:750px) {
       width: 263px;
       height: 68px;
     }
     @media screen and (max-width: 600px){
       margin-right: 0;
     }
   }
   .workerImg{
     pointer-events: none;
       z-index: 0;
    left: 0; bottom: 0;
     position: absolute;
    @media screen and (max-width:1880px){
      width: 675px;
    }
     @media screen and (max-width:1679px){
       width: 540px;
       left: -34px;
     }
     @media screen and (max-width:1450px){
       width: 540px;
       left: -40px;
     }
     @media screen and (max-width: 1426px){
       left: -78px;
     }
     @media screen and (max-width: 1320px){
       display: none;
     }
   }
 }
}

.stage_txt{

  margin-right: 33px;
  font-family: Assistant;
  font-style: normal;

  font-size: 24px;
  line-height: 30px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #4F4F4F;

    @media screen and (max-width: 1605px){
      font-size: 20px;
      width: 100%;
    }
  @media screen and (max-width: 600px){
    text-align: center;
    margin-right: 0;
  }
}

</style>
