<template>
    <div class="shoppingCart">
        <van-row>
            <van-col span="24">
                <h2 class="titleH2">购物车</h2>
            </van-col>
            <van-col span="24">
               <div class="boderBox"></div> 
            </van-col>
            <van-col span="24" class="bottomBox">
                <van-checkbox-group v-model="result" @change="changeCheck">
                    <card-list 
                        v-for="item in listData"
                        :key="item.id"
                        :listData="item" 
                        @stepperChange="stepperChange"></card-list>
                </van-checkbox-group>
            </van-col>
        </van-row>
        <van-submit-bar
            :price="totalMoney * 100"
            button-text="去结算"
            @submit="onSubmit"
            >
        <van-checkbox v-model="checked" @change="changeAll">全选</van-checkbox>
        </van-submit-bar>
        <Tabbar ref="tabbar"></Tabbar>
    </div>
</template>

<script>
function setState(store) {}
import CardApi from '../../api/main/card/index'
import OrderApi from '../../api/main/order/index'
import CardList from '../../components/common/cardlist'
import Tabbar from '../../components/common/tabbar'
export default {
    name: 'index',
    metaInfo: {
        title: '购物车',
    },
    data() {
        return {
            result: [],
            listData: [],
            checked: false,
            totalMoney: 0,
            goodsIdNumber: [], //商品id*数量 拼接
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    mounted() {
        this.$refs.tabbar.active = 2
    },
    components: {
        Tabbar,
        CardList      
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {

            if(this.$store.state.userInfo.id || this.$route.query.id) {
                let id = this.$store.state.userInfo.id ? this.$store.state.userInfo.id : this.$route.query.id
                CardApi.List(this.$store.state.userInfo.id).then(data => {
                    this.listData = data
                })
            }else {
                this.$notify('请先登录。。。');
                this.$router.push({path: '/login/login'}); 
            }
        },
        stepperChange(data, row) {
            console.log(data, row)
        },
        changeCheck(res) {
            this.totalMoney = 0
            this.goodsIdNumber = []
            if(res.length > 0) {
                res.forEach(item => {
                    let index = this.listData.findIndex(it => it.id == item)
                    this.totalMoney += this.listData[index].sellingPrice * this.listData[index].number
                    let ret = this.listData[index].id + '*' + this.listData[index].number
                    this.goodsIdNumber.push(ret)
                })
            }
        },
        onSubmit() {
            if(this.result.length > 0) {
                let opt = {
                    userId: this.$store.state.userInfo.id,
                    goodsId: this.goodsIdNumber,
                    total: this.totalMoney
                }
                OrderApi.Add(opt).then(data => {
                    this.$router.push({
                        path: '/order-details/order-details',
                        query: {
                            id: data.Id
                        }
                    })
                })
            }else{
                this.$notify('请先选择商品。');
            }
            
        },
        changeAll(res) {
            this.result = []
            if(res) {
                this.listData.forEach(item => {
                    this.result.push(item.id)
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>

.shoppingCart {
    .titleH2 {
        text-align: left;
        margin: 30px 0 5px 15px;
    }
    .boderBox{
        border: 0.1px solid #E5E5E5;
        margin: 10px 15px 0 15px;
    }
    .bottomBox{
        margin-bottom: 50px;
    }
    /deep/ .van-submit-bar {
        bottom: 50px;
        border-bottom: 0.1px solid #E5E5E5;
        /deep/ .van-checkbox{
            margin-left: 15px;
        }
    }
}
</style>
