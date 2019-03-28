<!--  -->
<template>
    <div>
        <van-tabbar
            v-model="active"
            active-color="#07c160"
            @change="change"
            >
            <van-tabbar-item icon="shop-o">首页</van-tabbar-item>
            <van-tabbar-item icon="bulb-o">品类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        };
    },
    components: {},

    computed: {},

    methods: {
        change(row) {
            switch(row) {
                case 0: this.$router.push({path: '/home'}); break;
                case 1: this.$router.push({path: '/home/classification'}); break; 
                case 2: this.$router.push({path: '/home/shopping-cart'}); break;
                case 3: this.$router.push({path: '/home/personal-center'}); break;
                default: break;
            }
        }
    }
}

</script>
<style lang='stylus' scoped>
</style>