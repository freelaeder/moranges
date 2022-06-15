<template>
	<view>
		<!-- 功能按钮 -->
		<my-btn></my-btn>
		<!-- 文章主体 -->
		<view class="">
			home
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [],

			};
		},
		onLoad() {
			this.getSwiperList()
		},
		methods: {
			// 3. 获取轮播图数据的方法
			async getSwiperList() {
				// 3.1 发起请求
				const {
					data: res
				} = await uni.$http.get('/api/public/v1/home/swiperdata')
				// 3.2 请求失败
				if (res.meta.status !== 200) {
					return uni.showToast({
						title: '数据请求失败！',
						duration: 1500,
						icon: 'none',
					})
				}
				// 3.3 请求成功，为 data 中的数据赋值
				this.swiperList = res.message
			},
		}
	}
</script>

<style lang="scss">
page{
	box-sizing: border-box;
}
</style>
