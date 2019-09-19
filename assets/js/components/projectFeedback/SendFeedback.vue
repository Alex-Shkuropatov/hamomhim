<template>
  <div class="feedback-form" >
<h2 class="title">Leave feedback</h2>
    <form class="feedback">
      <div class="row">
        <p>Title</p>
        <input type="text" placeholder="Title"   v-model="title">
      </div>
      <div class="row">
        <p>Description</p>
        <textarea name="description" id="" cols="30" rows="10" class="description" placeholder="Description" v-model="description"></textarea>
      </div>
      <div class="rate-wrapper">
        <rate-flag
                class="orders-item"
                v-for="digit in arr" :key="digit.rate"
                  v-bind="digit"
                @rate="onRate"
                >
        </rate-flag>
      </div>
      <button class="th-btn th-btn-blue th-btn-sm feedback-b " @click.prevent="sendFeedback">Send </button>
    </form>
  </div>

</template>

<script>
import RateFlag from './../common/RateFlag'
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
      }
    },
    mounted() {

    },
    components: {
      RateFlag,
    },
    methods:{
      onRate(date){
        this.userRate = date.rate;
      },
      sendFeedback(){
        let data = {
          worker_id: this.id,
          author_id: this.userId,
          title: this.title,
          description: this.description,
          rate: this.userRate,
        };
        axios.post('/api/addCommentOnUser', data)
            .then((resolve)=>{
              console.log(resolve);
            }).catch((error)=>{
              console.log(error);
        })
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
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 20px;
  .orders-item{
    position: relative;
    width: 95px;
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
    .title{
      font-size: 48px;
      text-align: center;
      color: #000000;
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
      }
      p{
        width: 650px;
        font-weight: bold;
        font-size: 18px;
        text-align: right;
        color: #333333;
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
      }
    }
  }
  .feedback-b{
    width: 355px;
    height: 70px;
    border: 1px solid #BDBDBD;
    margin: 0 auto;
    display: block;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
  }
</style>
