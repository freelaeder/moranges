<template>
	<view class="my-backtop" @click="backToTop">
		<uni-icons color="#fff" custom-prefix="iconfont" type="icon-back-top" size="18">
		</uni-icons>
		<!-- <uni-icons type="arrow-up" color="#fff" size="18"></uni-icons> -->
	</view>
</template>

<script>
	export default {
		name:"my-backtop",
		data() {
			return {
				
			};
		},
		methods:{
			backToTop(){
				this.$emit('arcticleToTop',0)
			}
		}
	}
</script>

<style lang="scss">
.my-backtop{
	position: fixed;
	bottom: 85rpx;
	right: 65rpx;
	width: 85rpx;
	background: #00b26a;
	border-radius: 50%;
	text-align: center;
	line-height: 85rpx;
	z-index: 9999;
}
</style>