<template>
<div class="document-element">
  <svg class="svg-icon" width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.2382 5.66992H36.7735V41.6536C36.7735 44.0441 34.8276 45.9899 32.4371 45.9899H17.5969H5.7959V47.3238C5.7959 48.8513 7.03563 50.091 8.56306 50.091H23.398H38.2329C39.7604 50.091 41 48.8513 41 47.3238V8.43709C41.0001 6.90965 39.7656 5.66992 38.2382 5.66992Z" fill="#2871D7"/>
    <path d="M17.5969 44.421H32.4318C33.9592 44.421 35.199 43.1814 35.199 41.654V5.67033V2.76716C35.199 1.23973 33.9592 0 32.4318 0H17.5969H12.6641V0.915414C12.6745 1.00957 12.6798 1.10896 12.6798 1.20835V7.23961V8.78797C12.6798 10.9379 10.9327 12.685 8.78274 12.685H7.23438H1.20311C1.12465 12.685 1.04096 12.6798 0.962492 12.6746H0V41.654C0 43.1814 1.23973 44.421 2.76716 44.421H5.80111H17.5969ZM18.1566 35.0159H8.48458C7.76271 35.0159 7.17684 34.43 7.17684 33.7081C7.17684 32.9862 7.76271 32.4004 8.48458 32.4004H18.1618C18.8837 32.4004 19.4695 32.9862 19.4695 33.7081C19.4695 34.43 18.8784 35.0159 18.1566 35.0159ZM27.8338 28.3413H8.48458C7.76271 28.3413 7.17684 27.7553 7.17684 27.0335C7.17684 26.3116 7.76271 25.7258 8.48458 25.7258H27.8338C28.5557 25.7258 29.1415 26.3116 29.1415 27.0335C29.1415 27.7553 28.5557 28.3413 27.8338 28.3413ZM8.48458 18.6378H27.8338C28.5557 18.6378 29.1415 19.2237 29.1415 19.9456C29.1415 20.6674 28.5557 21.2533 27.8338 21.2533H8.48458C7.76271 21.2533 7.17684 20.6674 7.17684 19.9456C7.17684 19.2237 7.76271 18.6378 8.48458 18.6378Z" fill="#2871D7"/>
    <path d="M1.20302 11.1159H8.78264C8.78787 11.1159 8.79833 11.1159 8.80356 11.1159C10.0695 11.1054 11.0947 10.0802 11.1052 8.81427C11.1052 8.80904 11.1052 8.79858 11.1052 8.79335V1.20849C11.1052 0.507545 10.5298 0.0419922 9.9335 0.0419922C9.6458 0.0419922 9.3581 0.146611 9.11747 0.387234L0.376528 9.12813C-0.355803 9.86046 0.16206 11.1159 1.20302 11.1159Z" fill="#2871D7"/>
  </svg>

  <div class="file-name" v-once>
    {{file.name}}
  </div>

  <post-close class="close" @click.native="close" />

</div>
</template>

<script>
import PostClose from '../common/PostClose'
  export default {
    props: {
      file: {
        type: Object,
      },
    },
    components: {
      PostClose
    },
    methods: {
      close(){
        this.$emit('close', {
           id:this.file.id,
          name: '/files/'+this.file.name,
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .document-element{
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 1059px;
    height: 90px;
    margin-top: -2px;
    border-top: 2px solid #E0E0E0;
    border-bottom: 2px solid #E0E0E0;
    @media screen and (max-width:1440px){
      width: 500px;
    }
    @media screen and (max-width:480px){
      width: 300px;
    }
    .file-name{
      margin-right:50px;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 75%;
      white-space: nowrap;
    }
    .svg-icon{
    }
    .close{
      top: 30px;
      @media screen and (max-width: 480px) {
        top:0;
        left: 1px;
        width: 30px;
      }
    }
  }
</style>