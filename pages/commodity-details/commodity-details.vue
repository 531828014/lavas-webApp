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
                <img v-lazy="image" class="detail-img" height="300" width="100%"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 轮播图end -->
        <!-- 简介 -->
        <van-row class="title-box">
            <h3 class="title">{{fromData.title}}</h3>
            <h2 class="money">￥{{fromData.sellingPrice}}</h2>
            <p class="content">{{fromData.briefIntroduction}}</p>

            <!-- 商品描述 -->
            <!-- <div class="box-de">
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
            </div> -->
            <!-- 商品描述end -->
            <!-- 图文详情 -->
            <div class="box-de">
                <h3>图文详情</h3>
                <img 
                    v-for="(item, index) in images" 
                    :key="index"
                    :src="item" 
                    alt="" 
                    class="detail-img img-de">
            </div>
            <!-- 图文详情end -->
        </van-row>
        <!-- 简介end -->
        
        <!-- 加入购物车 -->
        <van-goods-action>
            <!-- <van-goods-action-mini-btn
                icon="shop-o"
                text="店铺"
            /> -->
            <van-goods-action-mini-btn
                icon="cart-o"
                text="购物车"
                url="/home/shopping-cart"
                @click="onClickMiniBtn"
            />
            <van-goods-action-big-btn
                text="加入购物车"
                @click="commond('addCard')"
            />
            <van-goods-action-big-btn
                primary
                text="立即购买"
                @click="commond('addOrder')"
            />
        </van-goods-action>
        <!-- 加入购物车end -->
    </div>
</template>

<script>
import OrderApi from '../../api/main/order/index'
import CardApi from '../../api/main/card/index'
import GoodsApi from '../../api/main/goods-manage/index'
export default {
    data() {
        return {
            fromData: {},
            images: []
        };
    },
    created() {
        this.getData()
    },
    components: {},

    computed: {},

    methods: {
        getData() {
            GoodsApi.Detial(this.$route.query.ld).then(data => {
                console.log(data)
                this.fromData = data
                data.imgUrl.forEach(item => {
                    this.images.push(item.url)
                });
            })
        },
        onClickMiniBtn() {
        },
        commond(tex) {
            if(this.$store.state.userInfo.id) {
                switch(tex) {
                    case 'addCard': this.addCard(); break;
                    case 'addOrder': this.addOrder(); break;
                    default : break;
                }
            }else{
                this.$notify('请先登录。。。');
                this.$router.push({path: '/login/login'}); 
            }
        },
        addCard() {
            let opt = {
                userId: this.$store.state.userInfo.id,
                goodsId: this.fromData.id
            }
            CardApi.Add(opt).then(data => {
                this.$notify({
                    message: '加入购物车成功',
                    duration: 1000,
                    background: '#72ed18'
                });
            }).catch(() => {
                this.$notify('加入购物车失败');
            })
        },
        addOrder() {
            let opt = {
                userId: this.$store.state.userInfo.id,
                goodsId: this.fromData.id + '*1', //商品id*数量 拼接
                // address: this.fromData.address,
                // contactNumber: this.fromData.contactNumber,
                total: this.fromData.sellingPrice * 1
            }
            OrderApi.Add(opt).then(data => {
                this.$router.push({
                    path: '/order-details/order-details', 
                    query: {
                        id: data.Id
                    }
                }); 
            }).catch(() => {
                this.$notify('生成订单失败');
            })
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