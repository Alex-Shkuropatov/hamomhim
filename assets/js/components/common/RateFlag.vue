<template>
  <button class="rate-flag" @click.prevent="getRate">
    <div class="rate-number" :class="getRoute ? 'rate-number' : 'rate-default'" >{{rate}}</div>
    <div class="rate-info">ציון משוכלל</div>
    <svg class="svg-pic"  viewBox="0 0 78 96" ref="svg"  xmlns="http://www.w3.org/2000/svg">
      <path d="M75 96C74.4727 96 73.957 95.9021 73.4883 95.7146L39 81.7174L4.51172 95.7146C3.58594 96.0896 2.4375 96.0978 1.51172 95.7228C0.574219 95.3478 0 94.663 0 93.913V2.08696C0 0.9375 1.34766 0 3 0H75C76.6641 0 78 0.9375 78 2.08696V93.913C78 94.663 77.4258 95.3478 76.4883 95.7228C76.0313 95.9103 75.5156 96 75 96Z" />
    </svg>
  </button>
</template>

<script>
  export default {
    props: {
      rate: {
        type: Number,
      }
    },
    methods: {
      getRate(){
        this.$emit('rate',{
          rate: this.rate,
        })
      }
    },
    computed:{
      getRoute(){
        return this.$router.currentRoute.name === 'view-profile'
          || this.$router.currentRoute.name === 'profile-edit'
          || this.$router.currentRoute.name === 'leave-feedback' ;
      }

    },
    mounted() {
      console.log( this.getRoute);
      if(this.rate>7){
        this.$refs.svg.setAttribute('fill', '#64B049');
      } else if (this.rate > 4){
        this.$refs.svg.setAttribute('fill', '#FFB000');
      } else {
        this.$refs.svg.setAttribute('fill', '#F15A24');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rate-flag{

    .rate-info{
      position: absolute;
      z-index: 4;
      top: 42px;
      width: 60px;
      left: 9px;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      color: #FFFFFF;
      @media screen and (max-width:1024px){
        top: 40px;
        width: 54px;
        left: 3px;
        font-size: 11px;
      }
    }
    .svg-pic{
      transition: all .2s ease;
      width:78px;
      height:96px;
      top: 0;
      left: 0;
      position: absolute;
      @media screen and (max-width: 1024px){
        width:58px;
        height:76px;
      }
    }
  }

  .rate-number{
    position: absolute;
    z-index: 4;
    top: 14px;
    width: 41px;
    left: 18px;
    font-weight: bold;
    font-size: 40px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:1024px){
      width: 25px;
      left: 16px;
      font-size: 30px;
    }
  }

  .rate-default{
    position: absolute;
    z-index: 4;
    top: 14px;
    width: 41px!important;
    left: 4px!important;
    font-weight: bold;
    font-size: 40px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:1024px){
      width: 25px!important;
      left: 11px!important;
      font-size: 30px;
    }
  }
</style>
