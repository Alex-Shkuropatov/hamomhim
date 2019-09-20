<template>
  <div class="section-wrap">
    <div class="th-heading">ציון שאולוב</div>
    <div class="section-inner">
      <div class="inputs-col">
        <div class="form-group">
          <theme-textarea placeholder="Tell about yourself" v-model="bio"></theme-textarea>
        </div>
        <div class="d-flex">
          <div class="geo-icon"></div>
          <div class="form-group address-group">
            <div class="caption">address</div>
            <theme-input placeholder="address" v-model="address"></theme-input>
          </div>
        </div>
      </div>
      <div class="img-col">
        <div class="image" :style="{ 'backgroundImage' : bioImageSrc }"></div>
        <div class="th-btn th-btn-blue th-btn-md">upload new photo</div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeInput from '../../common/ThemeInput.vue';
import ThemeTextarea from '../../common/ThemeTextarea.vue';

export default {
  components: {
    ThemeInput,
    ThemeTextarea,
  },
  data(){
    return {
      address: '',
      bio: '',
      bioImage: '',
      bioImageSrc: 'url(' + window.location.origin + '/static/images/default/default-image-rect.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.th-heading{
  margin-bottom: 10px;
}
.section-wrap{
  margin-bottom: 40px;
}
.section-inner{
  display: flex;
  padding: 30px 30px 40px 40px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
}
.img-col{
  width: 35%;
  margin-right: 15%;
}
.inputs-col{
  width: 50%;
}
.form-group{
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
  .caption{
    font-weight: bold;
    padding-right: 15px;
  }
}
.geo-icon{
  width: ceil($scale1 * 47px);
  height: ceil($scale1 * 67px);
  margin-left: ceil($scale1 * 14px);
  background: url('/static/images/icons/geolocation.svg') no-repeat center;
  -webkit-background-size: contain;
  background-size: contain;
}
.address-group{
  flex-grow: 0.5;
}

.img-col{
  text-align: center;
  .image{
    height: 185px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    margin-bottom: 20px;
  }
}
</style>
