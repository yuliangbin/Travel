import axios from 'axios'

export let homeData = function(city){
    //console.log(1);异步操作里的代码，浏览器是捕捉不到的，因此不会在控制台打印1
    return axios.get('/api/index.json?city=' + city);
}

export let cityData = function(){
    return axios.get('/api/city.json');
}