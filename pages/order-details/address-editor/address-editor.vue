<!--  -->
<template>
    <div class="address-editor">
        <!-- 头部返回 -->
        <van-nav-bar
            title="地址编辑"
            left-arrow
            @click-left="onClickLeft"/>
        <!-- 头部返回end -->
        <van-address-edit
            :area-list="areaList"
            class="address-edit"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
    </div>
</template>

<script>
export default {
    data() {
        return {
            areaList: {},
            searchResult: []
        };
    },

    components: {},

    computed: {},

    methods: {
        onSave() {
        },
        onDelete() {
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                    name: '黄龙万科中心',
                    address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        },
        onClickLeft() {
            this.$router.back()
        },
    }
}

</script>
<style lang='scss' scoped>
.address-editor{
    .address-edit{
        text-align: left;
    }
}
</style>