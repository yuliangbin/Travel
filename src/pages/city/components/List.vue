<template>
    <div class="container">
        <nav>
            <ul class="city-tap" @click="trigger">
                <li class="active">境内</li>
                <li>境外 港澳台</li>
            </ul>
        </nav>
        <div class="city-search">
            <h2>热门城市</h2>
            <ul class="hot-city city-list" @click="handleCity">
                <li class="city-item" v-for="(item,index) in hotCities" :key="index">
                    <a href="javascript:;">{{item.name}}</a>
                </li>
            </ul>
            <h2>字母排序</h2>
            <ul class="city-sort" @click="changeLocation">
                <li class="sort-item" v-for="(item,index) in list" :key="index">
                    <a href="javascript:;">{{item}}</a>
                </li>
            </ul>

            <div :ref="index" class="city-search" v-for="(item,index) of cities" :key="index">
                <h2>{{index}}</h2>
                <ul class="city-list" @click="handleCity">
                    <li class="city-item" v-for="(item,index) in item" :key="index">
                        <a href="javascript:;">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {cityData} from '@/api/index.js'
import {mapMutations} from 'vuex'
export default {
    name: "CityList",
    data: function() {
        return {
            hotCities: [],
            cities: {},
            list: ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
        }
    },
    methods: {
        //将mutation里的changeCity函数映射到methods里的changeCity方法里
        //如果要调用mutation里的changeCity方法，可以直接调用this.changeCity
        ...mapMutations(['changeCity']),
        getCityData: async function() {
            let dataInfo = await cityData();
            let data = dataInfo.data;
            if (data.ret) {    
                this.cities = data.data.cities;
                this.hotCities = data.data.hotCities;
            }
        },
        changeLocation: function(e){
            const letter = e.target.innerText;//当前点击的元素
            const item = this.$refs[letter][0];//当前要跳转的元素
            //console.log(this.$refs);
            let html = document.documentElement;
            //跳转逻辑代码实现
            let top = html.scrollTop - item.offsetTop;
            if (top < 0) {
                html.scrollTop = html.scrollTop - top;
            } 
            if (top > 0) {
                html.scrollTop = html.scrollTop - top;
            }
        },
        //改变城市地址
        handleCity: function(e){
            this.city = e.target.innerHTML;
            this.changeCity(this.city);
            this.$router.replace('/');
        },
        trigger: function(e) {//切换城市列表           
            let parentNode = e.target.parentNode;
            let nodeList = parentNode.children;
            for(let i = 0; i < nodeList.length; i++) {
                nodeList[i].removeAttribute('class','active');
            }
            e.target.setAttribute('class','active');
        }
    },
    created: function() {
        this.getCityData();
    }
}
</script>
<style lang="stylus" scoped>
    .container {
        nav {
            height: 0.4rem;
            line-height: 0.4rem;
            padding: 0.2rem 1rem;
            background: #00bcd4;
            .city-tap {
                display: flex;
                border: 1px solid #fff;
                border-radius: 0.03rem;
                li {
                flex:1;
                text-align : center;
                color: #fff;
                &.active {
                    background: #fff;
                    color: #00bcd4; 
                }
                }
            }
        }
        .city-search {
            h2 {
                font-size: .24rem;
                margin: .24rem .3rem;
            }
            .hot-city {
                height: 2.7rem;
            }
            .city-list {
                display: flex;
                flex-wrap: wrap;
                .city-item {
                    width: 25%;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    box-sizing: border-box;
                    border-right: 0.02rem solid #ddd;
                    border-bottom: 0.02rem solid #ddd;
                    background: #fff;
                    a {
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        color: #212121;
                        font-size: 0.28rem;
                    }
                }
            }
            .city-sort {
                display: flex;
                flex-wrap: wrap;
                .sort-item {
                    width: 16.66%;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    box-sizing: border-box;
                    border-right: 0.02rem solid #ddd;
                    border-bottom: 0.02rem solid #ddd;
                    background: #fff;
                    a {
                        display: inline-block;
                        width: 100%;
                        text-align: center;
                        color: #212121;
                        font-size: 0.28rem;
                    }
                }
            }
        }
        
    }
</style>

