<template>
    <div class="classification">
        <van-row>
            <van-col span="24">
                <h2 class="titleH2">品类</h2>
            </van-col>
            <van-col span="24">
                <van-search class="searchW" placeholder="请输入搜索关键词" v-model="keyValue" @search="onSearch"/>
            </van-col>
            <van-col  span="24">
                <a href="/commodity-list/commodity-list">
                    <div class="class-boxs">
                        <van-icon class="icon-row" name="friends-o"/>
                        <h4>精致包袋</h4>
                    </div>
                </a>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
                <div class="class-boxs">
                    <van-icon class="icon-row" name="friends-o"/>
                    <h4>精致包袋</h4>
                </div>
            </van-col>
        </van-row>
        <Tabbar ref="tabbar"></Tabbar>
    </div>
</template>

<script>
function setState(store) {}
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
            keyValue: '',
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    mounted() {
        this.$refs.tabbar.active = 1
    },
    components: {
        Tabbar      
    },
    methods: {
        //搜索关键字
        onSearch(row) {

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
