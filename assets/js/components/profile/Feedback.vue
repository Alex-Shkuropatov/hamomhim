<template>
  <div class="feedback-wrapper">

<div class="feedback-body">
  <div class="title">
    <hr>
    <span>םיכמסמ</span>
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
    hr{
      margin-top:38px;
      margin-right: 10px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      width: 260px;
      height: 0px;
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
    .feedback-head{
      background-color: #64B049;
      width: 100%;
      height: 4px;

    }
  }

}

.feedback-body{

}
</style>