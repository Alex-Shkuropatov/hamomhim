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
        {id: 1, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 3, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 4, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.posts-sidebar > div {
  margin-bottom: 20px;
}
</style>
