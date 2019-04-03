<!--  -->
<template>
    <div class="order-details">
        <!-- 头部返回 -->
        <van-nav-bar
            title="订单详情"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <van-cell 
            class= "cellList" 
            icon="location-o" 
            title="李思凡   156789456131" 
            label="广东佛山南海区"
            is-link to="/order-details/address-list/address-list" />
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"  
            title="商品标题"
            :thumb="imageURL"/>
        <van-cell-group>
            <van-field
                v-model="message"
                label="备注"
                type="textarea"
                placeholder="填写你要说的话"
                rows="1"
                :autosize="autosize"
            />
        </van-cell-group>
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"/>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageURL: 'https://img.yzcdn.cn/2.jpg',
            autosize: {
                // maxHeight: 100, 
                // minHeight: 50
            }
        };
    },

    components: {
    },

    computed: {},

    methods: {
        onClickLeft() {
            this.$router.back()
        },
        onSubmit() {

        }
    }
}

</script>
<style lang='scss' scoped>
.order-details{
    text-align: left;
    .cellList{
        /deep/ .van-cell__title{
            font-weight: bold;
            margin-left: 5px;
        }
    }
}
</style>