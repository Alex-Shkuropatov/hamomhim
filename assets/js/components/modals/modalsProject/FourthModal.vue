<template>

    <div class="content-wrapper third-message">
        <h2 class="title">Add new project</h2>
        <p class="projectName">Select subcategory</p>
        <div class="selectWrapper">

                <multiselect
                        v-model="value"
                        :options="options"
                        :multiple="true"
                        :close-on-select="false"
                        :clear-on-select="false"
                        placeholder="Pick some"
                        label="name"
                        track-by="value"
                        :preselect-first="false"
                        :show-labels="false"
                >
                </multiselect>

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
  import Multiselect from 'vue-multiselect'

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
            this.$emit('send', {
                value : this.value.map( (item) => {
                 return item.value;
                }),
                modal : this.modal,
            })
        },
    },
    components: {
      Modal,
      DropDown,
      Multiselect
    },
    data : function () {
      return {
        modal:4,
          value: [],
          options: [
              { name: 'Subcategory 1', value: 1 },
              { name: 'Subcategory 2', value: 2 },
              { name: 'Subcategory 3', value: 3 }
          ]
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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