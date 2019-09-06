<template>
<div class="input-wrapper">
  <input type="button"  :value="value">
</div>
</template>

<script>
  export default {
 props: {
  value: {
    type: String,
  }
 },
  }
</script>

<style lang="scss" scoped>

  input{
    border:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);

    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #FFFFFF;
    border-radius: 10px;
    margin: 5px;
    padding: 10px 50px 10px 50px;
  }
</style>