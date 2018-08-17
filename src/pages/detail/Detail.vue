<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
    </div>
</template>
<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
export default {
    data() {
        return {
           list: [
                {
                    title: '成人票',
                    children: [
                        {title: '成人三馆联票'},
                        {title: '成人四馆联票'}
                    
                    ],
                },
                {
                    title: '学生票',
                    children: [
                        {title: '学生三馆联票'},
                        {title: '学生四馆联票'}
                    ],    
                },
                {
                    title: '儿童票',
                    children: [
                        {title: '学生三馆联票'},
                        {title: '学生四馆联票'}
                    ], 
                },
                {
                    title: '特价票',
                    children: [
                        {title: '学生三馆联票'},
                        {title: '学生四馆联票'}
                    ], 
                },
            ],    
        }
    },
    components: {
        DetailBanner: Banner,
        DetailHeader: Header,
        DetailList: List,
    }
}
</script>
<style lang="stylus" scoped>
    .class {
        height: 500px;;
    }
</style>

