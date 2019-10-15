<template>
  <div class="projects-wrapper">

<div class="empty" v-if="!flag">

</div>
  <div class="projects" v-if="flag" >
    <h2  class="notify_msg"  v-show="projects.length===0" ><i class="far fa-copy"></i> You dont have closed projects </h2>
    <div class="projects-list-wrap">
      <div class="projects-list" v-show="projects.length!==0">
        <Project
          class="project-item"
          v-for="project in projects" :key="project.id"
          v-bind="project">
        </Project>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Project from '../../components/Project';


export default {
  data(){
    return {
      projects: [
        {},
      ],
      flag : false,
    };
  },
  components: {
    Project,
  },
  methods: {
    openModal (e) {
      e.preventDefault();
      this.$store.commit('modals/alert/open');
    },
  },
  mounted() {
    axios.post('/api/getAllProjects', {status:'closed'})
        .then((response)=>{
          console.log(response.data.value);
          this.projects = response.data.value;
          this.flag = true;
        }).catch((error)=>{
      console.log(error.response.data)
    })
  }
}
</script>

<style lang="scss" scoped>


.projects-wrapper{
  z-index: 0;
  width: 100%;
}

.projects-list-wrap{
  padding-bottom: 50px;
}
.projects{
  margin: 0 auto;
  width: 1156px;
  padding: 30px 0 0 0;
  @media screen and (max-width:1650px){
    width: 1044px;
  }
  @media screen and (max-width:1440px){
    width: 933px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }

}
.projects-list{
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width:1340px){
    justify-content: center;
  }
}
.project-item{
  ::v-deep .close {
    display: none;
  }

  margin-right: 15px;
  margin-left: 15px;

  margin-bottom: 30px;
  @media screen and (max-width:1700px){
    margin-right: 8px;
    margin-left: 8px;
  }
}
  .h-container{
    padding: 0;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
.project-item{
  z-index: 1;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.16;
  width: 355px;
  height: 480px;
  @media screen and (max-width: 1650px){
    width: 332px;
    height: 449px;
  }
  @media screen and (max-width: 1440px){
    width: 292px;
    height: 400px;
  }
  .content-wrapper{

    img{
      width: 100%;
      height: 286px;
      @media screen and (max-width:1650px){
        height: 248px;
      }
    }
    .title{
      margin: 0;
      margin-top: 15px;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #2871D7;
    }
    .description{
      margin-top: 15px;
      font-weight: normal;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: #e1e1e1;
      @media screen and (max-width: 1650px){
        line-height: 23px;
        font-size: 18px;
      }
      }
    }
    .meta{
      color: #828282;
    }
    .links-wrapper{
      margin-top:0px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      a{
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
        margin-top: 5px;
        margin-left: 5px;
      }
    }
    button{
      width: 167.51px;
      height: 36.78px;
    }
  }

  .addProj{
    width: 218px;
    height: 160px;
  }
.notify_msg{
  text-align: center;
  padding: 10px 0 0px 0;
  color: #333333;
}
</style>
