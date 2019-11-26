<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showOrder/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">  שם הפרויקט :  {{ getData.projectName}} </h2>
        <h3 class="architectData"> פרטי הפרויקט</h3 >
        <form class="form">
          <div class="form-row">
            <div class="row">
              <p>שם האדריכל </p>
              <input type="text" :value="getData.userName">
            </div>
            <div class="row">
              <p>טלפון</p>
              <input type="text" :value="getData.phone">
            </div>
          </div>
          <div class="under-title">
            <h3 class="invitationData">נתוני ההזמנה</h3>
            <div class="form-row">
              <div class="row">
                <p>סוג התמחות</p>
                <input type="text" :value="getId">
              </div>
              <div class="row">
                <p>איזור שיפוץ</p>
                <input type="text" :value="getData.work_area">
              </div>
            </div>
            <div class="form-row column clm">
              <div class="row ml-b">
                <p>תת קטגורי</p>
                <div class="sub-wrapper" v-if="getData.subcategories[0]!==null">
                  <subcategory
                  class="orders-item"
                  v-for="subcategory in getData.subcategories"
                  v-bind:value="subcategory.name"
                  :key="subcategory.id"
                  >
                </subcategory>
              </div>
            </div>
            <div class="row">
              <p>שמור הצעה</p>
              <div class="download-b">
                <a class="download" :href="$env.API_URL+getData.zip"  v-bind:style="[getData.zip ===  null  ? {'pointer-events': 'none'}: '']"  download>
                  <span>להוריד</span>
                  <i class="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          <textarea name="message" v-bind:disabled="flag"  :value="getData.description"></textarea>
        </div>
      </form>
      <button class="sendData th-btn th-btn-blue th-btn-sm " @click="close" style="text-align:center">חזור לאתר
      </button>
    </div>
  </modal>
</transition>
</template>

<script>
  import Modal from '../common/Modal';
  import Subcategory from '../orders/Subcategory.vue'

  export default {
    data() {
      return {
        flag: true,
      }
    },
    methods: {
      close() {
        this.$store.commit('modals/showOrder/close');
      },
    },
    components: {
      Modal,
      Subcategory
    },
    computed: {
      getData() {
        return this.$store.getters['modals/showOrder/getOrder'];
      },
      getId() {
          return this.$store.getters['categories/getNameById'](this.getData.category_id);
      },
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .sendData {
    padding-right: 119px;
    margin-top: 40px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 355px;
    height: 70px;

    font-weight: bold;
    font-size: 30px;
    line-height: 39px;

    &:hover {
      color: #2871D7;
    }
    @media screen and (max-width: 900px) {
      display: unset;
      padding-right: 55px;
    }
    @media screen and (max-width: 480px) {
      font-size: 25px;
      width: 260px;
      height: 62px;
      padding-right: 24px;
    }
  }
  .architectData {
    font-size: 24px;
    text-align: center;
    font-weight: normal;
    letter-spacing: -0.02em;
    color: #828282;
    margin: 0;
  }
  .content-wrapper {
    position: relative;
    margin-bottom: 49px;
    text-align: center;
    width: 805px;
    @media screen and (max-width: 900px) {
      width: 440px;
    }
    @media screen and (max-width: 480px) {
      width: 310px;
    }
    .title {
      font-weight: bold;
      font-size: 40px;
      text-align: center;
      color: #2871D7;
      margin: 0;
      margin-top: 40px;
    }
    .description {
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
    }
  }
  .form {
    .form-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      @media screen and (max-width:900px) {
        flex-direction: column;
      }
      .row {
        margin: 10px;
@media screen and (max-width:900px){
  display: flex;
  flex-direction: column;
  align-items: center;
}
        p {
          margin: 0;
          font-weight: bold;
          font-size: 18px;
          line-height: 65px;
          text-align: right;
          color: #333333;
          @media screen and (max-width:900px) {
            line-height: unset;
          }
        }

        input {
          padding-right: 20px;
          pointer-events: none;
          width: 350.28px;
          height: 46.47px;
          border: 1px solid #BDBDBD;
          box-sizing: border-box;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          @media screen and (max-width: 480px) {
            width: 250px;
          }
        }
      }
      .ml-b{
        margin-left: 108px;
        @media screen and (max-width:480px){
          margin-left: 20px;
        }
      }
    }
  }
  .download-b {
    width: 350.28px;
    @media screen and (max-width: 480px) {
      width: 70px;
    }
    .download {
      color: #2871D7;
      margin-left: 280px;
@media screen and (max-width:900px){
  margin-left: 0;
}
      .fa-download {
        pointer-events: none;
      }
    }
  }

  .under-title {
    textarea {
      resize: none;
      padding-right: 20px;
      margin-top: 37px;
      width: 650px;
      min-height: 148px;
      border: 1px solid #BDBDBD;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      font-size: 18px;
      color: #4F4F4F;
@media screen and (max-width: 900px) {
  width: 400px;
  height: 90px;
}
      @media screen and (max-width: 900px) {
        width: 300px;
        height: 70px;
      }
      &:disabled {
        background-color: white;
      }
    }
  }

  .invitationData {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: #333333;
    margin: 0;
  }

  .sub-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 480px){
      flex-direction: column;
      align-items: center;
    }
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
