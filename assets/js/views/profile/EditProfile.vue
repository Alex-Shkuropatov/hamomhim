<template>
  <edit-worker-profile v-if="role === 'worker'"></edit-worker-profile>
  <edit-architect-profile v-else></edit-architect-profile>
</template>

<script>
import EditWorkerProfile from '../../components/profile/EditWorkerProfile'
import EditArchitectProfile from '../../components/profile/EditArchitectProfile'
export default {
  components: {
    EditWorkerProfile,
    EditArchitectProfile
  },
  computed: {
    role(){
      return this.$store.getters['user/getField']('role');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
