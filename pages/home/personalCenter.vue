<template>
    <div class="personalCenter">
        <div class="big-box">
            <van-row class="top-box">
                <div class="box-vig">
                    <div class="boxList">
                        <div class="boxs-left">
                            <img class="box-img" v-lazy="image" height="180" width="92%"/>
                        </div>
                        <div class="boxs-right">
                            <h3>{{$store.state.userInfo.name}}</h3>
                            <span>设计是一种感受、一种心态</span>
                        </div>
                    </div>
                    <div class="boxList">
                        <ul class="boxListUl">
                            <li>
                                <h3>17</h3>
                                <span>设计</span>
                            </li>
                            <li>
                                <h3>483</h3>
                                <span>获赞</span>
                            </li>
                            <li>
                                <h3>324</h3>
                                <span>粉丝</span>
                            </li>
                            <li>
                                <h3>127</h3>
                                <span>关注</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </van-row>
            <van-row class="bottom-box">
                <van-col span="24">
                    <van-cell class= "cellList" icon="bill-o" title="我的订单" is-link to="/order-list/order-list?type=0" />
                    <van-cell class= "cellList" icon="label-o" title="已发货" is-link to="/order-list/order-list?type=1" />
                    <van-cell class= "cellList" icon="bookmark-o" title="待发货" is-link to="/order-list/order-list?type=2" />
                    <van-cell class= "cellList" icon="orders-o" title="已签收" is-link to="/order-list/order-list?type=3" />
                    <van-cell class= "cellList" icon="bulb-o" title="设计师通道" is-link @click="setDesin"/>
                    <van-cell class= "cellList" icon="apps-o" title="尚未开放" is-link />
                    <van-cell class= "cellList" icon="ellipsis" title="关于我们" is-link to="/home" />
                </van-col>
            </van-row>
        </div>
        <Tabbar ref="tabbar"></Tabbar>
    </div>
</template>

<script>
function setState(store) {}
import loginApi from '../../api/main/login/index'
import Tabbar from '../../components/common/tabbar'
export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '',
        meta: [
            {name: 'keywords', content: ''},
            {name: 'description', content: ''}
        ]
    },
    data() {
        return {
            image: 'https://img.yzcdn.cn/2.jpg'
        }
    },
    created() {
        console.log(this.$store.state.userInfo)
    },
    async asyncData({store, route}) {
        setState(store);
    },
    mounted() {
        this.$refs.tabbar.active = 3
    },
    components: {
        Tabbar      
    },
    methods: {
        setDesin() {
            this.$dialog.confirm({
                title: '成为设计师',
                message: '是否申请成为设计师？'
            }).then(() => {
                console.log('成为设计师')
                this.$dialog.alert({
                    title: '成功',
                    message: '恭喜您成为我们的一员！发布作品请登录电脑端网站。'
                })
            }).catch(() => {
                console.log('取消')
            });
        }
    }
    
};
</script>

<style lang="scss" scoped>
@import '../../assets/sass/variable.scss';
.personalCenter {
    .big-box{
        background-color: #f9aa12 !important;
    }
    .top-box {
        .box-vig {
            height: 180px;
            width: 90%;
            background-color: white;
            box-shadow: 0px 5px 10px #E5E5E5;
            border-radius: $border-radius;
            margin: 0 auto;
            top: 50px;
            position: relative;
            .boxList{
                text-align: left;
                height: 50%;
            }
            .boxs-left, .boxs-right {
                display: inline-block;
            }
            .boxs-left {
                width: 80px;
                .box-img {
                    height: 60px;
                    width: 60px;
                    border-radius: 90px;
                    margin: 30px 0 0 20px;
                }
            }
            .boxs-right {
                margin-left: 8px;
                bottom: 10px;
                position: relative;
                h3 {
                    margin-bottom: 5px;
                }
                span{
                    color: #a5a2a8;
                }
            }
            .boxListUl li{
                float: left;
                width: 25%;
                text-align: center;
                span{
                    color: #a5a2a8;
                }
            }
        }
    }
    .bottom-box {
        background-color: #ffffff;
        padding-top: 80px;
        border-radius: 15px;
        height: 53%;
    }
    .cellList {
        text-align: left;
    }
}
</style>
