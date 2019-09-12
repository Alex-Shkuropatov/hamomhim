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
    <button class="th-btn th-btn-blue th-btn-lg view-profile">  הבוגת ראשה</button>
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
  responses: {
    type: Array
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
  .view-profile{

    width: 100px;
    height: 25px;

    font-weight: bold;
    font-size: 14px;

    text-align: center;
    padding-right: 31px;
  }
</style>

