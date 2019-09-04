<template>
  <input type="text"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
input{
  width: 100%;
  border: 1px solid #BDBDBD;
  border-radius: ceil($scale1 * 50px);
  height: ceil($scale1 * 46px);
  font-size: ceil($scale1 * 18px);
  color: $clr-dark;
  padding-right: ceil($scale1 * 15px);
  padding-left: ceil($scale1 * 15px);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  &::placeholder{
  }
}
</style>
