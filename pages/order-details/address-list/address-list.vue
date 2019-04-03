<!--  -->
<template>
    <div>
        <!-- 头部返回 -->
        <van-nav-bar
            title="地址列表"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
            />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ]
        };
    },

    components: {},

    computed: {},

    methods: {
        onAdd() {
            this.$router.push({
                path: '/order-details/address-editor/address-editor'
            })
        },

        onEdit(item, index) {
            this.$router.push({
                path: '/order-details/address-editor/address-editor'
            })
        },
        onClickLeft() {
            this.$router.back()
        },
    }
}

</script>
<style lang='scss' scoped>
</style>