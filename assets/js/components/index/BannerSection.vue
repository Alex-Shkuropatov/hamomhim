<template>
  <div class="banner-section">
    <div class="banner">
      <img src="/static/images/main-page/banner.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.banner-section{
  margin-right: auto;
  margin-left: auto;
  width: $container-width1 + $scale1 * 130px;
  height: 180px;
  overflow: hidden;
  text-align: center;
}
img{
  width: 100%;
  height: 100px;
}

@media(max-width: $breakpoint2){
  .banner-section{

  }
}
</style>
