<template>

  <div class="content">
    <page-subheader v-bind="subhead"/>
    <div class="firstBlock">
      <div class="firstBlock_element">
        <h3 class="title">אודות</h3>
        <span class="description">אודות קבוצת המומחים</span>
        <div class="txt">
          קבוצת המומחים לאדריכלים’ הוא מיזם המאגד בתוכו את כל בעלי המקצוע מתחום הבנייה תחת קורת גג אחת, בהם אדריכלים, מעצבי פנים, קבלנים וספקים מובחרים מהתחום. המיזם פונה לאדריכלים ומעצבי פנים ומאפשר להם לבצע שיתופי פעולה רווחיים, ומאידך לחסוך בזמן וכסף על ידי קבלת עד 5 הצעות מחיר מבעלי מקצוע הדרושים לפרויקט.
               </div>
      </div>


      <div class="video-wrap">
        <div class="video-inner">
          <iframe  class="ytImage"  src="https://www.youtube.com/embed/u8TEMCyrnho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>


    </div>
    <div class="secondBlock">
      <img src="/static/images/aboutUs/buildPlan.png" alt="" class="left_elem">
      <img src="/static/images/aboutUs/building.png" alt="" class="right_elem">
      <div class="statsInfo">
        <h3 class="title">קצת עלינו במספרים</h3>
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </div>

         <stats/>
        
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
        <div class="buildersImg">
          <img src="/static/images/aboutUs/builders.png" alt="">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Stats from './../components/Stats.vue';
  import PageSubheader from './../components/PageSubheader.vue';

   export default {
     data : function(){
        return{
          subhead : {
           title : '',
           image : '/static/images/aboutUs/head.png'
         }
        }
     },
     components : {
       Stats,
       PageSubheader
     }
   }

</script>

<style lang="scss" scoped>


  .content {

  }
  .firstBlock {
    padding-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1584px) {
      flex-wrap: wrap-reverse;
      text-align: center;
    }
    .video-wrap {
      padding: 0 15px 0 15px;
      width:709.46px;
      height: 396px;
      @media screen and (max-width: 1605px) {
        width: 50%;
        height: 47%;
      }
      @media screen and (max-width: 1140px) {
        padding: 0 10px 0 10px;
        object-fit: cover;
        width: 600px;
        height: 390px;
      }
      @media screen and (max-width:700px) {
        width: 100%;
      }
      @media screen and (max-width:700px) {
        width: 400px;
        height: 230px;
      }
      .video-inner{
        width: 100%;
        position: relative;
        padding-bottom: 56.25%;
        iframe{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }


  }
  .firstBlock_element {
    pointer-events: none;
    margin-left: 70px;
    width: 750px;
    height: 457px;
    @media screen and (max-width: 1605px) {
      width: 558px;
      height: auto;
    }
    @media screen and(max-width: 1260px){
      margin-left: 0;
    }
    @media screen and (max-width: 700px) {
      width: 100%;
      height: auto;
      object-fit: cover;
      padding: 0 10px 0 10px;
    }

    .title {
      pointer-events: none;
      direction: rtl;
      margin: 0;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 45px;
      line-height: 65px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and(max-width: 1600px){
        line-height: 35px;
      }
      @media screen and(max-width: 1260px){
        padding-top: 15px;
      }
    }

    .description {
      pointer-events: none;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 65px;
      color: #333333;
    }

    .txt {
      pointer-events: none;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 40px;
      color: #333333;
      @media screen and (max-width: 500px){
        font-size: 24px;
        line-height: 32px;
      }
    }
  }

  .secondBlock {
    pointer-events: none;
    padding-top: 71px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1440px) {
      padding-top: 53px;
    }
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
      bottom: -121px;
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
      pointer-events: none;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        pointer-events: none;
        margin: 0;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 45px;
        line-height: 65px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #333333;
        @media screen and (max-width: 500px) {
          font-size: 33px;
        }
      }

      .description {
        margin-bottom: 102px;
        font-family: Assistant;
        margin-top: 25px;
        width: 800px;
        height: 65px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 31px;
        text-align: center;
        color: #828282;
        @media screen and (max-width: 1115px){
          width: 88%;
          height: auto;
          margin-bottom: 60px;
        }
        @media screen and (max-width: 750px) {
          width: 48%;
        }
        @media screen and (max-width: 480px) {
          width: 303px;
        }

      }
    }

  }

  //
  //
  .thirdBlock {
    pointer-events: none;
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
        .buildersImg{
          img {

            @media screen and (min-width: 2555px) {
              width:  836px;
            }
            @media screen and (max-width: 1605px) {
              width:  606px;
            }
            @media screen and (max-width: 750px){
              width: 100%;
              padding: 0 10px 0 10px;
              height: auto;
              object-fit: cover;
            }
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
            width: 80%;
            line-height: 33px;
          }
          @media screen and (max-width: 750px) {
            width: 100%;
            line-height: 28px;
            padding: 0 5px 0 5px;
          }
          .title {
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: right;
            color: #FFFFFF;
            @media screen and (max-width: 1605px) {
              text-align: center;
              margin-top: 50px;
              font-size: 28px;
              line-height: 34px;
            }
            @media screen and (max-width: 750px) {
              font-size: 26px;
            }
            @media screen and (max-width: 480px) {
              margin-top: 36px;
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
            font-size: 24px;
            line-height: 40px;
            text-align: right;
            color: #FFFFFF;
            @media screen and (max-width: 1820px) {
              text-align: center;
            }
            @media screen and (max-width: 1605px) {
              font-size: 20px;
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

