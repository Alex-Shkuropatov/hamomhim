<template>
<div class="wrapper">
  <categories-slider class="slider-cat" @category:select='onCategory' />

  <services class="services-block"  v-show="showServices" @send='OnCategories' v-bind="category" />

  <repair-works  v-show="showWorks" @send='onForm' />
</div>

</template>

<script>
import CategoriesSlider from '../../components/index/CategoriesSlider.vue'
import Services from '../../components/orders/Services.vue'
import RepairWorks from '../../components/orders/RepairWorks.vue'
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
      checked: [],
    };
  },
  methods:{
    onCategory(data){
      let element = document.getElementsByClassName('services-block')[0];
    if (data){
      element.scrollIntoView({block: "center", behavior: "smooth"});
    }
      this.category.subcategories = data.subcategories;
      this.category.name = data.name;
      this.category.id = data.id;
      this.showServices= true;
      this.checked = [];
      this.showWorks =false;

    },
    OnCategories(data){

      this.showWorks= true;
      this.checked = data.checked;
      let element = document.getElementsByClassName('services-block')[0];
      element.scrollIntoView(true);
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
            this.$router.push({
              name: 'search-workers',
              params:
                  {
                    'orderId':response.data.orderId,
                  }
            });
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
.wrapper{
padding-top: 20px;
}
</style>
