<template>
  <div class="blog">
    <page-subheader v-bind="subHeader"/>
    <div class="blog-list-wrap h-container">
      <div class="blog-list">
        <news-post-item
          class="post-item"
          v-for="post in posts" :key="post.id"
          v-bind="post">
        </news-post-item>
      </div>
    </div>
  </div>
</template>

<script>
import NewsPostItem from './../components/posts/NewsPostItem.vue';
import PageSubheader from './../components/PageSubheader.vue';

export default {
  data(){
    return {
      subHeader: {
        title: ' בלוג',
        image: '/static/images/bg-blog.png'
      },
      posts: [

       ],
    };
  },
  mounted(){
    axios.post('/api/admin/getAllBlogs',{'sortBy':'id','orderBy': 'DESC', page: '0', take: '20'})
        .then((response)=>{
          console.log(response);
          this.posts = response.data.value.records;
        }).catch((error)=>{
          console.log(error);
        })
  },
  components: {
    PageSubheader,
    NewsPostItem
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.blog-list-wrap{
  padding-top: 50px;
  padding-bottom: 50px;
}
.blog-list{
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.post-item{
  margin-right: 15px;
  margin-left: 15px;
  width: calc(25% - 30px);
  margin-bottom: 30px;
}


@media(max-width: $breakpoint2){
  .post-item{
    margin-right: 10px;
    margin-left: 10px;
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
  }
}

@media(max-width: $breakpoint4){
  .post-item{
    width: calc(50% - 20px);
  }
}

@media(max-width: $breakpoint5){
  .post-item{
    width: calc(100% - 20px);
  }
}
</style>
