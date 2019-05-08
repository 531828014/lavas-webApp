<!--  -->
<template>
    <div class="cardlist">
        <van-row>
            <van-col span="2">
                <van-checkbox class="checkbox" :name="listData.id" checked-color="#07c160"></van-checkbox>
            </van-col>
            <van-col span="7">
                <div class="img-box">
                    <img class="box-img" v-lazy="listData.imgUrl[0].url" height="180" width="92%"/>
                </div>
            </van-col>
            <van-col span="8">
                <div class="textbox">
                    <h3>{{listData.title}}</h3>
                    <span>{{listData.designer}}</span>
                    <h3 class="money">￥{{listData.sellingPrice}}</h3>
                </div>
            </van-col>
            <van-col span="7">
                <van-stepper 
                    class="number" 
                    :min="1" 
                    v-model="listData.number" 
                    :integer="true"
                    @change="onChange"/>
            </van-col>
        </van-row>
    </div>
</template>

<script>
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
        width: 80px;
        height: 80px;
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