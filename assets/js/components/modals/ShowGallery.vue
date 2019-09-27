<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showGallery/isOpened']" @close="close">
      <h3>Works Gallery</h3>
      <div class="content" v-if="getPost!==''">
        <div class="img-wrapper">
          <transition name="fade">
            <img  :src="$env.API_URL+getPost.images[i]" class="img" alt="">
          </transition>
        </div>
     <div class="footer">

      <div class="txt-info">
        <div class="name">{{getPost.name}}</div>
        <div class="description">{{getPost.description}}</div>
      </div>
       <div class="arrows-wrapper">
         <div class="arrows">
         <button class="prev" @click="prev"> <i class="fas fa-chevron-right"></i></button>
         <button class="next" @click="next"><i class="fas fa-chevron-left"></i></button>
       </div>
         <div class="slide-counter name">
           {{i+1}}/{{getPost.images.length}}
         </div>
       </div>

     </div>
      </div>
    </modal>
</transition>
</template>

<script>
  import Modal from '../common/Modal';
  import Subcategory from '../orders/Subcategory.vue'

  export default {
    data() {
      return {
        flag: true,
        i: 0,
      }
    },
    props: {

    },
    methods: {
      close() {
        this.$store.commit('modals/showGallery/close');
        this.i=0;
      },
      next(){
       if ( this.getPost.images.length-1 > this.i ) {
         this.i++;
       } else {
         this.i=0;
       }

      },
      prev(){
        if ( this.i > 0) {
          this.i--;
        } else {
          this.i = this.getPost.images.length - 1 ;
        }

      },
    },
    components: {
      Modal,
      Subcategory
    },
    computed: {
      getPost(){
           return  this.$store.getters['modals/showGallery/getPost']
         }

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

.content{
  width: 800px;
  @media screen and (max-width: 900px){
    width: 500px;
  }
  @media screen and (max-width:600px){
    width: 300px;
  }
}
.img-wrapper{

  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 100%;
    max-height: 400px;
    @media screen and (max-width: 900px){
      max-height: 300px;
    }
    @media screen and (max-width:600px){
      max-height: 245px;
    }
  }
}
.footer{
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  opacity: 0.8;
  width: 100%;
  height: 117px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px){
    height: 91px;
  }
  .txt-info{
    margin-right: 20px;
    .name{
      font-weight: bold;
      font-size: 36px;
      line-height: 30px;
      text-align: right;
      color: white;
      @media screen and (max-width: 600px){
        font-size: 25px;
        line-height: 25px;
      }
    }
    .description{
      font-size: 24px;
      text-align: right;
      color: white;
      @media screen and (max-width: 600px){
        font-size: 20px;
      }
    }
  }
  .arrows{

    button{
      background: #00000045;
      &:hover{
        background: #040e1e80;
      }
      i{
        color: white;
      }
    }
  }
}
.arrows-wrapper{
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .slide-counter{
    font-size: 17px;
    color: white;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
