<template>
  <div class="posts-sidebar">
    <news-post-item v-for="post in posts" :key="post.id" v-bind="post"></news-post-item>
  </div>
</template>

<script>
import NewsPostItem from './NewsPostItem.vue';
export default {
  components: {
    NewsPostItem
  },
  data(){
    return {
      posts: [
      ],
    };
  },
  mounted() {
    axios.post('/api/admin/getAllBlogs',{'sortBy':'id','orderBy': 'DESC', page: '0', take: '3'})
        .then((response)=>{
          console.log(response);
          this.posts = response.data.value.records;
        }).catch((error)=>{
      console.log(error);
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.posts-sidebar > div {
  margin-bottom: 20px;
}
</style>
