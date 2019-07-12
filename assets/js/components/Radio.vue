<template lang="html">
  <label class="radio">
    <input
      type="radio"
      @change="$emit('input', $event.target.value)"
      :value="input"
      class="th-radio"
      :name="name"
    >
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    value: {},
    input: {},
    name: {},
  },

}
</script>

<style lang="scss" scoped>

.radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  input {
    margin-right: 10px;
  }
  font-size: 24px;
  font-weight: 300;
}

</style>
