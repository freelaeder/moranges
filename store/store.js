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
		'm_aside': moduleAside,
		'm_user': moduleUser,

	}
})
//向外共享
export default store
