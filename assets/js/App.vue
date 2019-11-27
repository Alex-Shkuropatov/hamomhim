<template>
  <div id="wrapper">
    <header-default v-if="isDefaultHeader"/>
    <header-worker-profile v-else />

    <transition name="cool"  mode="out-in">
      <router-view :class="{'margin' : isDefaultHeader, 'index': true}" />
    </transition>
    <underground class="under" />
  </div>
</template>

<script>
import HeaderDefault from './components/headers/HeaderDefault.vue';
import HeaderWorkerProfile from './components/headers/HeaderWorkerProfile.vue';
import Underground from './components/Underground.vue';

export default {
  data: function(){
    return{
      header: {
        hideHeader: ['view-profile'],
      }
    }
  },
  components: {
    HeaderDefault,
    HeaderWorkerProfile,
    Underground,

  },
  methods:{

  },
  computed: {
    isDefaultHeader(){
      let result = true;
      for(let i=0;i<this.header.hideHeader.length;i++ ) {
        if(this.$route.name === this.header.hideHeader[i]){
          result = false;
        }
      }

      //edit profile for worker
      if(this.$route.name === 'profile-edit' && this.$store.getters['user/getField']('role') === 'worker'){
        result = false;
      }
      return result;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
@import "../css/transitions";
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

/* add margin before header
 * applies only to default header, that is not transparent
 */
.margin{
  margin-top:  ceil($scale1 * 100px);
  @media screen and (max-width: $breakpoint2) {
    margin-top: ceil($scale2 * 100px);
  }
}

  .under{
    z-index: 1;
  }
</style>
