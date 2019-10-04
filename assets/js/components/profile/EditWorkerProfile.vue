<template>
  <div class="profie-page-wrapper">

    <worker-profile-first-screen :user="user"></worker-profile-first-screen>

    <personal-info v-bind.sync="user" class="h-container"/>
    <bio-info v-bind.sync="user" class="h-container"/>
    <worker-works-list
      v-model="workerWorks"
      class="h-container"
    />
    <feedback v-if="comments.length" :posts="comments" class="feedback"/>
    <worker-files
      class="h-container"
      v-model="files"
    />
    <div class="submit-line h-container">
      <button class="th-btn th-btn-blue th-btn-md wide" @click="saveProfileData">Save</button>
    </div>

  </div>

</template>

<script>
import PersonalInfo from './edit-worker-profile/PersonalInfo';
import BioInfo from './edit-worker-profile/BioInfo.vue';
import WorkerWorksList from './edit-worker-profile/WorkerWorksList';
import Feedback from './Feedback.vue';
import WorkerFiles from './edit-worker-profile/WorkerFiles';
import WorkerProfileFirstScreen from './WorkerProfileFirstScreen';

export default {
  components: {
    PersonalInfo,
    BioInfo,
    WorkerWorksList,
    Feedback,
    WorkerFiles,
    WorkerProfileFirstScreen
  },
  data(){
    return {
      user: {},
      workerWorks: [],
      files: [],
      comments: []
    }
  },
  methods: {
    getDataFromApi(){
      axios.post('api/getWorkerProfile', {'user_id' : this.$store.getters['user/getField']('id')})
        .then(response => {
          if(response.data.success){
            this.user = Object.assign({}, this.user, response.data.value.user);
            this.$set(this.user, 'category_id', response.data.value.category_id);
            this.$set(this.user, 'subcategories', response.data.value.subcategories);
            this.workerWorks = response.data.value.workerWork;
            this.files = response.data.value.files;
          }
          else{
            alert(response.message);
          }
        });

      axios.post('api/getCommentsOnUser', {'worker_id':this.$store.getters['user/getField']('id')})
        .then(response => {
          this.comments = response.data.value;
        });
    },
    saveProfileData(){
      var data = new FormData();
      if(this.user.avatar instanceof File){
        data.append('avatar', this.user.avatar, this.user.avatar.name);
      }
      data.append('user_id', this.$store.getters['user/getField']('id'));
      data.append('name', this.user.name);
      data.append('working_area', this.user.working_area);
      data.append('address', this.user.address);
      data.append('phone', this.user.phone);
      data.append('bio', this.user.bio);
      if(this.user.bio_image instanceof File){
        data.append('bio_image', this.user.bio_image);
      }
      data.append('category', this.user.category_id);
      this.user.subcategories.forEach(function(element){
        data.append('subcategories[]', element.id);
      });
      axios.post('api/updateWorkerProfile', data)
        .then(response => {
          if(response.data.success){
            alert('Profile was successfully edited.');
          }
          else{
            alert('An error occured, please try later or contact site administator.');
          }
        });
    },
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
