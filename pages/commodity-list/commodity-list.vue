<!--  -->
<template>
  <div class="commodity-list">
        <!-- 头部返回 -->
        <van-nav-bar
            title="商品列表"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <!-- <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            class="commoditylist"
            > -->
            <commodity :listData="list"></commodity>
        <!-- </van-list> -->
  </div>
</template>

<script>
import GoodsApi from '../../api/main/goods-manage/index'
import Commodity from '../../components/common/commodity'
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false
        };
    },

    components: {
        Commodity
    },
    created() {
        this.getData()
    },
    computed: {},

    methods: {
        onClickLeft() {
            this.$router.back()
        },
        getData() {
            if(this.$route.query.category) {
                GoodsApi.CategorySearch(this.$route.query.category).then(data => {
                    console.log(data)
                    this.list = data.list
                })
            }else if (this.$route.query.keyWord) {
                GoodsApi.Search(this.$route.query.keyWord).then(data => {
                    console.log(data)
                    this.list = data.list
                    // this.$router.push({
                    //     path: '/order-details/order-details', 
                    //     query: {
                    //         id: data.Id
                    //     }
                    // }); 
                }) 
            }else{
                GoodsApi.List().then(data => {
                    console.log(data)
                    this.list = data.list
                })
            }
            
        }
    }
}

</script>
<style lang='scss' scoped>
.commodity-list{
   .commoditylist{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
   }
   /deep/ .van-list__finished-text,
   /deep/ .van-list__loading {
       width: 100%;
   }
}
</style>