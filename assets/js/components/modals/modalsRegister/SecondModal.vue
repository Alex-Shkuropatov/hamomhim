<template>

  <div class="contentW second-message">
    <h2 class="title">םינלבק - רתאל המשרה</h2>
    <p class="projectName">תכרעמל המשרה</p>
    <form action="">
      <div class="wrapper">
        <div class="orderWrapper">

          <p class="formItem" >אלמ םש</p>
          <input type="text" placeholder="אלמ םש" v-model="name" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >ליימ</p>
          <div>
            <i class="fas " ref="mail" v-bind:class="[{ 'fa-spin': focusedMail}, focusedMail ? 'fa-sync-alt':icon]"  ></i>
            <input type="text" ref="mail" id="mail"  placeholder="ליימ"  @focus="onFocus" @blur="onBlur" v-model="email" class="inputName">
          </div>

        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >םירוגמ ריע</p>
          <input type="text" placeholder="םירוגמ ריע" v-model="city" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >ןופלט</p>
          <div>
            <i class="fas  "  v-bind:class="[{ 'fa-spin': focusedPhone}, focusedPhone ? 'fa-sync-alt':iconS]" ></i>
            <input type="text" placeholder="ןופלט" id="phone" ref="phone" @focus="onFocus" @blur="onBlur"  v-model="phone" class="inputName">
          </div>
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >קסעה םש</p>
          <input type="text" placeholder="קסעה םש" v-model="company" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >םינופלט יקסע</p>
          <input type="text" placeholder="םינופלט יקסע" v-model="businessPhone" class="inputName">
        </div>

      </div>
      <div class="wrapper">
        <div class="orderWrapper">
          <p class="formItem" >סקפ</p>
          <input type="text" placeholder="סקפ" v-model="fax" class="inputName">
        </div>
        <div class="orderWrapper">
          <p class="formItem" >תבותכ</p>
          <input type="text" placeholder="תבותכ" v-model="adress" class="inputName">
        </div>

      </div>
      <div class="wrapper">
        <div class="selectWrapper">
          <p class="formItem">הדובע רוזיא</p>
          <drop-down class="dropDown" placeholder="הדובע רוזיא" v-model="workArea.value" :items="workArea.items"/>
        </div>
        <div class="selectWrapper">
          <p class="formItem">תוירוגטק</p>
          <drop-down class="dropDown" placeholder="םהמ דחא רחב" v-model="categories.value" :items="categories.items"/>
        </div>
      </div>
      <hr>
      <div class="last-field">
        <div class="orderWrapper">
          <p class="formItem" >(םילמס 6- מ רתוי) המסיס</p>
          <input type="text" placeholder="המסיס" v-model="pass" class="inputName">
        </div>
        <div class="checkbox">
          <input type="checkbox" id="check" value="check" v-model="license">
          <label for="check">שומישה יאנת תא רשאמ ינא</label>
        </div>
      </div>
    </form>

    <div class="buttons-wrapper">
      <button class="closeB" style="text-align:center" @click="send">Send</button>
    </div>

  </div>

</template>

<script>
  import Modal from './../../common/Modal.vue';
  import DropDown from './../../common/DropDown.vue';

  export default {

    methods: {
      close() {
        this.$store.commit('modals/reg/close');
      },
      send() {
        console.log(this.categories.items);
        this.$emit('send', {
          name: this.name ,
          email: this.email ,
          phone: this.phone ,
          business_phone:this.businessPhone,
          name_of_business: this.company,
          fax: this.fax ,
          address: this.adress ,
          city:this.city  ,
          working_area: this.workArea.value,
          password: this.pass,
          password_confirmation: this.pass,
        })
      },
      onFocus(e) {
        console.log(e.target);
        let elem = e.target;
        if(elem.id ==="mail"){
          this.focusedMail = true;
        } else {
          this.focusedPhone = true;
        }
      },
      onBlur(e) {
        let elem = e.target;
        if(elem.id ==="mail"){
          this.focusedMail = false;
          this.icon = this.checkMail();
        } else {
          this.focusedPhone = false;
          this.changeIcon(false);
          this.iconS = this.checkPhone();
        }
      },
      checkMail(){
        let regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let  check = regMail.test(this.email);
        return this.changeIcon(check);
      },
      checkPhone(){
        let regMail = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
       let check = regMail.test(this.phone);
        return this.changeIcon(check);
      },
      changeIcon(value){
        if (value){
          return 'fa-check'
        } else {
          return  'fa-times'
        }
      },
    },
    components: {
      Modal,
      DropDown,
    },
    data : function () {
      return {
        focusedMail: false,
        focusedPhone: false,
        icon: "fa-sync-alt",
        iconS: 'fa-sync-alt',
        modal:2,
        name: '',
        email:'',
        license: '',
        phone: '',
        businessPhone : '',
        fax: '',
        adress: '',
        company: '',
        city: '',
        check: '',
        pass: '',
        categories: {
          items: [
            { label: 'category 1', value: "1" },
            { label: 'category 2', value: "2" },
            { label: 'category 3', value: "3" }
          ],
          value: '',
        },
        workArea: {
          items: [
            { label: 'Work area 1', value: "1" },
            { label: 'Work area 2', value: "2" },
            { label: 'Work area 3', value: "3" }
          ],
          value: '',
        },
        source: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fa-times{
    color: red;
  }
  .fa-check{
    color: green;
  }
  .fa-sync-alt{
    color: #BDBDBD;
  }
  .contentW{
    margin-bottom: 49px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Assistant;
    width: 810px;
    @media screen and (max-width: 700px){

    }
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
      @media screen and (max-width:600px) {
        margin-top: 46px;
        font-size: 31px;
      }
    }
    .projectName{
      text-align: center;
      margin: 0;
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
        @media screen and (max-width: 900px) {
          flex-direction: column;
        }
        .orderWrapper{
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
        .selectWrapper{
          margin: 0px 9px 0 11px;
        }
      }
      hr{

        width: 90%;
        color: #80808030;
        @media screen and (max-width: 900px) {
          margin-top: 20px;
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
    @media screen and (max-width: 900px) {
      height: 41.47px;
    }
    @media screen and (max-width: 480px) {
      width: 300.28px;
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
    }
    .closeB{
      margin-right: 10px;
      background: #E0E0E0;
      border-radius: 50px;
      @media screen and (max-width: 900px) {
        margin: unset;
      }
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
    margin-right: 47px;
    @media screen and (max-width: 900px){
      margin-left: 50px;
      width: 209px;
    }
    label{
      text-decoration: underline;
      color: #333333;
    }
  }
  .last-field{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 727px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    .orderWrapper {
    .formItem{
      margin: 0;
      font-weight: bold;
      font-size: 18px;
      text-align: right;
      color: #333333;
    }
      .inputName{
        padding-right: 20px;
      }
    }
  }

div{
  position: relative;
  .fas {
    position: absolute;
    left: 37px;
    top: 13px;
    z-index: 2;

    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin-right: -26px;
    float: left;
  }

  .fas + input {
    padding-left: 26px;
  }
}
.dropDown{
  @media screen and (max-width: 900px) {
    height: 41.47px;
  }

  @media screen and (max-width: 480px) {
    width: 304px;
  }
}
.dropDown >>> .arr {
  @media screen and (max-width: 480px) {
    right: 267px;
  }
}
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>
