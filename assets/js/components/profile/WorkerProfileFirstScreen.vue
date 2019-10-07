<template>
  <div class="header-info header-n">

    <div class="info-wrapper" v-bind:class="{marginT : getData.role!=='architect'}" >
      <div class="title"> {{user.name}}
        <favourite-icon
        v-bind="favourite"
        v-if="getData.role==='architect'"
        />
      </div>
      <div class="description">
        <span class="bold">םיאבה םיסקדניאב סולפ םיצופישב עיפומ בולואש ןויצ</span>
        <span >.הלק הינב ,םיקינצופיש ,םיצופיש ינלבק</span>
      </div>
      <button class="th-btn th-btn-blue th-btn-lg contact-b"><span>צור קשר </span></button>
    </div>

  </div>
</template>

<script>
  import FavouriteIcon from './../common/FavouriteIcon'
export default {
  props: {
user:{
  type: Object
}
  },
  data (){
    return{
    favourite: {
      is_favourite: 0,
      user_id: 0,
    }
   }
  },
  computed: {
    getData() {
      return this.$store.getters['user/data'];
    }
  },
  mounted() {
    axios.post('/api/getWorkerProfile',{'user_id': this.$route.params.id})
        .then((response)=>{
          console.log(response.data.value);
          this.favourite.is_favourite= response.data.value.user.is_favourite;
          this.favourite.user_id= response.data.value.user.id;
          console.log(this.user);
        }).catch((error)=>{
          console.log(error);
        });
  },
  components: {
    FavouriteIcon
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
  .title{
    font-weight: bold;
    font-size: 64px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin-right: 23px;
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
  @media screen and (max-width: 767px){
    width: 202.89px;
    height: 52.37px;
  }
}
.marginT{
  padding-top: 300px;
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
