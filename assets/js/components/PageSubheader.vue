<template>
  <div class="page-subheader" :style="styles">
    <div class="h-container">
      <div class="th-heading clr-blue">{{title}}</div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.page-subheader{
  height: ceil($scale1 * 250px);
  width: 100%;
  display: flex;
  -ms-align-items: center;
  align-items: center;

  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}
@media(max-width: $breakpoint2){
  .page-subheader{
    height: ceil($scale2 * 250px);
  }
}

@media(max-width: $breakpoint3){
  .page-subheader{
    height: ceil($scale3 * 250px);
  }
}
@media(max-width: $breakpoint4){
  .page-subheader{
    height: ceil($scale4 * 250px);
  }
}

</style>
