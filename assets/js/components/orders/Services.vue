<template>
  <div class="servives-wrapper">
    <img class="img-plan" src='/static/images/orders/AddOrderBg.png' alt="">
    <h2 class="title">םיתוריש ץופיש</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
    <div class="services">
      <div class="service-wrapper">
      <div class="service" v-for="(subcategory, index) in subcategories" :key="index">
        <div class="checkbox">
          <label class="container">{{subcategory.name}}
            <input type="checkbox" :value="subcategory.id"  v-model="checkedServices">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      </div>
      <button class="next-b th-btn th-btn-blue th-btn-md"   @click="sendData"><span>Next</span></button>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      subcategories: {
    type: Array,
  },
    },
    data(){
      return {
        checkedServices: [],
        disable:false,
      }
    },
    methods:{
      sendData(){
        this.$emit('send', {
          checked: this.checkedServices ,

        });
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped >

  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 7px;
    right: -40px;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: white;
    border: 1px solid gray;
    opacity: 0.6;
    border-radius: 2px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid blue;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

.servives-wrapper{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
.img-plan{
  position: absolute;
  left: -71px;
  top: 62px;
@media screen and (max-width:1400px){
  width: 355px;
}
  @media screen and (max-width:1240px){
    display: none;
  }
}
  .title{
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
    @media screen and (max-width:1340px){
      font-size: 40px;
    }

    @media screen and (max-width:1340px){
      font-size: 40px;
    }

    @media screen and (max-width:1023px){
      font-size: 31px;
    }
    @media screen and (max-width:767px){
      font-size: 27px;
    }
  }
  .description{
    margin:0;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;
    @media screen and (max-width:1023px){
      font-size: 25px;
    }
    @media screen and (max-width:767px){
      font-size: 20px;
    }
  }
  .services{
     padding: 50px 100px 50px 100px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1099px;
    height: auto;
    @media screen and (max-width: 1440px) {
      width: 700px;
    }
    @media screen and (max-width: 767px) {
      width: 510px;
    }
    @media screen and (max-width: 480px) {
      width: 318px;
    }
 .service-wrapper{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   flex-wrap:wrap;
   width: 80%;
   margin-right: 55px;
   @media screen and (max-width: 480px) {
     flex-direction: column;
     width: 300px;
   }
   .service{
     label{
       font-family: Rubik;
       font-size: 24px;
       line-height: 40px;
       text-align: center;
       letter-spacing: -0.02em;
       color: #000000;
     }
   }
 }
    .next-b{
      margin-top: 32px;
      margin-bottom:50px;
      width: 295.06px;
      height: 58.18px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      border-radius: 50px;
      font-weight: bold;
      font-size: 24px;
      padding: 0px;
      display: inline-block;
      text-align: center;
    }
  }
}
</style>