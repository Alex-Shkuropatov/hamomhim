<template>
  <div class="cats-section">
    <div    :class="{ 'one-block':  orders.length<3 , 'w-container': true }"     >
      <div class="wraping-block ">
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="1"></div>
        <h2 class="title-order">Choose order</h2>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="2"></div>
        <swiper :options="sliderOptions" >
          <swiper-slide class="slide-outer"  v-for="order in orders"  :key="order.id">
            <div class="slide-inner" >
              <div class="image-wrapper">
                <img class="order-img" :src="order.thumbnail===null ? '/static/images/profile/defaultAvatar.png': $env.API_URL+order.thumbnail " alt="">
              </div>
              <div class="content-side">
                <div class="title">{{order.name}}</div>
                <div class="description">{{order.description}}</div>
                <button class="th-btn th-btn-blue th-btn-sm feedback" @click="showWorkers(order.id)">Leave feedback </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    data(){
      return{
        orders: [],
        sliderOptions: {
          // spaceBetween: 30,
          slidesPerColumn: 2,
          slidesPerView: 2,
          navigation: {
            nextEl: '.swiper-button-next[data-uid="1"]',
            prevEl: '.swiper-button-prev[data-uid="2"]',
          },
          breakpoints: {
            1240: {
              slidesPerView: 1,
            },
            1023: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
              slidesPerColumn: 1,
            }
          }
        },
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
    },
    methods:{
      showWorkers(id){
        console.log(id);
        axios.post('/api/getWorkersWithoutFeedback', {'order_id':id}
        ).then((response)=>{
          console.log(response);
          this.$emit('getWorkers', {
            workers : response.data.value.workers,
            id: id,
          })
        }).catch((error)=>{
          console.log(error);
        });

      },
    },
    skip() {
      this.$router.push({name: 'closed-projects'});
    },
  }
</script>

<style lang="scss" scoped>
  .w-container{
    width: 1084px;
    margin: 20px auto;
    padding: 0 15px;
    @media screen and (max-width: 1240px){
      width: 550px;
      margin: 0 auto
    }
    @media screen and (max-width: 600px){
      width: 310px;

    }
  }
  .one-block{
    width: 550px;
    margin: 0 auto;
    @media screen and (max-width:600px){
      width: 312px;
    }
  }
  .slide-inner{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    height: 230px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    margin: 6px;
    padding: 22px;
    @media screen and (max-width: 600px){
      width: 270px;
      height: unset;
      flex-direction: column;
    }
    .content-side{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px 0 22px;
      .title{
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        color: #333333;
      }
      .description{
        font-size: 18px;
        text-align: center;
        max-height: 70px;
        overflow:hidden;
        color: #4F4F4F;
      }
      .feedback{
        margin-top: 10px;
        padding-right: 41px;
        width: 205px;
        height: 40px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
  .order-img{
    width: 180px;
    height: 140px;
  }
  .categories-slider-wrap{
    margin-top: 20px;
    position: relative;

    }
    .swiper-button-next{
      left: 72px;
      top: 36px;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
    .swiper-button-prev{
      right: 72px;
      top: 36px;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }



  .title-order {
    text-align: center;
    margin: 10px 0px 35px 0px;
    font-size: 48px;
    color: #000000;
    font-weight: normal;
    @media screen and (max-width: 480px){
      font-size: 35px;
    }
  }
  .wraping-block{
    position: relative;
  }
</style>
