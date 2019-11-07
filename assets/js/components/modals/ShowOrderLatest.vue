<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showOrderLatest/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">
          <span>שם הפרויקט</span>
          <span class="bold"> {{ getData.projectName}} </span>
        </h2>
          <form class="form">
            <div class="form-row">
              <div class="row">
                <p>שם האדריכל </p>
                <input type="text" :value="getData.userName">
              </div>
              <div class="row">
                <p>אזור עבודה</p>
                <input type="text" :value="getData.work_area">
              </div>
            </div>
            <div class="form-row">
              <div class="row">
                <p>סוג העבודה</p>
                <input type="text" :value="getId">
              </div>
            </div>
        </form>
        <button class="sendData th-btn th-btn-blue th-btn-sm " @click="close">חזור לאתר</button>
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
      this.$store.commit('modals/showOrderLatest/close');
    },
  },
  components: {
    Modal,
    Subcategory
  },
  computed: {
    getData() {
      return this.$store.getters['modals/showOrderLatest/getOrder'];
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
@import '~@/vars.scss';
.sendData {
  padding-right: 40px;
  padding-left: 40px;
  min-width: 50%;
  margin-top: 40px;
  background: #E0E0E0;
  border-color: #E0E0E0;
  border-radius: 10px;
  width: auto;
  height: 45px;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 45px;

  &:hover {
    color: #E0E0E0;
  }
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
    font-size: 26px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    margin: 0;
    margin-top: 0px;
    width: calc(100% + 30px);
    padding: 10px 50px;
    background: $clr-blue;
    margin-right: -15px;
    margin-left: -15px;
    margin-bottom: 20px;
    .bold{
      font-weight: 700;
    }
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
    justify-content: flex-start;
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
        text-align: right;
        color: #333333;
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

@media screen and (max-width:480px){
  .sendData {
    min-width: calc(100% - 20px);
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 20px;
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
