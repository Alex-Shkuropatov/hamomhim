<template>
  <div class="page-outer">
    <page-subheader v-bind="subHeader"/>
    <div class="post-page h-container">
      <div class="nav-line">
        <a href="#" class="back-btn">אחורה</a>
      </div>
      <div class="post-content">
        <div class="main-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
        <div class="text section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div class="section">
          <div class="img-wrap">
            <img src="/static/images/news/post-img.png" alt="">
          </div>
          <div class="img-caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div class="title section">Lorem ipsum dolor sit</div>
        <div class="text section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur </p>
        </div>

        <div class="image-text section">
          <div>
            <div class="title">Lorem ipsum</div>
            <div class="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div class="img-wrap">
            <img src="/static/images/news/post-img2.png" alt="">
          </div>
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
        image: '/static/images/bg-post-page.png'
      }
    };
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
}
</style>
