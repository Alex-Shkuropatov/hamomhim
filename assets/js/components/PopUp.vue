<template>

  <div class="formMessage"  v-show="isHidden">

    <svg id="closeWindow" @click="$emit('close')" width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
      <path d="M20 1.15689L18.8406 0L10 8.82369L1.15941 0L0 1.15689L8.84059 9.98065L0 18.8037L1.15941 19.9606L10 11.1375L18.8406 19.9606L20 18.8037L11.1588 9.98065L20 1.15689Z" fill="#BDBDBD"/>
    </svg>



    <svg class="msgOk" width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4876 22.5569C11.2012 22.8413 10.8105 23 10.4046 23C9.99878 23 9.60808 22.8413 9.32171 22.5569L0.673149 14.0163C-0.224383 13.1302 -0.224383 11.6932 0.673149 10.8086L1.75608 9.73913C2.65389 8.85295 4.10761 8.85295 5.00514 9.73913L10.4046 15.0706L24.9949 0.664636C25.8927 -0.221545 27.3478 -0.221545 28.2439 0.664636L29.3269 1.73415C30.2244 2.62033 30.2244 4.05705 29.3269 4.94184L11.4876 22.5569Z" fill="url(#paint0_linear)"/>
      <defs>
        <linearGradient id="paint0_linear" x1="-2.23517e-07" y1="11.5" x2="30" y2="11.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2871D7"/>
          <stop offset="1" stop-color="#3269B6"/>
        </linearGradient>
      </defs>
    </svg>

    <h3>New information have been saved</h3>
    <p>Lorem Ipsum dolor set amet</p>
    <button class="sendData th-btn th-btn-blue th-btn-sm " style="text-align:center" @click="$emit('close')" >חזור לאתר</button>
    <div class="messageFooter"></div>
  </div>

</template>

<script>
  export default {
    props: {
      isHidden: {
        type: Boolean,
        required: true
      }
    },
  };
</script>

<style lang="scss" scoped>
  .formMessage{
    position: fixed;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
    width: 660px;
    height: 363px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .msgOk{
      margin-top: 66px;
    }
    h3{
      margin: 0;
      margin-top: 26px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
    }
    p{
      margin:0;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
    }
    .sendData{
      margin-top: 26px;
    }
    #closeWindow{
      left: 25px;
      top: 25px;
      position: absolute;
      animation: forwards;
      animation-duration: 1s;

        &:hover{
          path {
            fill: #2970D5;
          }

        }


    }
    .messageFooter{
      position: absolute;
      bottom: 0;
      margin-top: 52px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      width: 100%;
      height: 13px;
    }
  }
  .sendData{
    padding-right: 141px;
    margin-top: 40px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 355px;
    height: 70px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    &:hover {
      color:  #2871D7 ;
    }
  }
</style>