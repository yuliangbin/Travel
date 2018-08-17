<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper" >
            <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide v-for="(item,index) in imgs" :key="index">
                <img :src="item" alt="" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination : '.swiper-pagination',
                paginationType: 'fraction',
                loop: true,
                
            },
        }
    },
    props: {
        imgs: Array,
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close');
        }
    }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container {
        overflow: inherit;
    }
    .container {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        z-index: 99;
        .wrapper {
            background: #fff;
            .swiper-img {
                width: 100%;
            }
            .swiper-pagination {
                color: #fff;
                bottom: -1.2rem;
            }
        }
    }
</style>
