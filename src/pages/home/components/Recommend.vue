<template>
    <div class="like">
        <div class="like-title">
            <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span class="title-desc">猜你喜欢</span>
        </div>
        <ul class="like-list">
            <router-link :to="'/detail/' + item.id " tag="li" class="like-item border-bottom" v-for="(item,index) in recommendList " :key="index">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        recommendList: Array,
    }
}
</script>
<style lang="stylus" scoped>
    .like {
        background: #fff;
        margin-top : 0.4rem;
        .like-title {
            padding: 0.2rem 0;
            .title-img {
                width: .3rem;
                height: .3rem;
                margin-left: .2rem;
                vertical-align: top;
            }
            .title-desc {
                margin-left: .08rem;
                height: .44rem;
                color: #212121;
                font-size: .32rem;
                line-height: .44rem;
            }
        };
        .like-list {
            list-style : none;
            padding-left: 0.2rem;
            .like-item {
                display: flex;
                flex-direction : row;
                padding: 0.2rem 0;
                .item-img {
                    width : 1.7rem;
                    height : 1.7rem;
                }
                .item-info {
                    padding-left: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                    .item-title {
                        flex:1;
                        font-size: 0.32rem;
                        overflow : hidden;
                        white-space : nowrap;
                        text-overflow : ellipsis;
                    }
                    .item-desc {
                        flex: 1;
                        color: #bbb;
                        overflow : hidden;
                        white-space : nowrap;
                        text-overflow : ellipsis;
                    }
                    .item-button {
                        flex:1;
                        width:2rem;
                        background: #ff9300;
                        color: #fff;
                    }
                }
            }
        }
    }
    
</style>
