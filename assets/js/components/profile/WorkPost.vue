<template>
  <div class="work-post">
    <div class="img-wrapper">
      <img :src="$env.API_URL+images[0]" alt="">
    </div>
  <div class="text-wrapper">
    <div class="title">
      <span>{{name}}</span>
    </div>
    <div class="description">
      <span>{{description}}</span>
    </div>
    <button class="more-b" @click="openImgs" > טקייורפל > </button>
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
      name: {
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
    },
    components: {
    },
    methods: {
      openImgs(){
        this.$emit('openImg',{
          id: this.id,
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

.work-post{
  position: relative;
  background: #FFFFFF;
  height: 325px;
  width: 260px;
  line-height: 1.16;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
 .img-wrapper{
   img{
     width: 100%;
     height: 190px;
     margin-bottom: 8px;
   }
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
      margin-bottom: 30px;
    }
    .more-b{
      bottom: 20px;
      position: absolute;
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