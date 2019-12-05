<template>
    <transition name="slide-fade">
        <modal v-if="$store.getters['modals/showResponse/isOpened']" @close="close">
            <modal-content :response="data"  @back="close" />
        </modal>
    </transition>
</template>

<script>
    import Modal from '../../common/Modal.vue'
    import modalContent from './../modalResponse/SecondModal'

    export default {
        methods: {
            close() {
                this.$store.commit('modals/showResponse/close');
            },
        },
        components: {
            Modal,
            modalContent
        },
        props: {
            data: {
                type: Object
            },
        },
        mounted() {
        },
        destroyed() {

        },
    }
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';

.two-buttons{
  margin-top: 20px;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 480px){
    justify-content: center;
  }
  button{
    @media screen and (max-width: 480px){
      margin: 5px 0;
    }
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
