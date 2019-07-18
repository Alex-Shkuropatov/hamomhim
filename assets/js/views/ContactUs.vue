<template>
<div class="contact">
<div class="formWrapper" v-bind:class="{'setH': isHidden}">
  <form action="" id="contactForm" v-bind:class="{'hide': isHidden}">
    <h2 class="title">רשק רוצ</h2>
    <div class="textWrapper">
      <div class="row">
        <input type="text" v-model.trim="name" placeholder="" class="marge">
        <input type="text" v-model.trim="mail"  placeholder="ליימ" >
      </div>
      <div class="row">

        <input type="text" v-model.trim="phone" placeholder="דיינ רפסמ" class="marge">
        <input type="text" v-model.trim="area" placeholder="רוזיא">
      </div>
      <textarea name="msg" v-model.trim="message" id="" cols="30" placeholder="תישפוח העדוה" rows="10"></textarea>
    </div>

    <button class="th-btn th-btn-blue th-btn-sm" v-on:click="sendDate">העדוה תחילש </button>
  </form>


  <div class="notification" v-bind:class="{'show': isHidden}"><img src="/static/images/aboutUs/sendM.svg" alt=""> <div class="msg">תודה על ההודעה שלך!</div></div>
</div>

  <div class="mapW">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.2244956489853!2d-99.15884129732498!3d19.436199370379086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cdc19e3477%3A0xe98bef6360302321!2sUVM+Campus+San+Rafael!5e0!3m2!1sru!2sua!4v1563356851952!5m2!1sru!2sua" width="100%" height="529px" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      mail: '',
      area: '',
      phone: '',
      message: '',
      isHidden: false
    }
  },
  methods: {
    sendDate: function (e) {
      e.preventDefault();
      this.isHidden = !this.isHidden;
      let dateArr = [this.name, this.mail, this.area, this.phone, this.message];
      console.log(dateArr);
      dateArr.forEach((field) => {
        this.validate(field);
      });

    },
    validate: function (field) {
      if (field!==""){
        console.log('nice');
      } else {
        console.log('bad');
      }
    }
  }

}
</script>

<style lang="scss" scoped>



.formWrapper{
  background: url("/static/images/aboutUs/team.png");
  background-position: left -87px ;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:  746px;

  @media screen and (max-width: 1919px){
    background-position: left 0;
  }
  @media screen and (min-width: 1950px){
    height: auto;
  }
  @media screen and (max-width: 1440px){
    height: auto;

  }
  #contactForm{


    .title{
      margin: 0;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 65px;
      text-align: right;
      color: #FFFFFF;
      padding-top: 20px;
      @media screen and (max-width: 1440px){
        text-align: center;
      }
    }
    .textWrapper{
     @media screen and (max-width: 600px) {
       width: 100%;
     }
    input[type="text"]{

      margin-top: 19px;
      background: rgba( 255,255,255, 0.5);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      border: none;
      width: 490px;
      height: 65px;
      padding: 25px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 65px;
      &:focus {
        opacity: 1;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
      }
      &::placeholder{
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 65px;
        text-align: right;
        color: #FFFFFF;
      }

      @media screen and (max-width: 600px){
        width: 90%;
      }
    }
    textarea{
      margin-top: 19px;
      background: rgba( 255,255,255, 0.5);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 1007px;
      height: 280px;
      padding: 20px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 65px;
      &:focus {
        opacity: 1;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
      }
      &::placeholder{
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;

        text-align: right;
        color: #FFFFFF;
      }
      @media screen and (max-width: 1440px){
        width: 600px;
      }
      @media screen and (max-width: 600px){
        width: 100%;
      }
    }
    }
    button{
      margin-top: 19px;
      width: 355px;
      height: 78px;
      padding: 0px;
      padding-right: 105px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      text-align: center;
      color: #FFFFFF;
      @media screen and (max-width: 600px){
        width: 300px;
        height: 63px;
        padding-right: 86px;
      }
      &:hover {
        color: black;
    }
    }
  }

}

.textWrapper{

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1440px){
      flex-direction: column;

    }
  }
  .marge{
    margin-left: 26px;
    @media screen and (max-width: 1440px){
        margin-left: 0;
    }
  }

}
  .mapW{
    width: 100%;
    height: 529px;

  }
button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
.setH{

}
#contactForm {
  padding: 15px 195px 43px 0;
  @media screen and (max-width: 1919px) {
    padding: 15px 70px 43px 0;
  }
  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 25px 43px 25px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
}
.hide{

   display: none;
  @media screen and (max-width: 1440px) {
    display: none;
  }

}
.notification{
  display: none;

}

.show{
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  z-index: 10;
  color: white;
  top: 53%;
  right: 24%;
  .msg{
    margin-left: 140px;
  }
}
</style>
