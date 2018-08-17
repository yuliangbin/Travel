import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/index.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
