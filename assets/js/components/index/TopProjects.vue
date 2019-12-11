<template>
  <div class="top-projects-section">

    <show-order-latest />

    <div class="h-container">
      <div class="th-heading text-center">פרויקטים אחרונים</div>
      <div class="top-projects-slider-wrap">
        <swiper :options="sliderOptions" class="top-pojects" ref="topProjectsSlider">
          <swiper-slide class="slide-outer" v-for="project in projects" :key="project.id">
            <div class="slide-inner">
              <div class="creator-avatar" :class="project.thumbnail === null ? 'empty-avatar' : ''">
                <img :src="$env.API_URL+project.thumbnail" alt="">
              </div>
              <div class="title clr-blue">{{project.name}}</div>
              <div   class="category">{{$store.getters['categories/getNameById'](project.categoryId)}}</div>
              <div class="description">{{project.description}}</div>
              <button  @click="getOrder(project)" class="th-btn th-btn-blue th-btn-sm project-b">קרא את הפוסט הזה</button>
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
import showOrderLatest from './../modals/showOrderLatest.vue'
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

      this.$store.commit('modals/showOrderLatest/saveData', {
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

      this.$store.commit('modals/showOrderLatest/open');
    }
  },

  components:{
    showOrderLatest
  },
  mounted() {
    axios.post('/api/getLatestOrders')
        .then((response)=>{
          let projects = response.data.value;
          console.log('RESPONSE.DATA.VALUE', projects);
          projects = projects.map(project => {
            if(project.thumbnail){
              project.thumbnail = project.thumbnail.replace('http://hamonhim.barelservice.co.il/wp-content', '');
            }
            return project;
         });
         this.projects =  projects;
         console.log('LOG PROJECTS', this.projects);
        }).catch((error)=>{
          console.log(error);
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.th-heading{
  color: #fff;
}
.top-projects-section{
  padding: ceil($scale1 * 25px) 0 ceil($scale1 * 25px) 0;
  background: #1D2C50;
  width: 100%;
  &::v-deep{
    .modal-close svg path{
      fill: #fff;
    }
  }
}
.top-projects-slider-wrap{
  position: relative;
}
.slide-outer{
  height: auto;
  padding: ceil($scale1 * 104px / 2) 20px ceil($scale1 * 20px) 20px;
  position: relative;

  //make lines between slides
  &.swiper-slide-active,
  &.swiper-slide-active+div,
  &.swiper-slide-active+div+div{
    &:after{
      content: '';
      display: block;
      position: absolute;
      height: 70%;
      width: 1px;
      background: #fff;
      opacity: 0.5;
      left: 0;
      bottom: 10%;
    }
  }
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
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: ceil($scale1 * 60px) ceil($scale1 * 16px) ceil($scale1 * 24px);
    color: $clr-dark;
    text-decoration: none;
    position: relative;
    .creator-avatar{
        position: absolute;
        top: ceil($scale1 * -52px);
        width: ceil($scale1 * 104px);
        height: ceil($scale1 * 104px);
        border-radius: 50%;
        overflow: hidden;
        &.empty-avatar{
          background: url('/static/images/projects/addImg2.png') no-repeat center, #fff;
          background-size: 70% auto, cover;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .title{
        font-size: ceil($scale1 * 24px);
        font-weight: bold;
    }
    .category{
        font-weight: 600;
    }
    .description{
        font-size: ceil($scale1 * 16.5px);
        margin-bottom: ceil($scale1 * 25px);
    }
    .th-btn{
      margin-top: auto;
    }
}

@media (max-width: 1700px) {
  .slide-outer.swiper-slide-active+div+div:after{
    display: none;
  }
}

@media(max-width: $breakpoint3){
  .h-container{
    width: $container-width3 - 30px;
  }
  .slide-outer.swiper-slide-active+div:after{
    display: none;
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
@media (max-width: 556px){
  .slide-outer.swiper-slide-active:after{
    display: none;
  }
}
.project-b{
  border-radius: 5px;
}
</style>
