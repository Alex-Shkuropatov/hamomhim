<template>
  <div class="orders-wrapper">

    <close-order />
    <projects-header v-bind="header"  />

  <div class="orders">
    <h1 class="title">םיטקיורפ תמישר</h1>
   <div class="add-order-wrapper">
     <button class="addOrder" @click="newOrder" >הדובעל םינלבק ףסוה    <span>+</span></button>
     <div class="txt">1 ףינס הקינפאג</div>
   </div>
    <div class="orders-list-wrap h-container">
      <div class="orders-list">
        <Order
          class="orders-item"
          v-for="order in orders" @onClose="onClose" :key="order.id"
          v-bind="order">
        </Order>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import Order from './../components/orders/Order.vue';
import ProjectsHeader from './../components/ProjectsHeader';
import CloseOrder from '../components/common/modals/CloseOrder.vue';
export default {
  data(){
    return {
      orders: [
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
      },
      changeModal : {
        modalCount : '',
      }
    };
  },
  components: {
    Order,
    ProjectsHeader,
    CloseOrder

  },
  methods: {
    openModal (e) {
      e.preventDefault();
      this.changeModal.modalCount=0;
      this.$store.commit('modals/alert/open');

    },
    add(data) {

     //  let order = {};
     // console.log(data.project);
     // order.id = this.orders.length+1;
     // order.imgSrc = data.order.image;
     // order.title = data.order.name;
     // order.url = '#';
     // order.description = data.order.description;
     // this.orders.push(order);
    },
    onClose(data){
      this.$store.commit('modals/workPrice/open');
    },
    newOrder(){
      this.$router.push('/orders/new-order');
    },
  }
}
</script>

<style lang="scss" scoped>
.orders-wrapper{
  z-index: 0;
}

.orders-list-wrap{
  padding-top: 50px;
  padding-bottom: 50px;
}
.orders{
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
  }
}
.orders-list{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.orders-item{

  margin-right: 15px;
  margin-left: 15px;

  margin-bottom: 30px;

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
.orders-item{

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
  .add-order-wrapper{
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    width: 1059px;
    height: 95px;
    margin:0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    button{
      margin-left: 40px;
      width: 280px;
      height: 54px;
      font-weight: bold;
      font-size: 24px;
      color: #FFFFFF;
      span{
        font-weight: normal;
        font-size: 28px;
      }
    }
    .txt{
      margin-right: 40px;
      font-weight: bold;
      font-size: 36px;
      line-height: 30px;
      text-align: right;
      color: #333333;
    }
  }
  .addOrder{
    z-index: 10;
    width: 141px;
    height: 47px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    color: white;
  }
</style>
