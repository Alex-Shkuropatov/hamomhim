<template>
  <div class="section-wrap">
    <div class="th-heading">מסמכים</div>
    <div class="file-upload-container">

      <div class="upload-btn-wrap">
        <label class="th-btn th-btn-blue th-btn-md">
          <span class="caption">
            Upload new file
          </span>
          <span class="plus"></span>
          <input type="file" @change="onFileUpload($event.target.files[0])">
        </label>
      </div>

      <div class="files-list">
        <div class="item" v-for="file in value">
          {{file.name }}
          <a href="#" class="delete-btn" @click.prevent="onDeleteFile(file.id)"></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array
    }
  },
  methods: {
    onFileUpload(file){
      let formData = new FormData();
      formData.append('name', file.name);
      formData.append('file', file);

      axios.post('/api/addPersonalFile', formData)
        .then(response => {
          if(response.data.success){
            //add file to files array
            let newFiles = [];
            newFiles.push( {id: response.data.value.id, name: response.data.value.name});

            this.$emit('input', this.value.concat(newFiles));
          }
          else{
            if(response.data.hasOwnProperty('message')){
              alert(response.data.message);
            }
          }
        });

    },
    onDeleteFile(id){
      axios.post('/api/deletePersonalFile', {id: id})
        .then((response) => {
          if(response.data.success){
            this.$emit('input', this.value.filter(file => file.id !== id));
          }
          else{
            alert(response.data.message);
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';

.upload-btn-wrap{
  background: #FFFFFF;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border-right: ceil($scale1 * 12px) solid $clr-blue;
  padding: ceil($scale1 * 25px) ceil($scale1 * 25px);
  .th-btn{
    font-size: 16px;
  }
}


.files-list{
  .item{
    margin: 8px 0;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border-right: ceil($scale1 * 12px) solid $clr-blue;
    padding: ceil($scale1 * 25px) ceil($scale1 * 25px);
    display: flex;
    align-items: center;
    font-size: ceil($scale1 * 24px);
    font-weight: bold;
  }
}

.delete-btn{
  width: ceil($scale1 * 36px);
  height: ceil($scale1 * 36px);
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: auto;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background: $clr-blue;
  &:before,
  &:after{
    content: '';
    background: #fff;
    height: 3px;
    width: 50%;
    border-radius: 5px;
    position: absolute;
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
}

input{
  display: none;
}

@media(max-width: 576px){
  .section-wrap{
    margin-top: 15px;
  }
  .upload-btn-wrap,
  .files-list .item{
    padding: 10px;
    font-size: 14px;
  }
}
</style>
