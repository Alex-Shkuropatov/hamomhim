<template>
  <div @click="open" v-click-outside="() => opened = false" class="dropdown" :class="{ opened: opened }">
    <button class="th-input main" type="button" :class="{ placeholded: placeholded }">
      {{ current }}
      <div class="arr">
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L0.803847 9.78799e-07L11.1962 7.02746e-08L6 9Z" fill="#E0E0E0"/>
        </svg>
      </div>
    </button>
    <select v-show="false">
      <option></option>
    </select>
    <div v-if="opened" class="popup">
      <div class="slider">
        <button class="item" @click="select(item)" v-for="item in items" type="button">
          {{ item[labelKey] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueClickOutside from 'v-click-outside';

export default {
  props: {
    items: {

    },
    value: {

    },
    placeholder: {

    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    }
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    select(item) {
      let value = item[this.valueKey];
      this.$emit('input', value);
    },
    open() {
      this.opened = !this.opened;
    },
  },
  directives: {
    ClickOutside: VueClickOutside.directive
  },
  computed: {
    current() {
      if(!this.result) {
        return this.placeholder;
      } else {
        return this.result[this.labelKey];
      }
    },
    result(){
      return this.items.find(e => e[this.valueKey] === this.value);
    },
    placeholded() {
      return !this.result;
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  &.less-rounded-corners{
    border-radius: 8px;
  }
  .main {
    width: 100%;
    font-size: 18px;
    text-align: right;
    position: relative;
    font-weight: 300;
    .arr {
      position: absolute;
      right: auto;
      left: 8px;
      top: 0px;
      width: 25px;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
    }
    &.placeholded {
      color: #BDBDBD;
      font-weight: normal;
    }
  }
  .th-input{
 border:none;
    height: 42px;
  }
  .popup {
    top: 38px;
    width: 100%;
    position: absolute;
    max-height: 300px;
    overflow-y: auto;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding-top: 6px;
    z-index: 100000;
    .slider {
      width: 100%;
      .item {
        width: 100%;
        display: block;
        font-size: 18px;
        font-weight: 300;
        padding: 5px 20px;
        text-align: left;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        display: flex;
        align-items: center;
        text-align: right;
        color: rgba(51, 51, 51, 0.65);
        &:hover{
          background-color: gainsboro;
        }
      }
    }

    // &::-webkit-scrollbar {
    //   width: 20px;
    //   height: 50px;
    // }
    //
    // &::-webkit-scrollbar-track {
    //   border-bottom: 10px solid white;
    //   border-top: 25px solid white;
    //   background: #F2F2F2;
    //   border-left: 9px solid white;
    //   border-right: 9px solid white;
    // }
    //
    //
    // &::-webkit-scrollbar-thumb {
    //   border-radius: 9px;
    //   background: #E0E0E0;
    //   border-left: 7px solid white;
    //   border-right: 7px solid white;
    // }

  }
  &.opened {
    button {
      z-index: 2;
    }
    .main {
      .arr {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
}

</style>
