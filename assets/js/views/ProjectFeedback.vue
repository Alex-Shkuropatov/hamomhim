<template>
  <div class="feedback-wrapper">

    <projects-header  />

    <div class="feedback">

<orders-slider @getWorkers="onWorkers" />
<workers-list v-bind="order" />
    </div>
  </div>

</template>

<script>

  import Worker from './../components/Worker';
  import ProjectsHeader from './../components/ProjectsHeader';
  import OrdersSlider from './../components/ProjectFeeback/OrdersSlider';
  import WorkersList from './../components/ProjectFeeback/WorkersList';
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
      WorkersList
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      onWorkers(data){
      this.order.workers = data.workers;
      }

    },
computed: {

},

    created() {

    },


  }
</script>

<style lang="scss" scoped>

</style>
