<template>
<div class="wrapper">
  <categories-slider @category:select='onCategory' />

  <services v-show="showServices" @send='OnCategories' v-bind="category" />

  <repair-works v-show="showWorks" @send='onForm' />
</div>

</template>

<script>
import CategoriesSlider from '../components/index/CategoriesSlider.vue'
import Services from '../components/orders/Services.vue'
import RepairWorks from '../components/orders/RepairWorks.vue'
export default {
  data() {
    return {
     category:{
       name: '',
       id : '',
       subcategories : [] ,
     },
      showServices: false,
      showWorks: false,
      checked: '',
    };
  },
  methods:{
    onCategory(data){
      console.log(data);
      console.log(data.subcategories);
      this.category.subcategories = data.subcategories;
      this.category.name = data.name;
      this.category.id = data.id;
      this.showServices= true;
    },
    OnCategories(data){
      this.showWorks= true;
      this.checked = data.checked;
    },
    onForm(data){
      data.append('subcategories[]', this.category.subcategories);
      data.append('categoryId', this.category.id);
      console.log(data);
    },
  },
  components: {
CategoriesSlider,
    Services,
    RepairWorks
  },
}
</script>

<style lang="scss" scoped>

</style>
