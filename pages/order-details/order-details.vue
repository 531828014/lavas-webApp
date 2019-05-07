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
                v-model="fromData.remark"
                label="备注"
                type="textarea"
                placeholder="填写你要说的话"
                rows="1"
                :autosize="autosize"
            />
        </van-cell-group>
        <van-submit-bar
            :price="fromData.total"
            button-text="提交订单"
            @submit="onSubmit"/>
        
    </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
import {initOrder} from '../../api/model/order'
export default {
    data() {
        return {
            fromData: initOrder(),
            imageURL: 'https://img.yzcdn.cn/2.jpg',
            autosize: {
                // maxHeight: 100, 
                // minHeight: 50
            }
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
            // OrderApi.Detail(opt).then(data => {
            //     console.log(data)
            //     this.fromData = data
            // }).catch(() => {
            //     this.$notify('加载订单失败');
            // })
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