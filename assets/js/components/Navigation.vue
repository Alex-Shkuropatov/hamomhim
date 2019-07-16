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
                    <router-link :to="{ name: 'index'}">אודות</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'index'}">בלוג</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'index'}">איך זה עובד</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'index'}">צור קשר</router-link>
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
    height: 110px;
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
.auth-btns{
  .th-btn{
    padding-right: 40px;
    padding-left: 40px;
  }
}

.desktop-menu{
  display: flex;
  font-size: 24px;
  margin: 0;
  .menu-item{
    margin-left: 37px;
    &:last-child{
      margin-left: 0;
    }
  }
  a{
    color: $clr-dark;
  }
}


</style>
