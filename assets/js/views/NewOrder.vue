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
     for(let i=0; i<this.checked.length; i++){
       data.append('subcategories[]', this.checked[i]);
     }
      data.append('categoryId', this.category.id);
      data.append('projectId', this.$route.params.id);

      axios.post('/api/addNewOrder', data ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }})
          .then((response) => {
            console.log(response);
            this.$router.push({ name: 'orders' });
          })
          .catch((error) => {
            console.log(error.response.data);
          });
    },
  },
  components: {
CategoriesSlider,
    Services,
    RepairWorks
  },
  mounted() {
    console.log(this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped>

</style>
