<template>
  <div class="project-item">

  <post-close class="close"  @click.native="close"  />

    <div class="content-wrapper">
      <div class="thumb">
        <img :src="thumbnail===null?'/static/images/projects/addImg.png':  $env.API_URL+thumbnail" alt="">
      </div>
      <div class="title">{{name}}</div>
      <div class="description">{{description}}</div>
      <router-link :to="{name: path==='/projects'?'orders': 'closed-orders', params:{id:id}}" class="th-btn th-btn-empty th-btn-sm"   >ראה פרטי המכרז</router-link>
    </div>
  </div>
</template>

<script>
  import PostClose from './../components/common/PostClose.vue';

  export default {
    data(){
      return{
          user:{
            id: this.id,
          },
        path: window.location.pathname,
      }
    },
    props: {
      id: {
        type: Number,
        required: true,
      },
      thumbnail: {
        type: String,
      },
      name: {
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
      },

    },
    components: {
      PostClose,
    },
    methods: {
      close(){
        this.$store.commit('modals/projectPrice/open', this.id);
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
    width: 37px;
    height: 37px;
    @media screen and (max-width:1650px){
      width: 31px;
      height: 31px;
    }
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
      padding: 25px 26px 0 26px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

    img{
      pointer-events: none;
      width: 100%;
      height: 205px;
      @media screen and (max-width: 1440px) {
        height: 171px;
      }
    }
    .title{
      margin: 0;
      margin-top: 15px;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      color: #4F4F4F;
      @media screen and (max-width:1650px){
        font-size: 30px;
      }
    }
      .description{
        margin-top: 10px;
        font-weight: normal;
        font-size: 18px;
        line-height: 15px;
        text-align: center;
        color: #4F4F4F;
        min-height: 70px;
        max-height: 70px;
      }
    .meta{
      color: #828282;
    }
      a{
        padding-right: 47px;
        width: 211.51px;
        height: 42.78px;
        margin-top: auto;
        margin-bottom: 10px;
        font-size: 18px;
        @media screen and (max-width:1650px){
          padding-right: 42px;
          width: 191.51px;
          height: 41.78px;
          font-size: 16px;
        }
        @media screen and (max-width: 1440px){
          padding-right: 31px;
          width: 145.51px;
          height: 34.78px;
          font-size: 13px;
        }
      }
      button{

        width: 150.51px;
        height: 34.78px;
      }
  }
  }

</style>