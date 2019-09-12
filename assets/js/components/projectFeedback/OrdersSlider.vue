<template>
  <div class="cats-section">
    <div class="w-container">
      <div class="th-heading text-center">םיטקיורפ תמישר</div>
      <div class="categories-slider-wrap">
        <div class="swiper-button-next th-slider-arrow th-slider-arrow-left" slot="button-next" data-uid="1"></div>
        <h2 class="title-order">Choose order</h2>
        <div class="swiper-button-prev th-slider-arrow th-slider-arrow-right" slot="button-prev" data-uid="2"></div>
        <swiper :options="sliderOptions" >
          <swiper-slide class="slide-outer" v-for="order in orders"  :key="order.id">
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
          slidesPerView: 2,
          slidesPerColumn: 1,
          navigation: {
            nextEl: '.swiper-button-next[data-uid="1"]',
            prevEl: '.swiper-button-prev[data-uid="2"]',
          },
          breakpoints: {
            1340: {
              slidesPerView: 2,
            },
            1023: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            570: {
              slidesPerView: 1,
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
            if(this.orders.length>2){
              console.log(this.orders);
              this.sliderOptions.slidesPerColumn = 2;
            }
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    },
    methods:{
      showWorkers(id){
        axios.post('/api/getOrderWorkers', {'order_id':id}
        ).then((response)=>{
          console.log(response);
          this.$emit('getWorkers', {
            workers : response.data.value.workers,
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
    margin: 0 auto;
    padding: 0 15px;
  }
  .slide-inner{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    height: 200px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    margin: 6px;
    padding: 22px;
    .content-side{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px 0 22px;
      .title{
        font-weight: bold;
        font-size: 24px;
        text-align: right;
        color: #333333;
      }
      .description{
        font-size: 18px;
        text-align: right;
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
    .swiper-button-next{
      left: 310px;
      top: 48px;
      right: auto;
    }
    .swiper-button-prev{
      right: 310px;
      top: 50px;
    }
    .title-order{
      text-align: center;
      font-weight: normal;
      font-size: 64px;
      margin: 10px 0px 35px 0px;
      letter-spacing: -0.02em;
      color: #333333;
    }
  }
  .text-center{
    margin-top: 25px;
  }

</style>
