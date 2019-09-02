<template>
  <div class="content-wrapper  ">
    <h3 class="title">
      סיכום הזמנה
    </h3>
    <h4 class="description">
      כניסה למערכת
    </h4>
    <div class="content-role">
    <div class="architector role">
      <button class="architectorB" @click="checkRole('architect')">
      <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7143 59.1429C19.7143 52.5714 19.7143 26.2857 19.7143 26.2857C19.7143 26.2857 19.7307 24.8071 20.4996 23C13.6686 23 6.57143 23 6.57143 23C6.57143 23 0 23 0 29.5714V52.5714C0 59.1429 6.57143 59.1429 6.57143 59.1429V92H26.2857V65.7143C26.2857 65.7143 19.7143 65.7143 19.7143 59.1429Z" fill="url(#paint0_linear)"/>
        <path d="M19.7143 19.7143C21.4229 19.7143 23.0033 19.2411 24.403 18.4789C24.5969 18.3606 24.8137 18.2554 25.0207 18.1404C27.7512 16.3891 29.5715 13.3433 29.5715 9.85714C29.5715 4.41271 25.1587 0 19.7143 0C14.2699 0 9.85718 4.41271 9.85718 9.85714C9.85718 15.3016 14.2699 19.7143 19.7143 19.7143Z" fill="url(#paint1_linear)"/>
        <path d="M85.4286 23H71.5038C72.2694 24.8071 72.2858 26.2857 72.2858 26.2857C72.2858 26.2857 72.2858 52.5714 72.2858 59.1429C72.2858 65.7143 65.7144 65.7143 65.7144 65.7143V92H85.4286V59.1429C85.4286 59.1429 92.0001 59.1429 92.0001 52.5714C92.0001 46 92.0001 29.5714 92.0001 29.5714C92.0001 29.5714 92.0001 23 85.4286 23Z" fill="url(#paint2_linear)"/>
        <path d="M66.9627 18.1339C67.1763 18.2489 67.403 18.3573 67.6002 18.4789C68.9999 19.2411 70.577 19.7143 72.2856 19.7143C77.73 19.7143 82.1428 15.3016 82.1428 9.85714C82.1428 4.41271 77.73 0 72.2856 0C66.8412 0 62.4285 4.41271 62.4285 9.85714C62.4285 13.3367 64.2422 16.3793 66.9627 18.1339Z" fill="url(#paint3_linear)"/>
        <path d="M46 19.7143C51.4439 19.7143 55.8571 15.3011 55.8571 9.85714C55.8571 4.41319 51.4439 0 46 0C40.556 0 36.1428 4.41319 36.1428 9.85714C36.1428 15.3011 40.556 19.7143 46 19.7143Z" fill="url(#paint4_linear)"/>
        <path d="M65.7142 29.5714C65.7142 29.5714 65.7142 23 59.1428 23C57.4999 23 32.8571 23 32.8571 23C32.8571 23 26.2856 23 26.2856 29.5714V52.5714C26.2856 59.1429 32.8571 59.1429 32.8571 59.1429V92H59.1428V59.1429C59.1428 59.1429 65.7142 59.1429 65.7142 52.5714C65.7142 46 65.7142 29.5714 65.7142 29.5714Z" fill="url(#paint5_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-1.95844e-07" y1="57.5" x2="26.2857" y2="57.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="9.85718" y1="9.85715" x2="29.5715" y2="9.85715" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="65.7144" y1="57.5" x2="92.0001" y2="57.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
          <linearGradient id="paint3_linear" x1="62.4285" y1="9.85715" x2="82.1428" y2="9.85715" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
          <linearGradient id="paint4_linear" x1="36.1428" y1="9.85715" x2="55.8571" y2="9.85715" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
          <linearGradient id="paint5_linear" x1="26.2856" y1="57.5" x2="65.7142" y2="57.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2871D7"/>
            <stop offset="1" stop-color="#3269B6"/>
          </linearGradient>
        </defs>
      </svg>

      <div class="role-title">
        אדריכלים
      </div>
      <div class="role-description">
        כניסה לאיזור
      </div>
      </button>
    </div>
      <div class="worker role">
        <button class="workerB" @click="checkRole('worker')">
        <svg width="70" height="92" viewBox="0 0 70 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.4733 63.6853C62.4408 61.4443 59.9915 60.3499 56.8644 60.3499H50.2757L45.9501 56.1808C42.771 58.7866 38.9145 60.2979 34.745 60.2979C30.8364 60.2979 27.1362 58.9429 24.1135 56.5977L20.2567 60.2979H13.3996C9.90787 60.2979 7.19786 61.4966 5.06112 63.9462C-0.496817 70.3914 -0.23667 83.4083 0.214845 89.4551C0.291419 90.4805 1.15433 91.2548 2.18267 91.2548H67.9352C68.9809 91.2548 69.8519 90.4552 69.9037 89.4108C70.2088 83.2587 70.1189 69.9841 64.4733 63.6853Z" fill="url(#paint0_linear)"/>
          <path d="M16.6813 31.0608C15.4305 32.1031 14.5967 33.7708 14.5967 35.6991C14.5967 38.5654 16.4728 40.9106 18.8702 41.3276C19.3913 45.6532 21.1632 49.4576 23.8211 52.2718C24.3942 52.8451 24.9675 53.4184 25.5929 53.8874C26.3748 54.5128 27.2085 55.034 28.0945 55.503C30.0748 56.5452 32.2635 57.1184 34.6089 57.1184C36.9541 57.1184 39.1431 56.5452 41.1234 55.503C42.0093 55.034 42.8432 54.5128 43.6249 53.8874C44.2505 53.4184 44.8236 52.8451 45.3968 52.2718C48.0026 49.4578 49.8267 45.7053 50.2957 41.3797C50.348 41.3797 50.3999 41.3797 50.4521 41.3797C53.2144 41.3797 55.403 38.826 55.403 35.6991C55.403 33.7708 54.5692 32.1031 53.3184 31.0608H16.6813Z" fill="url(#paint1_linear)"/>
          <path d="M53.6504 20.1166C52.0348 14.7487 47.7613 9.27651 42.3413 6.46227V18.7094V20.3771C42.3413 20.4814 42.3413 20.5335 42.3413 20.5856C42.2892 21.1589 42.1849 21.68 41.9245 22.2012C41.2469 23.5041 39.8919 24.4422 38.3286 24.4422H37.4947H31.762C30.3028 24.4422 28.9997 23.6604 28.3224 22.5139C28.0097 22.0448 27.8533 21.5239 27.7491 20.9504C27.697 20.7419 27.697 20.5856 27.697 20.3771V18.9179V6.41016C22.277 9.27651 18.0035 14.7487 16.3879 20.1166L16.0231 21.2631H13.0525V27.7776H16.3358H20.9219H22.8502H47.9701H49.8463H56.9483V27.4649V21.2631H54.0155L53.6504 20.1166Z" fill="url(#paint2_linear)"/>
          <path d="M31.7429 22.8266H38.2573C39.1954 22.8266 39.9772 22.3055 40.3941 21.5237C40.6025 21.1589 40.7068 20.7941 40.7068 20.3772V19.9082V17.9799V5.6806V3.90867V3.23117C40.7068 2.81424 40.6025 2.44943 40.4983 2.08462C40.0294 0.885965 38.8308 0 37.4758 0H31.7429C30.4921 0 29.4498 0.938081 29.3456 2.13674C29.3456 2.24097 29.2935 2.3452 29.2935 2.44943V3.90867V5.6806V18.1883V20.1687V20.3772C29.2935 20.8984 29.4498 21.3674 29.7104 21.7843C30.1796 22.4097 30.909 22.8266 31.7429 22.8266Z" fill="url(#paint3_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="-5.21541e-07" y1="73.7178" x2="70" y2="73.7178" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="14.5967" y1="44.0896" x2="55.403" y2="44.0896" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="13.0525" y1="17.0939" x2="56.9483" y2="17.0939" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="29.2935" y1="11.4133" x2="40.7068" y2="11.4133" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2871D7"/>
              <stop offset="1" stop-color="#3269B6"/>
            </linearGradient>
          </defs>
        </svg>

        <div class="role-title">
          קבלנים
        </div>
        <div class="role-description">
          כניסה לאיזור
        </div>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
  import Modal from '../../common/Modal.vue';
  export default {
    data: function(){
     return{
       role: '',
     }
    },
    methods: {
      close() {
        this.$store.commit('modals/login/close');
      },
      checkRole: function (role) {
        this.role= role;
        this.$emit('send', {
          role: this.role,
          modal: 1 ,
        })
      },
    },
    components: {
      Modal,
    },

  }
</script>

<style lang="scss" scoped>
.content-wrapper{
  width: 500px;
  position: relative;
  .title{
    text-align: center;
    margin: 0;
    margin-top: 30px;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;
  }
  .description{
    text-align: center;
    margin: 0;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;
  }
}
  .content-role{
    margin-top:10px;
    display: flex;
    flex-direction: row-reverse;
    .role{
      letter-spacing: -0.02em;
      line-height: 40px;
      font-size: 24px;
      button{
        width: 200px;
        height: 200px;
        @media screen and (max-width: 700px){
          width: 160px;
          height: 160px;
        }
        &:hover{
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }
        .role-title{
          font-weight: bold;
          text-align: center;
          background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .role-description{
          text-align: center;
          color: #828282;
        }
      }
    }
  }
</style>
