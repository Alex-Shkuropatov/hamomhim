<template>
  <div class="page-subhead" :style="styles">
    <div class="head-container">
      <img :src="user.imageProfile===null? '/static/images/profile/defaultAvatar.png': $env.API_URL+user.imageProfile " class="userImage" alt="user-image">
      <div class="head-txt-container">
        <div class="about-info">
          <div class="th-heading title" style="direction: ltr">   {{user.title}} ,רקי ןלבק אבה ךורב</div>
        </div>
      </div>

    </div>
    <div class="nav">
      <ul class="nav-links" >
        <div class="row">
          <router-link :to="{name: 'profile-edit',  }" class=" link "   >ליפורפ ךורע</router-link>
          <hr>
          <router-link :to="{name: 'prefer-worker',  }" class=" link "   > םיפדעומ םידבוע </router-link>
        </div>
        <hr>
        <div class="row">
          <router-link :to="{name: 'closed-projects',  }" class=" link "   > םירוגס םיטקיורפ     </router-link>
          <hr>
          <router-link :to="{name: 'projects',  }" class=" link "   >    םיטקייורפ   </router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
        imageBg : '/static/images/bg-header-projects.png',
        user : {
          title : 'שם משתמש',
          imageProfile: '',
        }
    }
  }
  ,
  computed: {
    styles() {
      return {
        backgroundImage: 'url('+this.imageBg+')',
      }
    },
    getData() {
      return this.$store.getters['user/data'];
    },
  },
  mounted() {
    this.user.title = this.getData.name;
    this.user.imageProfile = this.getData.avatar;
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/header.scss';
  .head-container{
    height: 280px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1605px ){
      margin: 0 auto;
    }
  }
  .about-info{
    margin-bottom: -36px;
    @media screen and (max-width: 600px){
      margin-bottom: 0;
    }
  }
</style>
