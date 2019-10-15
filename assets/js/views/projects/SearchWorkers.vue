<template>
  <div class="workers-wrapper">

    <div class="workers-list">
      <div class="title">
        <h1 class="title-t">הוסף קבלן חדש</h1>
        <div class="btn-wrapper">
          <button class="back-b" @click="back"><i class="fas fa-chevron-right"></i>חזור</button>
        </div>
      </div>

      <div class="empty" v-if="!done">

      </div>

      <div class="projects-list-wrap l-container" v-show="done" >
        <div class="workers-list"  v-show="workers.length!==0 ">
          <Worker
                  @add="addWorker"
                  class="worker-item"
                  v-for="worker in workers" :key="worker.id"
                  v-bind="worker">
          </Worker>
        </div>
        <div class="empty-s" v-show="workers.length===0  ">
          <h3 >  לא נמצאו קבלנים רלוונטים עבור פרויקט זה <i class="fas fa-user-times"></i>  </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Worker from '../../components/Worker';
  import DropDown from '../../components/common/DropDown';

  export default {
    data() {
      return {
        workers: [{}],
        formData : new FormData(),
        done: false,
      };
    },
    props: {
      order: {
        type: Object,
      }
    },
    components: {
      Worker,
      DropDown
    },
    methods: {
      addWorker(data){
        let index;
     for (let i=0; i<this.workers.length; i++){
       if ( this.workers[i].id === data.id){
         index = i;
       }
     }
     this.workers.splice(index,1);
      },
      back() {
        this.$router.push({name: 'orders'});
      },
      search(){
        this.$store.dispatch('orders/updateData', {'project_id': this.$route.params.id}).then(() => {
          let orderData = this.$store.getters['orders/getOrderById'](parseInt(this.$route.params.orderId));

          axios.post('/api/getOrderWorkers', {'order_id':this.$route.params.orderId}
          ).then((response)=>{

            this.formData.append('category_id',  orderData.categoryId);

            if (orderData.work_area !== ''){
              this.formData.append('working_area',  orderData.work_area);
            }

            if(orderData.subcategories.length !== 0){
              for (let i=0; i<orderData.subcategories.length;i++){
                if(orderData.subcategories[i]!==null){
                  this.formData.append('subcategories[]',  orderData.subcategories[i].id);
                }
              }
            }
            response.data.value.workers.forEach((worker)=>{
              this.formData.append('exclude[]',  worker.id);
            });
            return axios.post('/api/searchWorkers', this.formData)
                .then((response) => {
                  this.workers = Object.values(response.data.value);
                  this.done=true;
                })
                .catch((error) => {
                });
          });
        });
      }
    },
    computed:{

    },
    mounted() {

    },
    created() {
     this.search();
    },
  }
</script>

<style lang="scss" scoped>
  .projects-wrapper{
    z-index: 0;
    margin: 0 auto;
  }
  .projects-list-wrap{
    padding-bottom: 50px;
  }
  .projects{
    width: 100%;
    padding: 30px 230px 0 230px;
    @media screen and (max-width:1918px){
      padding: 30px 0 0 0;
    }
  }
  .workers-list{
    margin-top: 50px;
    width: 100%;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ::v-deep{

    }
  }
  .worker-item{
    margin-right: 15px;
    margin-left: 15px;

    margin-bottom: 10px;
    @media screen and (max-width:1700px){
      margin-right: 8px;
      margin-left: 8px;
    }
    ::v-deep {
      .content-wrapper{
        .content{
          .content-info{
            margin-right:215px;
            @media screen and (max-width: 1440px){
              margin-right: 184px;
            }
            @media screen and (max-width: 1024px){
              margin-right: 0;
            }
            .footer-wrapper{

              .add-user{
                @media screen and (max-width:1024px){

                }
              }

              button{

                  width: 179.06px;
                height: 35.18px;
                font-weight: bold;
                font-size: 19px;
                @media screen and (max-width:767px){
                  width: 118.06px;
                  height: 35.18px;
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }



  .h-container{
    width: 100%;
    padding: 0;
    ::v-deep .clr-blue {
      text-align: center!important;
    }
  }


.title{
  width: 100%;
  position: relative;
  .title-t{
    text-align: center;
  }
}


  .workers-item{

    .content-wrapper{
      padding: 32px 27px 0 27px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        width: 100%;
      }
      .title{
        margin: 0;
        margin-top: 18px;
        font-family: Assistant;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 40px;
        text-align: right;
        letter-spacing: -0.02em;
        color: #2871D7;
      }

      .meta{
        color: #828282;
      }
      .links-wrapper{
        margin-top: 16px;
        width: 164px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        a{
          margin-top: 14px;
          font-family: Assistant;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 65px;

          background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          &:hover{
            text-decoration: underline;
          }
        }
        svg{
          margin-top: 16px;
        }
      }
      button{
        width: 167.51px;
        height: 36.78px;
      }
    }
  }
  .btn-wrapper {
    position: absolute;
    top: 62px;
    right: 0;
    .back-b {
      color: #2871D7;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .empty-s{
    h3{
      text-align: center;
      i{
        margin-left: 20px;
        margin-bottom: 10px;
        font-size: 40px;
      }
    }
  }
</style>
