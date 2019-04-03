<!--  -->
<template>
    <div class="commodity">
        <div class="commodity-img">
            <img src="https://img.yzcdn.cn/2.jpg" alt="">
        </div>
        <div class="commodity-title">
            <h3>
                <span class="h3title">福ifUI福贵福ifUI福贵福ifUI福贵福ifUI福贵福ifUI福贵</span> 
                <span class="money-red">￥1700</span>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    components: {},

    computed: {},

    methods: {}
}

</script>
<style lang='scss' scoped>
.commodity{
    width: 50%;
    margin-top: 10px;
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