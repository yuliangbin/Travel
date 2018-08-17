<template>
    <div class="icon">
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="swiper-slide" v-for="(page,index) in pagination" :key="index">
                <div class="content" v-for="(slide,key) in page" :key="key">
                    <img class="icon-img" :src="slide.imgUrl" alt="">
                    <span class="desc">{{slide.desc}}</span>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>   
        </swiper>    
    </div>
</template>
<script>
export default {
    name: "HomeIcon",
    data(){
        return {
            swiperOption: {
                
            },
            pages: [],
        }
    },
    props: {
        iconList: Array,
    },
    computed:{
        list() {
            //console.log(this.pages);
            return this.iconList;
        },
        pagination: function(){
            this.pages = [];
            if (this.list){
                let _this = this;
                //console.log(this);
                this.list.forEach(function(item,index) {
                    const page = Math.floor(index / 8);
                    if(!_this.pages[page]){
                        _this.pages[page] = [];
                    }
                    _this.pages[page].push(item);
                })
            }   
            return this.pages;
        }
    },
    mounted: function(){
        //console.log(this.iconList);
    }
        
}
</script>
<style lang="stylus" scoped>
    .icon {
        width: 100%;
        height: 3.2rem;
        margin-top: 0.1rem;
        background : #fff;
        .swiper-slide {
            display: flex;
            justify-content : center;
            align-items : center;
            flex-wrap : wrap;
            .content {
                display: flex;
                flex-direction : column;
                width: 25%;
                align-items: center;
                flex-wrap : wrap;
                margin-top: 0.1rem;
                margin-right: auto;
                .icon-img {
                    width: 1.1rem;
                    height : 1.1rem;
                }
                .desc{
                    margin-top: 0.1rem;
                    overflow : hidden;
                    white-space : nowrap;
                    text-overflow : ellipsis;
                }
            } 
        }
    }
</style>
