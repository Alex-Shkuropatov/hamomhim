<template>
  <transition name="slide-fade">
    <modal v-if="$store.getters['modals/showSubcategories/isOpened']" @close="close">
      <div class="content-wrapper">

        <h2 class="title clr-blue"> בחירת תת קטגוריה</h2>
        <h4 class="description"> נא בחר את סוג הקבלן</h4>
        <div class="services">
          <div class="service-wrapper">
            <div class="service" v-for="(subcategory, index) in getSubcategory" :key="index">
              <div class="checkbox">
                <label class="container">{{subcategory.name}}
                  <input type="checkbox" :value="subcategory"  v-model="checkedServices">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <button class="next-b th-btn th-btn-blue th-btn-md "   @click="search"><span>לשלב הבא</span></button>
        </div>
      </div>
    </modal>
  </transition>
</template>

<script>
import Modal from './../common/Modal';


export default {
  data(){
    return{
      checkedServices: [],
    }
  },
  methods: {
    close() {
      this.$store.commit('modals/showSubcategories/close');

    },
    search(){
      let arr = this.checkedServices;
      let string = JSON.stringify(arr);
      this.$router.push({name: 'search', params: { categoryId: this.getId , subcategories: string }});
      console.log(string);
      this.checkedServices = [];
      this.$store.commit('modals/showSubcategories/close');
    },
  },
  props: {
    id: {
      type: Number,
    }
  },
  computed: {
    getSubcategory(){
      if(this.$store.getters['categories/isLoaded']){
        return this.$store.getters['categories/getSubCategoriesById'](this.getId)
      }
    },
    getId(){
      return this.$store.getters['modals/showSubcategories/getId'];
    }
  },
  components: {
    Modal,
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.container {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.services{
  width: 100%;
}
.service-wrapper{
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  .service{
    width: calc(50% - 8px);
    text-align: right;
  }
}

.checkbox{
  .container{
    padding-right: 35px;
  }
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 7px;
  right: 0px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  border: solid 1.5px rgba(46, 55, 79, 0.25);
  background-color: #fff;
  transition: all .2s ease-in-out;
  &:hover{
    background-color: #fff;
  }
}

/* On mouse-over, add a grey background color */

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: $clr-blue;
  border: 1px solid $clr-blue;
  z-index: 10;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.content-wrapper{
  position: relative;
  text-align: center;
  width: 600px;
  p{
    margin:0;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #828282;
  }
}

.next-b{
  margin-top: 25px;
}
@media screen and (max-width: 900px) {
  .content-wrapper{
    width: 450px;
  }
}
@media screen and (max-width: 600px){
  .content-wrapper{
    p{
      font-size: 25px;
    }
  }
}
@media screen and (max-width: 480px) {
  .service-wrapper .service{
    width: auto;
  }
  .content-wrapper{
    width: 310px;
    .title{
      margin-top: 45px;
    }
  }
  .description{
    margin-bottom: 18px;
    margin-top: 10px;
    font-size: 18px;
  }
  .container{
    font-size: 18px;
  }
  .checkmark{
    top: 0px;
  }
  .next-b{
    margin-top: 10px;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
transform: translateX(10px);
opacity: 0;
}
</style>
