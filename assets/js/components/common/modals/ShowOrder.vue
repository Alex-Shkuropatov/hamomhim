<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showOrder/isOpened']" @close="close">
      <div class="content-wrapper">
        <h2 class="title">טקייורפה םש</h2>
        <h3 class="architectData">לכירדא ינותנ</h3>
        <form class="form">
         <div class="form-row">
          <div class="row">
              <p>לכירדאה םש </p>
            <input type="text" v-model="architectName">
          </div>
           <div class="row">
             <p>ןופלט</p>
           <input type="text" v-model="phone" >
           </div>
         </div>
          <div class="under-title">
            <h3 class="invitationData">הנמזה ינותנ</h3>
            <div class="form-row">
              <div class="row">
                <p>תוחמתה גוס</p>
              <input type="text" v-model="specialisation">
              </div>
              <div class="row">
                <p>הנשמ תוירוגטק</p>
              <input type="text" v-model="subcategories" >
              </div>
            </div>
            <div class="form-row">
            <div class="row">
              <p> הדובע רוזיא</p>
              <input type="text"  >
            </div>
              <div class="row">
                <p>תופרוצמ תונומת</p>
              <div class="download-b">
                <button class="download" >
                  <span>דרוה</span>
                  <i class="fas fa-download"></i>
                </button>
              </div>
              </div>
            </div>
            <textarea name="message" cols="30" rows="10" v-model="message"></textarea>
          </div>
        </form>
        <button class="sendData th-btn th-btn-blue th-btn-sm " style="text-align:center" >חזור לאתר</button>
      </div>
    </modal>
  </transition>
</template>

<script>
  import Modal from './../Modal';

  export default {
    methods: {
      close() {
        this.$store.commit('modals/showOrder/close');
      }
    },
    props: {
      title : {
        type: String,
      },
      architectData : {
        type: String,
      },
      phone : {
        type: String,
      },
      message : {
        type: String,
      },
      description : {
        type: String,
      },
      architectName : {
        type: String,
      },
      invitationData: {
        type: String,
      },
      subcategories: {
        type: String,
      },
      specialisation: {
        type: String,
      }
    },
    components: {
      Modal,
    }
  }
</script>

<style lang="scss" scoped>
  .sendData{
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
      color:  #2871D7 ;
    }

    @media screen and (max-width: 900px) {
      display: unset;
      padding-right: 55px;
    }
    @media screen and (max-width: 480px) {
      width: 289px;
      height: 62px;

    }
  }
  .content-wrapper{
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
      margin:0;
    }
    .description{
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin:0;
    }
  }
.form{

  .form-row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
 .row{
   margin-top: 11px;
   p{
     margin: 0;
   }
   input{
     pointer-events:none;
     width: 350.28px;
     height: 46.47px;
     border: 1px solid #BDBDBD;
     box-sizing: border-box;
     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
     border-radius: 10px;
   }
 }
  }
}
.download-b{
  width: 350.28px;
  .download{
    .fa-download{
      pointer-events:none;
    }
  }
}
.under-title{
  textarea{
    margin-top: 37px;
    width: 650px;
    height: 148px;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 18px;
    color: #4F4F4F;
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