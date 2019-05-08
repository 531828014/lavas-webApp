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
            v-for="item in goodsData"
            :key="item.id"
            :num="item.number"
            :price="item.sellingPrice"
            :desc="item.designer"  
            :title="item.title"
            :thumb="item.imgUrl"/>
        <van-cell-group>
            <van-field
                v-model="orderData.remark"
                label="备注"
                type="textarea"
                placeholder="填写你要说的话"
                rows="1"
            />
        </van-cell-group>
        <van-submit-bar
            :price="orderData.total*100"
            button-text="提交订单"
            @submit="onSubmit"/>
        
    </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
import {initOrder} from '../../api/model/order'
import { initGoods } from '../../api/model/goods';
export default {
    data() {
        return {
            orderData: initOrder(),
            goodsData: initGoods(),
        };
    },
    created() {
        this.getData() 
    },

    methods: {
        onClickLeft() {
            this.$router.back()
        },
        onSubmit() {

        },
        getData() {
            let opt = {
                id: this.$route.query.id,
            }
            OrderApi.Detail(opt).then(data => {
                console.log(data)
                this.goodsData = data.goods
                this.orderData = data.orderDate[0]
                console.log(data.orderDate)
            }).catch(() => {
                this.$notify('加载订单失败');
            })
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