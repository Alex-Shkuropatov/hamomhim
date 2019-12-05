<template>
  <transition name="slide-fade">
  <modal v-if="$store.getters['modals/newProject/isOpened']" @close="closeB"  >

    <div class="content-wrapper first-message">
      <h2 class="title">הוספת פרויקט חדש</h2>
      <p class="projectName">  הזן פרטי פרויקט</p>
      <form action="">
        <input
                :class="{ 'error': $v.name.$error, 'inputName': true }"
                placeholder=" שם פרויקט"
                v-model.trim="name"
                type="text"
                @input="$v.name.$touch()"
        >
        <div class="error-wrapper" v-if="$v.name.$dirty">
          <p class="error-message" v-if="!$v.name.required">
            נא הזן שם פרויקט
          </p>
          <p class="error-message" v-else-if="!$v.name.minLength">
            Project name must contain more than 2 symbols
          </p>
        </div>
        <textarea
                :class="{ 'error': $v.description.$error, 'inputName': true }"
                class="description"
                name="description"
                v-model.trim="description"
                placeholder="תיאור"
                @input="$v.description.$touch()"
        ></textarea>
        <div class="error-wrapper" v-if="$v.description.$dirty">
          <p class="error-message" v-if="!$v.description.required">
            נא הזן תיאור פרויקט
          </p>
          <p class="error-message" v-else-if="!$v.description.minLength">
            התיאור חייב להכיל לפחות 6 מילים
          </p>
          <p class="error-message" v-else-if="!$v.description.maxLength">
            התיאור חייב להכיל פחות מ 150 מילים
          </p>
        </div>
      </form>
      <div class="buttons-wrapper">
        <button class="closeB" style="text-align:center" @click='closeB' >ביטול</button>
        <button class="saveB" style="text-align:center"   @click='send' > לשלב הבא</button>
      </div>
    </div>

  </modal>
  </transition>
</template>

<script>
  import Modal from './../common/Modal.vue';
  import { required, minLength, maxLength } from "vuelidate/lib/validators";

  export default {
    methods: {
      closeB() {
        this.$store.commit('modals/newProject/close');
      },
      send () {
        this.$v.name.$touch();
        this.$v.description.$touch();

        if(!this.$v.$invalid) {
          this.$store.commit('modals/newProject/close');
          let user = this.getData;
          let data = {
            name: this.name,
            description: this.description,
          };
          axios.post('/api/addNewProject', data)
              .then((response) => {
                console.log(response);
                this.$router.push({name: 'new-order', params: {id: response.data.value}})
              })
              .catch((error) => {
                console.log(error.response.data);
              });
        }
      },
    },
    validations: {
        name:{
          required,
          minLength: minLength(2),
        },
      description:{
        required,
        minLength: minLength(6),
        maxLength: maxLength(150),
      },
    },
    computed: {
      getData() {
        return this.$store.getters['user/data'];
      },
    },
    components: {
      Modal,
    },
    data: function () {
      return {
        name : '',
        description: '',
      }
    } ,

  }
</script>

<style  lang="scss" scoped>
  .content-wrapper{
    margin-bottom: 49px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Assistant;
    .title{
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #333333;
    }
    .projectName{
      margin: 0;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #828282;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;

    }
  }
  .first-message{
    width: 600px;
    font-style: normal;
    line-height: 40px;
    letter-spacing: -0.02em;
    @media screen and (max-width: 950px) {
      width: 400px;
    }
    @media screen and (max-width: 480px) {
      width: 310px;
    }
    .title{

      font-weight: bold;
      font-size: 36px;
      text-align: center;
      color: #333333;
      margin: 0;
      margin-top: 20px;
      @media screen and (max-width: 950px) {
        font-size: 30px;
      }
      @media screen and (max-width: 480px) {
       margin-top: 50px;
      }
    }
    .projectName{
      font-weight: normal;
      font-size: 24px;
      text-align: center;
      color: #828282;
      margin: 0;
      margin-top: 5px;
      @media screen and (max-width: 950px) {
        font-size: 20px;
      }
    }
    form {
      input{
        padding-right: 15px;
        margin-top: 10px;
        width: 350.28px;
        height: 46.47px;
        background: #FFFFFF;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        @media screen and (max-width: 950px) {
          width: 300px;
          height: 40px;
        }
        @media screen and (max-width: 480px) {
          width: 280px;
          height: 35px;
        }
      }
      textarea{
        padding: 10px 20px 0 0;
        margin-top: 15px;
        background: #FFFFFF;
        resize: none;
        opacity: 0.5;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        width: 350px;
        height: 250px;
        @media screen and (max-width: 950px) {
          width: 300px;
          height: 120px;
        }
        @media screen and (max-width: 480px) {
          width: 280px;
        }
      }
    }
    .buttons-wrapper{
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      button{
        color: white;
        width: 250px;
        height: 50px;
        &:hover  {
          color:black;
        }
        @media screen and (max-width: 950px) {
          width: 140px;
          height: 40px;
        }
      }
      .closeB{
        margin-left: 10px;
        background: #E0E0E0;
        border-radius: 50px;
      }
      .saveB{
        margin-right: 10px;
        background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
        border-radius: 50px;
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
