<template>
    <div class="list">
       <div class="list-item" v-for="(item,index) in list" :key="index">
           <div class="item-title">
                <span class="title-icon"></span>
                {{item.title}}
           </div>
           <div class="children" v-if="item.children">
               <detail-list :list="item.children" class="children-list"></detail-list>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'DetailList',
    data() {
        return {
        }
    },
    props:['list'],
}
</script>
<style lang="stylus" scoped>
    .list {
        .list-item {
           .item-title {
                overflow: hidden;
                position: relative;
                z-index: 4;
                margin-bottom: -.02rem;
                padding: 0 .2rem;
                height: .88rem;
                background: #fff;
                color: #333;
                font-size: .32rem;
                line-height: .88rem;
                text-indent: .4rem;
                .title-icon {
                    display: inline-block;
                    position: absolute;
                    width: .36rem;
                    height: .36rem;
                    top: .26rem;
                    left: .2rem;
                    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
                    margin-right: .1rem;
                    background-size: .4rem 3rem;
                }
            }
            .children {
                margin-left: 0.8rem;
            }
        }
    }
</style>
