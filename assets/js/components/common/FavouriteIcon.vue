<template>
  <div class="title-favourite">
    <button>
      <svg width="30" height="28" viewBox="0 0 30 28"  xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1.03659L18.9826 8.1024C19.268 8.60876 19.7596 8.9659 20.3293 9.08086L28.28 10.6851L22.7907 16.6562C22.3973 17.0841 22.2096 17.662 22.2763 18.2394L23.2075 26.2966L15.8323 22.9212C15.3038 22.6793 14.6962 22.6793 14.1677 22.9212L6.79251 26.2966L7.72371 18.2394C7.79045 17.662 7.60268 17.0841 7.20931 16.6562L1.72001 10.6851L9.67068 9.08086C10.2404 8.9659 10.732 8.60876 11.0174 8.1024L15 1.03659Z" stroke="url(#paint0_linear)" stroke-width="2"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-1" y1="15" x2="31" y2="15" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .title-favourite{
    margin-right: 10px;
    svg{
      fill: gold;
      fill-opacity:0;
      &:hover{
        path {
          fill-opacity:1;
        }
      }
    }
  }
</style>