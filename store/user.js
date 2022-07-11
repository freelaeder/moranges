export default {
	// 开启命名空间
	namespaced: true,
	// 数据
	state: () => ({
		// 默认用户信息
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		// 微信登录的用户信息
		wxUserinfo: JSON.parse(uni.getStorageSync('wxUserInfo') || '{}'),
		// token
		token: uni.getStorageSync('wxToken') || '',
		// 个人图集
		ownImgs: uni.getStorageSync('wxImgs') || '',
		// 个人图片总数
		allOwnImgs:uni.getStorageSync('allImgs') || '',
		// 个人文章总数
		articlesAll:uni.getStorageSync('allArticles') || '',
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
		updateWxUserInfo(state, info) {
			state.wxUserinfo = info
			// 调用微信持久化保存
			this.commit('m_user/saveWxUserToStorage')
		},
		// 持久化保存微信登录的用户信息
		saveWxUserToStorage(state) {
			uni.setStorageSync('wxUserInfo', JSON.stringify(state.wxUserinfo))
		},
		// 保存token
		updateToken(state, info) {
			state.token = info
			this.commit('m_user/saveTokenToStorage')
		},
		// 持久化保存
		saveTokenToStorage(state) {
			uni.setStorageSync('wxToken', state.token)
		},
		// 保存图集
		updateWxImgs(state, info) {
			state.ownImgs = info
			this.commit('m_user/saveWxImgs')

		},
		// 持久化保存图集
		saveWxImgs(state) {
			uni.setStorageSync('wxImgs', state.ownImgs)
		},
		// 保存图集总数
		updateAllCountImgs(state, info) {
			state.allOwnImgs = info
			this.commit('m_user/saveAllCountImgs')
		
		},
		// 持久化保存图集总数
		saveAllCountImgs(state) {
			uni.setStorageSync('allImgs', state.allOwnImgs)
		},
		// 保存文章总数
		updateAllArcticles(state, info) {
			state.articlesAll = info
			this.commit('m_user/saveAllCountArcticles')
		
		},
		// 持久化保存文章总数
		saveAllCountArcticles(state) {
			uni.setStorageSync('allArticles', state.articlesAll)
		},
		


	},
	getters: {
		// 获取喜欢的总数
		likeCounts(state) {
			return state.ownImgs.filter(x => x.imgstatus).reduce((total,item) => total += item.imgstatus,0)
		},
		
	}
}
