<template>

  <div class="page-subheader" :style="styles">
    <div class="subhead-bg page-subheader">

    </div>
    <div class="h-container">
      <div class="th-heading clr-white">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    styles() {
      return {
        backgroundImage: 'url('+this.image+')',
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.subhead-bg{
  width: 100%;
  background: rgba(	40,	113,	215, 0.75);
  position: absolute;
}
.page-subheader{
  height: ceil($scale1 * 180px);
  width: 100%;
  display: flex;
  -ms-align-items: center;
  align-items: center;

  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  .h-container{
    z-index:1;
    .clr-white{
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 0;
    }
  }
}
@media(max-width: $breakpoint2){
  .page-subheader{
    height: ceil($scale2 * 180px);
  }
}

@media(max-width: $breakpoint3){
  .page-subheader{
    height: ceil($scale3 * 180px);
  }
}
@media(max-width: $breakpoint4){
  .page-subheader{
    height: ceil($scale4 * 180px);
  }
}

</style>
