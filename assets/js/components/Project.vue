<template>
  <div class="project-item">
  <post-close class="close" @onClose="onClose" />

    <div class="content-wrapper">
      <div class="thumb">
        <img :src="imgSrc" alt="">
      </div>
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
      <a :href="url" class="th-btn th-btn-empty th-btn-sm">קרא את הפוסט הזה</a>
    </div>
  </div>
</template>

<script>
  import PostClose from './../components/common/PostClose.vue';

  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
      imgSrc: {
        default: '',
        type: String,
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
      PostClose,
    },
    methods: {
      onClose(data){

        this.$emit('onClose', {
          modal : data.modal,
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .close{
    top: 5px;
    left: 5px;
  }
  .project-item{
    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;
    width: 451px;
    height: 629px;
    @media screen and (max-width:1700px){
      width: 400px;
      height: 600px;
    }

    .content-wrapper{
      padding: 32px 27px 0 27px;

    img{
      pointer-events: none;
      width: 100%;
      height: 289.67px;
    }
    .title{
      margin: 0;
      margin-top: 18px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: right;
      letter-spacing: -0.02em;
      color: #4F4F4F;
    }
      .description{
        margin-top: 10px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-align: right;
        color: #4F4F4F;
      }
    .meta{
      color: #828282;
    }
      a{
        margin-top: 14px;
      }
      button{
        position: absolute;
        bottom: 57px;
        width: 167.51px;
        height: 36.78px;
      }
  }
  }

</style>