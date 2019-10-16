<template>
  <div class="post-item">
    <div class="thumb">
      <img :src="thumb? $env.API_URL+thumb: '/static/images/default/default-blog.png' " alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="meta">
      <span>{{getDate}}</span> | <span>by {{author}}</span>
    </div>
    <div class="excerpt">{{description}}</div>
    <router-link  class="th-btn th-btn-empty th-btn-sm" :to="{name: 'blog-post', params: {id: id}}">קרא את הפוסט הזה </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    thumb: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    created_at:{
      type: String,
    },
    description:{
      type:String,
    },
    author: {
      default: '',
      type: String,
    },
    date: {
      default: '',
      type: String,
    },
    excerpt: {
      default: '',
      type: String,
    },
    url: {
      default: '#',
      type: String,
    }
  },
  computed:{
    getDate(){
      if (this.created_at){
        return this.created_at.slice(0,11).replace(/-/g, '.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.post-item{
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 22px;
  line-height: 1.16;
  text-align: center;
  .thumb{
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  img{
    width: 100%;
    height: auto;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    color: $clr-blue;
    margin-bottom: 8px;
  }
  .meta{
    color: #828282;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .excerpt {
    font-size: 16px;
    margin-bottom: 13px;
  }
}
.th-btn{
  border-radius:5px;
}

@media (max-width: $breakpoint2){
  .post-item{
    font-size: 16px;
    padding: ceil($scale2 * 20px) ceil($scale2 * 22px);
    .title{
      font-size: ceil($scale1 * 24px);
    }
  }
}
@media (max-width: $breakpoint3){
  .post-item{
    padding: ceil($scale3 * 20px) ceil($scale3 * 22px);
  }
}

@media (max-width: $breakpoint4){
  .post-item{
     padding: ceil($scale3 * 20px) ceil($scale3 * 22px);
    .title{
      font-size: ceil($scale2 * 24px);
    }
    .th-btn{
      margin-top: 5px;
    }
  }
}
</style>
