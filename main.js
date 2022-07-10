// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 引入store
import store from '@/store/store.js'

Vue.config.productionTip = false


// 按需导入 $http 对象
import {
	$http
} from '@escook/request-miniprogram'

// 将按需导入的 $http 挂载到 wx 顶级对象之上，方便全局调用
wx.$http = $http

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http
//配置请求根路径
$http.baseUrl = 'https://freelaeder.cn'

// 展示 loading 效果
$http.beforeRequest = function(options) {
	wx.showLoading({
		title: '疯狂加载中...',
	})
}

// 请求完成之后做一些事情
$http.afterRequest = function() {
	wx.hideLoading()
}
// 封装的展示消息提示的方法
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none',
	})
}




// import hljs from 'highlight.js'
// import 'highlight.js/styles/a11y-dark.css' // 这里可以切换不同的主题

// Vue.directive('highlight',function (el) {
//     let blocks = el.querySelectorAll('pre code');
//     setTimeout(() =>{
//         blocks.forEach((block)=>{
// 			hljs.highlightBlock(block)
//         })
//     }, 200)
// })

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
