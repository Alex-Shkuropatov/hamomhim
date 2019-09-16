<template>
  <div class="download-files">
 <div class="title">
   <hr>
   <span>םיכמסמ</span>
 </div>
    <download-document
            class="post-item"
            v-for="post in posts" :key="post.id"
            v-bind="post">
    </download-document>
    <button class="download-all th-btn th-btn-blue th-btn-md"><span>Download all</span></button>
  </div>
</template>

<script>
import DownloadDocument from './DownloadDocument'
  export default {
     data(){
       return {
         posts: [
           {id: 1, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
           {id: 2, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
           {id: 3, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
           {id: 4, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
           {id: 5, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
           {id: 6, url: '#', description: 'םייופיחו עבצ,סבג ,הרואת ,למשח ,היצלטסניא ,ףוציר ,הינב - יללכ ץופיש'},
             ]
       };
     },
    components: {
      DownloadDocument
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.download-files{
  margin:  0 auto;
  width: 1449px;
  @media screen and (max-width:1650px ) {
    width: 1266px;
  }
  @media screen and (max-width:1440px ) {
    width: 900px;
  }
  .title{
    color: #333333;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 400px;
    margin-right: 80px;
    @media screen and (max-width: 1600px) {
      width: 100%;
      justify-content: center;
    }
    hr{
      margin-top:38px;
      margin-right: 10px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      width: 260px;
      height: 0px;
    }
    span{
      font-weight: bold;
      font-size: 48px;
      color: #333333;
    }
  }
  .download-all{
    margin-top: 32px;
    margin-bottom:50px;
    width: 295.06px;
    height: 58.18px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    font-weight: bold;
    font-size: 24px;
    padding: 0px;
    display: inline-block;
    text-align: center;
  }
}

</style>