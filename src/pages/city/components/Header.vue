<template>
    <header class="header">
        <router-link to="/">
            <a class="header-back iconfont">&#xe624;</a>
        </router-link>
        城市选择
    </header>
</template>
<script>
export default {
    name: 'CityHeader',
}
</script>
<style lang="stylus" scoped>
    .header {
        position: relative;
        width: 100%;
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

