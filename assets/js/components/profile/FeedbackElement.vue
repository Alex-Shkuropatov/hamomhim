<template>
  <div class="feedback-post">
 <div class="rate-wrapper">
   <rate-flag v-bind="rateFlag" />
   <div class="show-more-element">

   </div>
 </div>
    <div class="content-wrapper">
      <div class="title">

      </div>
      <div class="description">

      </div>
      <div class="img-wrapper">
        <img :src="img" alt="user-image">
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import RateFlag from './../common/RateFlag'
  export default {
    data () {
      return {
        rateFlag: {
          rate: this.rate,
        },
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
      img: {
        default: '',
        type: String,
      },
      date: {
        default: '',
        type: String,
      },
      url: {
        default: '#',
        type: String,
      }
    },
    components: {
      RateFlag
    }
  }
</script>

<style lang="scss" scoped>
  .img-wrapper{
    position: absolute;
    width: 191px;
    height: 191px;
    right: 42px;
    top: 72px;
    img{
      width: 191px;
      height: 191px;
      border-radius: 50%;

    }
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
  .feedback-post{
    position: relative;
    height: 325px;
    hr{
      position: absolute;
      width: 900px;
      bottom:0;
    }
  }

</style>