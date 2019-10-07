<template>
  <div class="projects-wrapper">

      <add-proj1  v-bind="changeModal" />

    <close-project @click="open"  />

    <projects-header  />

  <div class="projects">

    <div class="projects-list-wrap ">
      <div class="projects-list">
        <div class="project-item">

      <button class="add-project" @click="openModal">
        <svg   class="add-new-project"   viewBox="0 0 38 38"  xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6123 0.793945C8.4616 0.793945 0.204102 9.04411 0.204102 19.1858C0.204102 29.3274 8.4616 37.5776 18.6123 37.5776C28.7629 37.5776 37.0204 29.3274 37.0204 19.1858C37.0204 9.04411 28.7629 0.793945 18.6123 0.793945ZM25.3912 23.7913C25.9909 24.3907 25.9909 25.3592 25.3912 25.9586C25.092 26.2575 24.6994 26.4077 24.3064 26.4077C23.9137 26.4077 23.521 26.2575 23.2219 25.9586L18.6123 21.3528L14.0026 25.9586C13.7035 26.2575 13.3108 26.4077 12.9181 26.4077C12.5252 26.4077 12.1325 26.2575 11.8334 25.9586C11.2337 25.3592 11.2337 24.3907 11.8334 23.7913L16.4433 19.1858L11.8334 14.5802C11.2337 13.9808 11.2337 13.0123 11.8334 12.4129C12.4333 11.8137 13.4027 11.8137 14.0026 12.4129L18.6123 17.0187L23.2219 12.4129C23.8219 11.8137 24.7912 11.8137 25.3912 12.4129C25.9909 13.0123 25.9909 13.9808 25.3912 14.5802L20.7813 19.1858L25.3912 23.7913Z" fill="url(#paint0_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="0.204101" y1="19.1858" x2="37.0204" y2="19.1858" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
          </defs>
        </svg>
      </button>

          <div class="content-wrapper">
            <div class="thumb">
              <img class="addProj" src="/static/images/projects/addImg.png" alt="addProject">
            </div>
            <div class="title">הוסף פרויקט חדש</div>
            <div class="description">
              .יתימא טסקט היהיש דע - יפוסה יתימאה טסקטה םוקמב - 'וכו טנרטניא ירתא ,תועדומ ,םיניזגמ ,םינולע לש - תויבוציע תוציקסב םקוממ תויהל דעוימו - שירבי'ג וא טסקט ימד םג םימעפל ארקנה - ןיטולחל תועמשמ רסח טסקטל יוניכ אוה םוספיא םרול
            </div>

            <div class="links-wrapper">
              <div class="wrapper-l">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="#2871D7" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.812 0C5.289 0 0 5.289 0 11.812C0 18.335 5.289 23.625 11.812 23.625C18.335 23.625 23.625 18.335 23.625 11.812C23.625 5.289 18.335 0 11.812 0ZM14.271 18.307C13.663 18.547 13.179 18.729 12.816 18.855C12.454 18.981 12.033 19.044 11.554 19.044C10.818 19.044 10.245 18.864 9.837 18.505C9.429 18.146 9.226 17.691 9.226 17.138C9.226 16.923 9.241 16.703 9.271 16.479C9.302 16.255 9.351 16.003 9.418 15.72L10.179 13.032C10.246 12.774 10.304 12.529 10.35 12.301C10.396 12.071 10.418 11.86 10.418 11.668C10.418 11.326 10.347 11.086 10.206 10.951C10.063 10.816 9.794 10.75 9.393 10.75C9.197 10.75 8.995 10.779 8.788 10.84C8.583 10.903 8.405 10.96 8.259 11.016L8.46 10.188C8.958 9.985 9.435 9.811 9.89 9.667C10.345 9.521 10.775 9.449 11.18 9.449C11.911 9.449 12.475 9.627 12.872 9.979C13.267 10.332 13.466 10.791 13.466 11.355C13.466 11.472 13.452 11.678 13.425 11.972C13.398 12.267 13.347 12.536 13.273 12.783L12.516 15.463C12.454 15.678 12.399 15.924 12.349 16.199C12.3 16.474 12.276 16.684 12.276 16.825C12.276 17.181 12.355 17.424 12.515 17.553C12.673 17.682 12.95 17.747 13.342 17.747C13.527 17.747 13.734 17.714 13.968 17.65C14.2 17.586 14.368 17.529 14.474 17.48L14.271 18.307ZM14.137 7.429C13.784 7.757 13.359 7.921 12.862 7.921C12.366 7.921 11.938 7.757 11.582 7.429C11.228 7.101 11.049 6.702 11.049 6.236C11.049 5.771 11.229 5.371 11.582 5.04C11.938 4.708 12.366 4.543 12.862 4.543C13.359 4.543 13.785 4.708 14.137 5.04C14.49 5.371 14.667 5.771 14.667 6.236C14.667 6.703 14.49 7.101 14.137 7.429Z" fill="url(#paint0_linear)"/>
            </svg>
                <a href='#' >איך זה עובד?</a>
            </div>
            </div>
          </div>
        </div>
        <Project
          class="project-item"
          v-for="project in projects" @close="onClose" :key="project.id"
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
import CloseProject from "../components/modals/CloseProject"
export default {
  data(){
    return {
      projects: [
      ],
      changeModal : {
        modalCount : '',
      },
    };
  },
  components: {
    Project,
    ProjectsHeader,
    AddProj1,
    CloseProject,
  },
  methods: {
    openModal (e) {
      e.preventDefault();
      this.changeModal.modalCount=0;
      this.$store.commit('modals/newProject/open');
    },
    open(){
      this.$store.commit('modals/projectPrice/open');

    },

    onClose( data){
      this.$store.commit('modals/projectPrice/open');
    },
    destroyed(){

    },
  },
  computed: {
    getData() {
      return this.$store.getters['user/data'];
    },
  },
  mounted() {

    axios.post('/api/getAllProjects', {status:'open'})
        .then((response) => {
          console.log(response.data.value);
          this.projects = response.data.value;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
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
  @media screen and (max-width: 1440px) {
    justify-content: center;
  }
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
  .add-project{
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 121px;
    top: 96px;
    opacity: 0.5;
    position: absolute;
    z-index: 2;
    transition: all 0.5s ease-out;
    @media screen and (max-width:1650px){
      left: 119px;
      top: 93px;
    }
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
    svg{
      width: 97px;
      height: 97px;
      @media screen and (max-width: 1650px){

        width: 83px;
        height: 86px;
      }
      @media screen and (max-width: 1440px){
        width: 64px;
        height: 64px;
      }
    }
  }
  .content-wrapper{
      padding: 16px 8px 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
    img{
      width: 100%;
      height: 253px;
      @media screen and (max-width:1650px){
        height: 215px;
      }
      @media screen and (max-width: 1440px){
        height: 184px;
      }
    }
    .title{
      margin: 0;
      margin-top: 15px;
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #2871D7;
      @media screen and (max-width: 1650px){
        margin-top: 10px;
        font-weight: bold;
        font-size: 30px;
      }
      @media screen and(max-width:480px){
        font-size: 31px;
      }
    }
    .description{
      margin-top: 3px;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #e1e1e1;
      overflow: auto;
      @media screen and (max-width: 1650px){
        margin-top: 4px;
        line-height: 23px;
        font-size: 15px;
      }
      @media screen and (max-width: 1440px){
        margin-top: 4px;
        line-height: 22px;
        font-size: 14px;
      }
      @media screen and(max-width:480px){
        font-size: 14px;
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
      @media screen and (max-width:1650px){
        margin-top: -7px;
      }
      @media screen and (max-width:1440px){
        margin-top: -11px;
      }
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
</style>
