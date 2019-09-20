<template>
  <div class="list-wrapper">
    <h2 class="title-w">Choose worker</h2>

  <div class="workers-wrapper">

    <worker-feedback
            class="orders-item"
            v-for="worker in workers" :key="worker.id"
            v-bind="worker"
            @getWorker="onWorker"
    >
    </worker-feedback>
  </div>

    <div class="feedback-form" >

      <send-feedback v-bind="data" @hide="onHide" v-show="data.flag" />

    </div>

  </div>
</template>

<script>
import WorkerFeedback from './../projectFeedback/WorkerFeedback'
import SendFeedback from './../projectFeedback/SendFeedback';
  export default {
    data(){
      return{
        data:{
          id: '',
          flag:false,
        }
      }
    },
    props: {
      workers: {
        type: Array,
      }
    },
    mounted() {

    },
    components: {
      WorkerFeedback,
      SendFeedback
    },
    methods:{
      onWorker(data){
       this.data.flag = true;
        this.data.id = data.id;
      },
      onHide(data){
        this.data.flag = data.feedFlag;
      },
    },
  }
</script>

<style lang="scss" scoped>
  .list-wrapper{
    .title-w{
      font-weight: normal;
      font-size: 48px;
      text-align: center;
      color: #000000;
      @media screen and (max-width:600px){
        font-size: 32px;
      }
    }
  }
.workers-wrapper{
  width: 1030px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1025px){
  width: 600px;
}
  @media screen and (max-width: 625px){
    width: 300px;
  }
}
</style>
