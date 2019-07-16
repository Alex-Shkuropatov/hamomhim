<template>
  <main>
    <first-frame/>
    <second-frame/>
    <third-frame/>
  </main>
</template>

<script>
import FirstFrame from './../components/index/FirstFrame.vue';

export default {
  components: {
    FirstFrame,
  }
}
</script>

<style lang="scss" scoped>

main {
  background-color: #f8f8f8;
}

</style>
