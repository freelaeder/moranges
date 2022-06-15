<template>
	<view>
		<!-- 功能按钮 -->
		<my-btn></my-btn>
		<!-- 文章主体 -->
		<view class="home-container">
			<!-- body -->
			<view class="home-body-box">
				<view class="home-title">
					<text id="site-title">Alex Smith</text>
					<text id="site-title">I'm Developer</text>
				</view>
			</view>
			<view class="home-desc">
				<h1>home desc</h1>
			</view>
		</view>
	</view>
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	export default {
		// 混合 aside
		mixins: [asideMix],
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
	page {
		box-sizing: border-box;
	}
	.home-container{
		max-height: 100vh;
		height: 100vh;
		background: url(http://demo.cssmoban.com:8020/cssthemes6/skk-0816-14/assets/img/hero-bg.jpg) repeat fixed center center; 
		background-size: cover;
		.home-body-box{
			height: 100vh;
			.home-title{
				display: flex;
				justify-content: center;
				align-items: flex-start;
				color: #fff;
				font-size: 23px;
				font-weight: bold;
				letter-spacing: 1rpx;
				height: 100%;
				flex-direction: column;
				margin-left: 20vw;
				
			}
		}
	}
	/* 跳动文字 */
	#site-title{
	  display: block;
	  will-change: transform;
	  -webkit-transform-origin: center center;
	  -ms-transform-origin: center center;
	  transform-origin: center center;
	  -webkit-animation: Pshake_Crazy 1s ease-in-out infinite;
	  animation: Pshake_Crazy 1s ease-in-out infinite;
	  color: #fff;
	}
	@keyframes Pshake_Crazy {
	  10% {
	      transform: translate(-1px, -1px) rotate(1deg);
	  }
	  20% {
	      transform: translate(-0.5px, 1.5px) rotate(0.5deg);
	  }
	  30% {
	      transform: translate(1.5px, 0.5px) rotate(0.5deg);
	  }
	  40% {
	      transform: translate(1.5px, -0.5px) rotate(-0.5deg);
	  }
	  50% {
	      transform: translate(2.5px, 1.5px) rotate(1.5deg);
	  }
	  60% {
	      transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
	  }
	  70% {
	      transform: translate(-0.5px, 2.5px) rotate(1.5deg);
	  }
	  80% {
	      transform: translate(2.5px, -1.5px) rotate(-0.5deg);
	  }
	  90% {
	      transform: translate(1.5px, -0.5px) rotate(1.5deg);
	  }
	  0%, 100% {
	      transform: translate(0, 0) rotate(0);
	  }
	}

</style>
