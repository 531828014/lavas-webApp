<!--  -->
<template>
    <div class="commodity">
        <div  class="commoditybox" v-for="item in listData" :key="item.id">
            <div class="commodity-img">
                <img :src="item.imgUrl[0].url" alt="">
            </div>
            <div class="commodity-title">
                <h3>
                    <span class="h3title">{{item.title}}</span> 
                    <span class="money-red">￥{{item.sellingPrice}}</span>
                </h3>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
        listData: {
            type: Object,
            default: null
        }
    },
    methods: {}
}

</script>
<style lang='scss' scoped>
.commodity{
    margin-top: 10px;
    .commoditybox{
        width: 50%;
        display: inline-block;
    }
    .commodity-img{
        width: 90%;
        height: 150px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .commodity-title{
        h3{
            margin: 5px;
            padding: 3px;
            text-align: left;
            .h3title{
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 0 0 3px 3px;
            }
        }
    }
}
</style>