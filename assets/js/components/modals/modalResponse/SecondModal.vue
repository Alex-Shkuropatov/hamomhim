<template>
  <div class="content-wrapper" >
   <h2>RESPONSE</h2>
    <button class="back-b" @click="back" >back</button>
    <div class="description">
      {{response.description}}
    </div>
  </div>

</template>

<script>

  export default {
    methods: {
      close() {
        this.$store.commit('modals/showWorkers/close');
      },
      back(){
        this.$emit('back', {
        })
      },

    },
    props:{
   response: {
     type: Object,
   }
    },
    components: {

    },
    mounted() {

    },
    data () {
      return {
        orderId: '',
        done: false,

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
  .back-b{
    width: 60px;
    height: 30px;
    background-color: gainsboro;
  }
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
</style>
