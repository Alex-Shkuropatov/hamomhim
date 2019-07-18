<template>
  <div class="content">
    <div class="firstBlock">
      <div class="firstBlock_element">
        <h3 class="title">תודוא</h3>
        <span class="description">םיחמומה תצובק תודוא</span>
        <div class="txt">

          קבוצת המומחים לאדריכלים’ הוא מיזם המאגד בתוכו את כל בעלי המקצוע מתחום הבנייה תחת קורת גג אחת, בהם אדריכלים, מעצבי פנים, קבלנים וספקים מובחרים מהתחום. המיזם פונה לאדריכלים ומעצבי פנים ומאפשר להם לבצע שיתופי פעולה רווחיים, ומאידך לחסוך בזמן וכסף על ידי קבלת עד 5 הצעות מחיר מבעלי מקצוע הדרושים לפרויקט.
               </div>
      </div>
      <img src="/static/images/aboutUs/ytImage.jpg" alt="" class="videoYT">
    </div>
    <div class="secondBlock">
      <img src="/static/images/aboutUs/buildPlan.png" alt="" class="left_elem">
      <img src="/static/images/aboutUs/building.png" alt="" class="right_elem">
      <div class="statsInfo">
        <h3 class="title">םירפסמב ונילע תצק</h3>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>

         <stats class="statsW" />
        
      </div>
    </div>
    <div class="thirdBlock">
      <div class="blockWrapper">

        <div class="contentBlock">

          <div class="contentBlockInfo">
            <div class="title">
              מתודולוגיית העבודה של קבוצת המומחים נבנתה על פי מטרה ברורה – לאפשר לאדריכלים ומעצבי פנים לקבל הצעות מחיר מספקים דרך מערכת ידידותית, ומצד שני לקבל עמלה בעבור שיתוף הפעולה – ישירות לחשבון הבנק, ללא כל התעסקות.
            </div>
            <hr>
            <div class="description">
              למעשה, קבוצת המומחים מאפשרת לכולם לצאת נשכרים, קבלנים וספקי שירות יוכלו להגדיל את רווחי העסק על ידי קבלת פרויקטים, ולשלם עמלה לאדריכל או למעצב הפנים כמקובל בשוק.
              מאחורי המיזם עומד בעל מקצוע מומחה בתחומי הבנייה, בעל ניסיון של מעל 25 שנה המכיר את התחום מכל צידיו. מטרתו לחבר בין בעלי המקצוע השונים בענף הבנייה ולמקסם את הרווחים לכל הצדדים. המערכת נבנתה ותוכננה על ידי מיטב מומחים, היא ידידותית ונוחה לשימוש, ומאפשרת להכניס את כל הפרטים הרלוונטיים אודות העבודה הדרושה ואף לעלות תמונות של הפרויקט למערכת, בכדי לאמוד את עלויות העבודה בצורה מדויקת. מגיע לכם להרוויח יותר, הרבה יותר!
            </div>
          </div>
          <img src="/static/images/aboutUs/builders.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Stats from './../components/Stats.vue';

   export default {
     components : {
       Stats
     }
   }

</script>

<style lang="scss" scoped>
  .content {
    padding-top: 70px;
  }

  .firstBlock {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1584px) {
      flex-wrap: wrap-reverse;
      text-align: center;
    }

    img {
      /*object-fit: cover;*/
      /*width: 100%;*/
      height: 396px;
      @media screen and (max-width: 700px) {
        padding: 0 10px 0 10px;
        object-fit: cover;
        width: 100%;
        height: auto;
      }
    }

  }

  .firstBlock_element {
    margin-left: 70px;
    width: 750px;
    height: 457px;
    @media screen and (max-width: 1584px) {
      margin: 30px 0 0 0;
    }
    @media screen and (max-width: 700px) {
      width: 100%;
      height: auto;
      object-fit: cover;
      padding: 0 10px 0 10px;
    }

    .title {
      direction: rtl;
      margin: 0;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 65px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .description {
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 65px;
      color: #333333;
    }

    .txt {
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 40px;
      color: #333333;
      @media screen and (max-width: 500px){
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  .secondBlock {
    padding-top: 71px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 480px){
      padding-top: 40px;
      }
    .right_elem {
      display: block;
      max-width: 358px;
      max-height: 572px;
      width: auto;
      height: auto;

      z-index: 0;
      position: absolute;
      right: 0;
      bottom: -157px;
      @media screen and (max-width: 1919px) {
        opacity: 0.6;
        right: -45px;
      }
      @media screen and (max-width: 1439px) {
        display: none;
      }
    }

    .left_elem {
      display: block;
      max-width: 358px;
      max-height: 725px;
      width: auto;
      height: auto;

      z-index: 0;
      position: absolute;
      left: 0;
      top: 0;

      @media screen and (max-width: 1439px) {
        display: none;
      }
    }

    .statsInfo {
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin: 0;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 65px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #333333;
        @media screen and (max-width: 500px) {
          font-size: 49px;
        }
      }

      .description {
        margin-bottom: 102px;
        font-family: Assistant;
        margin-top: 25px;
        width: 1065px;
        height: 65px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        text-align: center;
        color: #828282;
        @media screen and (max-width: 1115px){
          width:  82%;
          height: auto;
          margin-bottom: 60px;
        }
      }
    }

  }

  //
  //
  .thirdBlock {
    background: linear-gradient(90deg, rgb(40, 113, 215) 0%, rgb(50, 105, 182) 100%);

    box-sizing: border-box;

    margin-top: 146px;
    z-index: 0;
    @media screen and (max-width:480px) {
      margin-top: 80px;
    }
    .blockWrapper {
      background: url("/static/images/aboutUs/bgBuild.png");
      background-repeat: no-repeat;
      background-size: cover;
      .contentBlock {
        padding: 166px 0 143px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        @media screen and (max-width: 1440px) {
          flex-direction: column-reverse;
          justify-content: center;
        }
        @media screen and (max-width: 550px) {
          padding: 80px 0 80px 0;
        }
        @media screen and (max-width: 480px) {
          padding: 10px 0 80px 0;
        }
        img {
          @media screen and (min-width: 2555px) {
            width:  836px;
          }
          @media screen and (max-width: 750px){
            width: 100%;
            padding: 0 10px 0 10px;
            height: auto;
            object-fit: cover;
          }
        }
        .contentBlockInfo {
          margin-left: 120px;
          width: 880px;
          height: 477px;
          @media screen and (max-width: 1820px) {
            text-align: center;
            margin: 0 20px 0 20px;
          }
          @media screen and (max-width: 1600px) {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: auto;
          }
          @media screen and (max-width: 1440px) {
            width: 720px;
            line-height: 33px;
          }
          @media screen and (max-width: 750px) {
            width: 100%;
            line-height: 28px;
            padding: 0 5px 0 5px;
          }
          .title {
            font-family: Assistant;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: right;
            color: #FFFFFF;
            @media screen and (max-width: 1600px) {
              text-align: center;
              margin-top: 50px;
              line-height: 34px;
            }
            @media screen and (max-width: 750px) {
              font-size: 26px;
            }
          }
          hr {
            margin-left: 381px;
            height: 0;
            border: 3px solid #FFFFFF;
            transform: rotate(180deg);
            margin-top: 7px;
            margin-bottom: 10px;
            width: 490px;
            background-color: white;
            @media screen and (max-width: 1820px) {
              margin-left: 184px;
            }
            @media screen and (max-width: 1600px){
              width: 72%;
              margin: unset;
              margin-top: 10px;
            }
          }
          .description {
            font-family: Assistant;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 40px;
            text-align: right;
            color: #FFFFFF;
            @media screen and (max-width: 1820px) {
              text-align: center;
            }
            @media screen and (max-width: 600px) {
              line-height: 30px;
            }

          }
        }
      }
    }
  }



</style>

