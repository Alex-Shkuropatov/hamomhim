<template>
  <div class="projects-wrapper">

    <add-order @add="add" />
    <projects-header v-bind="header"  />

  <div class="projects">
    <h1 class="title">םיטקיורפ תמישר</h1>
    <button class="addOrder" @click="openModal">תועצה ףסוה+</button>
    <div class="projects-list-wrap h-container">
      <div class="projects-list">
        <Order
          class="project-item"
          v-for="post in posts" :key="post.id"
          v-bind="post">
        </Order>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Order from './../components/Order';
import ProjectsHeader from './../components/ProjectsHeader';
import AddOrder from "../components/common/modals/AddOrder";

export default {
  data(){
    return {
      posts: [
        {id: 1, imgSrc: '/static/images/orders/Photo1.jpg', title: '1 ףינס הקינפאג', url: '#',  description: 'אוה \'םוספיא םרול\' .םידבוע םתא וילע טקיורפה אשונ יפלםילימליכמהתירבעב תועמשמ רסח טסקט םכל וללוח\n' +
              '.יפוסה רצומל םתמאתהו םכלש טואאיילהו טנופה תקידבלדעוימוקמלממכ שמשמש לל\n' +
              'רבוע טסקטה ,םתרחבש אשונה יפל הידפיקיומ טסקט ךשומ ל טובור :דבוע רמוספיא־םרולה ללוחמ ךיא\n' +
              '.ונהתו וסנ .יתריציה םכשומישל המד־טסקטכ ןאכ גצומ זאו ,תינדיתע ללח תייגולונכט תרזעב היצמרופסנרט'},
        {id: 2, imgSrc: '/static/images/orders/Photo2.jpg', title: '1 ףינס הקינפאג',url: '#', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        {id: 3, imgSrc: '/static/images/orders/Photo3.jpg', title: '1 ףינס הקינפאג',url: '#',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
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
    Order,
    ProjectsHeader,
    AddOrder,
  },
  methods: {
    openModal (e) {
      e.preventDefault();
      this.$store.commit('modals/alert/open');
    },
    add(data) {
      let post = {};
     console.log(data.project);
     post.id = this.posts.length+1;
     post.imgSrc = data.order.image;
     post.title = data.order.name;
     post.url = '#';
     post.description = data.order.description;
     this.posts.push(post);
    },
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
  width: 100%;
  padding: 30px 230px 0 230px;
  @media screen and (max-width:1918px){
  padding: 30px 0 0 0;

}
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
  }
}
.projects-list{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 1330px;
  height: 545px;
  @media screen and (max-width:1700px){
    width: 1169px;
  }
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
  .addOrder{
    top: 629px;
    right: 17px;
    z-index: 10;
    position: absolute;
    width: 141px;
    height: 47px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    color: white;
  }
</style>
