<template>
  <div class="page-outer">
    <page-subheader v-bind="subHeader"/>
    <div class="post-page h-container">
      <div class="nav-line">
        <router-link :to="{name: 'blog'}" class="back-btn" >אחורה</router-link>
      </div>
      <div class="post-content">
        <div class="main-title">{{content.title}}</div>
        <div class="text section" v-html="content.contents"></div>

        <div class="section">
        </div>
      </div>
      <posts-sidebar class="sidebar"></posts-sidebar>
    </div>
  </div>
</template>

<script>
import PageSubheader from './../components/PageSubheader.vue';
import PostsSidebar from './../components/posts/PostsSidebar.vue';

export default {
  components: {
    PageSubheader,
    PostsSidebar
  },
  data(){
    return {
      subHeader: {
        title: '',
        image: '/static/images/bg-post-page.png'
      },
      content: {},
    };
  },
  methods:{
    getBlog(id){
      console.log('+++');
      axios.post('/api/admin/getSingleBlog',{id : id})
          .then((response)=>{
            console.log(response.data.value);
            this.content = response.data.value;
            this.subHeader.title = response.data.value.title;
          }).catch((error)=>{
        console.log(error);
      });
    }
  },

  beforeRouteUpdate (to, from, next) {
 this.getBlog(to.params.id);
    next();
  },
  mounted() {
    this.getBlog(this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.post-page{
  display: flex;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.nav-line{
  margin: 20px 0;
  width: 100%;
  .back-btn{
    color: $clr-blue;
    font-size: 24px;
    font-weight: bold;
    padding-right: 32px;
    background: url('/static/images/icons/arrow-right-blue.svg') no-repeat right center;
    -webkit-background-size: 18px 30px;
    background-size: 18px 30px;
  }
}
.post-content{
  width: 66%;
  font-size: 20px;
  line-height: 1.3;
  .main-title{
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
  }
  img{
    width: 100%;
    height: auto;
  }
  .img-caption{
    font-weight: bold;
    margin-bottom: 20px;
    width: 60%;
  }
  .title{
    font-size: 36px;
    font-weight: bold;
  }
  .image-text{
    display: flex;
    .img-wrap{
      width: 40%;
      margin-right: 5%;
      flex-shrink: 0;
    }
  }
}
.section{
  margin-bottom: 20px;
}
.image-text{
  margin-top: 40px;
}
.sidebar{
  width: 25%;
  @media screen and (max-width: 767px){
    display: none;
  }
}
</style>
