<template>
      <div class="stats" ref="stats" id="stat">
        <div class="stats_element">
          <img src="/static/images/aboutUs/worker.png" alt="worker">
          <animated-number class="stats_numbers" id="stats_numbers" v-on:scroll.passive="onScroll" ref="statsF" :value="statsF" :formatValue="formatToPrice" :duration="duration"/>
          <span class="stats_txt">קבלנים</span>
        </div>
        <hr class="line">
        <div class="stats_element">
          <img src="/static/images/aboutUs/case.png" alt="case" class="caseImg">
          <animated-number class="stats_numbers" ref="statsS" :value="statsS" :formatValue="formatToPrice" :duration="duration"/>
          <span class="stats_txt hw_txt">הצעות שעברו באתר</span>
        </div>
        <hr class="line">
        <div class="stats_element">
          <img src="/static/images/aboutUs/community.png" alt="community">
          <animated-number class="stats_numbers" ref="statsT" :value="statsT" :formatValue="formatToPrice" :duration="duration"/>
          <span class="stats_txt">משתמשים</span>
        </div>
      </div>
</template>

<script>
  import AnimatedNumber from "animated-number-vue";
  export default {
    components: {
      AnimatedNumber
    },
    data: function () {
      return {
        statsArr : [307, 1869, 1357],
        statsF: 0,
        statsS: 0,
        statsT: 0,
        duration: 0,
      }
    },
    methods: {
      formatToPrice(value) {
        return `${value.toFixed(0)}`;
      },
      checkCord(){
        let coordY =  this.$refs.stats.getBoundingClientRect().y ; // delete event listener
        if(coordY<650){
          this.duration = 3400;
          this.statsF =this.statsArr[0];
          this.statsS = this.statsArr[1];
          this.statsT = this.statsArr[2];
          document.removeEventListener('scroll', this.checkCord, false);
        }
      }
    },
    destroyed() {
      document.removeEventListener('scroll', this.checkCord, false);
    },
    mounted() {
    document.addEventListener('scroll',  this.checkCord)
    },
  };
</script>

<style lang="scss" scoped>
  .stats {
    pointer-events: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    padding: 0 25px 0 25px;
    //width: 827px; //0.8
    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: unset;
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
        @media screen and (max-width: 1605px) {
          font-size: 40.6px;
        }
      }
      .stats_txt {
        text-align: center;
        margin-top: 12px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 38.4px; //48
        line-height: 65px;

        letter-spacing: -0.02em;
        color: #828282;
        @media screen and (max-width: 1605px) {
          font-size: 30.6px;
        }
        @media screen and (max-width: 1605px) {
          height: 40px;
        }
      }
      .caseImg{
        @media screen and (max-width:900px ){
          margin-top: 61px;
        }
        @media screen and (max-width:1110px ){
          margin-top:0;
        }
      }
      img{
        @media screen and (max-width: 1605px) {
          width: 90px;
          height: 83px;
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
