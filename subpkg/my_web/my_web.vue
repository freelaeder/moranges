<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="href"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href:'',
				
			};
		},
		onLoad(options) {
			this.href=options.href
			
		}
	}
</script>

<style lang="scss">

</style>
