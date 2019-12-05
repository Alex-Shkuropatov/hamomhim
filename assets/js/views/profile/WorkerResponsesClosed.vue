<template>
  <div class="h-container responses-list">
    <div class="empty" v-if="!flag">

    </div>

    <div class="wrap"  v-if="flag">

    <template v-if="responses.length">
      <show-response
        :data="currentResponse"
      ></show-response>

      <div class="response-item" v-for="response in responses">
        <div class="response-inner">
          <div class="text-col">
            <div class="title">{{response.order.category.name}}</div>
            <div class="subcats">
              <span v-for="subcategory in response.order.subcategories">
                {{subcategory.name}}
              </span>
            </div>
            <hr class="th-divider">
            <div class="customer-info">
              <div class="item">
                <span class="caption clr-black">שם</span>
                <span class="clr-blue">{{response.order.architect_name}}</span>
              </div>
              <div class="item">
                <span class="caption clr-black">טלפון</span>
                <span class="clr-blue">{{response.order.architect_phone}}</span>
              </div>
            </div>
            <div class="description">{{response.order.description}}</div>
            <button class="th-btn th-btn-blue th-btn-md" @click="openResponse(response)">צפה בתגובה שלך</button>
          </div>
          <div class="img-col"
               :style="[ response.order.thumbnail != null ?
               {backgroundImage: 'url(' + $env.API_URL +  ( response.order.thumbnail) + ')'} :
               {backgroundImage: 'url(/static/images/projects/addImg.png)'} ]">
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h2 class="notify_msg text-center">אין לך פרויקטים סגורים. <i class="far fa-copy ml-1 mr-1"></i></h2>
    </template>
    </div>
  </div>
</template>

<script>
  import ShowResponse from './../../components/modals/responses/ShowResponse';

  export default {
  data(){
    return {
      responses: [],
      currentResponse : [],
      flag: false,
    };
  },
    components:{
    ShowResponse,
    },
  methods: {
    getItemsFromApi(){
      axios.post('/api/getAllResponses', { page: 0, take: 10, status: 'closed'})
        .then(response => {
          this.flag = true;
          if(response.data.success){
            this.responses = response.data.value.records;
          }
          else{
            alert(response.data.message);
          }
        })
    },
    openResponse(response){
      this.currentResponse = response;
      this.$store.commit('modals/showResponse/open');
    }
  },
  mounted(){
    this.getItemsFromApi();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.responses-list{
}
.response-inner{
  display: flex;
}
.response-item{
  border: 2px solid #80808045;
  flex-grow: 1;
  margin: ceil($scale1 * 20px) ceil($scale1 * 45px);
  background: #FFFFFF;
  box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.15);
  padding: ceil($scale1 * 40px) ceil($scale1 * 72px) ceil($scale1 * 50px) ceil($scale1 * 50px);
  color: $clr-gray;
  .text-col{
    width: 55%;
    margin-left: ceil($scale1 * 45px);
  }
  .phone{
    font-size: ceil($scale1 * 24px);
    color: #4F4F4F;
  }
  .title{
    color: #000;
    font-weight: bold;
    font-size: ceil($scale1 * 36px);
    line-height: 1.1;
  }
  .desc{
    font-size: 18px;
    line-height: 1.25;
  }
  .img-col,
  .mob-img{
    // height: 100%;
    height: ceil($scale1 * 245px);
    flex-grow: 1;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    border-radius: 5px;
  }
}

@media (max-width: $breakpoint3){
  .response-item{
    margin: 15px 0;
    padding: 20px;
  }
  .response-inner{
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    .img-col{
      width: 100%;
    }
    .text-col{
      width: 100%;
      margin-left: 0;
    }
    .title{
      font-size: 22px;
    }
    .phone{
      font-size: 18px;
    }
  }
}

@media (max-width: $breakpoint5){

}


</style>
