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

    </div>
    <div class="post-date">
    {{postDate}}
  </div>
    <div class="img-wrapper">
      <img :src="author.avatar===null? '/static/images/profile/defaultAvatar.png' : $env.API_URL+author.avatar" alt="user-image">
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
          rate: this.mark,
        },
          isOpen: false,
      }
    },
    props: {
      title: {
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
      mark: {
        default: '',
        type: Number,
      },
      author:{
        avatar: {
          default: '',
          type: String,
        },
      },
      date: {
        default: '',
        type: Number,
      },
    },
    computed:{
      postDate(){
       let date =  new Date(this.date*1000);
       let y = date.getFullYear();
       let m = this.checkM(date.getMonth()+1);
       let d = this.checkM(date.getDate());

       return ' '+d+'-'+m+'-'+y+' ';
      }
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
      checkM(d){
        if (d<10){
          d = '0'+d;
        }
        return d
      },
    },
    mounted() {


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
      right: -226px;
    }
    @media screen and (max-width: 767px){
      right: -121px;
    }
    @media screen and (max-width:480px) {
      right: unset;
      margin-bottom: 16px;
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
  width: 545px;
  padding-right: 216px;
  min-height: 130px;
  @media screen and (max-width: 1035px) {
    display: flex;
    padding-right: 23px;
    width: 95%;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 9px;
    min-height: unset;
  }
  @media screen and(max-width: 767px) {

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
      text-align: right;
      margin-top: 8px;
    }
    @media screen and(max-width: 767px) {

    }
    @media screen and (max-width:480px){
      font-size: 26px;
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
      text-align: right;
  }
    @media screen and(max-width: 767px) {

    }
    @media screen and (max-width: 480px){
      font-size: 17px;
    }
  }
}
.post-date{
  padding-right: 216px;
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  letter-spacing: -0.02em;
  color: #2871D7;
  padding-top: 7px;
  padding-bottom: 10px;
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
      width: 100%;
      bottom: -10px;
      left: 16px;
    }
  }
.show-more-b{
  top: 104px;
  left: 33px;
}
</style>