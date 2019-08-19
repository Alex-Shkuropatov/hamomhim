<template>

  <div class="repair-wrapper">
    <h2 class="title">תורקתו סבג תודובע</h2>
    <h4 class="description">ץופישה גוס תא רחב אנ</h4>
 <div class="form-wrapper">
   <form class="form" action="">
     <div class="row">
     </div>
     <div class="row-wrapper">
      <div class="row">
        <p class="formItem" >אלמ םש</p>
        <input type="text" placeholder="אלמ םש" v-model="name" class="inputName">
      </div>
         <div class="row" >
       <p class="formItem" >אלמ םש</p>
       <input type="text" placeholder="אלמ םש" v-model="name" class="inputName">
     </div>
     </div>
     <div class="row-wrapper">
       <div class="row" >
         <p class="formItem" >אלמ םש</p>
         <input type="text" placeholder="אלמ םש" v-model="name" class="inputName">
       </div>
       <div class="row" >
         <p class="formItem" >אלמ םש</p>
         <input type="text" placeholder="אלמ םש" v-model="name" class="inputName">
       </div>
     </div>
   </form>
 </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {

      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped >
  .repair-wrapper{
    margin-top: 200px;
    .title{
      font-weight: bold;
      font-size: 48px;
      line-height: 40px;
      text-align: center;
      color: #333333;
      margin: 0;
    }
    .description{
      font-size: 36px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
      margin: 0;
    }
  }
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  .row-wrapper{

    display: flex;
    flex-direction: row;
    .row{
      .formItem{
        margin: 0;
        margin-right: 20px;
        font-weight: bold;
        font-size: 24px;
        line-height: 65px;
        text-align: right;
        color: #333333;
      }
      margin: 10px;
     input{
       padding-right: 20px;
       width: 487px;
       height: 65px;
       border: 1px solid #E0E0E0;
       box-sizing: border-box;
       box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
       border-radius: 50px;
     }
    }
  }
}
</style>