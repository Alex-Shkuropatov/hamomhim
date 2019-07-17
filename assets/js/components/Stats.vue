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
          <span class="stats_txt">הצעות שעברו באתר</span>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 25px 0 25px;
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
        font-size: 72px;
        line-height: 65px;
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
        font-size: 48px;
        line-height: 65px;
        letter-spacing: -0.02em;
        color: #828282;
      }
      .caseImg{
        @media screen and (max-width:1110px ){
          margin-top: 61px;
        }
      }
    }

    .line {
      width: 195px;
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

</style>