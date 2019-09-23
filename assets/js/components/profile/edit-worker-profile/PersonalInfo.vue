<template>
  <div class="personal-info-wrap">
    <div class="th-heading">מידע ראשי</div>
    <div class="personal-info">
      <div class="avatar-col">
        <div class="avatar" :style="{ backgroundImage: avatarSrc }"></div>
        <label class="th-btn th-btn-md th-btn-blue">
          <span>Upload new photo</span>
          <input type="file" @change="onAvatarUpdate($event.target.files[0])">
        </label>
      </div>

      <div class="forms-col">
        <div class="h-row">
          <div class="form-group col1-2">
            <div class="caption">שם מלא</div>
            <theme-input placeholder="שם מלא" v-model="profileData.name" class="th-input less-rounded-corners"></theme-input>
          </div>
          <div class="form-group col1-2">
            <div class="caption">הדובע רוזיא</div>
            <drop-down v-bind="selects.working_area" v-model="profileData.working_area" class="less-rounded-corners"></drop-down>
          </div>
          <div class="form-group col1-2">
            <div class="caption">סוג התמחות</div>
            <drop-down v-bind="selects.category" :items="getCategories" v-model="profileData.category" class="less-rounded-corners"></drop-down>
          </div>
          <div class="form-group col1-2">
            <div class="caption">קטגוריות משנה</div>
            <theme-multiselect v-bind="selects.subcategories" v-model="profileData.subcategories" class="less-rounded-corners"></theme-multiselect>
          </div>
          <div class="form-group col1-2">
            <div class="caption">מייל</div>
            <theme-input placeholder="מייל" type="email" v-model="profileData.email" class="th-input less-rounded-corners"></theme-input>
          </div>
          <div class="form-group col1-2">
            <div class="caption">טלפון</div>
            <theme-input placeholder="טלפון" type="phone" v-model="profileData.phone" class="th-input less-rounded-corners"></theme-input>
          </div>

          <pre>{{profileData.category}}</pre>

        </div>

        <div class="show-changepass-form" :class="{ 'active' : isPassFormShown }" @click="toggleChangePassForm($refs.changepassForm)">Change password</div>

        <div class="h-row changepass-form" ref="changepassForm" style="height:0;">
          <div class="form-group col1-2">
            <div class="caption">old password</div>
            <theme-input placeholder="" type="password" v-model="profileData.old_password" class="th-input less-rounded-corners"></theme-input>
          </div>
          <div class="form-group col1-2">
            <div class="caption">password</div>
            <theme-input placeholder="" type="password" v-model="profileData.new_password" class="th-input less-rounded-corners"></theme-input>
          </div>
          <div class="form-group col1-2">
            <div class="caption">repeat password</div>
            <theme-input placeholder="" type="password" v-model="profileData.repeat_password" class="th-input less-rounded-corners"></theme-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ThemeInput from '../../common/ThemeInput.vue';
import DropDown from '../../common/DropDown.vue';
import ThemeMultiselect from '../../common/ThemeMultiselect.vue';

export default {
  components: {
    ThemeInput,
    DropDown,
    ThemeMultiselect
  },
  data(){
    return {
      isPassFormShown: false,
      profileData: {
        name: '',
        working_area: '',
        category: {},
        subcategories: [],
        email: '',
        phone: '',

        old_password: '',
        new_password: '',
        confirm_password: '',

        avatar: '',
      },
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
          disabled: true,
          items: [],
        },
      },
      avatarSrc: 'url(' + window.location.origin + '/static/images/profile/defaultAvatar.png)',
    }
  },
  methods: {
    onAvatarUpdate(){

    },
    toggleChangePassForm(el){
      if(this.isPassFormShown){
        //helpers.js function
        collapseBlock(el);
      }
      else{
        //helpers.js function
        expandBlock(el);
      }
      this.isPassFormShown = !this.isPassFormShown;
    },
  },
  computed: {
    getCategories(){
      return this.$store.getters['categories/data'];
    }
  }
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
