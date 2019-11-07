<template>
  <div class="search-cat-wrap">
    <p class="title">אדריכלים מעצבי פנים בואו לקבל הצעות</p>
    <p class="title clr-blue">מבעלי מקצוע בתחום הבנייה?</p>
    <div class="search-cat-form">
      <div class="input-container">

        <v-select class="input"
          placeholder="חיפוש קבלנים"
          :options="getCategories"
          label="name"
          :clearable="false"
          dir="rtl"
          v-model="item.value"
        />

        <button class="search-btn" @click="searchMain">חיפוש</button>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-select/dist/vue-select.css';

  export default {
    data() {
      return {
        item: {
          value: '',
          text: ''
        },
      };
    },
    methods:{
      reset () {
        this.item = {}
      },
      selectFromParentComponent1 () {
        // select option from parent component
        this.item = this.options[0]
      },
      searchMain(){
       if(this.item.value !==''){
         this.$router.push({name: 'search', params: { categoryId: this.item.value.id , subcategories: '[]' }});
       }
      }
    },
    computed:{
      getCategories(){
        if (this.$store.getters['categories/isLoaded']){
          return this.$store.getters['categories/data'];
        } else {
          return [];
        }
      }
    },
    components: {

    }

  }
</script>

<style lang="scss" scoped>

  @import '~@/vars.scss';

  .wrapper-input{
    width: 300px;
    background: white;
  }
  .search-cat-wrap{
    display: flex;
    justify-content: center;
    text-align: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    color: #fff;
    padding: ceil($scale1 * 50px) 0 ceil($scale1 * 40px) 0;
    @media screen and (max-width: 480px){
      padding: 103px 0 79px 0;
    }
    &::v-deep{
      .vs__actions{
        display: none;
      }
    }
  }
  .title{
    font-size: ceil($scale1 * 56px);//50px
    margin-bottom: 0;
    margin-top: 0;
    font-weight: bold;
    line-height: 1;
  }
  .search-cat-form{
    display: flex;
    justify-content: center;
    font-size: ceil($scale1 * 24px);
    margin-top: ceil($scale1 * 25px);
    .input-container{
      border-radius: ceil($scale1 * 50px);
      height: ceil($scale1 * 65px);//56px
      margin-right: auto;
      margin-left: auto;
      display: flex;
    }
    .input{
      margin-left: -17px;
      direction: rtl;
      border: none;
      background: white;
      padding-right: ceil($scale1 * 33px);
      padding-left:0;
      width: ceil($scale1 * 500px);
      border-radius: 0px 40px 40px 0px;
      @media screen and (max-width: 480px){
        width: 235px!important;
      }
      ::v-deep{
        .vs__dropdown-toggle{
          border: none!important;
          margin-top: 3px;
          input{
            color: gray;
            @media screen and (max-width:1340px){
              margin:0;
            }
          }
          .vs__selected{
            margin:0;

          }
        }
        .vs__dropdown-menu {
          margin-left:15px;
          width: 95%;
          border: none;
          border-radius: 10px;
          text-transform: lowercase;
          font-variant: small-caps;
        }
      }
    }
  }

  .search-btn{
    border-radius: 40px 0px 0px 40px;
    z-index: 10;
    height: 100%;
    // background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 10px) rgba(0, 0, 0, 0.25);
    color: #fff;
    font-weight: bold;
    padding-left: ceil($scale1 * 70px);
    padding-right: ceil($scale1 * 40px);
    background: url('/static/images/icons/search.svg') no-repeat ceil($scale1 * 36px) center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    -webkit-background-size: ceil($scale1 * 25px) ceil($scale1 * 25px), cover;
    background-size: ceil($scale1 * 25px) ceil($scale1 * 25px), cover;
  }

  @media(max-width: $breakpoint2){
    .search-cat-wrap{
      padding: ceil($scale2 * 50px) 0 ceil($scale2 * 60px) 0;
    }
    .title{
      font-size: ceil($scale2 * 56px);
    }
    .search-cat-form{
      font-size: ceil($scale2 * 24px);
      margin-top: ceil($scale2 * 25px);
      .input-container{
        height: ceil($scale2 * 65px);
      }
      .input{
        padding-right: ceil($scale2 * 33px);
        width: ceil($scale2 * 500px);
      }
    }
    .search-btn{
      padding-left: ceil($scale2 * 70px);
      padding-right: ceil($scale2 * 40px);
      background: url('/static/images/icons/search.svg') no-repeat ceil($scale2 * 45px) center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      -webkit-background-size: ceil($scale2 * 25px) ceil($scale2 * 25px), cover;
      background-size: ceil($scale2 * 25px) ceil($scale2 * 25px), cover;
    }
  }

  @media(max-width: $breakpoint5){
    .title,
    .search-cat-form{
      max-width: 80%;
      margin-right: auto;
      margin-left: auto;
    }
    .title{
      font-size: ceil($scale4 * 56px);
    }
    .search-cat-form{
      margin-top: ceil($scale3 * 25px);
      .input-container{
        border-radius: ceil($scale3 * 50px);
        height: ceil($scale2 * 65px);
      }
    }
    .search-btn{
      //padding-left: 15px;
      padding-right: 10px;
      padding-left: 30px;
      background: url("/static/images/icons/search.svg") no-repeat 12px center, linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
      background-size: 16px 16px, cover;
    }
    .search-cat-wrap{
      padding: 50px 0 30px 0;
    }
  }



</style>
