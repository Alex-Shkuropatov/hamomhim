<template>

  <div class="content-wrapper second-message">
    <h2 class="title">םינלבק - רתאל המשרה</h2>
    <p class="projectName">תכרעמל המשרה</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="selectWrapper">
          <p class="formItem">Work area</p>
          <drop-down placeholder="Work area" v-model="categories.value" :items="categories.items"/>
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="selectWrapper">
          <p class="formItem">Work area</p>
          <drop-down placeholder="Work area" v-model="categories.value" :items="categories.items"/>
        </div>

      </div>
      <hr>
      <div class="last-field">
        <div class="orderWrapper">
          <p class="formItem" >Name of the order</p>
          <input type="text" placeholder="Name of order" v-model="name" class="inputName">
        </div>
        <div class="checkbox">
          <input type="checkbox" id="jack" value="Джек" v-model="license">
          <label for="jack">שומישה יאנת תא רשאמ ינא</label>
        </div>
      </div>
    </form>

    <div class="buttons-wrapper">
      <button class="saveB" style="text-align:center" @click='send' >Next step</button>
      <div class="modalNumber">{{modalQuantity}}/{{modal}}</div>
      <button class="closeB" style="text-align:center" @click='back' >Previous step</button>
    </div>

  </div>

</template>

<script>
  import Modal from './../../Modal.vue';
  import DropDown from './../../DropDown.vue'
  import Multiselect from 'vue-multiselect'

  export default {
    methods: {
      close() {
        this.$store.commit('modals/reg/close');
      },
      back () {
        this.$emit('back', {
          modal : 0,
        })
      },
      send () {
        let counter = this.categories.value;
        console.log(this.categories.items);
        this.$emit('send', {
          value : this.categories.items[counter-1]['label'],
          modal : this.modal,
          image: this.source,
          name : this.name,
          description: this.description,
        })
      },
      previewFiles(event) {
        let file = event.target.files;
        console.log(event.target.files);
        this.createImage(file[0]);
      },
      createImage(file) {
        let image = new Image();
        let reader = new FileReader();
        let vm = this;

        reader.onload = (e) => {
          vm.source = e.target.result;
        };
        reader.readAsDataURL(file);
      },

    },
    components: {
      Modal,
      DropDown,
      Multiselect
    },
    props:  {
      modalQuantity : {
        type: Number,
        required: true
      }
    },
    data : function () {
      return {
        modal:2,
        name: '',
        description: '',
        license: '',
        categories: {
          items: [
            { label: 'Work area 1', value: 1 },
            { label: 'Work area 2', value: 2 },
            { label: 'Work area 3', value: 3 }
          ],
          value: '',
        },
        source: '',

      }
    }
  }
</script>

<style lang="scss" scoped>
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
    p{
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

  .second-message{
    form{
      .wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 11px 30px 0 30px;
        div{
          margin: 0 10px 0 10px;
          p{
            margin: 0;
            margin-right: 20px;
            font-family: Assistant;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            align-items: center;
            text-align: right;
            color: #333333;
          }
          .inputName{
            padding-right: 20px;
          }
        }
      }
    }
  }
  .textareaWrapper{
    p{
      margin: 0;
      margin-right: 20px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #333333;
    }
    textarea{
      padding: 10px 25px 0 0;
      resize: none;
      background: #FFFFFF;
      opacity: 0.5;
      border: 1px solid #BDBDBD;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 724px;
      height: 250px;
    }
  }
  .formItem{
    margin: 0;
    margin-right: 30px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #333333;
  }
  .inputName{
    width: 350.28px;
    height: 46.47px;
    background: #FFFFFF;
    opacity: 0.5;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
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
  .checkbox{
    display: flex;
    align-items: center;
    margin-top: 41px;
    width: 230px;
    justify-content: space-between;
    label{
      text-decoration: underline;
    }
  }
  .last-field{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>