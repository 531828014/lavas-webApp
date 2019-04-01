<template>
    <div class="page-index">
        <van-row>
            <van-col span="24">
                <van-search class="searchW" placeholder="请输入搜索关键词" v-model="keyValue" @search="onSearch"/>
            </van-col>
            <van-col span="24">
                <van-swipe :autoplay="3000" :height="180">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" height="180" width="92%"/>
                    </van-swipe-item>
                </van-swipe>
            </van-col>
            <van-row>
                <van-col span="6">
                    <div class="div-row">
                        <van-icon class="icon-row" name="friends-o" style="background-color:#FF6161;"/>
                        <span>大师访谈</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="div-row">
                        <van-icon class="icon-row" name="friends-o" style="background-color:#689BFF;" />
                        <span>匠心小组</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="div-row">
                        <van-icon class="icon-row" name="friends-o" 
                        style="background-color:#F9AA12;"/>
                        <span>互动平台</span>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="div-row">
                        <van-icon class="icon-row" name="friends-o"
                        style="background-color:#00CCC0;" />
                        <span>推荐设计师</span>
                    </div>
                </van-col>
            </van-row>
            <van-row>
                <h3 class="titleH3">今日上新</h3>
                <div class="newImg" 
                    v-for="(img, index) in imageList" 
                    :key="index">
                    <a href="/commodity-details/commodity-details">
                    <img v-lazy="img.img"  />
                    <p>{{img.title}}</p>
                    </a>
                </div>
            </van-row>
            <van-row>
                <h3 class="titleH3">推荐设计</h3>
                <div class="recommend" 
                    v-for="(img, index) in imageList" 
                    :key="index">
                    <img v-lazy="img.img"  />
                    <p>{{img.title}}</p>
                </div>
            </van-row>
            <van-row class="last-box">
                <h3 class="titleH3">精选设计</h3>
                <div class="carefully" 
                    v-for="(img, index) in imageList" 
                    :key="index">
                    <img v-lazy="img.img"  />
                    <h3>{{img.title}}</h3>
                </div>
            </van-row>
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
        return{
            keyValue: '',
            imageList: [
                {
                    img: 'https://img.yzcdn.cn/2.jpg',
                    title: '2019年将辛运大厦'
                },
                {
                    img: 'https://img.yzcdn.cn/2.jpg',
                    title: '2019年将辛运大厦'
                },
                {
                    img: 'https://img.yzcdn.cn/2.jpg',
                    title: '2019年将辛运大厦'
                },
                {
                    img: 'https://img.yzcdn.cn/2.jpg',
                    title: '2019年将辛运大厦'
                },
            ],
            images: [
                'https://img.yzcdn.cn/2.jpg',
                'https://img.yzcdn.cn/2.jpg'
            ]
        }
    },
    async asyncData({store, route}) {
        setState(store);
    },
    mounted() {
        this.$refs.tabbar.active = 0
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
.page-index {
    .searchW {
        /deep/ .van-field__control {
            font-size: $font-size-small;
            line-height: 24px;
        }
    }        
    .div-row {
        display: inline-grid;
        margin-top: 20px;
        .icon-row {
            color: white;
            font-size: $font-size-large;
            line-height: 50px;
            width: 50px;
            height: 50px;
            border-radius: 90px;
            text-align: center;
            margin: 0 auto 8px auto;
        }    
    }
    .titleH3 {
        text-align: left;
        margin: 30px 0 15px 15px ;
        position: relative;
        &:after, &:before {
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-left-color: darkgray;
            position: absolute;
            content: "";
            left: 65px;
        }
        &:before{
            top: 0;
            left: 62px;
            z-index: 1;
            border-left-color: white;
        }
    }
    .recommend, .newImg, .carefully {
        width: 44.5%;
        display: inline-table;
        margin: 5px;
        text-align: left;
    }
    .recommend p, .newImg p {
        display: inline;
        font-weight: bold;
    }
    .recommend img, .newImg img ,.carefully img{
        margin-bottom: 5px;
        width: 100%;
    }
    .newImg {
        height: 150px;
        img {
            height: 120px;
        } 
    }
    .recommend {
        height: 130px;
        img {
            height: 100px;
        }
    }
    .carefully {
        width: 91.5%;
        img {
            height: 200px;
        }
        h3 {
            margin-top: 0;
            margin-bottom: 20px;
            text-align: left;
        }
    }     
}
</style>
