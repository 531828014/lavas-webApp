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
                <order-list 
                    v-for="item in listData"
                    :key="item.id"
                    :listData="item"
                    @updata="updata"></order-list>
            </van-tab>
            <van-tab title="已发货">
                <order-list 
                    v-for="item in sendOutlist"
                    :key="item.id"
                    :listData="item"
                    @updata="updata"></order-list>
            </van-tab>
            <van-tab title="待发货">
                <order-list 
                    v-for="item in noSendList"
                    :key="item.id"
                    :listData="item"
                    @updata="updata"></order-list>
            </van-tab>
            <van-tab title="已签收">
                <order-list 
                    v-for="item in sureList"
                    :key="item.id"
                    :listData="item"
                    @updata="updata"></order-list>
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
import OrderList from '../../components/common/orderlist'
import { initGoods } from '../../api/model/goods';
export default {
    data() {
        return {
            listData: {},
            sendOutlist: {},
            noSendList: {},
            sureList: {}
        };
    },
    props: {
    },
    components: {
        OrderList
    },
    created() {
        this.getData()
    },
    computed: {},

    methods: {
        onClickLeft() {
            this.$router.back()
        },
        getData() {
            if(this.$store.state.userInfo.id || this.$route.query.id) {
                let opt = {
                    id: this.$store.state.userInfo.id ? this.$store.state.userInfo.id : this.$route.query.id
                }
                Promise.all([OrderApi.SendOutList(opt), OrderApi.NoSendList(opt), OrderApi.UserList(opt), OrderApi.SureList(opt)]).then(data => {
                    this.listData = data[2]
                    this.sendOutlist = data[0]
                    this.noSendList = data[1]
                    this.sureList = data[3]
                })
            }else {
                this.$notify('请先登录。。。');
                this.$router.push({path: '/login/login'}); 
            }
        },
        updata() {
            this.getData()
        }
    }
}

</script>
<style lang='scss' scoped>
</style>