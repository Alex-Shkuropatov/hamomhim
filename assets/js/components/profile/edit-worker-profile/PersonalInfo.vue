<template>
  <div class="personal-info-wrap">
    <div class="th-heading">ישאר עדימ</div>
    <div class="personal-info">
      <div class="forms-col">
        <div class="form-group">
          <div class="caption">שם מלא</div>
          <theme-input placeholder="שם מלא" v-model="profileData.name"></theme-input>
        </div>
        <div class="form-group">
          <div class="caption">הדובע רוזיא</div>
          <drop-down v-bind="selects.working_area"></drop-down>
        </div>
      </div>
      <div class="avatar-col">
        <div class="avatar"></div>
        <button class="th-btn th-btn-md th-btn-blue">Upload new photo</button>
      </div>
    </div>
  </div>
</template>

<script>

import ThemeInput from '../../common/ThemeInput.vue';
import DropDown from '../../common/DropDown.vue';

export default {
  components: {
    ThemeInput,
    DropDown
  },
  data(){
    return {
      profileData: {
        name: '',
        working_area: '',
        category: {},
        subcategory: {},
        email: '',
        phone: '',

        new_password: '',
        confirm_password: '',

        avatar: ''
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
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
