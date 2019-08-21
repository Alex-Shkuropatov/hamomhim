<template>
  <div class="download-post">
<div class="document-wrapper">
  <button class="download th-btn th-btn-blue th-btn-md" :href="url"><span>Download</span></button>
  <div class="description">{{description}}</div>
</div>
<div class="hover-element"></div>
  </div>
</template>

<script>

  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      description: {
        default: '',
        type: String,
      },
      url: {
        default: '#',
        type: String,
      }
    },
  }
</script>

<style lang="scss" scoped>
.document-wrapper{
padding: 0 20px 0 20px;
 margin-top: 10px;
  height: 104px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  .download{
    width: 216px;
    height: 53px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    font-size: 18px;
    padding: 0px;
    font-weight: bold;

    display: inline-block;
    text-align: center;
  }

}
  .download-post{
    position: relative;
    .hover-element{

      position: absolute;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      width: 12px;
      height: 104px;
      top: 0;
      border-radius: 2px;
    }
  }

</style>