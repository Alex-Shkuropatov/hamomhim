<template>
  <div class="download-post">
    <div class="document-wrapper">
      <a :href="$env.API_URL+file" download target="_blank">
        <button class="download th-btn th-btn-blue th-btn-md" href="#">
          <span >Download</span>
        </button>
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
    min-height: 52px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    .download{
      width: 118px;
      height: 30px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      border-radius: 50px;
      font-size: 16px;
      padding: 0px;
      font-weight: bold;
      display: inline-block;
      text-align: center;
      @media screen and (max-width: 1035px) {
        width: 100px;
        height: 35px;
      }

    }
  }
  .download-post{
    position: relative;


    .hover-element{
      position: absolute;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      width: 12px;
      height: 52px;
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
      width: 196px;
    }
  }
</style>