<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="data.swiperList"></home-swiper>
        <home-icon :iconList="data.iconList"></home-icon>
        <home-recommend :recommendList="data.recommendList"></home-recommend>
        <weekend-list :weekendList="data.weekendList"></weekend-list>
    </div>
</template>
<script>
import {homeData} from "@/api/index.js"
import HomeHeader from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icon from './components/Icon.vue'
import Recommend from './components/Recommend.vue'
import Weekend from './components/weekend.vue'
import {mapState} from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            data: {},
            lastCity:'',
        }
    },
    computed: {
        //将state里的city属性映射到computed属性内映射的名字叫currentCity，
        //即this.currentCity = this.$store.state.city
        ...mapState({
            currentCity: 'city',
        })
    },
    components: {
        HomeHeader: HomeHeader,
        HomeSwiper: Swiper,
        HomeIcon: Icon,
        HomeRecommend: Recommend,
        WeekendList: Weekend,
    },
    methods: {
        getData:async function(){
            this.lastCity = this.city;  
            let {data} = await homeData(this.currentCity);
            this.data = data.data;
            //console.log(this.data);            
        },
    },
    created: function() {
        //console.log('created');
        this.getData();
    },
    mounted() {
        //console.log('mounted');
    },
    activated() {
        if (this.lastCity !== this.city) {
            console.log(this.city);
            this.lastCity = this.city;
            this.getData();
        }
        //console.log('activated');
    }
}
</script>


