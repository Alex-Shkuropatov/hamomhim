<template>
<div class="wrapper">
  <categories-slider/>

  <services/>
</div>

</template>

<script>
import CategoriesSlider from '../components/index/CategoriesSlider.vue'
import Services from '../components/orders/Services.vue'
export default {
  data(){
    return {

    };
  },
  components: {
CategoriesSlider,
    Services
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
