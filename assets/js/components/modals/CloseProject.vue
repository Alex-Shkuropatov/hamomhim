<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/projectPrice/isOpened']" @close="close">
            <div class="content-wrapper third-message">
                <h2 class="title">סיכום פרויקט</h2>
                <p class="projectName">נא הזן את סכום הפרויקט</p>
                <input
                        :class="{ 'error': $v.project.price.$error, 'container-value': true }"
                       type="number"
                       v-model.trim="project.price"
                       placeholder="םוכס"
                        @input="$v.project.price.$touch()"
                >
              <div class="error-wrapper" v-if="$v.project.price.$dirty">
              <p class="error-message" v-if="!$v.project.price.required">
                Please enter price of the project
              </p>
                <p class="error-message" v-else-if ="!$v.project.price.checkPrice">
                  Price must be > 0
                </p>
              </div>
                <div class="buttons-wrapper">

                  <button class="saveB"  style="text-align:center" @click='closeProject' > סגור פרויקט</button>
                    <button class="closeB"  style="text-align:center" @click='close'   >ביטול </button>
                </div>
            </div>
    </modal>
  </transition>
</template>

<script>
  import Modal from '../common/Modal.vue'
  import { required } from "vuelidate/lib/validators";
const checkPrice = (value) => value>0;
  export default {
      methods: {
          close() {
              this.$store.commit('modals/projectPrice/close');
          },
          closeProject() {
            this.$v.project.price.$touch();

            if (!this.$v.$invalid){
              axios.post('/api/closeProject', this.project)
                  .then((response)=>{
                    console.log(response);
                    this.$store.commit('modals/projectPrice/close');

                    this.$router.push({name : 'project-feedback', params:{'id':this.project.projectId}});
                  }).catch((error)=>{
                console.log(error.response.data)
              })
            }
          },
      },
    validations: {
      project: {
        price:{
          required,
          checkPrice,
        }
      }
    },
      components: {
          Modal,
      },

    computed: {
      getData() {
         return this.$store.getters['modals/projectPrice/getId'];

      },
    },
      data: function () {
          return {
              project: {
                price: '',
                projectId: '',
              }
          }
      },
   beforeUpdate() {
       this.project.projectId = this.getData;
   }

  }
</script>

<style lang="scss" scoped>
  .form {
    display: inline-block;
    text-align: center;
    width: 49%;
  }
    .buttons-wrapper{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
      margin-bottom: 30px;
        button{
            color: white;
            width: 250px;
            height: 50px;
            &:hover  {
                color:black;
            }
          @media screen and (max-width: 650px) {
            width: 170px;
          }
          @media screen and (max-width: 650px) {
            width: 140px;
            height: 40px;
          }
        }
        .closeB{
            margin-right: 10px;
            background: #E0E0E0;
            border-radius: 50px;
        }
        .saveB{
            margin-left: 10px;
            background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
            border-radius: 50px;
        }
    }
    .content-wrapper{
        background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 600px;
      @media screen and (max-width: 650px) {
        width: 450px;
      }
      @media screen and (max-width: 480px) {
        width: 315px;
      }
      .title{
        margin:0;
        margin-top: 27px;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #333333;

      }
      .projectName{
        margin:0;
        margin-top: 10px;
        margin-bottom: 15px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #828282;
      }
      .container-value{
        padding-left: 8px;
        background: #FFFFFF;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        width: 350.28px;
        height: 46.47px;
        padding-right: 20px;
        @media screen and (max-width: 650px) {
          width: 250.28px;
        }
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
