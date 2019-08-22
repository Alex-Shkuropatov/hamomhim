<template>
 <button class="show-more">
   <span class="text">דוע ארק</span>
   <i class="fas fa-angle-up"></i>
 </button>
</template>

<script>

  export default {

    components: {
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
 .show-more{
   position: absolute;
   width: 76px;
   height: 47px;
   background: #2871D7;
   display: flex;
   flex-direction: column;
   align-items: center;


   font-size: 14px;
   line-height: 18px;
   text-align: center;
   color: #FFFFFF;
   .text{
     margin-top: 10px;
     font-weight: bold;
   }
 }

</style>