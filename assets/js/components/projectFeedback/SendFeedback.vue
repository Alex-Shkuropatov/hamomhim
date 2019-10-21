<template>
  <div class="feedback-form" >
<h2 class="title">Leave feedback</h2>
    <form class="feedback" ref="form">
      <div class="row">
        <p class="under-text">Title</p>
        <input
                type="text"
                placeholder="Title"
                v-model.trim="title"
                :class="{ 'error': $v.title.$error }"
                @input="$v.title.$touch()"

        >
        <div class="error-wrapper" v-if="$v.title.$dirty">
          <p class="error-message" v-if="!$v.title.required">
            שדה נדרש
          </p>
          <p class="error-message" v-else-if="!$v.title.minLength">
            כותרת חייבת להכיל לפחות 6 ספרות
          </p>
        </div>
      </div>
      <div class="row">
        <p class="under-text">Description</p>
        <textarea
                :class="{ 'error': $v.description.$error, 'description': true }"
                name="description"
                cols="30"
                rows="10"
                placeholder="Description"
                v-model.trim="description"
                @input="$v.description.$touch()"

        ></textarea>
        <div class="error-wrapper" v-if="$v.description.$dirty">
          <p class="error-message" v-if="!$v.description.required">
            שדה נדרש
          </p>
          <p class="error-message" v-else-if="!$v.description.minLength">
            התיאור חייב להכיל לפחות 10 מילים
          </p>
        </div>
      </div>
      <div class="rate-wrapper">
        <rate-flag
                class="orders-item"
                v-for="digit in arr" :key="digit.rate"
                v-bind="digit"
                @rate="onRate"
                :style="[ userRate===digit.rate ? {transform: 'scale(1.1)'} : ''  ]"
        >
        </rate-flag>

      </div>
      <div class="error-wrapper" v-if="$v.userRate.$dirty">
        <h5 class="error-message" style="text-align:center" v-if="!$v.userRate.required">
          בחר את התעריף
        </h5>
      </div>
      <button class="th-btn th-btn-blue th-btn-sm feedback-b " @click.prevent="sendFeedback">Send </button>
    </form>
  </div>

</template>

<script>
import RateFlag from './../common/RateFlag'
import { required, minLength } from "vuelidate/lib/validators";

  export default {
    data(){
      return{
      arr: [
        {rate: 1},
        {rate: 2},
        {rate: 3},
        {rate: 4},
        {rate: 5},
        {rate: 6},
        {rate: 7},
        {rate: 8},
        {rate: 9},
        {rate: 10},
      ],
        title: '',
        description: '',
        userRate: '',
        userId: '',
      }
    },
    props: {
      id: {
        type: Number,
      },
      orderId: {
        type:Number,
      }
    },
    mounted() {

    },
    validations: {
      title:{
        required,
        minLength: minLength(5)
      },
      description: {
        required,
        minLength: minLength(10)
      },
      userRate: {
        required,
      }
    },
    components: {
      RateFlag,
    },
    methods:{
      onRate(date){
        this.userRate = date.rate;
      },
      sendFeedback(){

        this.$v.title.$touch();
        this.$v.description.$touch();
        this.$v.userRate.$touch();

        if(!this.$v.invalid && this.userRate!==''){
          let data = {
            worker_id: this.id,
            author_id: this.userId,
            title: this.title,
            description: this.description,
            rate: this.userRate,
            order_id: this.orderId,
          };
          axios.post('/api/addCommentOnUser', data)
              .then((resolve)=>{
               console.log(resolve);
                this.$refs.form.reset();
                this.$emit('hide',{
                  feedFlag : false,
                  id: this.id,
                });
              }).catch((error)=>{
            console.log(error);
          })
        }
      }
    },
    created() {
      this.userId = this.$store.getters['user/data'].id;
    }
  }
</script>

<style lang="scss" scoped>

.rate-wrapper{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 912px;
  height: 100px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 20px;
  @media screen and (max-width:1024px){
    width: 593px;
  }
  @media screen and (max-width:600px){
    width: 300px;
    height: auto;
    flex-wrap: wrap;
  }
  .orders-item{
    &:hover  ::v-deep {
     .svg-pic{
       transform: scale(1.2);
      }
    }

    position: relative;
    width: 77px;
    height: 96px;
    @media screen and (max-width: 1024px){
      height: 65px;
    }
    @media screen and (max-width: 600px){
      margin-top: 10px;
      width: 60px;
    }
    ::v-deep {

        .rate-number {
          @media screen and (max-width: 1024px) {
            font-size: 30px;
            left: 12px;
            top: 6px;
          }
        }
          .rate-info{
            @media screen and (max-width: 1024px) {
              font-size: 10px;
              top: 29px;
              left: -3px;
            }
          }
      .svg-pic{
        @media screen and (max-width: 1024px) {
          width: 50px;
          height: 65px;
        }

      }
      }

    }
  }

  .feedback-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 850px;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 1025px){
      width: 100%;
    }
    .title{
      font-size: 48px;
      text-align: center;
      font-weight: normal;
      color: #000000;
      @media screen and (max-width:600px){
        font-size: 32px;
      }
    }
    .row{

      display: flex;
      flex-direction: column;
      align-items: center;
      input{
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        width: 700px;
        height: 46px;
        padding-right: 20px;
        @media screen and (max-width: 1024px){
          width: 553px;
        }
        @media screen and (max-width: 600px){
          width: 300px;
        }
      }
      .under-text{
        width: 650px;
        font-weight: bold;
        font-size: 18px;
        text-align: right;
        color: #333333;
        @media screen and (max-width: 1024px){
          width: 496px;
        }
        @media screen and (max-width: 600px){
          width: 290px;
          text-align: center;
        }
      }
      textarea{
        resize: none;
        width: 700px;
        height: 250px;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        padding-right: 20px;
        padding-top: 10px;
        @media screen and (max-width: 1024px){
          width: 553px;
          height: 183px;
        }
        @media screen and (max-width: 600px)  {
          width: 300px;
          height: 116px;
          border-radius: 18px;
        }
      }
    }
  }
  .feedback-b{
    width: 355px;
    height: 70px;
    border: 1px solid #BDBDBD;
    margin: 30px auto 10px;
    display: block;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    @media screen and (max-width: 600px){
      width: 250px;
      height: 58px;
    }
  }
</style>
