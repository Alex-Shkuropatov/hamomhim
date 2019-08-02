<template>
  <div class="projects-wrapper">
    <projects-header />
  <div class="projects">
    <div class="projects-list-wrap h-container">
      <div class="projects-list">
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
import AddProj1 from "../components/common/modals/AddProj1";

export default {
  data(){
    return {
      projects: [
        {id: 1, imgSrc: '/static/images/projects/closed3.jpg', title: 'םיטקיורפה םש', url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 2, imgSrc: '/static/images/projects/closed2.jpg', title: 'םיטקיורפה םש',url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 3, imgSrc: '/static/images/projects/closed1.jpg', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 4, imgSrc: '/static/images/projects/closed4.jpg', title: 'םיטקיורפה םש',url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
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
    add(data) {
      let post = {};
     console.log(data.project);
     post.id = this.projects.length+1;
     post.imgSrc = data.project.image;
     post.title = data.project.name;
     post.url = '#';
     post.description = data.project.description;
     this.projects.push(post);
    },
  }
}
</script>

<style lang="scss" scoped>



.projects-wrapper{
  z-index: 0;


}

.projects-list-wrap{
  padding-bottom: 50px;
  margin: 0 auto;
}
.projects{
  width: 100%;
  padding: 30px 0 0 0;
  @media screen and (max-width:1918px){
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
    justify-content: space-around;
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
    margin: 0 auto;
    width: 1473px;
      @media screen and (max-width:1697px){
      width: 1431px;

    }
    @media screen and (max-width:1440px){
      width: 100%;
    }
  }
.project-item{
  z-index: 1;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.16;
  width: 451px;
  height: 629px;

  .add-new-project{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 177px;
    top: 144px;
    opacity: 0.4;
    position: absolute;
    z-index: 2;
    transition: all 0.5s ease-out;
    &:hover {
      opacity: 1;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);

      path {

      }
    }
    border-radius: 50%;
  }
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
    .description{
      margin-top: 10px;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #E0E0E0;
      width: 375px;
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
</style>
