import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import state from './state.js';
import mutation from './mutation'

export default new Vuex.Store({
    state: state,
    // actions: {
    //     changeCity({commit},city) {
    //         commit('changeCity',city);
    //     }
    // },
    mutations: mutation,
})