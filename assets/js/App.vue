<template>
  <div id="wrapper">
    <navigation v-bind="header"/>
    <transition name="cool">
      <router-view class="margin" />
    </transition>
    <underground/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Underground from './components/Underground.vue';

export default {
  data: function(){
    return{
      header: {
        hideHeader: ['profile'],
        headDefault: true,
        headProfile: false,
      }
    }
  },
  components: {
    Navigation,
    Underground,

  },
  methods:{
    checkHeader(){
      for(let i=0;i<this.header.hideHeader.length;i++ ) {
        if(this.$route.name === this.header.hideHeader[i]){
          this.header.headDefault=!this.header.headDefault;
          this.header.headProfile=!this.header.headProfile;
          return;
        }
        this.header.headDefault=true;
        this.header.headProfile=false;

      }
    }
  },
  created() {
   this.checkHeader();
  },
  beforeUpdate () {
    this.checkHeader();
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
.margin{
  margin-top:  80px;
}
</style>
