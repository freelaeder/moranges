export default {
	// 开启命名空间
	namespaced: true,
	// 数据
	state: () => ({
		// address: JSON.parse(uni.getStorageSync('address') || '{}'),
		// // 登录之后的token 字符串
		// token: uni.getStorageSync('token') || '',
		// 控制btn状态
		btnActive:false,

	}),
	//方法
	mutations: {
		// 更新收货地址
		// updateAddress(state, address) {
		// 	state.address = address
		// 	this.commit('m_user/saveAddressToStorage')
		// },
		// 持久保存 address
		// saveAddressToStorage(state) {
		// 	uni.setStorageSync('address', JSON.stringify(state.address))
		// },
		// 改变btnActive 状态
		updateBtnActive(state,falg){
			state.btnActive = falg
		},
		// 用户点击侧边栏跳转其他页面 关闭当前侧边栏
		updateBtnActiveFalse(state){
			state.btnActive = false
		}
	
	

	},
	getters: {
		
	}
}
