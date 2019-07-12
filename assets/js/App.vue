<template lang="html">
  <div id="wrapper">
    <navigation/>
    <transition name="cool">
      <router-view v-if="$store.state.user.loaded" id="content"/>
    </transition>
    <underground/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Underground from './components/Underground.vue';

export default {
  components: {
    Navigation,
    Underground,
  }
}
</script>

<style lang="scss" scoped>

#content {
  &.cool-enter {
    transform: scale(1.2) translateY(50px);
    opacity: 0;
  }
  &.cool-enter-to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  &.cool-leave-active {
    display: none;
  }
  &.cool-enter-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
}

</style>
