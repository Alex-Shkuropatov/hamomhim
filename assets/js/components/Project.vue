<template>
  <div class="project-item">

  <post-close class="close"  @click.native="close"  />

    <div class="content-wrapper">
      <div class="thumb">
        <img :src="imgSrc" alt="">
      </div>
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
      <router-link :to="{name: 'orders', params:{id:id}}" class="th-btn th-btn-empty th-btn-sm"   >קרא את הפוסט הזה</router-link>
    </div>
  </div>
</template>

<script>
  import PostClose from './../components/common/PostClose.vue';

  export default {
    data(){
      return{

      }
    },
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
      close(){
        this.$store.commit('modals/projectPrice/open');

      },
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .wrapperB{

  }
  .close{
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    @media screen and(max-width: 480px){
      top: 2px;
      left: 0px;
      width: 28px;
      height: 20px;
    }
  }
  .project-item{
    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;

    .content-wrapper{
      padding: 16px 15px 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    img{
      pointer-events: none;
      width: 100%;
      height: 160px;
    }
    .title{
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      color: #4F4F4F;
    }
      .description{
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        text-align: center;
        color: #4F4F4F;
        min-height: 70px;
        max-height: 70px;
        overflow: auto;
      }
    .meta{
      color: #828282;
    }
      a{
        margin-top: 10px;
      }
      button{
        position: absolute;
        bottom: 57px;
        width: 150.51px;
        height: 34.78px;
      }
  }
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>