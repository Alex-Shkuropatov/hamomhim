<template>
  <div class="section-wrap">
    <div class="th-heading">ציון שאולוב</div>
    <div class="section-inner">
      <div class="inputs-col">
        <div class="form-group">
          <theme-textarea placeholder="Tell about yourself" :value="bio" @input="$emit('update:bio', arguments[0])"></theme-textarea>
        </div>
        <div class="d-flex">
          <div class="geo-icon"></div>
          <div class="form-group address-group">
            <div class="caption">address</div>
            <theme-input placeholder="address" :value="address" @input="$emit('update:address', arguments[0])"></theme-input>
          </div>
        </div>
      </div>
      <div class="img-col">
        <div class="image" :style="bioImageStyle"></div>
        <label class="th-btn th-btn-blue th-btn-md upload-trigger">
          upload new photo
          <input type="file" @change="onFileUpload($event.target.files[0])">
        </label>
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
      bioImageSrc: ''
    }
  },
  props: {
    address: {
      default: '',
    },
    bio: {
      default: '',
    },
    bio_image: {
      default: null
    }
  },
  computed: {
    bioImageStyle(){
      var url = '';
      if(typeof this.bio_image === 'string'){
        url = this.$env.API_URL + this.bio_image;
      }
      else if(this.bio_image instanceof File){
        url = this.bioImageSrc;
      }
      else{
        url = '/static/images/default/default-image-rect.svg';
      }
      return {backgroundImage: 'url('+url+')'};
    }
  },
  methods: {
    onFileUpload(file){
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        this.bioImageSrc = reader.result;
        this.$emit('update:bio_image', file);
      }, false);
      reader.readAsDataURL(file);
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
.upload-trigger{
  input{
    display: none;
  }
}
</style>
