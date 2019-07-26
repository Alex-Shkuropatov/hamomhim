<template>
  <modal v-if="$store.getters['modals/alert/isOpened']" @close="close">
    <div class="content-wrapper">
     <h2 class="title">Add new project</h2>
      <p >Enter project name</p>
      <form action="">
        <input class="name" type="text">
        <textarea class="description" name="description" id="" cols="30" rows="10"></textarea>
      </form>
      <button class="sendData th-btn th-btn-blue th-btn-sm " style="text-align:center" @click='close' >חזור לאתר</button>
    </div>
  </modal>
</template>

<script>
  import Modal from './../Modal';

  export default {
    methods: {
      close() {
        this.$store.commit('modals/alert/close');
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped>
  .sendData{
    padding-right: 141px;
    margin-top: 40px;
    background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
    border-radius: 50px;
    width: 355px;
    height: 70px;
    font-family: Assistant;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    &:hover {
      color:  #2871D7 ;
    }
  }
  .content-wrapper{
    .title{

    }
    p{

    }
    form {
      .name{

      }
      .description{
        resize: none;
      }
    }
  }
</style>