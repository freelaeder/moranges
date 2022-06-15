<template>
	<view>
		
	</view>
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	export default {
		// 混合 aside 目的 点击侧边栏之后，修改btnActive 状态，保证再次返回不显示侧边栏
		mixins: [asideMix],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
