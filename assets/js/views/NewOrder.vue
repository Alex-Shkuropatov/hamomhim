<template>
<div class="wrapper">
  <categories-slider/>

  <services/>

  <repair-works/>
</div>

</template>

<script>
import CategoriesSlider from '../components/index/CategoriesSlider.vue'
import Services from '../components/orders/Services.vue'
import RepairWorks from '../components/orders/RepairWorks.vue'
export default {
  data(){
    return {

    };
  },
  components: {
CategoriesSlider,
    Services,
    RepairWorks
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
