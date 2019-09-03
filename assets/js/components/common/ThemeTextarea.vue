<template>
  <textarea type="text"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)">{{value}}</textarea>
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
    },

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
textarea{
  width: 100%;
  border: 1px solid #BDBDBD;
  border-radius: ceil($scale1 * 20px);
  height: ceil($scale1 * 200px);
  font-size: ceil($scale1 * 18px);
  color: $clr-dark;
  padding: 10px ceil($scale1 * 15px);
  resize: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  &::placeholder{
  }
}
</style>
