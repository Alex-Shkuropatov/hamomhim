<template>
  <div class="worker-item" v-show="display" >
    <post-close class="closeB" @click.native="deleteWorker" />
<div class="img-wrapper">
  <img class="profileImg" :src="avatar===null? '/static/images/profile/defaultAvatar.png': $env.API_URL+avatar "  alt="">
</div>
    <div class="title">
    {{name}}
    </div>
    <div class="desciption">

    </div>
    <div class="under-text">

    </div>
    <button class="th-btn th-btn-blue th-btn-lg open-response" v-bind:class="{color: response===null }" :disabled="response === null" @click="openResponse" > הבוגת ראשה</button>
    <button class="view" @click="viewProfile" >צפה בפרופיל</button>

  </div>
</template>

<script>
import PostClose from './../common/PostClose'
  export default {
    data() {
      return {
        display: true,
      }
    },
props: {
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  id: {
    type: Number,
},
  response: {
    type: Object,
  },
},
    methods: {
    deleteWorker(){
      let orderData =this.$store.getters['modals/showWorkers/getOrderId'];
      axios.post('/api/deleteWorkerFromOrder', {
        orderId: orderData,
        userId: this.id,
      }).then((response)=>{
        console.log(response);
        this.display = false;
      }). catch((error)=>{
        console.log(error);
      });
    },
      openResponse(){
        this.$emit('getResponse', {
          response: this.response,
        })
      },
      viewProfile(){
        this.$router.push({name:'view-profile', params: {'id': this.id}})
      },
    },
    components: {
      PostClose,
    },
    computed: {
      getId() {
        return this.$store.getters['modals/showWorkers/getOrderId'];
      },
    },

  }
</script>

<style lang="scss" scoped>
  .worker-item{
    position: relative;
    margin: 5px;
    height: 240px;
    width: 220px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      font-weight: 800;
      font-size: 20px;
      text-align: right;
      color: #2871D7;
    }
    .closeB{
      width: 30px;
      height: 30px;
    }
  }
  .profileImg {
    margin-top: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .open-response{
    width: 123px!important;
    height: 25px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 0 24px 0 0px;
    margin-bottom: 20px;
  }
  .color{
    background: linear-gradient(90deg, gray 0%, gray 100%)!important;
    border: none!important;
    transition: unset!important;
    position: static;
    transform:  unset!important;
  }
  .view{
    position: absolute;
    bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
  }
</style>

