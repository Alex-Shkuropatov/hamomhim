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
            <div class="caption">כתובת</div>
            <vue-google-autocomplete
              ref="addressAutoComplete"
              id="map"
              classname="th-input less-rounded-corners autocomplete-address"
              placeholder="כתובת"
              v-on:change="getAddressData"
              country="il"
            />
            <!-- <theme-input placeholder="address" :value="address" @input="$emit('update:address', arguments[0])"></theme-input> -->
          </div>
        </div>
      </div>
      <div class="img-col">
        <div class="image" :style="bioImageStyle"></div>
        <label class="th-btn th-btn-blue th-btn-md upload-trigger">
          העלאת תמונה חדשה
          <input type="file" @change="onFileUpload($event.target.files[0])">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeInput from '../../common/ThemeInput.vue';
import ThemeTextarea from '../../common/ThemeTextarea.vue';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
  components: {
    ThemeInput,
    ThemeTextarea,
    VueGoogleAutocomplete,
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
    },

  },
  watch:{
    address(){
      if (this.address!==''){
        this.$refs.addressAutoComplete.autocompleteText = this.address;
      }
    }
  },
  methods: {
    getAddressData(addressData, placeResultData, id){
      //console.log({addressData, placeResultData, id});
      //console.log(this.$refs.addressAutoComplete.autocompleteText);

      let address = this.$refs.addressAutoComplete.autocompleteText;
      this.$emit('update:address', address);
    },
    onFileUpload(file){
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        this.bioImageSrc = reader.result;
        this.$emit('update:bio_image', file);
      }, false);
      reader.readAsDataURL(file);
    }
  },
  mounted() {
    console.log(this.address);
    if (this.address!==''){
      this.$refs.addressAutoComplete.autocompleteText = this.address;
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
  width: 21%;
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
.autocomplete-address{
  width: 100%;
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

@media (max-width: 768px){
  .img-col{
    width: 45%;
    margin-right: 5%;
  }
  .address-group{
    flex-grow: 1;
  }
}
@media(max-width: 576px){
  .section-inner{
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    padding: 30px 15px 40px 15px;
  }
  .inputs-col,
  .img-col{
    width: 100%;
  }
  .img-col{
    margin-right: 0;
    margin-bottom: 15px;
  }
  .geo-icon{
    width: 35px;
    height: 35px;
    margin-top: auto;
    margin-bottom: 5px;
    margin-left: 5px;
  }
  .autocomplete-address{
    font-size: 14px;
    height: 30px;
  }
}
</style>
