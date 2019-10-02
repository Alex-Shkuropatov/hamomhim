<template>
    <div class="wrapper">
      <div class="center">
        <span><i class="fas fa-hammer"></i></span>
        <span>
        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5262 18.6762C48.1582 18.0443 48.1582 17.0195 47.5262 16.3875L45.0974 13.9588C44.5482 13.4095 43.6858 13.3281 43.0434 13.7646L37.9367 17.2354L41.3865 12.0942C41.8173 11.4522 41.7338 10.5949 41.1869 10.0482L35.9186 4.77986C35.4322 4.29349 34.6917 4.16758 34.0722 4.46611L33.1612 4.90469L33.5974 3.93691C33.874 3.32355 33.7421 2.60327 33.2664 2.12747L31.6127 0.473937C30.9808 -0.157979 29.956 -0.157979 29.324 0.473937L16.4785 13.3193L34.6808 31.5216L47.5262 18.6762Z" fill="white"/>
<path d="M14.0863 15.7109L10.3677 19.4295C10.0642 19.733 9.89362 20.1446 9.89362 20.5738C9.89362 21.003 10.0641 21.4147 10.3677 21.7181L13.8951 25.2455C14.5747 25.9251 14.9043 26.863 14.7994 27.8186C14.6947 28.7735 14.169 29.6179 13.3573 30.1353C2.99249 36.7423 2.02632 37.7086 1.70891 38.0261C-0.569637 40.3045 -0.569637 44.0119 1.70891 46.2906C3.98972 48.5714 7.69728 48.5668 9.97335 46.2906C10.291 45.973 11.2575 45.0064 17.8641 34.6421C18.3802 33.8324 19.2242 33.3079 20.1796 33.203C21.138 33.0984 22.0758 33.4264 22.7538 34.1043L26.2812 37.6317C26.9131 38.2636 27.9379 38.2636 28.5698 37.6317L32.2885 33.913L14.0863 15.7109ZM7.55778 43.6766C6.66444 44.5699 5.21612 44.5699 4.32289 43.6766C3.42955 42.7832 3.42955 41.3349 4.32289 40.4417C5.21623 39.5483 6.66455 39.5483 7.55778 40.4417C8.45112 41.3349 8.45112 42.7832 7.55778 43.6766Z" fill="white"/>
</svg>
        </span>
        <span><i class="fas fa-wrench"></i></span>
        <span><i class="fas fa-tools"></i></span>
      </div>
     </div>
</template>

<script>


  export default {


  }
</script>

<style scoped>

  body{
    margin: 0;
    padding: 0;
  }
.wrapper{
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 130px 0;
}
  .center
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  span
  {
    position: absolute;
    width: 18px;
    height: 25px;
    border-radius: 5px;
    background: #262626;
    animation: animate 4s infinite forwards ease-in-out;
    color: white;
    font-size: 17px;
   .fas,i{


   }
  }

  span:nth-child(1)
  {
    background: #2871D7;
    left: -35px;
    top: -35px;
    animation-delay: 0.5s;
  }
  span:nth-child(2)
  {
    background: #3269B6;
    left: 0px;
    top: -35px;
    animation-delay: 1s;
  }
  span:nth-child(4)
  {
    background: #3269B6;
    left: -35px;
    top: 0px;
    animation-delay: 1.5s;
  }
  span:nth-child(3)
  {
    background: #2871D7;
    left: 0px;
    top: 0px;
    animation-delay: 2s;
  }


  @keyframes animate
  {

    0%
    {
      transform: rotateY(0deg);
    }
    20%
    {
      transform: rotateY(360deg);
    }
    40%
    {
      transform: rotateX(180deg);
    }
    60%
    {
      transform: rotateX(0deg);
    }
    80%
    {
      transform: rotateX(360deg);
    }
    100%
    {
      transform: rotateY(180deg);
    }
  }
</style>
