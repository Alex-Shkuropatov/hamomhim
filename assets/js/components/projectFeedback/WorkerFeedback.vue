<template>
  <div class="worker-item"   >

    <div class="img-wrapper">
      <img class="profileImg" :src="avatar===null? '/static/images/profile/defaultAvatar.png': $env.API_URL+avatar "  alt="">
    </div>
    <div class="title">
      {{name}}
    </div>
    <div class="desciption">
      ציון שאולוב מופיע בשיפוצים פלוס באינדקסים הבאים
    </div>
    <div class="under-text">
 <span
         v-for="subcategory in subcategories"
         :key="subcategory.id"
 >, {{subcategory.name}}</span>
    </div>
    <button class="th-btn th-btn-blue th-btn-lg feedback" @click="getWorkerId">Leave feedback</button>
  </div>

</template>

<script>

  export default {
    data(){
      return{

      }
    },
    props: {
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      id: {
        type: Number,
      },
      subcategories:{
        type: Array,
      }

    },
    mounted() {

    },
    methods:{
      getWorkerId(){
        this.$emit('getWorker',{
          id: this.id,
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.worker-item{
  margin: 5px;
  width: 247px;
  height: 302px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-weight: 800;
    font-size: 20px;
    text-align: right;
    color: #2871D7;
  }
  .feedback{
    height: 43px;
    padding-right: 35px;
    padding-left: 35px;
    font-weight: bold;
    font-size: 18px;
    margin-top: auto;
    margin-bottom: 20px;
  }
}
.profileImg {
  margin-top: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.desciption{
  text-align: center;
  font-weight: 900;
  width: 90%;
}
.under-text{
  line-height: 17px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
}
.view-profile{

  width: 100px;
  height: 25px;

  font-weight: bold;
  font-size: 14px;

  text-align: center;
  padding-right: 31px;
}
</style>
