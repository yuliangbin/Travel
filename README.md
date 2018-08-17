
> A qunaer project based Vue.js

## 安装步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev


```
# 项目结构
    - src
        - api       获取数据接口
        - base      基础组件
        - pages     页面级组件
        - router    前端路由
        - App.vue   
        - main.js   打包入口文件
    -static
        - mock  //静态资源文件
        
# 项目预览
![image](https://github.com/yuliangbin/Travel/blob/master/images/%E9%A6%96%E9%A1%B5.gif) 

---

![image](https://github.com/yuliangbin/Travel/blob/master/images/%E5%88%97%E8%A1%A8.gif)

# 项目总结

1. 关于轮播图分页
 

	<swiper>标签包裹着整个轮播图区域，而每一个<swiper-slide>对应着一个轮播图页面。
	在<swiper-slide>标签内的元素才是真正的内容元素。
	对轮播图内的元素内容的修改可以在swiper-slide标签的后代元素修改。
	想要设置轮播的页数，需要在swiper-slide标签上修改。
	

2. flex布局下，项目内的子元素设置单行文本溢出无效


    - 将要设置溢出省略的节点设置宽度
	- 在项目元素上设置min-width:0；或者overflow:hidden

3. 兄弟组件之间传数据


	- Vuex 
	- eventBus

4. 父子组件传参


    父组件给子组件传值的情况下，而父组件的值要通过ajax异步从服务器端获取
    考虑这样一种情况: 
    当子组件实例化完后，父组件的真实的值还没有被传回来，这可能就会导致获取数据的变量为undefined，
    造成报错。数据不能正确加载

5. 在获得某个值时，或者在函数传参的情况下，我们可以先对值或传递的参数进行一轮验证。然后再将其应用到后续的操作。

1. 返回哪个页面、或点击跳转到某个页面、或后退
 

	- 标签方法
	
		可以用<router-link>包裹到需要点击跳转的那个标签。再用"to"属性给出具体的路径名.
			
        <html>
        <router-link><div>hello</div></router-link>
        </html>

		但这样做router-link默认是a标签，会将div标签里的样式渲染成a标签的。但是我们可以通过tag将其转换成我们想要的标签.
		
		另一种做法是直接将div标签替换成router-link标签

        <html>
        <router-link to="" tag="li">hello</router-link>
        </html>

		虽然默认也是a标签，但是我们可以通过tag将其转换成我们想要的标签
	- JS方法
		- 如果是后退，则可以使用**go()或back()方法**.
		- 如果是跳转页面，可以使用**this.$router.push()******

7. localStorage、sessionStorage

    
    比如我们本来的地址是北京，我们将地址切换为上海，但是当我们刷新页面后，地址有变成了北京。
    这显然不是我们想要的，我们希望地址仍然是上海。
    解决方法是将地址存储起来： 通过localStorage，sessionStorage
    但是仍然需要注意一点的是:当用户禁用了localStrage或采用隐身模式的时候，
    使用localStorage会导致页面报错，无法继续运行。所以我们要为可能出错的代码加上try catch

8. min-width
 

    当一个div内的元素的字数可能会不断变更的时候（比如说城市地址设置，不同的城市名字个数会不同），
    会导致宽度的变化，这时我们就不适合给那个div一个固定的宽度，这会导致文字被挤下另一行，
    所以我们可以将那个div设置一个最小宽度min-width,而不是设置成固定宽度。

9. keep-alive的activated钩子
    
    为了性能和更快的显示页面，我们可以借助vue中的<keep-alive>标签来缓存页面，
    但是如果页面中需要根据城市的不同来显示不同的页面信息时，由于<keep-alive>的缓存作用，
    我们的页面并不会重新发送Ajax请求（由于缓存的原因，并不会再次走mounted，created钩子函数）。
    但是会刷新页面(刷新页面这个瞬间，会触发<keep-alive>的activated钩子函数，
    我们可以在activated函数里判断是否要重新发送Ajax请求渲染页面)。
    另外，如果希望哪个页面不被缓存，可以通过<keep-alive>的exclude属性

1. 动态路由

	
	当使用路由参数的时候，例如从/user/foo导航到/user/bar，原来的组件实例会被复用。
	因为两个路由都渲染同一个组件，比起销毁再建立，复用更加高效。
	不过这也意味着组件的生命周期钩子不会再被调用。
	组件复用时，想对路由参数的变化做出响应，可以watch $route对象的变化。

11. 组件的name属性的用途



	- 用于keep-alive标签
	- 用于递归组件，当组件调用自身的时候，可以使用自己的名字作为标签名
	- vue调试工具中每个组件的name
	
12. 
	鼠标滚动位置对不同页面的影响
	可以用Vue-Router里的滚动行为方法

1. 路由缓存的三种思路
 

	- 通过路由元信息
	- 通过组件的name属性，配合<keep-alive>的exclude属性。exclude="组件名字"
	- 缓存就是不再发送请求嘛。如果我想要在进入页面时能够发送请求不就可以实现不使用缓存了嘛。如果想要进路由时做点事情，如发送Ajax请求，可以使用actived钩子函数

14. 性能优化


    合并http请求，比如一个路由页面的.vue文件中可能会有多个.vue文件的子组件，
    这时这个路由页面中的http请求可以视情况放在父组件中统一发送。

15. 页面抖动


    有些数据的显示是需要从后台获取数据的，在数据还没渲染出来之前，它的高度可能为0当页面显示出来的时候高度才恢复正常。
    这时页面会出现抖动的效果，所以我们可以先给那个区域预留出一部分高度，防止页面的抖动

16. 在刷新页面时，轮播图默认显示的是最后一张图片。

    
    原因：
	在写轮播图的时候，我们需要从后台获取我们的图片数据，在没获取到图片之前，轮播图数据是一个空数组。
	也就是先渲染的是一个空数组，等数据拿到后，才真正的开始渲染图片，这就是默认显示最后一张图片的原因。
	我们可以加一个限制条件：在拿到数据之后才开始渲染是wiper轮播图。使用v-if="swiperList.length"