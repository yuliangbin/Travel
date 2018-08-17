<template>
    <div>
        <div>
            <header class="banner" @click="show">
                <img src="https://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_600x330_8b04e389.jpg" alt="" class="banner-img">
                <div class="banner-icon">
                    <i class="icon-icon iconfont">&#xe69a;</i>
                    <em class="icon-number">36</em>
                </div>
                <div class="banner-info">北京国际花园港（AAAA景区）</div>
            </header>
            <fade-animation>
                <banner-gallary v-if="showGallary" :imgs="imgs" @close="show"></banner-gallary>
            </fade-animation>
        </div>
        
    </div>
    
</template>

<script>
import Gallary from '@/base/Gallary.vue'
import FadeAnimation from '@/base/fade.vue'
export default {
    data() {
        return {
            showGallary: false,
            imgs: [
                'http://img1.qunarzz.com/sight/p0/1806/5b/5b32a9e1ac462fb5a3.img.jpg_350x240_b567322e.jpg',
                "http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_350x240_76a33993.jpg"
            ]
        }
    },
    methods: {
        show() {
            //console.log(this.showGallary);
            this.showGallary = !(this.showGallary);
        }
    },
    components: {
        BannerGallary: Gallary,
        FadeAnimation: FadeAnimation,
    },
}
</script>

<style lang="stylus" scoped>
    .banner {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 55%;
        overflow: hidden;
        .banner-img {
            width: 100%;
            vertical-align: top;
        } 
        .banner-icon {
            position: absolute;
            bottom: 0.86rem;
            left: 0.2rem;
            color: #fff;
            font-size: 0.24rem;
            width: 1.2rem;
            height: 0.4rem;
            border-radius: 0.1rem;
            background: rgba(0,0,0,0.5);
            line-height: 0.4rem; 
            text-align: center;
            .icon-icon {
               font-size: 0.12rem;
            }
            .icon-number {
                margin-left: 0.04rem;
            }
        }
        .banner-info {
            position: absolute;
            width: 100%;
            bottom: .25rem;
            left: 0.2rem
            color: #fff;
            font-size: 0.36rem;
            line-height: 0.4rem;
            text-shadow: 0 1px 2px rgba(0,0,0,0.7);
            &:after {
                content: " ";
                display: block;
                position: absolute;
                bottom: -0.24rem;
                left: -0.2rem;
                width: 100%;
                min-height: .6rem;
                background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));

            }
        }
    }
</style>


