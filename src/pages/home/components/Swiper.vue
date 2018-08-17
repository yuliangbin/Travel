<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="swiperList">
            <swiper-slide v-for="(slide,key) in swiperList" :key="key">
                <img :src="slide.imgUrl" alt="" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          loop: true,
        },
      }
    },
    props: {
        swiperList: Array,
    },
    mounted: function(){
        //console.log("swiper");
        //console.log(this.swiperList);
    }
   
  }
</script>

<style lang="stylus" scoped>
    .wrapper {
        width: 100%;
        height: 2rem;
        background: #eee;
        .swiper-img {
            width: 100%;
            height: 2rem;
        }
    }

</style>



