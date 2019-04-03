<!--  -->
<template>
    <div class="detail-Box">
        <!-- 头部返回 -->
        <van-nav-bar
            title="商品详情"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" class="detail-img" height="450" width="100%"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 轮播图end -->
        <!-- 简介 -->
        <van-row class="title-box">
            <h3 class="title">第三个或多或少进大公司的就赶紧非加</h3>
            <h2 class="money">￥12700</h2>
            <p class="content">反倒是工地上干活的死哦更合适的很公平第四哦更紧迫的是公婆华盛顿到i给hi ops电焊工IP但是国会大厦受到破坏股票的施工第四季度三个松平家的给收到</p>

            <!-- 商品描述 -->
            <div class="box-de">
                <h3>商品描述</h3>
                <div class="">
                    <label class="label text" for="">品牌</label>
                    <span class="text">dsgsdg</span>
                </div>
                <div class="">
                    <label class="label text" for="">品类</label>
                    <span class="text">大杀四方</span>
                </div>
                <div class="">
                    <label class="label text" for="">材质</label>
                    <span class="text">萨芬萨芬</span>
                </div>
                <div class="">
                    <label class="label text" for="">颜色</label>
                    <span class="text">多少给多少</span>
                </div>
            </div>
            <!-- 商品描述end -->
            <!-- 图文详情 -->
            <div class="box-de">
                <h3>图文详情</h3>
                <img src="https://img.yzcdn.cn/2.jpg" alt="" class="detail-img img-de">
                <img src="https://img.yzcdn.cn/2.jpg" alt="" class="detail-img img-de">
                <img src="https://img.yzcdn.cn/2.jpg" alt="" class="detail-img img-de">
                <img src="https://img.yzcdn.cn/2.jpg" alt="" class="detail-img img-de">
            </div>
            <!-- 图文详情end -->
        </van-row>
        <!-- 简介end -->
        
        <!-- 加入购物车 -->
        <van-goods-action>
            <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
            />
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                url="/home/shopping-cart"
                @click="onClickMiniBtn"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="onClickBigBtn"
            />
            <van-goods-action-big-btn
                primary
                text="立即购买"
                @click="onClickBigBtn"
            />
        </van-goods-action>
        <!-- 加入购物车end -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg'
            ]
        };
    },

    components: {},

    computed: {},

    methods: {
        onClickMiniBtn() {
        },
        onClickBigBtn() {
        },
        onClickLeft() {
            this.$router.back()
        },
    }
}

</script>
<style lang='scss' scoped>
.detail-Box{
    .detail-img{
        border-radius: 0;
    }
    .title-box{
        text-align: left;
        margin-bottom: 50px;
        .title{
            // overflow: hidden;
            // white-space: nowrap;
            // text-overflow: ellipsis;
            padding: 0 15px;
            
        }
        .money{
            font-family: sans-serif;
            padding: 0 12px;
        }
        .content{
            padding: 0 0 25px 0;
            line-height: 20px;
            color: #7d7e80;
            border-bottom: 0.5px solid #E5E5E5;
            margin: 0 12px 20px 15px;
        }
        .box-de{
            border-bottom: 0.5px solid #E5E5E5;
            margin: 0 15px 20px 15px;
            padding-bottom: 10px;
            .label{
                color: #7d7e80;
                margin-right: 10px;
            }
            .text{
                line-height: 30px;
            }
            .img-de{
                width: 100%;
            }
        }
    }
}

</style>