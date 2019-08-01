<template>

    <div class="content-wrapper third-message">
        <h2 class="title">Add new project</h2>
        <p class="projectName">Select subcategory</p>
        <div class="selectWrapper">
            <drop-down placeholder="Work area" v-model="categories.value" :items="categories.items"/>
        </div>
        <div class="buttons-wrapper">
            <button class="saveB" style="text-align:center" @click='send' >Create</button>
            <div class="modalNumber">{{modalQuantity}}/{{modal}}</div>
            <button class="closeB" style="text-align:center" @click='back' >Previous step</button>
        </div>
    </div>

</template>

<script>
  import Modal from './../../Modal.vue';
  import DropDown from './../../DropDown.vue'


  export default {
    methods: {
        close() {
            this.$store.commit('modals/alert/close');
        },
        back () {
            this.$emit('back', {
                modal : 2,
            })
        },
        send () {
            let counter = this.categories.value;
            this.$emit('send', {
                value : this.categories.items[counter-1]['label'],
                modal : this.modal,
            })
        },
    },
    components: {
      Modal,
      DropDown,
    },
    data : function () {
      return {
        modal:4,
        categories: {
          items: [
            { label: 'Subcategories', value: 1 },
            { label: 'Subcategories', value: 2 },
            { label: 'Subcategories', value: 3 }
          ],
          value: '',
        }
      }
    },
      props:  {
          modalQuantity : {
              type: Number,
              required: true
          }
      },
  }
</script>

<style lang="scss" scoped>

    .buttons-wrapper{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        button{
            color: white;
            width: 250px;
            height: 50px;
            &:hover  {
                color:black;
            }
        }
        .closeB{
            margin-right: 10px;
            background: #E0E0E0;
            border-radius: 50px;
        }
        .saveB{
            margin-left: 10px;
            background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
            border-radius: 50px;
        }
    }
</style>