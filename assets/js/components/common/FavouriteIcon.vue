<template>
  <div class="title-favourite tooltip" >
    <button @click="addFavourite">
      <svg  viewBox="0 0 30 28" ref="svg"  xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1.03659L18.9826 8.1024C19.268 8.60876 19.7596 8.9659 20.3293 9.08086L28.28 10.6851L22.7907 16.6562C22.3973 17.0841 22.2096 17.662 22.2763 18.2394L23.2075 26.2966L15.8323 22.9212C15.3038 22.6793 14.6962 22.6793 14.1677 22.9212L6.79251 26.2966L7.72371 18.2394C7.79045 17.662 7.60268 17.0841 7.20931 16.6562L1.72001 10.6851L9.67068 9.08086C10.2404 8.9659 10.732 8.60876 11.0174 8.1024L15 1.03659Z" stroke="url(#paint0_linear)" stroke-width="2"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-1" y1="15" x2="31" y2="15" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
        </defs>
      </svg>
    </button>
    <span class="tooltiptext" v-if="!is_favourite" >Add to favourites</span>
    <span class="tooltiptext del" v-if="is_favourite" >Delete from favourites</span>
  </div>
</template>

<script>
  export default {
    props: {
      is_favourite: {
        type: Boolean,
      },
      user_id: {
        type: Number,
      }
    },
    methods: {
      addFavourite(){
       if (this.is_favourite === true) {
         axios.post('/api/deleteUserFromFavourite', {'user_id': this.user_id})
             .then((response)=>{
               this.$refs.svg.style.fill='white';
               this.$refs.svg.style.fillOpacity=0;
               this.$emit('input', 0);
               console.log(response);
             }).catch((error)=>{
           console.log(error);
         })
       } else {
         axios.post('api/addUserToFavourite', {'user_id': this.user_id})
             .then((response)=>{
               this.$refs.svg.style.fillOpacity=1;
               this.$refs.svg.style.fill='gold';
               this.$emit('input', 1);
             }).catch((error)=>{
           console.log(error);
         })
       }
      },
      gold(){
        this.$refs.svg.style.fillOpacity=1;
        this.$refs.svg.style.fill='gold';
      },
      white(){
        this.$refs.svg.style.fill='white';
        this.$refs.svg.style.fillOpacity=0;
      }
    },
    watch: {
      'is_favourite'(){
        if (this.is_favourite !== true){
         this.white();
        }
        else{
          this.gold();
        }
      }
    },
    mounted() {
      if (this.is_favourite === true){
       this.gold();
      }
      else{
        this.white();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title-favourite{
    margin-right: 3px;
    margin-bottom: 3px;
    svg{
      width:30px;
      height:28px;
      @media screen and (max-width:767px){
        width: 20px;
        height: 28px;
      }
      fill: gold;
      fill-opacity:0;
      &:hover{
        path {
          fill-opacity:1;
        }
      }
    }
  }
  .tooltip {
    position: relative;
  }
  .tooltip .tooltiptext {
    opacity:0;
    padding-right: 30px;
    visibility: hidden;
    font-size: 14px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #FFFFFF;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    width: 171px;
    bottom: 60%;
    margin-left: -85px;
    left: 50%;
   /* Use half of the width (120/2 = 60), to center the tooltip */
    position: absolute;
    z-index: 1;
    transition: all .3s ease-out;
  }
.del{
  padding-right: 19px!important;
  transition: all .3s ease-out;
}
  .tooltiptext:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(40, 113, 215, 0);
    border-top-color: #3269B6;
    border-width: 9px;
    margin-left: -9px;
  }
  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    opacity:0.85;
    margin-bottom: 15px;
    text-align: center;
    visibility: visible;
  }


</style>
