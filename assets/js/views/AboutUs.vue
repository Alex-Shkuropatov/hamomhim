<template>
   <div class="content">
       <div class="firstBlock">
            <div class="firstBlock_element">
                <h3 class="title">אודות</h3>
                <span class="description">אודות קבוצת המומחים</span>
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
        <h3 class="title">קצת עלינו במספרים</h3>
           <div class="description">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
           </div>
           <div class="stats">
               <div class="stats_element">
                   <img src="/static/images/aboutUs/worker.png" alt="worker">
                   <span class="stats_numbers">307</span>
                   <span class="stats_txt">קבלנים</span>
               </div>
               <hr class="line">
               <div class="stats_element">
                   <img src="/static/images/aboutUs/case.png" alt="case">
                    <span class="stats_numbers">1869</span>
                   <span class="stats_txt">הצעות שעברו באתר</span>
               </div>
               <hr class="line">
               <div class="stats_element">
                   <img src="/static/images/aboutUs/community.png" alt="community">
                   <span class="stats_numbers">1357</span>
                   <span class="stats_txt">משתמשים</span>
               </div>

           </div>
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
export default {
}
</script>

<style lang="scss" scoped>
    .content{
        margin: 0 auto;
        max-width: 1920px;
        padding-top: 70px;
    }
    .firstBlock{
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @media screen and (max-width:1584px){
        flex-wrap: wrap-reverse;
            text-align: center;
        }
        img{
            /*object-fit: cover;*/
            /*width: 100%;*/
            height: 396px;
        }

    }
    .firstBlock_element{
margin-left: 70px;
        width: 750px;
        height: 457px;
        @media screen and (max-width:1584px){
            margin-top: 30px    ;
        }
        .title{
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
        .description{
            font-family: Assistant;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 65px;
            color: #333333;
        }
        .txt{
            font-family: Assistant;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 40px;
            color: #333333;
        }
    }
    .secondBlock{
        padding-top: 71px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        .right_elem{
            display: block;
            max-width:358px;
            max-height:572px;
            width: auto;
            height: auto;

            z-index: 0;
            position: absolute;
            right: 0;
            bottom: -157px;
        }
        .left_elem{
            display: block;
            max-width:358px;
            max-height:725px;
            width: auto;
            height: auto;

            z-index: 0;
            position: absolute;
            left: 0;
            top: 0;
        }
        .statsInfo{
            z-index: 5;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 415px  0 440px;
            .title{
                margin: 0;
                font-family: Assistant;
                font-style: normal;
                font-weight: bold;
                font-size: 64px;
                line-height: 65px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #333333;

            }
            .description{
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
            }
        }

    }
    .stats{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 102px;
        .stats_element{
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: wrap;
            .stats_numbers{
                font-family: Assistant;
                font-style: normal;
                font-weight: bold;
                font-size: 72px;
                line-height: 65px;
                letter-spacing: -0.02em;
                background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-top: 18px;
            }
            .stats_txt{
                margin-top: 12px;
                font-family: Assistant;
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 65px;
                letter-spacing: -0.02em;
                color: #828282;
            }
        }
        .line{
            width: 195px;
            height: 0px;
            border: 1px solid #BDBDBD;
            transform: rotate(90deg);
        }
    }
    //
    //
    .thirdBlock {
        background: linear-gradient(90deg, rgb(40, 113, 215) 0%, rgb(50, 105, 182) 100%);
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 146px;
        z-index: 0;

        .blockWrapper {
            background: url("/static/images/aboutUs/bgBuild.png");
            .contentBlock {
                padding: 166px 0 143px 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                @media screen and (max-width: 1820px) {
                    flex-direction: column-reverse;
                    justify-content: center;
                }
                img {

                }
                .contentBlockInfo {
                    margin-left: 120px;
                    width: 880px;
                    height: 477px;
                    .title {
                        font-family: Assistant;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 36px;
                        line-height: 40px;
                        text-align: right;
                        color: #FFFFFF;
                    }
                    hr{
                        margin: 0;
                        height: 0;
                        border: 3px solid #FFFFFF;
                        transform: rotate(180deg);
                        margin-top: 7px;
                        margin-bottom: 10px;
                        width: 490px;
                        background-color: white;
                    }
                    .description{
                        font-family: Assistant;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 24px;
                        line-height: 40px;
                        text-align: right;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
</style>
