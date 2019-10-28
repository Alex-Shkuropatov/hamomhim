<template>
  <div class="h-container requests-list">
    <response-form @request:delete="deleteRequest"></response-form>
    <show-order></show-order>

    <div class="empty" v-if="!flag">

    </div>
    <div class="wrap"  v-if="flag">
    <template v-if="requests.length">
      <div class="request-item" v-for="request in requests" :key="request.id">
        <div class="title-line">
          <div class="name">{{request.name}}</div>
          <div class="date">
            <span class="caption">תאריך אישור סופי</span>
            <span class="value">{{request.updated_at}}</span>
          </div>
        </div>
        <div class="request-inner">
          <div class="text-col">
            <div class="phone">
              <span class="bold">{{getCatNameById(request.categoryId)}}</span> |
              <a href="#" class="phone">{{request.user.phone}}</a>
            </div>
            <hr class="th-divider">
            <div class="description">{{request.description}}</div>
          </div>
          <div class="img-col" :style="{ backgroundImage: 'url(' + $env.API_URL + request.thumbnail + ')' }"></div>
        </div>
        <div class="footer">
          <div class="actions">
            <div class="action-item view" @click="openViewOrderPopup(request)">
              <svg viewBox="0 0 22 34" fill="#2871D7" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5168 2.63154C14.3456 2.63154 13.3843 1.73239 12.4304 1.05297C12.0117 0.754715 11.5162 0.582031 10.9857 0.582031C10.4542 0.582031 9.95793 0.755309 9.53857 1.05451C8.58584 1.73425 7.62492 2.63154 6.45456 2.63154C5.95433 2.63154 5.54834 3.09063 5.54834 3.65629V7.75531C5.54834 8.32097 5.95433 8.78006 6.45456 8.78006H15.5168C16.017 8.78006 16.423 8.32097 16.423 7.75531V3.65629C16.423 3.09063 16.017 2.63154 15.5168 2.63154Z"/>
              <path d="M20.0477 4.68164C19.0467 4.68164 18.2352 5.4931 18.2352 6.49408V7.75591C18.2352 9.45086 17.0155 10.8302 15.5166 10.8302H6.45438C4.95549 10.8302 3.73572 9.45086 3.73572 7.75591V6.49408C3.73572 5.4931 2.92426 4.68164 1.92328 4.68164C0.924625 4.68164 0.11084 5.60187 0.11084 6.73116V31.3253C0.11084 32.4751 0.906501 33.3748 1.92328 33.3748H20.0477C21.0644 33.3748 21.8601 32.4751 21.8601 31.3253V6.73116C21.8601 5.58138 21.0644 4.68164 20.0477 4.68164ZM10.7209 22.828L7.09598 26.9271C6.91836 27.1259 6.68637 27.2263 6.45438 27.2263C6.22238 27.2263 5.99039 27.1259 5.81277 26.9271L4.00033 24.8776C3.64691 24.4779 3.64691 23.8282 4.00033 23.4286C4.35376 23.0289 4.9283 23.0289 5.28173 23.4286C5.90492 24.1322 7.00335 24.1318 7.62601 23.4277L9.43765 21.379C9.79108 20.9794 10.3656 20.9794 10.719 21.379C11.0725 21.7787 11.0743 22.4263 10.7209 22.828ZM10.7209 14.63L7.09598 18.729C6.91836 18.9278 6.68637 19.0282 6.45438 19.0282C6.22238 19.0282 5.99039 18.9278 5.81277 18.729L4.00033 16.6795C3.64691 16.2798 3.64691 15.6301 4.00033 15.2305C4.35376 14.8308 4.9283 14.8308 5.28173 15.2305C5.90492 15.9341 7.00335 15.9337 7.62601 15.2296L9.43765 13.181C9.79108 12.7813 10.3656 12.7813 10.719 13.181C11.0725 13.5806 11.0743 14.2283 10.7209 14.63ZM17.329 25.1768H13.7041C13.2039 25.1768 12.7979 24.7177 12.7979 24.152C12.7979 23.5864 13.2039 23.1273 13.7041 23.1273H17.329C17.8292 23.1273 18.2352 23.5864 18.2352 24.152C18.2352 24.7177 17.8292 25.1768 17.329 25.1768ZM17.329 16.9787H13.7041C13.2039 16.9787 12.7979 16.5196 12.7979 15.954C12.7979 15.3883 13.2039 14.9292 13.7041 14.9292H17.329C17.8292 14.9292 18.2352 15.3883 18.2352 15.954C18.2352 16.5196 17.8292 16.9787 17.329 16.9787Z"/>
              </svg>

              ראה פרטי הצעה
            </div>
            <!-- <div class="action-item like">
              <svg viewBox="0 0 30 33" fill="#2871D7" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.3032 19.6235C28.3067 18.6276 28.4632 17.6171 28.7755 16.6714C28.9449 16.1582 29.0297 15.6049 29.0297 15.0115C29.0297 13.9457 28.6848 13.0235 27.9975 12.2443C27.3087 11.4651 26.4932 11.0757 25.5507 11.0757H21.0432C20.7829 11.0757 20.5885 10.8293 20.6751 10.5839C20.7229 10.4473 20.7901 10.2968 20.8744 10.1328C20.9587 9.9688 21.0193 9.84575 21.0554 9.76391C21.2728 9.29959 21.4393 8.91675 21.5542 8.61639C21.6689 8.31545 21.7831 7.90569 21.8983 7.38644C22.0133 6.86749 22.0704 6.34803 22.0704 5.82879C22.0704 5.50101 22.0669 5.23432 22.0612 5.0295C22.0555 4.82455 22.0248 4.51701 21.9709 4.10703C21.9161 3.69727 21.8435 3.35563 21.7531 3.08247C21.6623 2.80925 21.5172 2.50157 21.3182 2.16022C21.1187 1.81822 20.8772 1.54191 20.5929 1.32999C20.3088 1.11821 19.9464 0.940612 19.5054 0.797251C19.0639 0.653747 18.5658 0.582031 18.0096 0.582031C17.6954 0.582031 17.4238 0.711896 17.194 0.971552C16.9524 1.24478 16.7466 1.58634 16.5776 1.99611C16.4084 2.40609 16.2905 2.76137 16.2239 3.06209C16.1575 3.36266 16.0819 3.77953 15.9976 4.31227C15.8885 4.88643 15.8073 5.2995 15.7526 5.55226C15.6983 5.80503 15.5923 6.13633 15.4353 6.54617C15.2781 6.95629 15.091 7.284 14.8734 7.53009C14.4748 7.98092 13.8646 8.80081 13.0428 9.98947C12.4505 10.8638 11.8404 11.6905 11.2121 12.4694C10.5836 13.2484 10.1245 13.6514 9.83458 13.6788C9.53271 13.7061 9.27287 13.8461 9.05531 14.099C8.83775 14.3518 8.729 14.6491 8.729 14.9906V28.1285C8.729 28.4837 8.84372 28.7876 9.07334 29.0404C9.30284 29.2934 9.57474 29.4266 9.88892 29.4403C10.3118 29.454 11.2664 29.7543 12.7528 30.3424C13.6831 30.6971 14.411 30.9674 14.9366 31.1516C15.4621 31.3358 16.1967 31.5341 17.1385 31.7461C18.0812 31.9579 18.951 32.064 19.7483 32.064H20.0566H21.4342H22.0865C23.694 32.0367 24.8837 31.5037 25.6573 30.4655C25.9914 30.0158 26.2335 29.4994 26.3836 28.9162C26.7294 27.5722 27.2101 26.1808 27.5241 24.829C27.537 24.7767 27.5491 24.7245 27.5603 24.6725C27.8646 23.2667 28.1375 21.7546 28.2814 20.3234C28.3043 20.0956 28.3116 19.8623 28.3032 19.6235Z"/>
              <path d="M6.40991 13.6973H1.19002C0.875644 13.6973 0.603742 13.8271 0.374185 14.0868C0.144627 14.3463 0.0297852 14.6538 0.0297852 15.009V28.127C0.0297852 28.4818 0.144627 28.7894 0.374248 29.0493C0.603996 29.3085 0.875898 29.4384 1.19008 29.4384H6.40991C6.72403 29.4384 6.9958 29.3085 7.22549 29.0493C7.45504 28.7894 7.56982 28.4819 7.56982 28.127V15.009C7.56982 14.6538 7.45498 14.3464 7.22549 14.0868C6.99587 13.8271 6.72409 13.6973 6.40991 13.6973ZM4.32542 26.4356C4.09586 26.6884 3.82402 26.8147 3.50984 26.8147C3.18354 26.8147 2.90859 26.6884 2.68519 26.4356C2.46166 26.1829 2.34993 25.8721 2.34993 25.5031C2.34993 25.1479 2.4616 24.8404 2.68519 24.5808C2.90865 24.3212 3.18354 24.1912 3.50984 24.1912C3.82402 24.1912 4.09586 24.3212 4.32542 24.5808C4.55504 24.8403 4.66988 25.1478 4.66988 25.5031C4.66988 25.8721 4.55529 26.1828 4.32542 26.4356Z"/>
              </svg>

              רשום תגובה
            </div> -->
            <a :href="$env.API_URL + request.zip" download class="action-item download">
              <svg viewBox="0 0 20 27" fill="#2871D7" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.378 11.98C18.3375 10.8949 17.5671 9.1853 16.1187 9.1853C15.1902 9.1853 14.4376 8.43267 14.4376 7.50424V4.06468C14.4376 1.82306 12.6204 0.00585938 10.3788 0.00585938C8.13716 0.00585938 6.31996 1.82306 6.31996 4.06468V7.50424C6.31996 8.43267 5.56733 9.1853 4.63891 9.1853C3.19044 9.1853 2.42007 10.8949 3.37962 11.98L7.18202 16.2797C8.88048 18.2004 11.8771 18.2004 13.5755 16.2797L17.378 11.98ZM2.43811 22.9545C1.59317 22.9545 0.908203 23.6394 0.908203 24.4844C0.908203 25.3293 1.59317 26.0143 2.43811 26.0143H18.3195C19.1644 26.0143 19.8494 25.3293 19.8494 24.4844C19.8494 23.6394 19.1644 22.9545 18.3195 22.9545H2.43811Z"/>
              </svg>

              הורד הצעה
            </a>
          </div>
          <div class="accept-actions">
            <button class="accept" @click="openResponseForm(request.id)">אשר בקשה</button>
            <button class="decline" @click="rejectResponse(request.id)">בטל בקשה</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h2 class="notify_msg text-center">טרם קיבלת פרויקטים<i class="far fa-copy ml-1 mr-1"></i></h2><!-- You don't have any invitations to projects yet -->
    </template>
</div>
  </div>
</template>

<script>

import ResponseForm from './../../components/modals/responses/ResponseForm';
import ShowOrder from './../../components/modals/ShowOrder';

export default {
  data(){
    return {
      requests: [],
      flag : false,
    };
  },
  components: {
    ResponseForm,
    ShowOrder
  },
  methods: {
    getRequestsFromApi(){
      axios.post('/api/getWorkerRequests', { page: 0, take: -1})
        .then(response => {
          this.flag= true;
          if(response.data.success){
            this.requests = response.data.value.orders;
          }
          else{
            alert(response.data.message);
          }
        })
    },
    getCatNameById(id){
      var name = '';
      if(this.$store.getters['categories/isLoaded']){
        name = this.$store.getters['categories/getNameById'](id);
      }
      return name;
    },
    openResponseForm(orderId){
      this.$store.commit('modals/responseForm/open', orderId);
    },
    openViewOrderPopup(order){
      console.log(order);
      this.$store.commit('modals/showOrder/saveData',  {
        description: order.description,
        name: order.name,
        userName : order.user.name,
        projectName: order.project_name,
        phone : order.user.phone,
        category_id : order.categoryId,
        subcategories: order.subcategories,
        work_area: order.work_area,
        zip: order.zip,
      });
      this.$store.commit('modals/showOrder/open');
    },
    deleteRequest(id){
      this.requests = this.requests.filter(e => e.id !== id);
    },
    rejectResponse(id){
      if(confirm('Are you sure you want to reject this request?')){
        axios.post('/api/rejectRequest', { orderId: id })
          .then(data => {
            if(data.data.success){
              this.requests = this.requests.filter(e => e.id !== id);
            }
            else{
              alert(data.data.message);
            }
          });
      }
    }
  },
  mounted(){
    this.getRequestsFromApi();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';

.requests-list{
  margin-top: ceil($scale1 * 90px);
  margin-bottom: ceil($scale1 * 40px);
}

.request-item{
  box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.15);
  color: $clr-gray;
  margin-bottom: ceil($scale1 * 54px);
  a{
    color: $clr-gray;
  }
  .title-line,
  .request-inner,
  .footer{
    padding-right: ceil($scale1 * 62px);
    padding-left: ceil($scale1 * 52px);
    @media (max-width: $breakpoint5){
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .title-line{
    display: flex;
    justify-content: space-between;
    -ms-align-items: center;
    align-items: center;
    padding-top: ceil($scale1 * 20px);
    padding-bottom: ceil($scale1 * 20px);
    color: #fff;
    background: #2871D7;
    box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.15);
    border-radius: 5px 5px 0px 0px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    @media (max-width: $breakpoint5){
      padding-top: ceil($scale4 * 20px);
      padding-bottom: ceil($scale4 * 20px);
    }
    .name{
      font-size: ceil($scale1 * 35px);
      font-weight: 800;
      @media (max-width: $breakpoint5){
        font-size: ceil($scale2 * 35px);
      }
    }
    .date{
      font-size: ceil($scale1 * 24px);
      @media (max-width: $breakpoint5){
        font-size: ceil($scale2 * 24px);
      }
      .value{
        font-weight: 800;
      }
    }
  }

  .request-inner{
    display: flex;
    padding-top: ceil($scale1 * 33px);
    padding-bottom: ceil($scale1 * 24px);
    font-size: ceil($scale1 * 20px);
    @media(max-width: $breakpoint5){
      -webkit-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 15px;
    }
    .text-col{
      width: 50%;
      margin-left: ceil($scale1 * 45px);
      @media(max-width: $breakpoint5){
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
      }
    }
    .phone{
      color: #4F4F4F;
    }
    .bold{
      font-weight: bold;
    }
    .img-col{
      height: ceil($scale1 * 260px);
      flex-grow: 1;
      flex-shrink: 0;
      background-repeat: no-repeat;
      background-position: center;
      -webkit-background-size: cover;
      background-size: cover;
      border-radius: 5px;
    }
  }
  .footer{
    display: flex;
    justify-content: space-between;
    background: rgba(224, 224, 224, 0.15);
    padding-top: ceil($scale1 * 27px);
    padding-bottom: ceil($scale1 * 27px);
    font-size: ceil($scale1 * 22px);
    @media (max-width: $breakpoint3){
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .action-item{
      padding: ceil($scale1 * 10px) ceil($scale1 * 25px);
      display: inline-flex;
      -ms-align-items: center;
      align-items: center;
      border-radius: 2px;
      transition: all .25s ease-out;
      @media (max-width: $breakpoint5){
        font-size: 14px;
        padding: 7px 10px;
        svg{
          height: 16px;
        }
      }
      svg{
        height: ceil($scale1 * 28px);
        width: auto;
        margin-left: 15px;
      }
      &:hover{
        background: $clr-blue;
        color: #fff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        svg{
          fill: #fff;
        }
      }
    }
    .accept-actions{
      @media (max-width: $breakpoint3){
        margin-top: 10px;
      }
      @media (max-width: $breakpoint5){
        justify-content: space-between;
      }
      button{
        display: inline-flex;
        justify-content: center;
        -ms-align-items: center;
        align-items: center;
        border-radius: 2px;
        padding: ceil($scale1 * 15px) ceil($scale1 * 50px);
        transition: all .25s ease-out;
        @media (max-width: $breakpoint5){
          width: calc(50% - 5px);
          padding: 7px 0;
          font-size: 14px;
        }
        &.decline{
          background: #D7D7D7;
          color: #fff;
          &:hover{
            background: darken(#D7D7D7, 13%);
          }
        }
        &.accept{
          background: $clr-blue;
          color: #fff;
          &:hover{
            background: lighten($clr-blue, 13%);
          }
        }
      }
    }
  }
}
</style>
