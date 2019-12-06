<template>
  <div class="file-upload-container">
    <div class="files-list">
      <div class="item" v-for="file in value">
        <div class="item-element">
          {{file.file.name}}
        </div>
        <a href="#" class="th-btn th-btn-blue delete-btn" @click.prevent="onDeleteFile(file.id)">הסר מסמך</a>
      </div>
    </div>
    <label class="upload-btn" v-if="!disabled">
      <span class="caption">הוסף קבצים</span>
      <input type="file" multiple @change="onFileUpload($event.target.files)">
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      onFileUpload(files) {
        let newFiles = [];
        for (let i = 0; i < files.length; i++) {
          newFiles.push({id: generateGuid(), file: files[i]});
        }
        //this.files = this.files.concat(newFiles);
        this.$emit('input', this.value.concat(newFiles));
      },
      onDeleteFile(id) {
        this.$emit('input', this.value.filter(file => file.id !== id));
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/vars.scss';

  .files-list {
    .item {
      margin: 5px 0;
      background: #FFFFFF;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      border-right: 5px solid $clr-blue;
      padding: 10px 14px;
      display: flex;
      align-items: center;

      .item-element {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  .delete-btn {
    padding-right: 30px;
    padding-left: 30px;
    flex-shrink: 0;
    margin-right: auto;
  }

  .upload-btn {
    display: flex;
    -ms-align-items: center;
    align-items: center;
    padding-right: 25px;
    margin-right: 10px;
    margin-top: 20px;
    background: url('/static/images/icons/attachFiles.svg') no-repeat right center;
    -webkit-background-size: 13px 27px;
    background-size: 13px 27px;
    height: 30px;
    cursor: pointer;

    .caption {
      text-decoration: underline;
      color: #4F4F4F;
    }
  }

  input {
    display: none;
  }
</style>
