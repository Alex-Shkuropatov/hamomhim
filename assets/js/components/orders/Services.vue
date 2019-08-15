<template>

  <div class="servives-wrapper">
    <h2 class="title">םיתוריש ץופיש</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
    <div class="services">
      <div class="service-wrapper">
      <div class="service" v-for="(service, index) in services" :key="index">
        <div class="checkbox">
          <input type="checkbox" :value="index"  v-model="checkedServices">
          <label>{{service.service}}</label>
        </div>
      </div>
      </div>
      <button class="nextB">Next</button>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        services : [
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
          {service: 'Lorem ipsum dolor sit amet, consectetur'},
        ],
        checkedServices: [],
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped >
.servives-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
  }
  .description{
    margin:0;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;
  }
  .services{
     padding: 50px 100px 50px 100px;
    background: #FFFFFF;
    border: 1px solid #828282;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
 .service-wrapper{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   flex-wrap:wrap;
   width: 697px;
 }
    .nextB{
      margin-top:30px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      border-radius: 50px;
      width: 202px;
      height: 44.03px;
    }
  }
}
</style>