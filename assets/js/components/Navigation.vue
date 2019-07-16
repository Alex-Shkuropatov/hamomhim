<template>
    <header class="header">
        <div class="h-container">
            <router-link :to="{ name: 'about-us' }">test</router-link>
            <a href="#" class="logo-wrap">
                <img src="/static/images/logo/logo-blue.png" alt="">
            </a>

            <ul class="desktop-menu">
                <li class="menu-item">
                    <router-link>דף</router-link>
                </li>
                <li class="menu-item">
                    <router-link>אודות</router-link>
                </li>
                <li class="menu-item">
                    <router-link>בלוג</router-link>
                </li>
                <li class="menu-item">
                    <router-link>איך זה עובד</router-link>
                </li>
                <li class="menu-item">
                    <router-link>צור קשר</router-link>
                </li>
            </ul>

            <div class="auth-btns">

            </div>
        </div>
    </header>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>

@import '~@/vars.scss';

.header{
    height: 110px;
    background: #fff;
    .h-container{
        display: flex;
        justify-content: space-between;
    }
}


</style>
