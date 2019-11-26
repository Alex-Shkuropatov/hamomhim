<template>
  <div class="header-info header-n">

    <div class="info-wrapper" v-bind:class="{marginT : getData.role!=='architect'}" >
      <div class="title" v-bind:class="{marginL : getData.role==='architect'}"  > {{user.name_of_business}}
        <favourite-icon
        v-bind="favourite"
        v-if="getData.role==='architect'"
        @input="$emit('update:is_favourite')"
        />
      </div>
      <div class="description">
        <span class="bold">{{user.name_of_business}} מופיע בשיפוצים פלוס באינדקסים הבאים</span>
        <span><span
          v-for="subcategory in subcategories"
          :key="subcategory.id"
          >, {{subcategory.name}}</span>.</span>
        </div>
        <a href="#resume"  class="th-btn th-btn-blue th-btn-lg contact-b"><span>צור קשר </span></a>
      </div>
    <button class="back-b" @click="back"><i class="fas fa-chevron-right"></i>  חזור</button>
    </div>
  </template>

  <script>
  import FavouriteIcon from './../common/FavouriteIcon'
  export default {
    props: {
      user:{
        type: Object
      },
      subcategories:{
        type: Array,
      },
      favourite: {
        type: Object,
        default: function(){
          return {
            is_favourite: false,
            user_id: 0,
          }
        }
      }
    },
    computed: {
      getData() {
        return this.$store.getters['user/data'];
      }
    },
    components: {
      FavouriteIcon
    },
    methods: {
        back(){
          this.$router.go(-1);
        }
    }
  }
  </script>

  <style lang="scss" scoped>
  .info-wrapper{
    margin: 0 auto;
    padding-top: 215px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 767px){
      width: 300px;
    }
    .marginL{
      margin-right: 23px;
    }
    .title{
      font-weight: bold;
      font-size: 64px;
      line-height: 55px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      @media screen and (max-width: 767px){
        font-size: 50px;
      }
      @media screen and (max-width: 480px) {
        font-size: 32px;
      }
    }
    .description{
      margin-top: 20px;
      text-align: center;
      font-size: 24px;
      line-height: 30px;
      color: #FFFFFF;
      @media screen and (max-width: 767px){
        font-size: 20px;
      }
      .bold{
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 10px;
        @media screen and (max-width: 767px){
          font-size: 20px;
        }
      }
    }
  }
.back-b{
  color: #FFFFFF;
  display: block;
  margin: 0 auto;
  margin-top:10px;
  font-weight: bold;
  font-size: 24px;
}
.contact-b{
  margin-top: 20px ;
  font-weight: bold;
  font-size: 24px;
  width: 257.89px;
  height: 76.37px ;
  background: #30588E;
  border: 2px solid #30588E;
  border-radius: 50px;
  padding: 0px;
  display: inline-block;
  text-align: center;
  span{
    display: inline-block;
    margin-top: 19px;
    @media screen and (max-width:767px){
      margin-top: 8px;
    }
  }
  @media screen and (max-width: 767px){
    width: 202.89px;
    height: 52.37px;
  }
}
  .marginT{
    padding-top: 300px;
    @media screen and (max-width: 600px){
      padding-top: 220px;
    }
  }
  .header-n {
    background-image: url('/static/images/profile/header-image.png');
    height: 814px;
    width: 100%;
    -ms-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 767px) {
      height: 680px;
    }
    @media screen and (max-width: 600px) {
      height: 600px;
    }
  }
  </style>
