<template>
  <div class="feedback-wrapper">

<div class="feedback-body">
  <div class="title">
    <hr>
    <span>מסמכים</span>
  </div>
  <div class="head-wrapper">
  <div class="feedback-head"></div>
  <feedback-element
    class="post-item"
    v-for="post in posts" :key="post.id"
    v-bind="post">
  </feedback-element>
  </div>
</div>
  </div>
</template>

<script>
import FeedbackElement from './FeedbackElement'
  export default {
     data(){
       return {

       };
     },
    props: {
      posts: {
        type: Array,
      }
    },
    components: {
      FeedbackElement,
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.feedback-wrapper{
  margin: 0 auto;
  width: 1449px;
  @media screen and (max-width: 1650px) {
    width: 1266px;
  }
  @media screen and (max-width:1440px ) {
    width: 900px;
  }
  @media screen and (max-width: 1035px) {
    width: 100%;
  }
  .title{
    color: #333333;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 80px;
    @media screen and (max-width: 1600px) {
      width: 100%;
      justify-content: center;
    }
    @media screen and (max-width: 1035px) {
      width: unset;
     }
    @media screen and (max-width: 767px){
      font-size: 40px;
    }

    @media screen and (max-width: 570px){
      font-size: 33px;
    }
    hr{
      margin-top:38px;
      margin-right: 10px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      width: 260px;
      height: 0px;
      @media screen and (max-width: 767px){
        width: 150px
      }
      @media screen and (max-width: 570px){
        display: none;
      }
    }
    span{
      font-weight: bold;
      font-size: 48px;
      color: #333333;
    }
  }
  .head-wrapper{
    margin:  0 auto;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 1035px){
      width: 650px;
    }
    @media screen and (max-width: 767px){
      width: 440px;
    }
    @media screen and (max-width: 480px){
      width: 310px;
    }
    .feedback-head{
      background-color: #64B049;
      width: 100%;
      height: 4px;

    }
  }

}

.feedback-body{
  @media screen and (max-width: 1035px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>