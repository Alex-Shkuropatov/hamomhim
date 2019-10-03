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
    <div v-if="opened" class="popup">
      <div class="slider">
        <div class="item" :class="{ 'checked' : option.selected }" @click.stop="select(option)" v-for="option in filteredOptions">
          <div class="checkbox"></div>
          <span>{{ option[labelKey] }}</span>
        </div>
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
      type: Array,
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
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      opened: false,
      result: undefined,
    };
  },
  methods: {
    select(item) {
      let newItem = Object.keys(item).reduce((object, key) => {
        if (key !== 'selected') {
          object[key] = item[key];
        }
        return object
      }, {});

      let result = this.value;

      if(item.selected){
        console.log('includes');
        result = this.value.filter(e => JSON.stringify(e) !== JSON.stringify(newItem));
      }
      else{
        result.push(newItem);
      }
      this.$emit('input', result);
      this.filteredOptions;

    },
    open() {
      if(!this.disabled){
        this.opened = !this.opened;
      }
    },
  },
  directives: {
    ClickOutside: VueClickOutside.directive
  },
  computed: {
    filteredOptions(){
      this.value;
      //console.log('Multiselect this.value in computed property: ', JSON.stringify(this.value));

      let options = this.items.map(option => {

        option.selected = false;
        if(this.value.filter(e => e.id === option.id).length > 0){
          option.selected = true;
        }
        return option;

      });
      return options;

    },
    current() {
      if(!this.value.length) {
        return this.placeholder;
      } else {
        return this.value.map(e => e[this.labelKey]).join();
      }
    },
    placeholded() {
      return !this.value.length;
    }
  },
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
  user-select: none;
  &.less-rounded-corners{
    border-radius: 8px;
  }
  .main {
    width: 100%;
    font-size: 18px;
    text-align: right;
    position: relative;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 39px;
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
  .popup {
    top: 25px;
    width: 100%;
    position: absolute;
    max-height: 300px;
    overflow-y: auto;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    z-index: 1000;
    padding-top: 25px;

    top: 35px;
    width: 100%;
    position: absolute;
    max-height: 300px;
    overflow-y: auto;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 20px;
    padding-top: 6px;

    .slider {
      width: 100%;
      .item {
        width: 100%;
        display: flex;
        font-size: 18px;
        font-weight: 300;
        padding: 5px 20px;
        text-align: left;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        display: flex;
        align-items: center;
        text-align: right;
        color: rgba(51, 51, 51, 0.65);
        &:hover{
          background-color: gainsboro;
        }

        &.checked .checkbox:after{
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background: url('/static/images/icons/check.svg') no-repeat center;
          -webkit-background-size: 80%;
          background-size: 80%;
        }
      }
      .checkbox{
        width: 21px;
        height: 21px;
        margin-left: 5px;
        border: 1px solid #BDBDBD;
        border-radius: 3px;
      }

    }

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
