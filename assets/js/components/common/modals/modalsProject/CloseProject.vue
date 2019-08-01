<template>

            <div class="content-wrapper third-message">
                <h2 class="title">סיכום פרויקט</h2>
                <p class="projectName">נא הזן את סכום הפרויקט</p>
                <input type="text" v-model="price">
                <div class="buttons-wrapper">
                  <button class="saveB"  style="text-align:center" @click='closeProject' >לוטיב</button>
                    <button class="closeB"  style="text-align:center" @click='close' > טקיורפ רוגס</button>
                </div>
            </div>

</template>

<script>
  import ModalClose from '../../ModalClose'


  export default {
      methods: {
          close() {
              this.$store.commit('modals/alert/close');

          },
          closeProject() {
              this.$router.push('projects/closed-projects');
          },

      },
      components: {
          ModalClose,
      },
      data: function () {
          return {
              price: '',
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
    .content-wrapper{
        background-color: white;
    }
</style>