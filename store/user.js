export default {
	// 开启命名空间
	namespaced: true,
	// 数据
	state: () => ({
		// 默认用户信息
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		// 微信登录的用户信息
		wxUserinfo:JSON.parse(uni.getStorageSync('wxUserInfo') || '{}'),
		// token
		token:uni.getStorageSync('wxToken') || '',
	}),
	//方法
	mutations: {

		// 更新默认用户信息
		updateUserInfo(state, info) {
			state.userinfo = info
			// 调用持久化保存
			this.commit('m_user/saveUserToStotage')
		},
		// 持久化储存默认 用户信息
		saveUserToStotage(state) {
			
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo))
		},
		// 更新微信登录的用户信息
		updateWxUserInfo(state,info){
			state.wxUserinfo = info
			// 调用微信持久化保存
			this.commit('m_user/saveWxUserToStorage')
		},
		// 持久化保存微信登录的用户信息
		saveWxUserToStorage(state){
			uni.setStorageSync('wxUserInfo',JSON.stringify(state.wxUserinfo))
		},
		// 保存token
		updateToken(state,info){
			state.token = info
			this.commit('m_user/saveTokenToStorage')
		},
		// 持久化保存
		saveTokenToStorage(state){
			uni.setStorageSync('wxToken',state.token)
		}

	},
	getters: {

	}
}
