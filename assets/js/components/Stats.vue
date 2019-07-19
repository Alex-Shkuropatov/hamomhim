<template>
      <div class="stats">
        <div class="stats_element">
          <img src="/static/images/aboutUs/worker.png" alt="worker">
          <span class="stats_numbers">307</span>
          <span class="stats_txt">קבלנים</span>
        </div>
        <hr class="line">
        <div class="stats_element">
          <img src="/static/images/aboutUs/case.png" alt="case" class="caseImg">
          <span class="stats_numbers">1869</span>
          <span class="stats_txt hw_txt">הצעות שעברו באתר</span>
        </div>
        <hr class="line">
        <div class="stats_element">
          <img src="/static/images/aboutUs/community.png" alt="community">
          <span class="stats_numbers">1357</span>
          <span class="stats_txt">משתמשים</span>
        </div>
      </div>
</template>


<script>
  export default {}
</script>

<style lang="scss" scoped>
  .stats {
    pointer-events: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 0 25px 0 25px;
    width: 827px; //0.8
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    .stats_element {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      .stats_numbers {
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 57.6px; //72
        line-height: 52px; //65
        letter-spacing: -0.02em;
        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: 18px;
      }
      .stats_txt {
        text-align: center;
        margin-top: 12px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 38.4px; //48
        line-height: 65px;
        height: 65px;
        letter-spacing: -0.02em;
        color: #828282;
      }
      .caseImg{
        @media screen and (max-width:900px ){
          margin-top: 61px;
        }
        @media screen and (max-width:1110px ){
          margin-top:0;
        }
      }
    }

    .line {
      width: 156px; //195
      height: 0px;
      border: 1px solid #BDBDBD;
      transform: rotate(90deg);
      @media screen and (max-width: 900px) {
        margin: 20px 0 20px 0;
        transform: rotate(0deg);
      }
      @media screen and (max-width: 1100px) {
        margin: 20px 0 20px 0;
        transform: rotate(0deg);
      }
    }
  }
.hw_txt{
  width : 272px;
  @media screen {

  }
}
</style>