<template lang="html">
  <main>
    <first-frame/>
    <second-frame/>
    <third-frame/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';
import SecondFrame from './../components/index/SecondFrame.vue';
import ThirdFrame from './../components/index/ThirdFrame.vue';

export default {
  components: {
    FirstFrame,
    SecondFrame,
    ThirdFrame,
  }
}
</script>

<style lang="scss" scoped>

main {
  background-color: #f8f8f8;
}

</style>
