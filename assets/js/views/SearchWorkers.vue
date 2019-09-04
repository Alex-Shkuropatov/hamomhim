<template>
  <div class="workers-wrapper">

    <projects-header/>

  <div class="workers-list">
    <div class="title">
      <h1 class="title-t">שדח ןלבק ףסוה</h1>
      <div class="btn-wrapper"><button class="back-b" @click="back"><i class="fas fa-chevron-right"></i>רוזח  </button></div>
    </div>


    <div class="projects-list-wrap h-container">
      <div class="projects-list">
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
import DropDown from './../components/common/DropDown';

export default {
  data(){
    return {
      workers: [
        {id: 1, imgSrc: '/static/images/profile/profileImg.png',rate:'10',rating:'3',type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'וה \'םוספיא םרול\' .םידבוע םתא וילעוה \'םוספיא םרול\' .םידבוע םתא וילעוה \'םוספיא םרול\' .םידבוע םתא וילעוה \'םוספיא םרול\' .םידבוע םתא וילעוה \'םוספיא םרול\' .םידבוע םתא וילע טקיורפה אשונ יפל םילימ ליכמה תירבעב תועמשמ רסח טסקט םכל וללוח ללוחמ ךיא .יפוסה רצומל מאכלש'},
        {id: 2, imgSrc: '/static/images/projects/2.png',rate:'10',rating:'3' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 3, imgSrc: '/static/images/projects/1.png',rate:'9',rating:'3' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 4, imgSrc: '/static/images/projects/4.png',rate:'8',rating:'3' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 5, imgSrc: '/static/images/projects/3.png',rate:'10',rating:'3' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 6, imgSrc: '/static/images/projects/6.png',rate:'7',rating:'4' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 7, imgSrc: '/static/images/projects/7.png',rate:'10',rating:'3' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 8, imgSrc: '/static/images/projects/8.png',rate:'3',rating:'5' ,type:"םילכירדא", title: ' מ"עב םיצופיש ד.א',workArea:"ץראה לכ", url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ],
    };
  },
  components: {
    ProjectsHeader,
    Worker,
    DropDown
  },
  methods: {
back(){
  this.$router.go(-1);
}
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
.btn-wrapper{
  position: absolute;
  top: 62px;
  .back-b{
    color: #2871D7;
    font-weight: bold;
    font-size: 24px;
  }
}
.worker-list{
  position: relative;
}
.projects-list{
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
.project-item{
  margin-right: 15px;
  margin-left: 15px;

  margin-bottom: 30px;
  @media screen and (max-width:1700px){
    margin-right: 8px;
    margin-left: 8px;
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
.project-item {
  z-index: 1;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.16;
  width: 1371px;
  height: 320px;
}
  .addProj{
    width: 416px;
    height: 286px;
  }
.title{
  position: relative;
  width: 1371px;
  margin: 0 auto;
  .title-t{
    font-weight: bold;
    font-size: 64px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
    margin:0;
    margin-top: 30px;
  }
}
</style>
