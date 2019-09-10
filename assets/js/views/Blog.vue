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
      <div class="text-center load-more-posts-wrap">
        <button class="th-btn th-btn-lg th-btn-blue load-more-posts">העלה פוסטים נוספים</button>
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
        title: 'תודוא',
        image: '/static/images/bg-blog.png'
      },
      posts: [
        {id: 1, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 2, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 3, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 4, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 5, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 6, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 7, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 8, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 9, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
        {id: 10, thumb: '/static/images/news/news-thumb.png', title: 'הגדלת הכנסות', author: 'Lorem Ipsum', date: '12.23.19', url: '#', excerpt: ' תירבעה תא ךופהי אוהו ךפוהה ךותב הפ םיצור םתאש תירבעה תא דבל ובתכתש וא טסקטה תא םכל ךופהי הזו וקיבדת טושפ דבל טסקטה תא ךופהיש ,טסקט ךפוה הפ ונל שי'},
      ],
    };
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
.load-more-posts{
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
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
