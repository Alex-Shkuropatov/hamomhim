<template>
  <div class="orders-wrapper">
    <show-workers  />

    <show-order/>

    <projects-header v-bind="header"/>

    <div class="orders">
      <button class="back-b" @click="back"><i class="fas fa-chevron-right"></i>  חזור</button>
      <h1 class="title">רשימת פרויקטים</h1>
      <div class="add-order-wrapper">
        <button :to="{name: 'new-order',  }" @click="orders" class=" addOrder th-btn th-btn-blue th-btn-sm "> הוספת פרויקט חדש
          <span>  +  </span></button>
        <div class="txt">גאפניקה סניף 1</div>
      </div>
      <div class="orders-list-wrap h-container">
        <div class="orders-list">
          <Order
                  class="orders-item"
                  v-for="order in orders" :key="order.id"
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
  import ShowOrder from './../components/modals/ShowOrder';
  import ShowWorkers from './../components/modals/ShowWorkers';

  export default {
    data() {
      return {
        orders: [],
        header: {
          imageBg: '/static/images/bg-header-projects.png',
          user: {
            title: 'שמתשמ םש',
            imageProfile: '/static/images/profile/defPicCutted.png',
            position: 'האדר שייכל'
          }
        },
        changeModal: {
          modalCount: '',
        }
      };
    },
    components: {
      ShowWorkers,
      Order,
      ProjectsHeader,
      ShowOrder
    },
    methods: {
      openModal(e) {
        e.preventDefault();
        this.changeModal.modalCount = 0;
        this.$store.commit('modals/alert/open');

      },
      add(data) {

      },
      newOrder() {
        this.$router.push('/orders/new-order');
      },
      back(){
        this.$router.push('/projects');
      }
    },
    mounted() {
      axios.post('/api/getOrdersByProject', {project_id: this.$route.params.id})
          .then((response) => {
            console.log(response);
            this.$store.commit('orders/set', response.data.value);
            this.orders = response.data.value;
          })
          .catch((error) => {
            console.log(error.response.data);
          });

      console.log(this.$route.params.id);
    }
  }
</script>

<style lang="scss" scoped>
  .orders-wrapper {
    z-index: 0;
  }
  .orders-list-wrap {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .orders {
    width: 100%;
    padding: 30px 0 0 0;
    position: relative;
    .title {
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
      @media screen and (max-width: 1440px) {
        font-size: 53px;
      }
      @media screen and (max-width: 480px){
        font-size: 42px;
      }
    }
    .back-b{
      font-weight: bold;
      font-size: 18px;
      color:#2871D7;
      position: absolute;
      @media screen and (max-width: 480px){
        position: relative;
      }
    }
  }
  .orders-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .orders-item {

    margin-right: 15px;
    margin-left: 15px;

    margin-bottom: 30px;

  }
  .load-more-posts {
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
  }
  .h-container {
    width: 100%;
    padding: 0;
  }

  .orders-item {

    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;

    .content-wrapper {
      padding: 95px 300px 0 300px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100%;
      }

      .title {
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

      .description {
        margin-top: 10px;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #E0E0E0;
        width: 375px;
      }

      .meta {
        color: #828282;
      }

      .links-wrapper {
        margin-top: 16px;
        width: 164px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;

        a {
          margin-top: 14px;
          font-family: Assistant;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 65px;

          background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          &:hover {
            text-decoration: underline;
          }
        }

        svg {
          margin-top: 16px;
        }
      }

    }
  }
  .addOrder {
    margin-left: 40px;
    width: 285px;
    height: 54px;
    font-weight: bold;
    font-size: 24px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;

    @media screen and (max-width: 650px) {
      margin: 10px 0 10px 0;
      width: 235px;
      font-size: 19px;

    }

    span {
      font-weight: normal;
      font-size: 28px;
      margin-right: 20px;
    }
  }

  .addProj {
    width: 416px;
    height: 286px;
  }

  .add-order-wrapper {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    width: 1059px;
    height: 95px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1440px) {
      width: 720px;
    }
    @media screen and (max-width: 850px) {
      width: 555px;
    }
    @media screen and (max-width: 650px) {
      width: 405px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }

    @media screen and (max-width: 480px) {
      width: 315px;
    }

    .txt {
      margin-right: 40px;
      font-weight: bold;
      font-size: 36px;
      line-height: 30px;
      text-align: right;
      color: #333333;
      @media screen and (max-width: 1440px) {
        font-size: 30px;
      }
      @media screen and (max-width: 650px) {
        margin: 0;
      }
    }
  }

</style>
