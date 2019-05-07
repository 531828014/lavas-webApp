<!--  -->
<template>
  <div>
        <!-- 头部返回 -->
        <van-nav-bar
            title="订单"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <van-tabs v-model="$route.query.type">
            <van-tab title="我的订单">
                <card-list></card-list>
            </van-tab>
            <van-tab title="已发货">
                <card-list></card-list>
            </van-tab>
            <van-tab title="待发货">
                <card-list></card-list>
            </van-tab>
            <!-- <van-tab title="已签收">已签收</van-tab> -->
        </van-tabs>
  </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
import CardList from '../../components/common/cardlist'
export default {
    data() {
        return {
        };
    },
    props: {
    },
    components: {
        CardList
    },
    created() {
        console.log(this.$route.query.type)
    },
    computed: {},

    methods: {
        onClickLeft() {
            this.$router.back()
        },
        getData() {
            Promise.all([OrderApi.SendOutList(), OrderApi.NoSendList()]).then(data => {
                console.log(data)
            })
        }
    }
}

</script>
<style lang='scss' scoped>
</style>