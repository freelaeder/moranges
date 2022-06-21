export default {
	// 开启命名空间
	namespaced: true,
	// 数据
	state: () => ({
		// 控制btn状态
		btnActive:false,

	}),
	//方法
	mutations: {
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
