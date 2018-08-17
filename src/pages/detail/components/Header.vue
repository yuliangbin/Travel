<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="show">
            <span class="header-left iconfont">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!show" :style="opacityStyle">
            <header class="header">
                <router-link to="/">
                    <a class="header-back iconfont">&#xe624;</a>
                </router-link>
                景点详情
            </header>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            opacityStyle: {
                opacity: 0,
            }
        }
    },
    methods: {
        
    },
    activated() {
        window.onscroll = () => {
            let top = document.documentElement.scrollTop;
            if (top > 40) {
                this.show = false;
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = { opacity };
            }else if (top > 140) {
                //do nothing
            }else {
                this.show = true;
            }
        }
    },
    deactivated() {
        window.onscroll = null;
    }
}
</script>
<style lang="stylus" scoped>
    .header-abs {
        position: absolute;
        top: 0.2rem;
        left:0.2rem;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: rgba(0,0,0,0.8);
        text-align: center;
        line-height: 0.8rem;
        .header-left {
            color: #fff;
        }
    }

    .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5;
        height: 0.86rem;
        line-height:0.86rem;
        font-size: 0.32rem;
        background: #00bcd4;
        text-align: center;
        color: #fff;
        .header-back {
            position: absolute;
            left: 0.1rem;;
            top: 0;
            color: #fff;
        }
    }
</style>

