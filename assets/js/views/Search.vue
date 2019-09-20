<template>
  <div class="workers-wrapper">

    <projects-header/>

  <div class="workers-list">

    <div class="search-tab">
      <button class="th-btn th-btn-blue th-btn-sm add-project">
        <span class=" abs">+</span> Add new project
      </button>
      <drop-down class="dropDown" placeholder="הדובע רוזיא" v-model="work_area.value" :items="work_area.items"/>
      <drop-down class="dropDown" placeholder="הדובע רוזיא" v-model="work_area1.value" :items="work_area1.items"/>
      <button class=" th-btn th-btn-blue th-btn-sm add-project search-b" >
        Search
      </button>
    </div>

    <h2  class="notify_msg"  v-show="workers.length===0" ><i class="far fa-copy"></i> Any worker by this category</h2>

    <div class="projects-list-wrap h-container">

      <div class="workers-list"  v-show="workers.length!==0">
        <Worker
          class="worker-item"
          v-for="worker in workers" :key="worker.id"
          v-bind="worker">
        </Worker>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Worker from './../components/Worker';
import ProjectsHeader from './../components/ProjectsHeader';
import DropDown from './../components/common/DropDown.vue'
export default {
  data(){
    return {
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
      work_area1: {
        items: [ { label: ' הדובע רוזיא', value: 1 },{ label: ' הדובע רוזיא', value: 2 },{ label: ' הדובע רוזיא', value: 3 } ],
        value: '',
      },
      working_area: '',
    };
  },
  components: {
    ProjectsHeader,
    Worker,
    DropDown,

  },
  methods: {

  },
  mounted() {
    this.formData.append('category_id',  this.$route.params.id);

    if (this.work_area.value !== ''){
      this.formData.append('working_area',  this.work_area.value);
    }

    if(this.subcategories.length !== 0){
      for (let i=0; i<this.subcategories.length;i++){
        this.formData.append('subcategories[]',  this.subcategories[i]);
      }
    }


    return axios.post('/api/searchWorkers', this.formData)
        .then((response) => {
          this.workers = response.data.value;
          this.done=true;
          console.log(this.workers);
        })
        .catch((error) => {
          console.log(error);
        });
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
margin-top: 50px;
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.worker-item{
  margin-right: 15px;
  margin-left: 15px;

  margin-bottom: 30px;
  @media screen and (max-width:1700px){
    margin-right: 8px;
    margin-left: 8px;
  }
  ::v-deep {
      .content-wrapper{
        .content{
          .content-info{
            .footer-wrapper{
              margin-top: 70px;
              .add-user{
                display: none;
              }
              margin-bottom: 20px;
            }
          }
        }
      }
  }
}
.load-more-posts{
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
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
  .addProj{
    width: 416px;
    height: 286px;
  }
.search-tab{
  margin: 50px auto;
  width: 1371px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  .add-project{
    position: relative;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 280px;
    height: 54px;
    font-weight: bold;
    font-size: 24px;
    .abs{
      position: absolute;
      left: 25px;
      font-size: 30px;
      top: 8px;
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
  }
}
  .notify_msg{
    text-align: center;
  }
</style>
