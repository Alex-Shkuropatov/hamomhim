<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showGallery/isOpened']" @close="close">
      <h3>Works Gallery</h3>
    </modal>
</transition>
</template>

<script>
  import Modal from '../common/Modal';
  import Subcategory from '../orders/Subcategory.vue'

  export default {
    data() {
      return {
        flag: true,
      }
    },
    methods: {
      close() {
        this.$store.commit('modals/showOrder/close');
      },
    },
    components: {
      Modal,
      Subcategory
    },
    computed: {
      getData() {
        return this.$store.getters['modals/showOrder/getOrder'];
      },
      getId() {
        return this.$store.getters['categories/getNameById'](this.getData.categoryId);
      },
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
