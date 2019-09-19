<template>

</template>

<script>

  import OrderWorkers from '../../orders/OrderWorkers'

  export default {
    methods: {
      close() {
        this.$store.commit('modals/showWorkers/close');
      },
      getResponse(){

      },
    },
    components: {
      OrderWorkers
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

</style>
