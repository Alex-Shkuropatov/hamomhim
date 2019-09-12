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

      <send-feedback v-bind="data" v-if="data.id"/>

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
        console.log(data);
        this.data.id = data.id;
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
    }
  }
.workers-wrapper{
  width: 1030px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
