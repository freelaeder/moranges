export default {
	// 开启命名空间
	namespaced: true,
	// 数据
	state: () => ({
		// 用户信息
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}')
	}),
	//方法
	mutations: {

		// 更新用户信息
		updateUserInfo(state, info) {
			state.userinfo = info
			// 调用持久化保存
			this.commit('m_user/saveUserToStotage')
		},
		// 持久化储存 用户信息
		saveUserToStotage(state) {
			
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		}

	},
	getters: {

	}
}
