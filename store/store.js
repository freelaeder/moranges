import Vue from 'vue'
import Vuex from 'vuex'
// 引入aside.js
import moduleAside from '@/store/aside.js'
// 引入 user.js
import moduleUser from '@/store/user.js'
// 使用Vuex 
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		// 挂载cart，使用 m_cart/cart
		'm_aside': moduleAside,
		'm_user': moduleUser,

	}
})
//向外共享
export default store
