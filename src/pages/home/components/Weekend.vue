<template>
    <div class="weekend">
        <p class="weekend-title">周末去哪儿</p>
        <ul class="weekend-list">
            <li class="list-item" v-for="(item,index) in weekendList" :key="index">
                <img class="item-img" :src="item.imgUrl" alt="">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    props: {
        weekendList: Array,
    }
}
</script>

<style lang="stylus" scoped>
    .weekend {
        margin-top: 0.4rem;
        background: #fff;
        .weekend-title{
            font-size: 0.32rem;
            line-height: 0.44rem;
            height: 0.44rem;
            margin: 0.22rem 0 0.22rem 0.2rem;
        }
        
        .list-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.1rem;
        .item-img {
            width: 100%;
        }
        .item-title {
            padding: 0.1rem 0 0.15rem 0.2rem;
            font-size: 0.32rem;
        }
        .item-desc {
            padding: 0.1rem 0 0.15rem 0.2rem;
            color: #ccc;
        }
    }
        
}
</style>


