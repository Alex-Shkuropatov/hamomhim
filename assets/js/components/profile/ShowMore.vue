<template>
 <button class="show-more" @click="swap" v-bind:class="{ active: isActive }">
   <span class="text">דוע ארק</span>
   <i class="fas" v-bind:class="isActive? 'fa-angle-down':'fa-angle-up' "></i>
 </button>
</template>

<script>

  export default {
      data(){
        return{
          isActive: false,
        }
      },
    components: {
    },
    methods: {
      swap(){
        this.isActive=!this.isActive;
      }
    }
  }
</script>

<style lang="scss" scoped>
 .show-more{
   animation-duration: 2s;
   animation-timing-function: ease;
   transition: all 0.8s;
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
.active{
  background: rgba(196, 196, 196, 0.15);
  color: black;
}
</style>