<template>
    <div>
        <header>
                <span class="header-left iconfont">&#xe624;</span>
            <div class="header-input">
                <i class="icon-search iconfont">&#xe632;</i>
                <span class="input">输入城市/景点/游玩主题</span>
            </div> 
            <div class="header-right">
                <router-link to="/city">
                    <span class="city">{{this.city}}</span>
                    <i class="icon-city iconfont">&#xe64a;</i>
                </router-link>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader',
    computed: {
        city() {
            return this.$store.state.city;
        }
    }
}
</script>

<style lang="stylus" scoped>
    header {
        display: flex;
        height :0.86rem;
        background: #00bcd4;
        .header-left{
            margin: 0 0.32rem 0 0.32rem;
            display: flex;
            justify-content:center;
            align-items : center;
            color: #fff;
        }
        .header-input {
            flex:1;
            display: flex;
            align-items : center;
            height : 0.64rem;
            background: #fff;
            color: #b3b3aa;
            border-radius: 0.1rem;
            margin: 0.11rem 0 0.11rem 0;
            .icon-search{
                margin-left: 0.1rem;
            }
            .input {
                margin-left: 0.1rem;
                width: 3.6rem;
                height : 100%;
                line-height : 0.64rem;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            
        }
        .header-right {
            a {
                color: #fff;
            }
            min-width : 1.24rem;
            display: flex;
            justify-content:center;
            align-items : center;
            .icon-city{
                font-size: 13px;
            }
            
        }
    }

</style>


