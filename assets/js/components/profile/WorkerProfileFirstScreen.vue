<template>
  <div class="header-info header-n">

    <div class="info-wrapper h-container" v-bind:class="{marginT : getData.role!=='architect'}" :style="checkRoute? '' :'padding-top:200px!important' " >
      <ul v-if="checkRoute" class="worker-profile-nav">
        <li><button @click="getBlock('gallery')"  >פרוייקטים אחרונים</button ></li>
        <li><button @click="getBlock('feedback')" > חוות דעת</button></li>
        <li><button @click="getBlock('download')" >מסמכים</button></li>

      </ul>
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
        <button
        v-if="$store.getters['user/isLogged']"
        class="th-btn th-btn-blue th-btn-lg contact-b"
        @click="showPhone">
          <span>{{phoneFlag ? user.phone : 'צור קשר '  }}</span>
        </button>
       </div>

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
      },
      checkRoute(){
        if (this.$router.currentRoute.name === 'profile-edit'){
          return false;
        } else {
          return true;
        }
      },
    },
    components: {
      FavouriteIcon
    },
    mounted(){
      console.log();
    },
    methods: {
        back(){
          this.$router.go(-1);
        },
      showPhone(){
        if(this.$store.getters['user/isLogged']){
          this.phoneFlag=!this.phoneFlag;
        }
      },
      getBlock(str){
        this.$emit('anchor', str);
      },
    },
    data(){
      return{
        phoneFlag : false,
      }
    },
  }
  </script>

  <style lang="scss" scoped>
  .worker-profile-nav{
    display: flex;
    width: 100%;
    margin-bottom: 80px;
    li{
      margin: 0 15px;
    }
    button{
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }
    @media screen and (max-width:1035px ) {
      align-items: center;
      justify-content: center;

    }
    @media screen and (max-width: 767px ) {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
  .info-wrapper{
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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
      text-align: center;
      color: #FFFFFF;
      @media screen and (max-width: 767px){
        font-size: 35px;
      }
      @media screen and (max-width: 600px) {
        font-size: 30px;
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
  width: 180.89px;
  height: 52.37px ;
  background: #2F80ED;
  border: 2px solid #2F80ED;
  border-radius: 50px;
  padding: 0px;
  display: inline-block;
  text-align: center;
  span{
    display: inline-block;
    @media screen and (max-width:767px){
    }
  }
  @media screen and (max-width: 767px){
    width: 202.89px;
    height: 52.37px;
  }
}
  .marginT{
    padding-top: 130px;
    @media screen and (max-width: 600px){
      padding-top: 60px;
    }
  }
  .header-n {
    background-image: url('/static/images/profile/header-image.png');
    height: 550px;
    width: 100%;
    -ms-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 767px) {
      height: 550px;
    }
    @media screen and (max-width: 600px) {
      height: 550px;
    }
  }
  </style>
