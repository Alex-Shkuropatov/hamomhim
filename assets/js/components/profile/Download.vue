<template>
  <div class="download-files">
 <div class="title">
   <hr>
   <div class="spn">םיכמסמ</div>
 </div>
    <download-document
            class="post-item"
            v-for="post in files" :key="post.id"
            v-bind="post">
    </download-document>
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
    props: {
       files: {
          type: Array,
       }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
.download-files{
  margin:  0 auto;
  margin-bottom: 35px;
  width: 1449px;
  @media screen and (max-width:1650px ) {
    width: 1266px;
  }
  @media screen and (max-width:1440px ) {
    width: 900px;
  }
  @media screen and (max-width:1035px ) {
    width:660px;
  }
  @media screen and (max-width:767px ) {
    width: 470px;
  }
  @media screen and (max-width: 480px) {
    width: 310px;
    display: block;
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
    @media screen and (max-width: 767px) {
      width: unset;
    }
    @media screen and (max-width: 570px){
      font-size: 33px;
      margin-right: 80px;
    }
    hr{
      margin-top:38px;
      margin-right: 10px;
      border: 1px solid #333333;
      transform: rotate(180deg);
      width: 260px;
      height: 0px;
      @media screen and (max-width: 767px) {
        width: 145px;
      }
      @media screen and (max-width: 570px){
        display: none;
      }
    }
    .spn{
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
    @media screen and (max-width: 480px) {
      width: 190.06px;
      height: 44.18px;
      display: block;
      margin: 20px auto;
      font-size: 20px;
    }
  }
}

</style>