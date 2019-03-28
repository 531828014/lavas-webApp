<template>
    <div class="shoppingCart">
        <van-row>
            <van-col span="24">
                <h2 class="titleH2">购物车</h2>
            </van-col>
            <van-col span="24">
               <div class="boderBox"></div> 
            </van-col>
            <van-col span="24">
                <van-checkbox-group v-model="result" @change="changeCheck">
                    <card-list></card-list>
                </van-checkbox-group>
            </van-col>
        </van-row>
        <Tabbar ref="tabbar"></Tabbar>
    </div>
</template>

<script>
function setState(store) {}
import CardList from '../../components/common/cardlist'
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
            imageURL: 'https://img.yzcdn.cn/2.jpg',
            result: []
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
    methods: {
        changeCheck(res) {
            console.log(res)
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
}
</style>
