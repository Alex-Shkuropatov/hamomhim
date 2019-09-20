<template>

<div class="contact">

<div class="formWrapper" v-bind:class="{'setH': isHidden}">

  <form action="" @submit="sendDate" id="contactForm" v-show="isShowed" >
    <h2 class="title">צור קשר</h2>
    <div class="textWrapper">
      <div class="row">
        <div class="input-wrapper">
        <input type="text"
                v-model.trim.lazy="name"
               placeholder="שם מלא"
               class="marge inputField"
               required
         >
      </div>
        <div class="input-wrapper">
        <input type="email"
               v-model.trim.lazy="mail"
               class="inputField"
               placeholder="מייל"
               required
         >
        </div>
      </div>
      <div class="row">
        <div class="input-wrapper">
        <input type="tel"
                v-model.trim="phone"
               placeholder="מספר נייד"
               pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
               class="marge inputField"
               required
         >
        </div>
        <div class="input-wrapper">
        <input type="text"
               v-model.trim="area"
               class="inputField"
               placeholder="איזור"
               required
        >
        </div>
      </div>
      <div class="input-wrapper">
        <input type="text"
               class="inputField"
               id="title-input"
               v-model.trim="title"
               placeholder="איזור"
               required
               minlength="6"
        >
      </div>

      <textarea class="txt"
                name="msg"
                v-model.trim="message"
                id=""
                cols="30"
                placeholder="הודעה חופשית"
                rows="10"
                required
                minlength="10"

      ></textarea>
    </div>

    <button class="th-btn th-btn-blue th-btn-sm" type="submit"   >שליחת הודעה</button>
  </form>


  <div class="notification" v-bind:class="{'show': isHidden}"><img src="/static/images/aboutUs/sendM.svg" alt=""> <div class="msg">!ךלש העדוהה לע הדות</div></div>
</div>

  <div class="mapW">
    <iframe class="medium" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.611208800642!2d34.79760701516447!3d32.07976288118821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bbc285cb811%3A0x8a630c87a0d074b0!2zQXJpZWwgU2hhcm9uIDQsIEdpdidhdGF5aW0sINCY0LfRgNCw0LjQu9GM!5e0!3m2!1sru!2sua!4v1565879212203!5m2!1sru!2sua" width="100%" height="529px" frameborder="0" style="border:0" allowfullscreen></iframe>
    <img src="/static/images/how-it-works/mapCrop.png" class="googleMap" alt="map">
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
      title: '',
      message: '',
      isHidden: false,
      isShowed : true,
    }
  },
  methods: {
    sendDate: function (e) {
      e.preventDefault();
        let dateArr = {name: this.name, email: this.mail, region: this.area, phone: this.phone, message: this.message, title: this.title};
       axios.post('/api/sendContactForm', dateArr)
           .then((response)=>{
             console.log(response);
           }).catch((error)=>{
             console.log(error);
          });
        this.isHidden = !this.isHidden;
        this.isShowed = !this.isShowed;

    },

  }
}
</script>

<style lang="scss" scoped>
  input:invalid {
    border: 2px dashed red;
  }

  input:valid {
    border: 2px solid black;
  }
  @keyframes hiding {
    0% {
       opacity: 1;
    }
    30% {
       opacity: 1;
    }
    60% {
      opacity: 0.8;
    }
    75%{
      opacity: 0.6;
    }
    80%{
      opacity: 0.4;
    }
    90%{
      opacity: 0.2;
    }
    100% {
       opacity: 0;
    }
  }
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
      @media screen and (max-width: 1605px){
        padding-top: 40px;
        font-size: 40px;
      }
      @media screen and (max-width: 1440px){
        text-align: center;
      }
    }
    .textWrapper{
     @media screen and (max-width: 600px) {
       width: 100%;
     }
    .inputField{

      margin-top: 25px;
      background: rgba( 255,255,255, 0.5);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      border: none;
      width: 490px;
      height: auto;
      padding: 4px 22px 22px 0px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 27px;
      @media screen and (max-width: 1605px){
        font-size: 20px;
      }
      &:focus {
        opacity: 1;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
      }
      &::placeholder{
        font-weight: bold;
        font-size: 24px;
        line-height: 65px;
        text-align: right;
        color: #FFFFFF;
        @media screen and (max-width: 1605px){
          font-size: 20px;
        }
      }
      @media screen and (max-width: 1605px){
        width: 350px;
      }
      @media screen and (max-width: 1440px){
        width: 565px;
      }
      @media screen and (max-width: 620px){
      width: 350px;
    }
      @media screen and (max-width: 400px){
        width: 100%;
      }
      @media screen and (max-width: 600px){
        background: rgba( 71,74,81, 0.4);
      }
    }

    .txt{
      margin-top: 19px;
      background: rgba( 255,255,255, 0.5);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 1007px;
      height: 280px;
      padding-right: 20px;
      font-family: Assistant;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 65px;
      @media screen and (max-width: 1605px){
        font-size: 20px;
      }
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
        @media screen and (max-width: 1605px){
          font-size: 20px;
        }
      }
      @media screen and (max-width: 1605px){
      width: 730px;
      height: 200px;
    }
      @media screen and (max-width: 1440px){
        width: 600px;
      }
      @media screen and (max-width: 600px){
        width: 100%;
        background: rgba( 71,74,81, 0.4);
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
      @media screen and (max-width: 1605px){
        width: 300px;
        height: 63px;
        padding-right: 86px;
      }

      &:hover {
        color: #2970D5;
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
    max-height: 529px;
    iframe{
      @media screen and (max-width: 480px){
        display: none;
      }
    }

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
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
  top: 53%;
  width: 628px;
  right: 24%;
  animation: hiding 3s forwards ;
  .msg{
    width: 300px;
    @media screen and (max-width: 1440px) {

    }
  }
  @media screen and (max-width: 1440px) {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    background:   rgb(220,220,220, 1);
    width: 566px;
    height: 72px;
  }
  @media screen and (max-width: 480px){
    width: 270px;
  }
}
  .googleMap{
    display: none;
    @media screen and (max-width: 480px){
      display: block;
      object-fit: cover;
    }
  }
  .input-wrapper{
    position: relative;
  }
  #title-input{
    width: 1000px!important;
    @media screen and (max-width: 1605px){
      width: 730px!important;
    }
      @media screen and (max-width: 1440px){
      width: 565px!important;
    }
    @media screen and (max-width: 620px){
      width: 350px!important;
    }
    @media screen and (max-width: 400px){
      width:100%!important;
    }
  }
</style>
