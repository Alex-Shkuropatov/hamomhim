<template>
  <div class="work-post">
    <div class="img-wrapper">
      <img :src="imgSrc" alt="">
    </div>
  <div class="text-wrapper">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div class="description">
      <span>{{description}}</span>
    </div>
    <button class="more-b" :href="url"> טקייורפל ></button>
  </div>

  </div>
</template>

<script>

  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      images: {
        default: '',
        type: Array,
      },
      title: {
        default: '',
        type: String,
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
    components: {
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

.work-post{
  background: #FFFFFF;

  line-height: 1.16;
  img{
    width: 100%;
    height: auto;
    margin-bottom: 8px;
  }
  .text-wrapper{
    padding-right: 10px;
    .title{
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: right;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .description {
      margin-top: 10px;
      font-size: 18px;
      line-height: 20px;
      text-align: right;
      color: #4F4F4F;
    }
    .more-b{
      margin-top: 10px;
      background: #2871D7;
      border-radius: 3px;
      font-weight: 600;
      font-size: 14px;
      line-height: 30px;
      text-align: right;
      color: #FFFFFF;
    }
  }


}
</style>