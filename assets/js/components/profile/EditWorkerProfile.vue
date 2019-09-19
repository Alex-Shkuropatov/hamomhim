<template>
  <div class="profie-page-wrapper">
    <personal-info class="h-container"/>
    <bio-info class="h-container"/>
    <worker-works-list
      v-model="workerWorks"
      class="h-container"
    />
    <feedback class="feedback"/>
    <worker-files
      class="h-container"
      v-model="files"
    />
    <div class="submit-line h-container">
      <button class="th-btn th-btn-blue th-btn-md wide">Save</button>
    </div>

  </div>

</template>

<script>
import PersonalInfo from './edit-worker-profile/PersonalInfo.vue';
import BioInfo from './edit-worker-profile/BioInfo.vue';
import WorkerWorksList from './edit-worker-profile/WorkerWorksList.vue';
import Feedback from './Feedback.vue';
import WorkerFiles from './edit-worker-profile/WorkerFiles.vue';

export default {
  components: {
    PersonalInfo,
    BioInfo,
    WorkerWorksList,
    Feedback,
    WorkerFiles
  },
  data(){
    return {
      user: {},
      workerWorks: [],
      files: []
    }
  },
  methods: {
    getDataFromApi(){
      axios.post('api/getWorkerProfile', {'user_id' : this.$store.getters['user/getField']('id')})
        .then((response) => {
          if(response.data.success){
            this.user = response.data.value.user;
            this.workerWorks = response.data.value.workerWork;
            this.files = response.data.value.files;
          }
          else{
            alert(response.message);
          }
        })
    }
  },
  mounted(){
    this.getDataFromApi();
  }
}
</script>

<style lang="scss" scoped>
.feedback{
  opacity: .25;
}
.submit-line{
  margin: 30px auto;
}
</style>
