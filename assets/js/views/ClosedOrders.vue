-<template>
  <div class="projects-wrapper">

    <projects-header  />

    <div class="projects">
      <div class="backB">
        <button @click="back">
          <span class="phrase">אחורה</span>
          <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5113 13.8294L3.87664 0.479264C3.56129 0.170243 3.14032 0 2.69146 0C2.24259 0 1.82162 0.170243 1.50627 0.479264L0.502173 1.46218C-0.1512 2.10267 -0.1512 3.14363 0.502173 3.78314L11.9515 14.9938L0.489469 26.2169C0.174116 26.5259 0 26.9378 0 27.3771C0 27.8168 0.174116 28.2288 0.489469 28.5381L1.49356 29.5207C1.80917 29.8298 2.22989 30 2.67875 30C3.12762 30 3.54859 29.8298 3.86394 29.5207L17.5113 16.1584C17.8274 15.8484 18.001 15.4345 18 14.9945C18.001 14.5528 17.8274 14.1392 17.5113 13.8294Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="-1.3411e-07" y1="15" x2="18" y2="15" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2871D7"/>
                <stop offset="1" stop-color="#3269B6"/>
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
      <h1 class="title">םיטקיורפ תמישר</h1>
      <div class="projects-list-wrap h-container">
        <div class="projects-list">
          <Order
                  class="project-item"
                  v-for="post in orders" :key="post.id"
                  v-bind="post">
          </Order>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Order from '../components/orders/Order';
  import ProjectsHeader from './../components/ProjectsHeader';


  export default {
    data(){
      return {
        orders: [
        ],
      };
    },
    components: {
      Order,
      ProjectsHeader,

    },
    methods: {
      back(){
        this.$router.go(-1);
      },
    },
    mounted() {
      axios.post('/api/getOrdersByProject', {project_id: this.$route.params.id})
          .then((response)=>{
            console.log(response);
            console.log(response.data.value);
            this.orders = response.data.value;
          })
          .catch((error)=>{
            console.log(error.response.data);
          });
      console.log(this.$route.params.id);
    }
  }
</script>

<style lang="scss" scoped>
  .projects-wrapper{
    z-index: 0;
  }

  .projects-list-wrap{
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .projects{
    position: relative;
    width: 100%;
    padding: 30px 0 0 0;
    .title{
      margin: 0;
      margin-bottom: 30px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 65px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
      @media screen and (max-width:600px){
        font-size: 44px;
      }
    }
  }
  .projects-list{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .order-item{

    ::v-deep .actions-wrapper  {
      display: none;
    }

    margin-right: 15px;
    margin-left: 15px;

    margin-bottom: 30px;

    ::v-deep .sendData  {
      display: none!important;
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
  .order-item{
    ::v-deep .close {
      display: none;
    }
    ::v-deep .description {
      margin-top: 20px;
    }
    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;
    .content-wrapper{
      padding: 95px 300px 0 300px;
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
  .backB{
    position: absolute;
    top: 69px;
    right: 15%;
    @media screen and (max-width:1024px){
      position: static;
    }
    button{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .phrase{
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 31px;
        display: flex;
        align-items: center;
        text-align: center;
        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

</style>