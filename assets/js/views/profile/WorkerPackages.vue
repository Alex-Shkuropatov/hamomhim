<template>
  <div class="h-container">
    <div class="th-heading clr-blue text-center">מנוי באתר קבוצת המומחים</div>
    <div class="packages-list">
      <template v-if="packages.length">
        <div v-for="pack in packages" class="package-item">
          <div class="title-line">
            <div class="title clr-blue">{{pack.title}}</div>
          </div>
          <div class="content-wrap">
            <div class="desc">{{pack.description}}</div>
            <div class="img-wrap">
              <img :src="pack.icon" alt="">
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      packages: [
        { title: 'דף נחיתה', description: 'עבור רישום באתר ובניה של דף נחיתה לקבלן מחיר חד פעמי 057₪ פלוס מעמ', price: 750, icon: '/static/images/packages/package1.svg'},
        { title: 'דף נחיתה', description: 'עבור רישום באתר ובניה של דף נחיתה לקבלן מחיר חד פעמי 057₪ פלוס מעמ', price: 750, icon: '/static/images/packages/package2.svg'},
        { title: 'דף נחיתה', description: 'עבור רישום באתר ובניה של דף נחיתה לקבלן מחיר חד פעמי 057₪ פלוס מעמ', price: 750, icon: '/static/images/packages/package3.svg'},
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~@/vars.scss';
.packages-list{
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ceil($scale1 * 50px);
}
.package-item{
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px ceil($scale1 * 4px) ceil($scale1 * 20px) rgba(0, 0, 0, 0.15);
  width: calc(33.333% - 20px );
  position: relative;
  margin-bottom: 15px;
  &:after{
    content: '';
    display: block;
    background: $clr-blue;
    width: 100%;
    height: ceil($scale1 * 10px);
    position: absolute;
    bottom: 0;
  }
  .title-line{
    padding: ceil($scale1 * 10px);
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
  }
  .title{
    font-size: ceil($scale1 * 36px);
    font-weight: 900;
  }
  .content-wrap{
    padding: ceil($scale1 * 50px);
  }
  .desc{
    margin-bottom: ceil($scale1 * 50px);
    font-size: ceil($scale1 * 24px);
    font-weight: 500;
    line-height: 1.3;
  }
  svg, img{
    width: auto;
    height: ceil($scale1 * 155px);
  }
}

@media(max-width: $breakpoint3){
  .package-item{
    width: calc(33.333% - 10px );
    &:after{
      height: 5px;
    }
    .title{
      font-size: 24px;
    }
    .content-wrap{
      padding: ceil($scale3 * 50px);
    }
    .desc{
      margin-bottom: ceil($scale3 * 50px);
      font-size: 18px;
    }
    svg, img{
      height: ceil($scale3 * 155px);
    }
  }
}

@media (max-width: $breakpoint4){
  .package-item{
    width: calc(50% - 10px );
    box-shadow: 0px ceil($scale2 * 4px) ceil($scale4 * 20px) rgba(0, 0, 0, 0.15);
    &:last-child{
      margin-right: auto;
      margin-left: auto;
    }
  }
  @media (max-width: $breakpoint5){
    .package-item{
      width: calc(50% - 5px );
      .content-wrap{
        padding: 10px;
      }
      .title{
        font-size: 18px;
      }
      .desc{
        font-size: 15px;
      }
    }
  }
}
</style>
