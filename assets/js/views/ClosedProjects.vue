<template>
  <div class="projects-wrapper">
    <projects-header />
  <div class="projects"  >
    <h2  class="notify_msg"  v-show="projects.length===0" ><i class="far fa-copy"></i> You dont have closed projects </h2>
    <div class="projects-list-wrap h-container">
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

import Project from './../components/Project';
import ProjectsHeader from './../components/ProjectsHeader';
import AddProj1 from "../components/modals/AddProj1";

export default {
  data(){
    return {
      projects: [
        {},
      ],
    };
  },
  components: {
    Project,
    ProjectsHeader,
    AddProj1,
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
          this.projects = response.data.value
        }).catch((error)=>{
      console.log(error.response.data)
    })
  }
}
</script>

<style lang="scss" scoped>

.projects-wrapper{
  z-index: 0;
  margin: 0 auto;
  width: 100%;
}

.projects-list-wrap{
  padding-bottom: 50px;
}
.projects{
  margin: 0 auto;
  width: 1065px;
  padding: 30px 0 0 0;
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
  @media screen and (max-width:1440px){
    justify-content: flex-start;
  }
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
  width: 250px;
  height: 350px;


  .content-wrapper{
    padding: 16px 8px 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 100%;
    }
    .title{
      margin: 0;
      font-weight: bold;
      font-size: 24px;
      line-height: 40px;
      text-align: right;
      letter-spacing: -0.02em;
      color: #2871D7;
    }
    .description{
      margin-top: 0;
      font-size: 14px;
      line-height: 15px;
      text-align: center;
      color: #F6F6F6;
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
}
  .addProj{
    width: 218px;
    height: 160px;
  }
.notify_msg{
  text-align: center;
  padding: 40px 0 40px 0;
  color: #333333;
}
</style>
