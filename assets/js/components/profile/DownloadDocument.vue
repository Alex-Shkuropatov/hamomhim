<template>
  <div class="download-post">
<div class="document-wrapper">
  <a :href="$env.API_URL+file" download target="_blank">
  <button class="download th-btn th-btn-blue th-btn-md" href="#"><span>הורד את המסמך</span></button>
  </a>
  <div class="description">{{name}}</div>
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
      name: {
        type: String,
      },
      file: {
        type: String,
      }
    },
    methods: {


    },
  }
</script>

<style lang="scss" scoped>
.document-wrapper{
padding: 0 20px 0 20px;
 margin-top: 10px;
  min-height: 104px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 480px){
    flex-direction: column-reverse;
  }
  .download{
    width: 216px;
    height: 53px;
    background: linear-gradient(90deg, #2871D7 0%, #2F80ED 100%);
    border-radius: 5px;
    font-size: 18px;
    padding: 0px;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    @media screen and (max-width: 1035px) {
      width: 167px;
      height: 42px;
    }
    @media screen and (max-width: 480px){
      margin-bottom: 10px;
    }
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
.description{
  text-overflow: ellipsis;
  width: 55%;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 480px){
    width: 100%;
  }
}
</style>
