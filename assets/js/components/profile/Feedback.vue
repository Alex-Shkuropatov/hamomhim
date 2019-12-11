<template>
  <div class="feedback-wrapper">

<div class="feedback-body">
  <div class="title">
    <span>מסמכים</span>
  </div>

  <div class="head-wrapper">

  <div class="feedback-head"></div>
  <feedback-element
    class="post-item"
    v-for="post in userFlag ? posts : fewUsers" :key="post.id"
    v-bind="post">
  </feedback-element>

  </div>
  <button class="show-b th-btn th-btn-blue th-btn-md"  @click="getAll"><span>ראה תגובות נוספות</span></button>


</div>
  </div>
</template>

<script>
import FeedbackElement from './FeedbackElement'
  export default {
     data(){
       return {
         userFlag : false,
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
    computed:{
       fewUsers(){
         return this.posts.slice(0,3);
       }
    },
    methods: {
      getAll(){
        this.userFlag = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
.feedback-wrapper{
  margin: 0 auto;
  width: 1230px;
  @media screen and (max-width:1440px ) {
    width: 900px;
  }
  @media screen and (max-width: 1035px) {
    width: 100%;
  }
  .title{
    color: #333333;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1440px) {
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
.show-b{
  margin-top: 20px;
  width: 100%;
  height: 53px;
  display: inline-block;
  text-align: center;
  background: linear-gradient(90deg, #2871D7 0%, #2F80ED 100%);
  border-radius: 5px;

}
.feedback-body{
  margin-bottom: 30px;
  @media screen and (max-width: 1035px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>