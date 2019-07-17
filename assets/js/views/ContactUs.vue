<template>
<div class="contact">
<div class="formWrapper">
  <form action="" id="contactForm">
    <h2 class="title">צור קשר</h2>
    <div class="textWrapper">
      <div class="row">
        <input type="text" placeholder="" >
        <input type="text" placeholder="  מייל">
      </div>
      <div class="row">
        <input type="text" placeholder="  איזור">
        <input type="text" placeholder="  מספר נייד">
      </div>
      <textarea name="msg" id="" cols="30" placeholder="     הודעה חופשית" rows="10"></textarea>
    </div>
    <input type="button" value="  שליחת הודעה">
  </form>
</div>
  <div class="mapW">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.2244956489853!2d-99.15884129732498!3d19.436199370379086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cdc19e3477%3A0xe98bef6360302321!2sUVM+Campus+San+Rafael!5e0!3m2!1sru!2sua!4v1563356851952!5m2!1sru!2sua" width="100%" height="529px" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @mixin placeholder {
    &::-webkit-input-placeholder {@content}
    &:-moz-placeholder           {@content}
    &::-moz-placeholder          {@content}
    &:-ms-input-placeholder      {@content}
  }

.formWrapper{
  background: url("/static/images/aboutUs/team.png");
  background-position: left -87px ;
  background-size: cover;
  background-repeat: no-repeat;
  height:  746px;
  #contactForm{
    padding: 15px 195px 43px 0;
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
    }
    input[type="text"]{
      margin-top: 19px;
      background: #FFFFFF;
      opacity: 0.5;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 490px;
      height: 65px;
      padding: 25px;

    }
    textarea{
      margin-top: 19px;
      background: #FFFFFF;
      opacity: 0.5;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      width: 1007px;
      height: 280px;
    }
    input[type="button"]{
      margin-top: 19px;
      background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      border-radius: 50px;
      width: 355px;
      height: 70px;
      border: none;
    }
  }
}
.textWrapper{

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
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
</style>
