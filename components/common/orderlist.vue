<!--  -->
<template>
    <div class="cardlist">
        <van-row @click="onDetail">
            <!-- <van-col span="2">
                <van-checkbox class="checkbox" :name="listData.id" checked-color="#07c160"></van-checkbox>
            </van-col> -->
            <van-col span="8">
                <div class="img-box">
                    <!-- <img class="box-img" v-lazy="listData.imgUrl[0].url" height="180" width="92%"/> -->
                    <label>订单号：</label>
                    <span>{{listData.id}}</span>
                    <span>{{listData.status}}</span>
                </div>
            </van-col>
            <van-col span="9">
                <div class="textbox">
                    <h3>{{listData.title}}</h3>
                    <span>{{listData.address}}</span>
                    <h3 class="money">￥{{listData.total}}</h3>
                </div>
            </van-col>
            <van-col span="7">
                <div>
                    <van-button size="mini" @click="afterSale">申请售后</van-button>
                    <van-button v-if="listData.status != '已签收'" size="mini" @click="receiveGoods">确认收货</van-button>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
export default {
    props: {
        listData: {
            type: Object,
            default: null
        }
    },
    methods: {
        onChange(row) {
            this.$emit('stepperChange', this.listData, row)
        },
        onDetail() {
            this.$emit('onDetail', this.listData)
        },
        receiveGoods() {
            OrderApi.ReceiveGoods(this.listData).then(data => {
                this.$notify({
                    message: '确认收货成功',
                    duration: 1000,
                    background: '#72ed18'
                });
                this.$emit('updata')
            })
        },
        afterSale() {
            let opt = {
                id: this.listData.id,
                userId: this.$store.state.userInfo.id
            }
            OrderApi.AfterSale(this.listData).then(data => {
                this.$notify({
                    message: '已提交售后申请，请耐心等待',
                    duration: 2000,
                    background: '#72ed18'
                });
                this.$emit('updata')
            })
        }
    }
}

</script>
<style lang='scss' scoped>
.cardlist{
    text-align: left;
    position: relative;
    border-bottom: 0.5px solid #E5E5E5;
    padding-bottom: 10px;
    margin: 15px ;
    .number, .textbox, .checkbox, .img-box{
        display: inline-block;
    }
    .checkbox{
        margin: 29px 10px 0 0;
    }
    .img-box{
        width: 100px;
        .box-img{
            width: 100%;
            height: 100%;
        }
    }
    .textbox{
        h3{
            margin: 10px auto;
        }
    }
    .number{
        width: 100%;
        margin-top: 56px;
        text-align: right;
        /deep/ .van-stepper__minus, /deep/ .van-stepper__plus{
            width: 18px !important;
            height: 18px !important;
        }
        /deep/ .van-stepper__input{
            font-size: 12px;
            height: 16px;
        }
    }
    .money{
        color: #F43736;
        margin-bottom: 0 !important;
    }
}
</style>