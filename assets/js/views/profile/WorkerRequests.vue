<template>
  <div class="h-container requests-list">
    <template v-if="requests.length">
      <div class="request-item" v-for="request in requests">
        <div class="title-line"></div>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  requests: []
}
</script>

<style lang="scss" scoped>
.requests-list{
  margin-top: 90px;
  margin-bottom: 90px;
}
</style>
