<template>
	<!-- 如果没有wxUserinfo 显示登录按钮-->
	<view class="my-container">
		<my-login v-if="!token"></my-login>
		<my-info v-else></my-info>
	</view>
	
	
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	import {mapState} from 'vuex';
	export default {
		// 混合 aside 目的 点击侧边栏之后，修改btnActive 状态，保证再次返回不显示侧边栏
		mixins: [asideMix],
		data() {
			return {
				
			};
		},
		computed:{
			// 使用vuex 
			...mapState('m_user',['wxUserinfo','token'])
		}
	}
</script>

<style lang="scss">
page,
.my-container{
	height: 100vh;
}
</style>
