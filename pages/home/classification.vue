<template>
    <div class="classification">
        <van-row class="tabbarTop">
            <van-col span="24">
                <h2 class="titleH2">品类</h2>
            </van-col>
            <van-col span="24">
                <van-search class="searchW" placeholder="请输入搜索关键词" v-model="keyValue" @search="onSearch"/>
            </van-col>
            <van-col  span="24">
                <div class="class-boxs" v-for="item in list"
                    :key="item.id"
                    @click="categorySearch(item)">
                    <van-icon class="icon-row" :name="item.icon"/>
                    <h4>{{item.name}}</h4>
                </div>
            </van-col>
        </van-row>
        <Tabbar ref="tabbar"></Tabbar>
    </div>
</template>

<script>
function setState(store) {}
import CategoryApi from '../../api/main/category/index'
import GoodsApi from '../../api/main/goods-manage/index'
import Tabbar from '../../components/common/tabbar'
export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
    },
    data() {
        return {
            keyValue: '',
            list: []
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    mounted() {
        this.$refs.tabbar.active = 1
    },
    created() {
        this.getData()
    },
    components: {
        Tabbar      
    },
    methods: {
        //搜索关键字
        onSearch(row) {
            this.$router.push({
                path: '/commodity-list/commodity-list', 
                query: {
                    keyWord: row
                }
            }); 
        },
        getData() {
            CategoryApi.List().then(data => {
                this.list = data.list
            })
        },
        //根据类别搜索商品
        categorySearch(ret) {
            this.$router.push({
                path: '/commodity-list/commodity-list', 
                query: {
                    category: ret.category
                }
            }); 
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/sass/variable.scss';
.classification {
    .titleH2 {
        text-align: left;
        margin: 30px 0 5px 15px;
    }
    .searchW {
        /deep/ .van-field__control {
            font-size: $font-size-small;
            line-height: 24px;
        }
    } 
    .class-boxs {
        width: 43%;
        margin: 8px;
        height: 100px;
        display: inline-table;
        text-align: left;
        box-shadow: 1px 1px 10px whitesmoke;
        .icon-row {
            font-size: $font-size-large;
            line-height: 50px;
            width: 50px;
            height: 50px;
            margin: 10px 0 0 26px;
        }    
        h4 {
            display: block;
            margin: 0 0 0 25px;
        }
    }
}
</style>
