<template>
  <div class="personal-info-wrap">
    <div class="th-heading">מידע ראשי</div>
    <div class="personal-info">
      <div class="avatar-col">
        <div class="avatar" :style="avatarStyles"></div>
        <label class="th-btn th-btn-md th-btn-blue">
          <span>Upload new photo</span>
          <input type="file" @change="onAvatarUpdate($event.target.files[0])">
        </label>
      </div>

      <div class="forms-col">
        <div class="h-row">
          <div class="form-group col1-2">
            <div class="caption">שם מלא</div>
            <theme-input
            placeholder="שם מלא"
            :value="name"
            @input="$emit('update:name', arguments[0])"
            class="th-input less-rounded-corners" />
          </div>
          <div class="form-group col1-2">
            <div class="caption">הדובע רוזיא</div>
            <drop-down
            v-bind="selects.working_area"
            :value="working_area"
            @input="updateWorkingArea"
            class="less-rounded-corners" />
          </div>
          <div class="form-group col1-2">
            <div class="caption">סוג התמחות</div>
            <drop-down
            v-bind="selects.category"
            :items="getCategories"
            :value="category_id"
            @input="onUpdateCategory"
            class="less-rounded-corners"
            />
          </div>
          <div class="form-group col1-2">
            <div class="caption">קטגוריות משנה</div>
            <theme-multiselect
            :placeholder="selects.subcategories.placeholder"
            :labelKey="selects.subcategories.labelKey"
            :value="subcategories"
            :items="subcatsItems"
            :disabled="isSubcatsSelectDisabled"
            @input="onUpdateSubcats"
            class="less-rounded-corners" />
          </div>
          <div class="form-group col1-2">
            <div class="caption">מייל</div>
            <theme-input
            placeholder="מייל"
            type="email"
            :value="email"
            @input="$emit('update:email', arguments[0])"
            class="th-input less-rounded-corners" />
          </div>
          <div class="form-group col1-2">
            <div class="caption">טלפון</div>
            <theme-input
            placeholder="טלפון"
            type="phone"
            :value="phone"
            @input="$emit('update:phone', arguments[0])"
            class="th-input less-rounded-corners" />
          </div>

        </div>

        <div class="show-changepass-form" @click="$store.commit('modals/changePassword/open')">Change password</div>
        <change-password />

      </div>
    </div>
  </div>
</template>

<script>

import ThemeInput from '../../common/ThemeInput.vue';
import DropDown from '../../common/DropDown.vue';
import ThemeMultiselect from '../../common/ThemeMultiselect.vue';
import ChangePassword from '../../modals/editWorkerProfile/ChangePassword.vue';

export default {
  components: {
    ThemeInput,
    DropDown,
    ThemeMultiselect,
    ChangePassword
  },
  data(){
    return {
      avatarSrc: '',
      selects: {
        working_area: {
          placeholder: 'הדובע רוזיא',
          items: [
            {value: 'כל הארץ'},
            {value: 'תל אביב'},
            {value: 'חיפה והסביבה'},
            {value: 'השרון והסביבה'},
            {value: 'באר שבע'},
          ],
          labelKey: 'value'
        },
        category: {
          placeholder: 'תוחמתה גוס',
          labelKey: 'name',
          valueKey: 'id'
        },
        subcategories: {
          placeholder: 'קטגוריות משנה',
          labelKey: 'name',
        },
      },
    }
  },
  props: {
    name: {
      default: '',
    },
    working_area: {
      default: '',
    },
    category_id: {
      default: '',
    },
    subcategories: {
      default: function () { return [] },
    },
    email: {
      default: '',
    },
    phone: {
      default: '',
    },
    avatar: {
      default: null,
    },
  },
  computed: {
    isSubcatsSelectDisabled(){
      return !this.category_id;
    },
    avatarStyles(){
      //check if avatar is already an url
      let url = '';
      if(typeof this.avatar === 'string'){
        url = this.$env.API_URL + this.avatar;
      }
      else if(this.avatar instanceof File){
        url = this.avatarSrc;
      }
      else{
        url = '/static/images/profile/defaultAvatar.png';
      }
      return {backgroundImage: 'url('+url+')'};
    },
    getCategories(){
      return this.$store.getters['categories/data'];
    },
    subcatsItems(){
      if(this.category_id && this.$store.getters['categories/isLoaded']){
        return this.$store.getters['categories/getSubCategoriesById'](this.category_id);
      }
      else{
        return [];
      }
    },
  },
  methods: {
    updateWorkingArea(value){
      this.$emit('update:working_area', value);
    },
    onUpdateCategory(value){
      this.$emit('update:category_id', value);
      this.$emit('update:subcategories', []);
    },
    onUpdateSubcats(value){
      this.$emit('update:subcategories', value);
    },
    onAvatarUpdate(file){
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        this.avatarSrc = reader.result;
        this.$emit('update:avatar', file);
      }, false);
      reader.readAsDataURL(file);

    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.personal-info-wrap{
  margin-bottom: 40px;
}
.th-heading{
  margin-bottom: 0px;
}
.personal-info{
  width: 100%;
  display: flex;
  padding-bottom: 55px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

$gutter: 17px;
.forms-col{
  width: 60%;
  margin-left: 20%;
  padding-top: 55px;
  .h-row{
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -$gutter;
    margin-left: -$gutter;
  }
  .col1-2{
    width: 50%;
    padding-right: $gutter;
    padding-left: $gutter;
    margin-bottom: 20px;
  }
}
.form-group{
  .caption{
    color: #333333;
    font-weight: bold;
    margin-bottom: 4px;
    padding-right: ceil($scale1 * 15px);
  }
}


.avatar-col{
  padding-top: 30px;
  width: 20%;
  padding-right: 30px;
  padding-left: 30px;
  input{
    display: none;
  }
  .th-btn{
    width: 100%;
    font-size: 18px;
    padding-right: 0;
    padding-left: 0;
    display: -webkit-inline-flex;
    display: -ms-inline-flex;
    display: inline-flex;
    justify-content: center;
    margin-top: 16px;
  }
}
.avatar{
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
}

.show-changepass-form{
  color: #333;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  &:after{
    content: '';
    display: inline-block;
    width: 9px;
    height: 13px;
    background: url('/static/images/icons/arrow-left-black2.svg') no-repeat center;
    -webkit-background-size: 9px 13px;
    background-size: 9px 13px;
    margin-right: 5px;
  }
}

.changepass-form{
  transition: all .3s ease-out;
  overflow: hidden;
}
</style>
