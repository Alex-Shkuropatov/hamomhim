<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showWorkers/isOpened']" @close="close">

      <div class="content-wrapper"  v-show="count===0" >
        <h2 class="title-h">רשימת קבלנים</h2>

        <div class="workers-list" v-show="getData!==false">
          <order-workers
            @getResponse="onResponse"
            class="orders-item"
            v-for="worker in getData" :key="worker.id  "
            :projectName = 'getName'
            v-bind="worker">
          </order-workers>
        </div>
        <div class="empty" v-show="getData.length===0">
          <h3> No workers on order</h3>
        </div>
      </div>

      <second-modal v-show="count===1" v-bind="data" @back="onBack" />

    </modal>
  </transition>
</template>

<script>
  import Modal from '../common/Modal.vue'
  import OrderWorkers from '../orders/OrderWorkers'
  import SecondModal from './modalResponse/SecondModal'
  export default {
    methods: {
      close() {
        this.$store.commit('modals/showWorkers/close');
        this.count= 0;
      },
      onResponse(data){
        console.log(data);
        this.data.response = data.response;
         this.count++;
      },
      onBack(){
        this.count=0;
      }
    },
    components: {
      Modal,
      SecondModal,
      OrderWorkers,
    },
    mounted() {

     },
    props:{
      projectName:{
        type: String
      },
    },
    data () {
      return {
        orderId: '',
        done: false,
        count: 0,
        data: {
          response: {},
        }
      }
    },
    computed: {
      getData() {
        return this.$store.getters['modals/showWorkers/getWorkers'];
      },
      getName(){
        return this.$store.getters['modals/showWorkers/getProjectName'];
      }

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
.empty{
  h3{
    text-align: center;
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