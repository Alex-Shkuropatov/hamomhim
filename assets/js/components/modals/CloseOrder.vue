<template>
    <transition name="slide-fade">
    <modal v-if="$store.getters['modals/workPrice/isOpened']" @close="close">
    <div class="content-wrapper third-message">
        <h2 class="title">סיכום פרויקט</h2>
        <p class="projectName">נא הזן את סכום הפרויקט</p>
        <input type="text" class="container-value" v-model="price" placeholder="םוכס">
        <div class="buttons-wrapper">
            <button class="saveB"  style="text-align:center" @click='closeProject' >לוטיב</button>
            <button class="closeB"  style="text-align:center" @click='close' > טקיורפ רוגס</button>
        </div>
    </div>
    </modal>
    </transition>
</template>

<script>
    import Modal from '../common/Modal.vue'


    export default {
        methods: {
            close() {
                this.$store.commit('modals/workPrice/close');

            },
            closeProject() {
                this.$store.commit('modals/workPrice/close');
                this.$router.push('/orders/closed-orders');

            },

        },
        components: {
            Modal
        },
        data: function () {
            return {
                price: '',
            }
        },
        destroyed(){

        },
    }
</script>

<style lang="scss" scoped>

    .buttons-wrapper{
        display: flex;
        flex-direction: row;
        margin-top: 30px;
        margin-bottom: 30px;
        button{
            color: white;
            width: 250px;
            height: 50px;
            &:hover  {
                color:black;
            }
            @media screen and (max-width: 650px) {
                width: 170px;
            }
            @media screen and (max-width: 650px) {
                width: 140px;
                height: 40px;
            }
        }
        .closeB{
            margin-right: 10px;
            background: #E0E0E0;
            border-radius: 50px;
        }
        .saveB{
            margin-left: 10px;
            background: linear-gradient(90deg, #2871D7 0%, #3269B6 100%);
            border-radius: 50px;
        }
    }
    .content-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-bottom: 20px;
        width: 600px;
        @media screen and (max-width: 650px) {
            width: 450px;
        }
        @media screen and (max-width: 480px) {
            width: 315px;
        }
        .title{
            margin:0;
            margin-top: 27px;
            font-family: Assistant;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 40px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #333333;
        }
        .projectName{
            margin:0;
            margin-top: 10px;
            margin-bottom: 15px;
            font-family: Assistant;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 40px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #828282;
        }
        .container-value{
            background: #FFFFFF;
            opacity: 0.5;
            border: 1px solid #BDBDBD;
            box-sizing: border-box;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 50px;
            width: 350.28px;
            height: 46.47px;
            padding-right: 20px;
            @media screen and (max-width: 650px) {
                width: 250.28px;
            }
        }
    }
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
