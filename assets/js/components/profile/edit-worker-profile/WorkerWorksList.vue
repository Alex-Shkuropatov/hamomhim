<template>
  <div class="section-wrap">
    <div class="th-heading">פרוייקטים אחרונים </div>
    <div class="section-inner">
      <div class="h-row d-flex">
        <div class="add-new-work" @click="$store.commit('modals/addWorkerWork/open', 0)">
          <div class="image"></div>
          <div class="th-btn th-btn-blue th-btn-md">
            Add new work
            <span class="plus"></span>
          </div>
        </div>
        <div v-for="work in value" class="work-item">
          <div class="worker-work-inner w-100">
            <div class="delete" @click="onDeleteItem(work.id)"></div>
            <div class="image" :style="{ 'backgroundImage' : 'url(' + $env.API_URL + work.images[0] + ')' }"></div>
            <div class="text">
              <div class="name clr-blue">{{work.name}}</div>
              <div class="description">{{work.description}}</div>
            </div>
          </div>
          <div class="th-btn th-btn-blue th-btn-md">Edit</div>
        </div>
      </div>
    </div>

    <!-- popups -->
    <transition name="slide-fade">
      <add-worker-work v-if="$store.getters['modals/addWorkerWork/isOpened']"></add-worker-work>
    </transition>
  </div>
</template>

<script>
import addWorkerWork from '../../modals/editWorkerProfile/addWorkerWork.vue';

export default {
  data(){
    return {}
  },
  components: {
    addWorkerWork
  },
  props: {
    value: {
      type: Array,
    }
  },
  methods: {
    onDeleteItem(id){
      axios.post('/api/deleteWorkerWork', {id : id})
        .then((response) => {
          if(response.data.success){
            this.$emit('input', this.value.filter(item => item.id !== id));
          }
          else{
            alert(repsonse.data.message);
          }
        })
    }
  },

}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';


$gutter: ceil($scale1 * 18px);
.h-row{
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -$gutter;
  margin-left: -$gutter;
}
.add-new-work{
  margin-right: $gutter;
  margin-left: $gutter;
  width: calc(25% - #{$gutter} * 2);
  display: flex;
  position: relative;
  flex-direction: column;
  -ms-align-items: center;
  align-items: center;
  margin-bottom: ceil($scale1 * 60px);
  .image{
    flex-grow: 1;
    width: 100%;
    background: url('/static/images/default/default-image-rect2.svg') no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
    margin-bottom: 10px;
    padding-top: 73%;
  }
}
.work-item{
  margin-right: $gutter;
  margin-left: $gutter;
  width: calc(25% - #{$gutter} * 2);
  position: relative;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  align-items: center;
  margin-bottom: ceil($scale1 * 60px);
  .worker-work-inner{
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    padding-bottom: 15px;
  }
  .image{
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    padding-top: 73%;
    width: 100%;

  }
  .name{
    font-weight: bold;
    font-size: ceil($scale1 * 24px);
    margin-top: 10px;
  }
  .text{
    font-size: ceil($scale1 * 20px);
    padding-right: 14px;
    padding-left: 14px;
  }
}
.th-btn{
  width: 80%;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  font-size: ceil($scale1 * 18px);
}

.delete{
  position: absolute;
  width: ceil($scale1 * 38px);
  height: ceil($scale1 * 38px);
  background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:before,
  &:after{
    content: '';
    background: #fff;
    height: 3px;
    width: 50%;
    border-radius: 5px;
    position: absolute;
    transform: rotate(45deg);
  }
  &:after{
    transform: rotate(-45deg);
  }
}


//popup animation
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
