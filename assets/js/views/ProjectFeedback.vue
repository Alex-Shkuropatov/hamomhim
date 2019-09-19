<template>
  <div class="feedback-wrapper">

    <projects-header  />

    <div class="feedback">
      <div class="th-heading text-center">םיטקיורפ תמישר</div>

      <div class="btn-wrapper">
        <button class="back-b" @click="skip"><i class="fas fa-chevron-right"></i>רוזח</button>
      </div>
<orders-slider class="wrapper-block" @getWorkers="onWorkers" />

<workers-list class="wrapper-block" v-bind="order" v-show="order.workers.length!==0"  />

    </div>
  </div>

</template>

<script>

  import Worker from './../components/Worker';
  import ProjectsHeader from './../components/ProjectsHeader';
  import OrdersSlider from '../components/projectFeedback/OrdersSlider';
  import WorkersList from '../components/projectFeedback/WorkersList';

  export default {
    data() {
      return {
        order:{
          workers: [],
        },
      };
    },
    components: {
      ProjectsHeader,
      Worker,
      OrdersSlider,
      WorkersList,
    },
    methods: {
      skip() {
        this.$router.push({name: 'closed-projects'});
      },
      onWorkers(data){
      this.order.workers = data.workers;
      },
    },
computed: {

},
    created() {

    },

  }
</script>

<style lang="scss" scoped>
  .feedback{
    position: relative;
  }
  .btn-wrapper {
    position: absolute;
    top: 62px;
    right: 200px;
    @media screen and (max-width: 900px){
      position: static;
      text-align: center;
    }
    .back-b {
      color: #2871D7;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .text-center{
    margin-top: 25px;
    @media screen and (max-width:600px){
      font-size: 32px;
    }
  }
  .wrapper-block{
    margin-bottom: 35px;
  }
</style>
