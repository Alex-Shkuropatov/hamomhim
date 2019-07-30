<template>
  <div class="projects-wrapper">
    <add-proj1/>

    <projects-header v-bind="header" />

  <div class="projects">

    <div class="projects-list-wrap h-container">
      <div class="projects-list">
        <div class="project-item">

          <svg width="97" class="add-new-project" @click="openModal" height="97" viewBox="0 0 38 38"  xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6123 0.793945C8.4616 0.793945 0.204102 9.04411 0.204102 19.1858C0.204102 29.3274 8.4616 37.5776 18.6123 37.5776C28.7629 37.5776 37.0204 29.3274 37.0204 19.1858C37.0204 9.04411 28.7629 0.793945 18.6123 0.793945ZM25.3912 23.7913C25.9909 24.3907 25.9909 25.3592 25.3912 25.9586C25.092 26.2575 24.6994 26.4077 24.3064 26.4077C23.9137 26.4077 23.521 26.2575 23.2219 25.9586L18.6123 21.3528L14.0026 25.9586C13.7035 26.2575 13.3108 26.4077 12.9181 26.4077C12.5252 26.4077 12.1325 26.2575 11.8334 25.9586C11.2337 25.3592 11.2337 24.3907 11.8334 23.7913L16.4433 19.1858L11.8334 14.5802C11.2337 13.9808 11.2337 13.0123 11.8334 12.4129C12.4333 11.8137 13.4027 11.8137 14.0026 12.4129L18.6123 17.0187L23.2219 12.4129C23.8219 11.8137 24.7912 11.8137 25.3912 12.4129C25.9909 13.0123 25.9909 13.9808 25.3912 14.5802L20.7813 19.1858L25.3912 23.7913Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.204101" y1="19.1858" x2="37.0204" y2="19.1858" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2871D7"/>
                <stop offset="1" stop-color="#3269B6"/>
              </linearGradient>
            </defs>
          </svg>

          <div class="content-wrapper">
            <div class="thumb">
              <img class="addProj" src="/static/images/projects/addImg.png" alt="addProject">
            </div>
            <div class="title">הוסף פרויקט חדש</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </div>

            <div class="links-wrapper">
            <a href='#' >איך זה עובד?</a>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.812 0C5.289 0 0 5.289 0 11.812C0 18.335 5.289 23.625 11.812 23.625C18.335 23.625 23.625 18.335 23.625 11.812C23.625 5.289 18.335 0 11.812 0ZM14.271 18.307C13.663 18.547 13.179 18.729 12.816 18.855C12.454 18.981 12.033 19.044 11.554 19.044C10.818 19.044 10.245 18.864 9.837 18.505C9.429 18.146 9.226 17.691 9.226 17.138C9.226 16.923 9.241 16.703 9.271 16.479C9.302 16.255 9.351 16.003 9.418 15.72L10.179 13.032C10.246 12.774 10.304 12.529 10.35 12.301C10.396 12.071 10.418 11.86 10.418 11.668C10.418 11.326 10.347 11.086 10.206 10.951C10.063 10.816 9.794 10.75 9.393 10.75C9.197 10.75 8.995 10.779 8.788 10.84C8.583 10.903 8.405 10.96 8.259 11.016L8.46 10.188C8.958 9.985 9.435 9.811 9.89 9.667C10.345 9.521 10.775 9.449 11.18 9.449C11.911 9.449 12.475 9.627 12.872 9.979C13.267 10.332 13.466 10.791 13.466 11.355C13.466 11.472 13.452 11.678 13.425 11.972C13.398 12.267 13.347 12.536 13.273 12.783L12.516 15.463C12.454 15.678 12.399 15.924 12.349 16.199C12.3 16.474 12.276 16.684 12.276 16.825C12.276 17.181 12.355 17.424 12.515 17.553C12.673 17.682 12.95 17.747 13.342 17.747C13.527 17.747 13.734 17.714 13.968 17.65C14.2 17.586 14.368 17.529 14.474 17.48L14.271 18.307ZM14.137 7.429C13.784 7.757 13.359 7.921 12.862 7.921C12.366 7.921 11.938 7.757 11.582 7.429C11.228 7.101 11.049 6.702 11.049 6.236C11.049 5.771 11.229 5.371 11.582 5.04C11.938 4.708 12.366 4.543 12.862 4.543C13.359 4.543 13.785 4.708 14.137 5.04C14.49 5.371 14.667 5.771 14.667 6.236C14.667 6.703 14.49 7.101 14.137 7.429Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="-1.7602e-07" y1="11.8125" x2="23.625" y2="11.8125" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2871D7"/>
                  <stop offset="1" stop-color="#3269B6"/>
                </linearGradient>
              </defs>
            </svg>

            </div>
          </div>
        </div>
        <Project
          class="project-item"
          v-for="post in posts" :key="post.id"
          v-bind="post">
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
      posts: [
        {id: 1, imgSrc: '/static/images/projects/1.png', title: 'םיטקיורפה םש', url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 2, imgSrc: '/static/images/projects/2.png', title: 'םיטקיורפה םש',url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 3, imgSrc: '/static/images/projects/1.png', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 4, imgSrc: '/static/images/projects/4.png', title: 'םיטקיורפה םש',url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 5, imgSrc: '/static/images/projects/3.png', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 6, imgSrc: '/static/images/projects/6.png', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 7, imgSrc: '/static/images/projects/7.png', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 8, imgSrc: '/static/images/projects/8.png', title: 'םיטקיורפה םש',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ],
      header : {

        imageBg : '/static/images/bg-header-projects.png',
      user : {
        title : 'שמתשמ םש',
        imageProfile: '/static/images/profile/defPicCutted.png',
        position: 'האדר שייכל'
      }
      }
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
  }
}
</script>

<style lang="scss" scoped>
.projects-wrapper{
  z-index: 0;
  margin: 0 auto;
}

.projects-list-wrap{
  padding-top: 50px;
  padding-bottom: 50px;
}
.projects{
  width: 100%;
  padding: 30px 230px 0 230px;
  @media screen and (max-width:1918px){
  padding: 30px 0 0 0;
}
}
.projects-list{
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
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
