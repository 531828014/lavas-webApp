<!--  -->
<template>
  <div class="commodity-list">
        <!-- 头部返回 -->
        <van-nav-bar
            title="商品列表"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            class="commoditylist"
            >
            <commodity
                v-for="item in list"
                :key="item"></commodity>
        </van-list>
  </div>
</template>

<script>
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

    computed: {},

    methods: {
        onLoad() {
        // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        },
        onClickLeft() {
            this.$router.back()
        },
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