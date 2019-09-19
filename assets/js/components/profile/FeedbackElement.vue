<template>
  <div class="feedback-post">
 <div class="rate-wrapper">
   <rate-flag class="rate-flag" v-bind="rateFlag" />
   <show-more class="show-more-b" @click.native="showMore" />
   <div class="show-more-element">
   </div>
 </div>
    <div class="content-wrapper">
      <div class="title">
        {{title}}
      </div>
      <div class="description" v-bind:class="{openBlock:isOpen}">
        {{description}}
      </div>
      <div class="post-date">
        {{date}}
      </div>
    </div>
    <div class="img-wrapper">
      <img :src="$env.API_URL+avatar" alt="user-image">
    </div>
    <hr>
  </div>
</template>

<script>
import RateFlag from './../common/RateFlag'
import ShowMore from './../../components/profile/ShowMore'
  export default {
    data () {
      return {
        rateFlag: {
          rate: this.rate,
        },
          isOpen: false,
      }
    },
    props: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
      rate: {
        default: '',
        type: Number,
      },
      avatar: {
        default: '',
        type: String,
      },
      date: {
        default: '',
        type: String,
      },
    },
    components: {
      RateFlag,
      ShowMore
    },
    methods: {
      showMore(){
        this.isOpen=!this.isOpen;
        console.log('open');
      },
    }
  }
</script>

<style lang="scss" scoped>
  .img-wrapper{
    position: absolute;
    width: 141px;
    height: 140px;
    right: 42px;
    top: 15px;
    @media screen and (max-width: 1035px) {
      position: relative;
      top: 10px;
      right: unset;
    }
    @media screen and (max-width:480px) {
    margin-bottom: 48px;
    margin-left: 131px;
    }
    img{
      width: 141px;
      height: 140px;
      border-radius: 50%;
    }
  }
  .openBlock{
    max-height:max-content!important;
    overflow: unset!important;
  }
  .rate-flag{
    position: absolute;
    left: 32px;
    top: 0;
  }
.document-wrapper{


  padding: 0 20px 0 20px;
 margin-top: 10px;
  height: 104px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
.content-wrapper{
  padding-right: 216px;
  min-height: 230px;
  @media screen and (max-width: 1035px) {
  padding-right: 0;
  }
  @media screen and(max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .title {
    width: 750px;
    font-weight: bold;
    font-size: 36px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #333333;
    @media screen and (max-width: 1035px) {
      width: unset;
      text-align: center;
    }
    @media screen and(max-width: 767px) {
      width: 280px;
    }
  }
  .description{
    animation-duration: 2s;
    animation-timing-function: ease;
    transition: all 0.8s;
      max-width: 500px;
    font-size: 24px;
    text-align: right;
    color: #4F4F4F;
    max-height: 124px;
overflow-y: hidden;
    @media screen and (max-width: 1035px) {
      text-align: center;
    }
    @media screen and(max-width: 767px) {
      width: 90%;
    }
  }
}
.post-date{
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #2871D7;
}
  .feedback-post{
    position: relative;
    height: auto;
    @media screen and (max-width: 1035px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    hr{
      position: absolute;
      width: 1120px;
      bottom: -10px;
      left: 16px;
    }
  }
.show-more-b{
  top: 104px;
  left: 33px;
}
</style>