<template>
    <header class="header">
        <div class="h-container">
            <a href="#" class="logo-wrap">
                <img src="/static/images/logo/logo-blue.png" alt="">
            </a>

            <ul class="desktop-menu">
                <li class="menu-item">
                    <router-link :to="{ name: 'index'}">דף</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'about-us'}">אודות</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'blog'}">בלוג</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'how-it-works'}">איך זה עובד</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'contact-us'}">צור קשר</router-link>
                </li>
            </ul>

            <div class="auth-btns">
              <button class="th-btn th-btn-blue th-btn-sm" @click="openLogin">התחברות למערכת</button>
              <button class="th-btn th-btn-empty th-btn-sm" @click="openReg">הרשמה למערכת</button>
            </div>
        </div>
    </header>
</template>

<script>

export default {
  components: {
  },
  methods: {
      openReg(){},
      openLogin(){},
  }
}
</script>

<style lang="scss" scoped>

@import '~@/vars.scss';

.header{
    height: ceil($scale1 * 100px);//80px//
    background: #fff;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    .h-container{
        display: flex;
        -ms-align-items: center;
        align-items: center;
        justify-content: space-between;
    }
}
.logo-wrap{
  width: ceil($scale1 * 220px);
  img{
    width: 100%;
    height: auto;
  }
}
.auth-btns{
  .th-btn{
    padding-right: ceil($scale1 * 40px);
    padding-left: ceil($scale1 * 40px);
  }
}

.desktop-menu{
  display: flex;
  font-size: ceil($scale1 * 24px);
  margin: 0;
  .menu-item{
    margin-left: ceil($scale1 * 37px);
    &:last-child{
      margin-left: 0;
    }
  }
  a{
    color: $clr-dark;
  }
}

@media (max-width: $breakpoint2){
  .header{
    height: ceil($scale2 * 110px);
  }
  .logo-wrap{
    width: ceil($scale2 * 220px);
  }
  .desktop-menu{
    font-size: ceil($scale2 * 24px);
    .menu-item{
      margin-left: ceil($scale2 * 37px);
    }
  }
}


</style>
