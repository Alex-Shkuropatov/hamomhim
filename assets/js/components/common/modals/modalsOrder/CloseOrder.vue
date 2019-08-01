<template>

    <div class="content-wrapper third-message">
        <h2 class="title">סיכום פרויקט</h2>
        <p class="projectName">נא הזן את סכום הפרויקט</p>

        <div class="buttons-wrapper">
            <button class="saveB" style="text-align:center" @click='send' >Create</button>
            <div class="modalNumber">{{modal}}/{{modalQuantity}}</div>
            <button class="closeB" style="text-align:center" @click='back' >Previous step</button>
        </div>
    </div>

</template>

<script>
  import Modal from './../../Modal.vue';


  export default {
      methods: {
          close() {
              this.$store.commit('modals/alert/close');
          },
          send() {
              let counter = this.categories.value;
              console.log(this.categories.items);
              this.$emit('send', {
                  value: this.categories.items[counter - 1]['label'],
                  modal: this.modal,
              })
          },

      },
      components: {
          Modal,
      },
      data: function () {
          return {

          }
      }
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