<template>
  <div class="post-item">
    <div class="thumb">
      <img :src="thumb" alt="">
    </div>
    <div class="title">{{title}}</div>
    <div class="meta">
      <span>{{date}}</span> | <span>by {{author}}</span>
    </div>
    <div class="excerpt">{{excerpt}}</div>
    <a :href="url" class="th-btn th-btn-empty th-btn-sm">קרא את הפוסט הזה</a>
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
  img{
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
  }
  .meta{
    color: #828282;
  }
  .meta, .excerpt, .title{
    margin-bottom: 5px;
  }
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
