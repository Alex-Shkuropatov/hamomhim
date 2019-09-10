<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showWorkers/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title-h"> הנמזהב םידבוע</h2>
      <div class="workers-list">
        <order-workers
                class="orders-item"
                v-for="worker in getData" :key="worker.id"
                v-bind="worker">
        </order-workers>
      </div>
      </div>
    </modal>
  </transition>
</template>

<script>
  import Modal from '../common/Modal.vue'
  import OrderWorkers from '../orders/OrderWorkers'

  export default {
    methods: {
      close() {
        this.$store.commit('modals/showWorkers/close');
      },

    },
    components: {
      Modal,
      OrderWorkers
    },
    mounted() {

     },
    data () {
      return {
        orderId: '',
      }
    },
    computed: {
      getData() {
        return this.$store.getters['modals/showWorkers/getWorkers'];
      },

    },
  }
</script>

<style lang="scss" scoped>
  .content-wrapper{
    
    width: 720px;
    @media screen and (max-width: 750px) {
      width: 500px;
    }
    @media screen and (max-width: 480px) {
      width: 300px;
    }
  }
  .workers-list{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 480px) {
      justify-content: center;
    }
  }
.title-h{
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #333333;
  @media screen and (max-width:480px) {
    font-size: 30px;
  }
}
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>