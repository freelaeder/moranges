// 混合 关闭 aside侧边栏状态

import {
	mapState,
	mapMutations
} from 'vuex'

// 抽离数字徽标方法
export default {
	computed: {
		...mapState('m_aside', ['btnActive'])
	},
	onShow() {
		this.updateBtnActiveFalse()
	},
	methods: {
		...mapMutations('m_aside', ['updateBtnActiveFalse'])

	},

}
