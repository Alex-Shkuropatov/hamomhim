<template>
  <div class="top-projects-section">

    <show-order />

    <div class="h-container">
      <div class="th-heading text-center">פרויקטים אחרונים</div>
      <div class="top-projects-slider-wrap">
        <swiper :options="sliderOptions" class="top-pojects" ref="topProjectsSlider">
          <swiper-slide class="slide-outer" v-for="project in projects" :key="project.id">
            <div class="slide-inner">
              <div class="creator-avatar">
                <img :src="project.thumbnail !== null ? $env.API_URL+project.thumbnail : '/static/images/projects/addImg2.png' " alt="">
              </div>
              <div class="title">{{project.name}}</div>
              <div   class="category">{{$store.getters['categories/getNameById'](project.categoryId)}}</div>
              <div class="description">{{project.description}}</div>
              <button  @click="getOrder(project)" class="th-btn th-btn-empty th-btn-sm project-b">קרא את הפוסט הזה</button>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="3"></div>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="4"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import showOrder from './../modals/ShowOrder.vue'
export default {
  data(){
    return {
      sliderOptions: {
          slidesPerView: 4,
          navigation: {
            nextEl: '.swiper-button-next[data-uid="3"]',
            prevEl: '.swiper-button-prev[data-uid="4"]',
          },
          breakpoints: {
            1700: {
              slidesPerView: 3
            },
            1023: {
              slidesPerView: 2
            },
            556: {
              slidesPerView: 1
            },
          }
      },
      projects: [
                    ],
      curProject: {},
    };
  },
  methods:{
    getOrder(project){

      this.$store.commit('modals/showOrder/saveData', {
        description : project.description,
        name : project.name,
        projectName : project.project_name,
        userName : project.name,
        phone : project.phone || project.user_phone,
        category_id : project.categoryId,
        work_area : project.work_area,
        subcategories : project.subcategories,
        zip : project.zip,

      });

      this.$store.commit('modals/showOrder/open');
    }
  },

  components:{
showOrder
  },
  mounted() {
    axios.post('/api/getLatestOrders')
        .then((response)=>{
         this.projects =  response.data.value;
         console.log(this.projects);
        }).catch((error)=>{
          console.log(error);
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.top-projects-section{
  padding: ceil($scale1 * 25px) 0 0 0;
  width: 100%;
}
.top-projects-slider-wrap{
  position: relative;
}
.slide-outer{
    padding: ceil($scale1 * 32px) ceil($scale1 * 20px) ceil($scale1 * 20px) ceil($scale1 * 20px);
}
.top-pojects{
  margin-right: ceil($scale1 * -20px);
  margin-left: ceil($scale1 * -20px);
}
.slide-inner{
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-align-items: center;
    align-items: center;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: ceil($scale1 * 35px) ceil($scale1 * 16px) ceil($scale1 * 24px);
    color: $clr-dark;
    text-decoration: none;
    position: relative;
    .creator-avatar{
        position: absolute;
        top: ceil($scale1 * -32px);
        width: ceil($scale1 * 65px);
        height: ceil($scale1 * 65px);

        img{
            width: 100%;
            height: 38px;
          border-radius: 20%;

        }
    }
    .title{
        font-size: ceil($scale1 * 24px);
        font-weight: bold;
    }
    .category{
        font-weight: bold;
    }
    .description{
        font-size: ceil($scale1 * 16.5px);
        margin-bottom: ceil($scale1 * 25px);
          height: 50px;
    }
}

@media(max-width: $breakpoint3){
  .h-container{
    width: $container-width3 - 30px;
  }
}

@media(max-width: $breakpoint4){
  .h-container{
  width: $container-width4 - 30px;
  }
}

@media(max-width: $breakpoint5){
  .h-container{
    width: calc(100% - (#{$gutters} * 3));
  }
}
  .project-b{
    border-radius: 5px;
  }
</style>
