<template>
  <div class="order-item">

    <div class="content-wrapper">
      <div class="thumb">
        <img :src="thumbnail===null?'/static/images/projects/addImg.png': $env.API_URL+thumbnail" alt="">
      </div>
      <div class="text-wrapper">
        <div class="title">{{name}}</div>
        <div class="actions-wrapper">
          <div class="action-item worker lefted-l">
            <button class="item edit" @click="showWorkers">
              <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.663 17.4465C17.1062 16.8326 16.4352 16.5328 15.5785 16.5328H13.7735L12.5884 15.3906C11.7175 16.1045 10.661 16.5185 9.51871 16.5185C8.44789 16.5185 7.43419 16.1473 6.60609 15.5048L5.54951 16.5185H3.67094C2.71435 16.5185 1.97192 16.8469 1.38654 17.518C-0.312489 19.4883 -0.026938 23.7002 0.10156 24.9994H19.1192C19.2193 23.6858 19.3906 19.374 17.663 17.4465Z"
                      fill="#2871D7"/>
                <path d="M4.56994 8.50977C4.22728 8.79532 3.99884 9.2522 3.99884 9.78047C3.99884 10.5657 4.51283 11.2082 5.1696 11.3224C5.31237 12.5075 5.79781 13.5497 6.52596 14.3207C6.68297 14.4778 6.84002 14.6348 7.01135 14.7633C7.22556 14.9347 7.45396 15.0774 7.69667 15.2059C8.23922 15.4914 8.83883 15.6485 9.48136 15.6485C10.1239 15.6485 10.7236 15.4914 11.2661 15.2059C11.5088 15.0774 11.7372 14.9347 11.9514 14.7633C12.1228 14.6348 12.2798 14.4778 12.4368 14.3207C13.1507 13.5498 13.6504 12.5217 13.7789 11.3367C13.7932 11.3367 13.8075 11.3367 13.8217 11.3367C14.5785 11.3367 15.1781 10.6371 15.1781 9.78047C15.1781 9.2522 14.9497 8.79532 14.607 8.50977H4.56994Z"
                      fill="#2871D7"/>
                <path d="M14.698 5.51085C14.2553 4.04026 13.0846 2.54112 11.5997 1.77014V5.12536V5.58224C11.5997 5.61079 11.5997 5.62507 11.5997 5.63935C11.5855 5.7964 11.5569 5.93917 11.4856 6.08195C11.2999 6.43889 10.9287 6.69588 10.5004 6.69588H10.272H8.70144C8.30167 6.69588 7.94468 6.48172 7.75912 6.16761C7.67346 6.03912 7.63062 5.89639 7.60207 5.73929C7.58779 5.68218 7.58779 5.63935 7.58779 5.58224V5.18247V1.75586C6.10293 2.54112 4.93217 4.04026 4.48957 5.51085L4.38962 5.82495H3.57581V7.60964H4.47529H5.73171H6.25998H13.1418H13.6558H15.6014V7.52398V5.82495H14.798L14.698 5.51085Z"
                      fill="#2871D7"/>
                <path d="M8.69631 6.25356H10.481C10.738 6.25356 10.9522 6.11078 11.0664 5.89662C11.1235 5.79668 11.152 5.69673 11.152 5.58251V5.45401V4.92575V1.55625V1.07081V0.885207C11.152 0.770986 11.1235 0.671044 11.0949 0.571101C10.9665 0.242718 10.6381 0 10.2669 0H8.69631C8.35365 0 8.0681 0.256995 8.03955 0.585379C8.03955 0.613934 8.02527 0.642489 8.02527 0.671044V1.07081V1.55625V4.98286V5.5254V5.58251C8.02527 5.72529 8.0681 5.85379 8.13949 5.96801C8.26803 6.13934 8.46787 6.25356 8.69631 6.25356Z"
                      fill="#2871D7"/>
              </svg>
            </button>
              <p class="describe "> קבלנים</p>
          </div>
          <hr>
          <div class="action-item centered">
            <button class="item centered showOrder" @click="showOrder">
              <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2812 1.5625H11.5844C11.2625 0.653125 10.3938 0 9.375 0C8.35625 0 7.4875 0.653125 7.16406 1.5625H5.46875C5.0375 1.5625 4.6875 1.9125 4.6875 2.34375V5.46875C4.6875 5.9 5.0375 6.25 5.46875 6.25H13.2812C13.7125 6.25 14.0625 5.9 14.0625 5.46875V2.34375C14.0625 1.9125 13.7125 1.5625 13.2812 1.5625Z"
                      fill="#2871D7"/>
                <path d="M17.1875 3.125H15.625V5.46875C15.625 6.76094 14.5734 7.8125 13.2812 7.8125H5.46875C4.17656 7.8125 3.125 6.76094 3.125 5.46875V3.125H1.5625C0.701563 3.125 0 3.82656 0 4.6875V23.4375C0 24.3141 0.685938 25 1.5625 25H17.1875C18.0641 25 18.75 24.3141 18.75 23.4375V4.6875C18.75 3.81094 18.0641 3.125 17.1875 3.125ZM9.14688 16.9594L6.02188 20.0844C5.86875 20.2359 5.66875 20.3125 5.46875 20.3125C5.26875 20.3125 5.06875 20.2359 4.91562 20.0844L3.35312 18.5219C3.04844 18.2172 3.04844 17.7219 3.35312 17.4172C3.65781 17.1125 4.15313 17.1125 4.45781 17.4172L5.46875 18.4266L8.04062 15.8547C8.34531 15.55 8.84062 15.55 9.14531 15.8547C9.45 16.1594 9.45156 16.6531 9.14688 16.9594ZM9.14688 10.7094L6.02188 13.8344C5.86875 13.9859 5.66875 14.0625 5.46875 14.0625C5.26875 14.0625 5.06875 13.9859 4.91562 13.8344L3.35312 12.2719C3.04844 11.9672 3.04844 11.4719 3.35312 11.1672C3.65781 10.8625 4.15313 10.8625 4.45781 11.1672L5.46875 12.1766L8.04062 9.60469C8.34531 9.3 8.84062 9.3 9.14531 9.60469C9.45 9.90937 9.45156 10.4031 9.14688 10.7094ZM14.8438 18.75H11.7188C11.2875 18.75 10.9375 18.4 10.9375 17.9688C10.9375 17.5375 11.2875 17.1875 11.7188 17.1875H14.8438C15.275 17.1875 15.625 17.5375 15.625 17.9688C15.625 18.4 15.275 18.75 14.8438 18.75ZM14.8438 12.5H11.7188C11.2875 12.5 10.9375 12.15 10.9375 11.7188C10.9375 11.2875 11.2875 10.9375 11.7188 10.9375H14.8438C15.275 10.9375 15.625 11.2875 15.625 11.7188C15.625 12.15 15.275 12.5 14.8438 12.5Z"
                      fill="#2871D7"/>
              </svg>
            </button>
            <p class="describe">פרטי הפרויקט</p>
          </div>
          <hr>
          <div class="action-item rightred-r">
            <button class="item worker  " @click="editOrder" >
              <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6217 4.17218L20.7322 9.2826L7.79621 22.2186L2.68863 17.1082L15.6217 4.17218ZM24.6101 2.93966L22.331 0.660587C21.4502 -0.220196 20.02 -0.220196 19.1362 0.660587L16.9531 2.84371L22.0636 7.95418L24.6101 5.40769C25.2932 4.7245 25.2932 3.6228 24.6101 2.93966ZM0.0142212 24.2913C-0.0787828 24.7099 0.299123 25.0849 0.717736 24.9831L6.4125 23.6024L1.30493 18.4919L0.0142212 24.2913Z"
                      fill="#2871D7 "/>

              </svg>
            </button>
            <p class="describe">ערוך הצעה</p>
          </div>
        </div>

        <div class="description">{{description}}</div>

        <button class="sendData th-btn th-btn-blue th-btn-sm" @click.prevent="searchWorkers"> קרא את הפוסט הזה &nbsp;&nbsp;&nbsp;&nbsp;
          +
        </button>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        order: {},

      }
    },
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        default: '',
        type: String,
      },
      description: {
        default: '',
        type: String,
      },
      phone: {
        type: String,
      },
      url: {
        default: '#',
        type: String,
      },
      user: {
        name: {
          type: String,
        },
        phone: {
          type: String,
        },
      },
      categoryId: {
        type: Number,
      },
      work_area: {
        type: String,
      },
      thumbnail: {
        type: String,
      },
      subcategories: {
        type: Array,
      },
      zip: {
        type: String
      }
    },
    components: {},
    methods: {
      showOrder() {
        this.$store.commit('modals/showOrder/saveData', this.order);

        this.$store.commit('modals/showOrder/open');
      },
      getOrder() {
        this.order.description = this.description;
        this.order.name = this.name;
        this.order.userName = this.user.name;
        this.order.phone = this.user.phone;
        this.order.category_id = this.categoryId;
        this.order.work_area = this.work_area;
        this.order.subcategories = this.subcategories;
        this.order.zip = this.zip;
        return this.order
      },
      searchWorkers() {

        this.$store.commit('modals/showOrder/saveData', this.order);
        this.$router.push({
          name: 'search-workers',
          params:
              {
                'orderId': this.id,
              }
        });
      },
      showWorkers(){
        this.$store.commit('modals/showWorkers/saveData', {'order_id':this.id});
        this.$store.commit('modals/showWorkers/open');

      },
      editOrder(){
        this.$router.push({
          name: 'edit-order',
          params:
              {
                'orderId': this.id,
              }
        });
      },
    },
    mounted() {
      this.getOrder()
    }
  }
</script>

<style lang="scss" scoped>
  .order-item {
    height: 410px;
    @media screen and (max-width: 1440px) {
      height: unset;
    }

    .closeB {
      left: 13px;
      top: 14px;;
      position: absolute;
      z-index: 2;
      opacity: 1;
      transition: all 0.1s ease-out;
      @media screen and (max-width: 480px) {
        top: -4px;
        width: 33px;
        left: -3px;
      }
      &:hover {
        opacity: 0.8;

        path {
        }
      }
    }
    .content-wrapper {
      position: relative;
      display: flex;
      flex-direction: row-reverse;
      width: 1059px;
      padding: 36px 33px 40px 33px;
      @media screen and (max-width: 1440px) {
        flex-direction: column;
        align-items: center;
        width: 720px;

      }
      @media screen and (max-width: 850px) {
        width: 555px;
      }
      @media screen and (max-width: 650px) {
        width: 405px;
      }
      @media screen and (max-width: 480px) {
        width: 315px;
        padding: 10px 0 10px 0px;
      }

      img {
        pointer-events: none;
        width: 460px;
        height: 330.12px;
        @media screen and (max-width: 1440px) {
          width: 360px;
          height: unset;
          max-height: 300px;
        }
        @media screen and (max-width: 480px) {
          width: 260px;
        }
      }

      .text-wrapper {
        width: 620px;
        margin-left: 75px;
        @media screen and (max-width: 1440px) {
          margin: unset;
          width: 90%;
        }

        .title {
          margin: 0;
          margin-right: 20px;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 30px;
          text-align: right;
          color: #333333;
          @media screen and (max-width: 1440px) {
            text-align: center;
          }
          @media screen and (max-width: 850px) {
            margin: 10px;
          }
        }

        .description {
          font-weight: normal;
          font-size: 24px;
          line-height: 30px;
          text-align: right;
          color: #4F4F4F;
          height: 160px;
          max-height: 185px;
          overflow: auto;
          @media screen and (max-width: 1605px) {
            font-size: 20px;
            line-height: 20px;
          }
          @media screen and (max-width: 1440px) {
            text-align: center;
          }
        }

        .meta {
          color: #828282;
        }

        a {
          margin-top: 14px;
        }

        .sendData {
          position: absolute;
          bottom: 37px;
          width: 285.8px;
          height: 54.07px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 31px;
          display: flex;
          align-items: center;
          text-align: center;
          @media screen and (max-width: 1440px) {
            position: static;
            margin: 0 auto;
            margin-top: 37px;
          }
          @media screen and (max-width: 550px) {
            margin-top: 20px;
          }
        }
      }
    }
  }

  .actions-wrapper {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 284px;
    height: 63px;
    @media screen and (max-width: 1440px) {
      margin: 0 auto;
      margin-bottom: 10px;
    }

    .action-item {
      position: relative;
      width: 72px;
      height: 60px;

      .item {
        position: absolute;
        left: 18px;
        top: 10px;
        width: 40px;
        height: 30px;
        padding: 0;
      }

      .centered {
        left: 8px;
      }
    }

    .worker {
      margin-left: -10px;
    }

    .describe {
      top: 20px;
      width: 100px;
      position: relative;
      font-family: Assistant;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #828282;
    }
  }

  hr {
    margin-top: 14px;
    width: 50px;
    height: 0px;
    border: 1px solid #E0E0E0;
    transform: rotate(90deg);
  }
.centered{
  left: 10px;
}
  .lefted-l{
    left: -9px!important;
    .describe{
      width: 56px!important;
    }
  }
  .rightred-r{
    right: -5px!important;
  button{
    left: 26px!important;
  }
  }
</style>

