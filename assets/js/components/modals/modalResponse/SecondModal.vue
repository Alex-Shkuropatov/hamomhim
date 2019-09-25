<template>

      <div class="content-wrapper">
        <h2 class="title">טקייורפה םש</h2>
        <div class="subtitle">נתוני אדריכל</div>
        <div class="popup-form-row">
          <div class="col1-1 inp-group">
            <div class="label">תיאור</div>
            <theme-textarea :disable=true v-model="response.description"  placeholder="תיאור"></theme-textarea>
          </div>
        </div>
        <div class="popup-form-row">

        <div class="download-wrapper" >
          <download v-for="file in response.files" :key="file.id" v-bind="file" />
        </div>

        </div>
        <div class="popup-form-row two-buttons">
          <button class="th-btn th-btn-md wide th-btn-gray" @click="close">close</button>
        </div>
      </div>

</template>

<script>
  import Modal from '../../common/Modal.vue'
  import ThemeInput from '../../common/ThemeInput.vue'
  import ThemeTextarea from '../../common/ThemeTextarea.vue'
  import Download from  '../modalResponse/Download.vue'
  export default {
    methods: {
      close() {
        this.$store.commit('modals/showWorkers/close');
      },
      back(){
        this.$emit('back', {
        })
      },

    },
    props:{
   response: {
     type: Object,
   }
    },
    components: {
      Modal,
      ThemeInput,
      ThemeTextarea,
      Download,
    },
    mounted() {

    },
    data () {
      return {
        orderId: '',
        done: false,

      }
    },
    computed: {
      getData() {
        return this.$store.getters['modals/showWorkers/getWorkers'];
      },

    },

  }
</script>

<style lang="scss" scoped>
  @import '~@/vars.scss';
  .content-wrapper {
    position: relative;
    margin-bottom: 49px;
    text-align: center;
    width: 600px;
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
    }
    .description {
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
    }
  }
  .download-wrapper{
    margin: 0 auto;
    width: 655px;
  }
  .two-buttons{
    margin-top: 20px;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 15px;
    @media screen and (max-width: 480px){
      justify-content: center;
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
