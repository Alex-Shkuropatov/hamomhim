<template>
  <div class="workers-wrapper">

    <page-subheader class="page-subhead" v-bind="getCategory"/>

    <add-proj1/>

    <div class="workers-list">

      <div class="search-tab">
        <button
        class="th-btn th-btn-blue th-btn-sm add-project element-m"
        v-if="checkRole"
        @click.prevent="addProject"
        >
        <span class=" abs">+</span> הוסף פרויקט חדש
      </button>
      <drop-down class="dropDown element-m" placeholder="איזור עבודה" v-model="work_area.value" v-bind="work_area"/>
      <theme-multiselect   v-bind="subcategories" :items="getId" v-model="subcategories.value" class="dropDown element-m"  />
      <button class=" th-btn th-btn-blue th-btn-sm add-project search-b element-m" @click="searchWorkers">
        סנן
      </button>
    </div>
    <div class="empty" v-if=" !flag">
      <div class="preload-wrapper" style="width: 50px; margin: 0 auto;margin-top: 20px">
        <i style="color: #2871D7; font-size: 50px" v-show="!flag" class="fas fa-spinner fa-spin"></i>
      </div>
    </div>
    <div class="workers-list-wrapper" v-if="flag">

      <h2  class="notify_msg"  v-show="workers.length===0" >  לא נמצאו קבלנים  <i class="far fa-copy"></i></h2>

      <div class="projects-list-wrap h-container">

        <div class="workers-list"  v-show="workers.length!==0">

          <template v-for="worker in workers">
            <worker
            v-if="!isMobile"
            class="worker-item"
            :key="worker.id"
            v-bind="worker"/>
            <worker-mobile
            v-else
            class="worker-item"
            :key="worker.id"
            v-bind="worker"/>
          </template>
        </worker>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

import Worker from './../components/Worker';
import WorkerMobile from './../components/WorkerMobile';
import PageSubheader from './../components/PageSubheader';
import DropDown from './../components/common/DropDown.vue';
import AddProj1 from './../components/modals/AddProj1.vue';
import ThemeMultiselect from './../components/common/ThemeMultiselect.vue'
export default {
  data(){
    return {
      isMobile: false,
      workers: [
      ],
      work_area: {
        items: [
          { label: 'כל הארץ', value: "1" },
          { label: 'תל אביב', value: "2" },
          { label: 'חיפה והסביבה', value: "3" },
          { label: 'השרון והסביבה', value: "4" },
          { label: 'באר שבע', value: "5" },
        ],
        value: '',
        labelKey: 'label',
        valueKey: 'label',
      },
      subcategories: {
        placeholder: 'קטגוריות משנה',
        labelKey: 'name',
        value: [],
        valueKey: 'value',
      },
      working_area: '',
      subheader: {
        title : '',
        image: '/static/images/bg-blog.png',
      },
      flag:false,
    };
  },
  computed: {
    checkRole(){
      return this.$store.getters['user/getField']('role') === 'architect';
    },
    getId() {
      if(this.$store.getters['categories/isLoaded']){
        return this.$store.getters['categories/getSubCategoriesById'](parseInt(this.$route.params.categoryId));
      } else {
        return [];
      }
    },
    getCategory(){
      if(this.$store.getters['categories/isLoaded']){
        return  {
          title: this.$store.getters['categories/getNameById'](parseInt(this.$route.params.categoryId)),
          image: '/static/images/bg-blog.png',
        }
      }
    }
  },
  components: {
    PageSubheader,
    Worker,
    WorkerMobile,
    DropDown,
    AddProj1,
    ThemeMultiselect,
  },
  methods: {
    searchWorkers(){
      let formData = new FormData();
      this.subheader.title = this.getCategory ;

      formData.append('category_id',  this.$route.params.categoryId);
      if (this.work_area.value !== ''){
        formData.append('working_area',  this.work_area.value);
      }

      if(this.subcategories.value.length !== 0){
        for (let i=0; i<this.subcategories.value.length;i++){
          console.log(this.subcategories.value);
          formData.append('subcategories[]', this.subcategories.value[i].id);
        }
      }

      axios.post('/api/searchWorkers', formData)
      .then((response) => {
        this.workers = response.data.value;
        this.flag= true;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    addProject(){
      this.$store.commit('modals/newProject/open');
    },
    onResize() {
      if (window.innerWidth < 556) {
      // if (window.matchMedia("(max-width: 556px)").matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
    this.subcategories.value = JSON.parse(this.$route.params.subcategories);
    this.searchWorkers();

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.projects-wrapper{
  z-index: 0;
  margin: 0 auto;
}
.projects-list-wrap{
  padding-bottom: 50px;
}
.projects{
  width: 100%;
  padding: 30px 230px 0 230px;
  @media screen and (max-width:1918px){
    padding: 30px 0 0 0;
  }
}
.workers-list{
  margin-top: 10px;
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ::v-deep{
    .project-item{

    }
  }
}
.worker-item{
  margin-right: 15px;
  margin-left: 15px;

  margin-bottom: 10px;
  @media screen and (max-width:1700px){
    margin-right: 8px;
    margin-left: 8px;
  }
  ::v-deep {
    .content-wrapper{
      .content{
        .content-info{
          .footer-wrapper{
            margin-top: 10px;
            margin-bottom: 15px;
            .add-user{
              display: none;
            }

          }
        }
      }
    }
    .btn-wrapper{
      .add-user{
        display: none;//worker mobile style
      }
    }
  }
}



.h-container{
  width: 100%;
  padding: 0;
}





.workers-item{

  .content-wrapper{
    padding: 32px 27px 0 27px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 100%;
    }
    .title{
      margin: 0;
      margin-top: 18px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: right;
      letter-spacing: -0.02em;
      color: #2871D7;
    }

    .meta{
      color: #828282;
    }
    .links-wrapper{
      margin-top: 16px;
      width: 164px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      a{
        margin-top: 14px;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 65px;

        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover{
          text-decoration: underline;
        }
      }
      svg{
        margin-top: 16px;
      }
    }
    button{
      width: 167.51px;
      height: 36.78px;
    }
  }
}

.search-tab{
  margin: 0 auto;
  width: 1026px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1440px) {
    width: unset;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px auto;
  }
  @media screen and (max-width: 900px){
    width: 300px;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .add-project{
    position: relative;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 10px;
    width: 250px;
    height: 45px;
    font-weight: bold;
    font-size: 17px;
    @media screen and (max-width: 1450px){
      width: 257px;
      height: 45px;
    }
    @media screen and (max-width:900px){
      width: 257px;
    }
    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
    .abs{
      position: absolute;
      left: 25px;
      font-size: 30px;
      top: 3px;
      @media screen and (max-width: 556px) {
        left: 18px;
        font-size: 26px;
        top: 1px;
      }
    }
  }
  .search-b {
    display: inline-block;
    text-align: center;
  }
  .dropDown{
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 333px;
    margin: 10px 7px;
    @media screen and (max-width: 1450px){
      width: 258px;
    }
    &::v-deep{
      @media screen and (max-width: 556px){
        .main{
          font-size: 16px;
          height: 36px;
        }
        .popup{
          top: 36px;
        }
        .slider .item{
          font-size: 16px;
        }
      }
    }

  }
  .element-m{
    @media screen and (max-width: 900px){
      margin-right: 0;
      margin-left: 0;
      width: 300px;
    }
    @media screen and (max-width: 556px){
      height: 36px;
      font-size: 16px;
    }
  }
}
.notify_msg{
  text-align: center;
}
.element-m{

  margin: 0 10px;
}
</style>
