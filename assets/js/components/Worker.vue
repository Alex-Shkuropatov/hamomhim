<template>
  <div class="project-item" v-if="display">

    <div class="content-wrapper">
    <div class="content-block">
      <rate-flag class="rateFlag" v-bind="rateFlag" v-if="rateFlag.rate>0" />

    </div>
     <div class="content">
       <div class="content-info">
         <div class="title" :style="[ rateFlag.rate>!0 ? '' : {'margin-left': '0'}  ]">
            <div class="title-element">
              {{name}}
            </div>

         <div class="title-favourite">
           <favourite-icon v-bind="favourite" v-if="checkRole" />
         </div>

         </div>
         <div class="stats" v-bind="rateFlag" :style="[ rateFlag.rate>!0 ? '' : {'margin-right': '0'}  ]" >
         <div class="stats-element">
           <svg   viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
             <rect x="0.285156" y="24.0635" width="29.1299" height="2.53303" fill="#FFB000"/>
             <rect x="25.6143" width="3.79955" height="22.7973" fill="#FFB000"/>
             <rect x="20.5508" y="5.06641" width="3.79955" height="17.7312" fill="#FFB000"/>
             <rect x="15.4844" y="10.1318" width="3.79955" height="12.6652" fill="#FFB000"/>
             <rect x="10.418" y="16.4648" width="3.79955" height="6.33258" fill="#FFB000"/>
             <rect x="4.08594" y="18.998" width="3.79955" height="3.79955" fill="#FFB000"/>
           </svg>
           דירוג :  <span>{{comments_count}}</span>
         </div>

         <div class="stats-element">
           <svg  viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M12.1815 8.09061C11.3853 7.29185 10.3035 6.84348 9.1757 6.84473C6.82755 6.8441 4.92348 8.7471 4.92285 11.0953C4.92223 13.4434 6.82522 15.3475 9.17338 15.3481C11.5215 15.3487 13.4256 13.4457 13.4262 11.0976C13.4265 9.96987 12.9788 8.8882 12.1815 8.09061Z" fill="#FFB000"/>
             <path d="M9.40164 16.7373H8.94827C4.17993 16.7491 0.317445 20.6117 0.305664 25.3799V25.9904C0.305664 26.3256 0.57733 26.5972 0.912539 26.5972H17.4338C17.769 26.5972 18.0407 26.3256 18.0407 25.9904V25.3799C18.0269 20.6138 14.1678 16.753 9.40164 16.7373Z" fill="#FFB000"/>
             <path d="M30.7091 2.06125C28.7425 0.684006 26.3911 -0.0368368 23.9906 0.00144989C21.59 -0.0368368 19.2387 0.684006 17.2721 2.06125C15.4872 3.37496 14.3877 5.20272 14.3877 7.23754C14.3906 8.1582 14.6159 9.0645 15.0445 9.87923C15.4276 10.6047 15.9337 11.2582 16.5403 11.8105L15.016 14.977C14.8701 15.2766 14.9947 15.6377 15.2943 15.7835C15.4819 15.8749 15.7034 15.8628 15.8799 15.7516L19.3855 13.5883C20.0522 13.8605 20.7431 14.0697 21.4489 14.213C22.2853 14.3843 23.1369 14.4704 23.9906 14.4701C26.3911 14.5083 28.7425 13.7875 30.7091 12.4103C32.494 11.0965 33.5935 9.26878 33.5935 7.23397C33.5935 5.19915 32.4904 3.37496 30.7091 2.06125ZM28.5432 6.2619C28.5429 6.26341 28.5425 6.26502 28.5422 6.26654C28.5184 6.3723 28.4667 6.46975 28.3922 6.54856L26.8358 8.33348L27.0428 10.7289C27.072 11.0627 26.8251 11.3571 26.4911 11.3863C26.3744 11.3965 26.2574 11.3728 26.1539 11.3179L23.9906 10.4076L21.7773 11.3464C21.4712 11.478 21.1163 11.3365 20.9848 11.0304C20.945 10.9377 20.929 10.8365 20.9384 10.736L21.1454 8.34062L19.5711 6.51643C19.3531 6.26181 19.3828 5.87876 19.6374 5.66073C19.7109 5.59782 19.7983 5.55337 19.8924 5.53115L22.2307 4.98853L23.4694 2.94658C23.6411 2.65876 24.0136 2.5646 24.3014 2.73622C24.3879 2.78781 24.4602 2.8601 24.5118 2.94658L25.7434 4.99567L28.0816 5.53829C28.4089 5.61067 28.6156 5.93463 28.5432 6.2619Z" fill="#FFB000"/>
           </svg>
           ציון :  <span>{{rateFlag.rate}}</span>
         </div>
       </div>
         <div  class="type"><span class="bold"> רשימת פרויקטים:</span><span>{{getName}}</span><div class="small"  v-if="subcategories.length!==0">
           <span
                   v-for="subcategory in subcategories"
                   :key="subcategory.id"
           >/{{subcategory.name}}</span>
         </div> </div>
         <hr>
         <div class="description">
           {{bio ==='null' ? '': bio}}
         </div>
      <div class="footer-wrapper">
          <div class="btn-wrapper">
          <button :href="url" class="th-btn th-btn-blue th-btn-sm contact-button add-user" @click="addUser"><span>הוסף פרויקט</span></button>
          <button :href="url" class="th-btn th-btn-empty th-btn-sm contact-button" @click="viewProfile">  <span>ראה פרופיל</span>  </button>
        </div>
          <div class="location">
            <i class="fas fa-map-marker-alt"></i>

            <span class="bold">אזור עבודה:</span>
            <span>{{working_area}}</span>

          </div>
        </div>
       </div>
       <div class="content-image">
         <img :src="avatar===null? '/static/images/profile/defaultAvatar.png': $env.API_URL+avatar "  alt="">
       </div>

     </div>

    </div>
  </div>
</template>

<script>

import RateFlag from './common/RateFlag.vue';
import  FavouriteIcon from './common/FavouriteIcon.vue';

  export default {
    data: function (){
      return{
        rateFlag: {
          rate: Math.round(this.average_rating),
        },
        favourite:{
          is_favourite: this.is_favourite,
          user_id: this.id,
        },
        display : true,
      }
    },
    props: {
      id: {
        type: Number,
      },
      avatar: {
        type: String,
      },
      name: {
        default: '',
        type: String,
      },
      bio:{
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
      url: {
        default: '#',
        type: String,
      },
      average_rating: {
        default: 0,
        type: String,
      },
      comments_count: {
        default: 0,
        type: Number,
      },
      type: {
        default: 'םילכירדא',
        type: String,
      },
      working_area: {
        type: String,
      },
      is_favourite: {
        type: Boolean,
      },
      subcategories: {
        type: Array,
        default: function () { return [] },
      },
      categoryId:{
        type: Number,
      },
      category:{
        id:{
          type: Number,
        }
      }
    },
    components: {
      RateFlag,
      FavouriteIcon,
    },
    methods: {
      addUser(){
        let data = new FormData();
        data.append('userIds[]',this.id);
        data.append('orderId',this.$route.params.orderId);
        axios.post('/api/addWorkersToOrder',data)
            .then((response)=>{
              this.$emit('add',{
                id: this.id,
              });
            }).catch((error)=>{
              console.log(error)
        })
      },
      viewProfile(){
        this.$router.push({name:'view-profile', params: {'id': this.id}})
      },
    },
    computed: {
      checkRole(){
        return this.$store.getters['user/getField']('role') === 'architect';
      },
      getName() {
        if(this.$store.getters['categories/isLoaded']){
          return this.$store.getters['categories/getNameById'](parseInt(this.categoryId||this.category.id));
        } else {
          return '';
        }
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .fa-map-marker-alt{
    color:#3269B6;
    margin-left: 5px;
  }
  .close{
    top: 5px;
    left: 5px;
  }
  .rateFlag{
    position: absolute;
    top: -1px;
    left: 42px;
    @media screen and (max-width:480px){
      left: 10px;
    }
  }
  .project-item{
    z-index: 1;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    line-height: 1.16;
    width: 1371px;
     @media screen and (max-width:1600px){
       width: 1000px;
    }
    @media screen and (max-width:1440px){
      width: 900px;
    }
    @media screen and (max-width:1024px){
      width: 600px;
    }
    @media screen and (max-width: 767px){
      width: 410px;
    }
    @media screen and (max-width: 480px){
      width: 300px;
    }
    .content-wrapper{
      .content-image{
        position: absolute;
        width: 154px;
        height: 154px;
        right: 20px;
        top: 13px;
        img{
          width: 154px;
          height: 154px;
          border-radius: 50%;
          @media screen and (max-width: 1024px){
            width: 110px;
            height: 110px;
          }
          @media screen and (max-width: 767px){
            width: 70px;
            height: 70px;
          }
          @media screen and (max-width: 480px){
            width: 61px;
            height: 60px;
          }

        }
        @media screen and (max-width:1024px){

          position: absolute;
          width: 110px;
          height: 110px;
          right: 36px;
          top: 6px;

        }
        @media screen and (max-width: 767px){
          margin-top: 29px;
          width: 70px;
          height: 70px;
          right: 14px;
        }
        @media screen and (max-width:480px){
          width: 61px;
          height: 60px;
          margin-top:12px;
        }
      }
      .description{
        margin-top: 10px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-align: right;
        color: #4F4F4F;
        height: auto;
        width: 90%;
        @media screen and (max-width:1024px){
          width: 426px;
          text-align: center;
        }
        @media screen and (max-width: 767px){
          width: 80%;
          text-align: center;
        }
        @media screen and (max-width: 480px){
          width: 300px;
          font-size: 15px;
        }
      }
    .meta{
      color: #828282;
    }
      a{
        margin-top: 14px;
      }
     .contact-button{
       width: 200.06px;
       height: 45.18px;
       font-weight: bold;
       font-size: 21px;
       display: flex;
       justify-content: center;
       span{
         display: inline-block;
         text-align: center;
       }
       @media screen and (max-width:767px){
         width: 118.06px;
         height: 35.18px;
         font-size: 15px;
       }
       @media screen and (max-width:480px){

       }
     }
  }
  }
 .stats {
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   margin-left: 144px;
   margin-top: 33px;
   position: absolute;
   top: 5px;
   left: 5px;
   @media screen and (max-width: 1024px){
     justify-content: center;
     position: static;
     display: flex;
     margin: 0;
     flex-direction: row;
   }
    @media screen and (max-width:767px){
      margin-right: -40px;
      font-size: 18px;
    }
   @media screen and (max-width: 480px){
     position: static;
     flex-direction: row;
   }
   .stats-element{
     display: flex;
     align-items: center;
     padding: 8px;
     font-size: 24px;
     line-height: 30px;
     color: #4F4F4F;
     @media screen and (max-width: 767px){
       font-size: 18px;
     }
     @media screen and (max-width: 480px){
       font-size: 17px;
       padding: 3px;
     }
     span {
       font-weight: bold;
     }
   }
   svg{
margin-left: 7px;
     width: 34px;
     height: 27px;
     @media screen and (max-width: 767px){
       margin-left: 0px;
     }
     @media screen and (max-width: 480px){
       width: 23px;
       height: 25px;
     }
   }
 }
.content-info{
  margin-right: 215px;
  @media screen and (max-width: 1024px){
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width:767px){
    width: 100%;
  }
  .title{
    display: flex;
    font-weight: bold;
    font-size: 27px;
    line-height: 30px;
    text-align: right;
    color:#3269B6;
    width: 315px;
    margin-top: 20px;
    margin-bottom: 11px;
    @media screen and (max-width:1024px){
      width: unset;
      font-size: 32px;
      margin-top: 36px;
      margin-bottom: 5px;
    }
    @media screen and (max-width: 767px){
      font-size: 18px;
      margin-left: 0px;
    }
    @media screen and (max-width: 480px){
      font-size: 16px;
      margin-left: 0;
    }
  }
  hr{
    border: none;
    height: 1px;
    width: 90%;
    margin-left: 208px;
    background-color: #E0E0E0 ;
    @media screen and (max-width: 1024px){
      margin-left: 0;
      width: 100%;
    }
  }
  .description{
    width:981px;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #4F4F4F;
    @media screen and (max-width: 767px){
      width: 90%;
      text-align: right;
    }

  }
}
  .type{
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    color: #828282;
    @media screen and (max-width:1024px){
      text-align: center;
    }
    @media screen and (max-width: 767px){
      font-size: 19px;
      width: 95%;
    }
    @media screen and (max-width:480px){
      font-size: 15px;
    }
    .bold{
      font-weight: bold;
      color: #333333;
      margin-left: 5px;
    }
    .small{
      display: inline-block;
      font-size: 18px;
      margin-right: 10px;
      width: 90%;
      @media screen and (max-width: 1024px){
        width: 100%;
      }
      @media screen and (max-width: 480px){
        margin-right: 0;
        font-size: 15px;
      }
    }
  }
  .footer-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width:1024px){
     flex-direction: column-reverse;
      width: 355px;
      margin-top: 5px;
    }

    @media screen and (max-width:480px){
      margin-top: 0!important;
    }
    .btn-wrapper{
      display: flex;
      flex-direction: row;
      @media screen and (max-width:1024px){
        margin-top: 10px;
      }
    }
    margin-bottom: 10px;
  }
  .location{
    margin-left: 43px;
    display: flex;
    flex-direction: row;
    font-size: 24px;

    @media screen and (max-width:1024px){
     margin-left: 0;
      margin-bottom:10px;
    }
    @media screen and (max-width:767px){
      font-size: 22px;
      height: 24px;
      margin-bottom: 5px;
    }
    @media screen and (max-width:480px){
      font-size: 18px;
    }
    .bold{
      font-weight: bold;
      color: #333333;
      margin-left: 8px;
    }
    span{
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #828282;
    }
    svg{
      margin-left: 8px;
    }
  }
.th-btn-blue{
  margin-left: 20px;
}
  .content{

    @media screen and (max-width: 1024px){
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

  }
</style>
