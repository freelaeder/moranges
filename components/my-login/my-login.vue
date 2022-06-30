<template>
	<view class="login-container">
		<!-- 提示登录的按钮 -->
		<view class="login-pic-warp">
			<image class="login-pic" src="https://s1.ax1x.com/2022/06/30/jKL2xP.png" mode="widthFix" ></image>
		</view>
		<!-- 登录提示 -->
		<view class="tips-text">
			<text class="tips-text-top"> 光的定义是什么?</text>
			<text class="tips-text-desc">回答: 直到你的出现,光便有了定义</text>
		</view>
		<!-- 登录按钮 -->
		<view class="login-btn">
			<button @click="getUserProfile" type="primary" class="login-btn-lo">登录</button>
		</view>

	</view>
</template>

<script>
	import {
		mapMutations,
	} from 'vuex'
	export default {
		name: "my-login",
		data() {
			return {

			};
		},

		methods: {
			...mapMutations('m_user', ['updateWxUserInfo', 'updateToken']),
			// 用户授权登录，获取信息
			getUserProfile() {
				// desc 声明获取用户个人信息后的用途，不超过30个字符
				// https://uniapp.dcloud.io/api/plugins/login.html#getuserprofile

				// 两种方法   定义变量保存 that 因为函数没有this ,
				// 但是箭头函数没有this，会使用上一级this

				// const that = this
				// uni.getUserProfile({
				//   desc: '登录',
				//   success(res) {
				//     that.updateUserInfo(res)
				//   },
				//   fail(res) {
				//     // console.log('--');
				//     uni.$showMsg('您取消了授权哟')
				//   }
				// })
				uni.getUserProfile({
					desc: '登录',
					success: (res) => {
						//保存wx用户信息
						this.updateWxUserInfo(res)
						// 保存wxtoken
						this.updateToken(res.encryptedData)
					},
					fail(res) {
						// console.log('--');
						uni.$showMsg('您取消了授权哟')
					}
				})
			},



		}

	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子样式
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;
		background-color: #ffffff;
		position: relative;
		overflow: hidden;
		
		.login-pic-warp{
			width: 80vw;
			margin: 0 auto;
			margin-top: 5vh;
			margin-bottom: 6vh;
			.login-pic {
				width: 100%;
			}
			
		}

		

		// 绘制登录盒子底部的半椭圆造型
		// &::after {
		//   content: ' ';
		//   display: block;
		//   position: absolute;
		//   width: 100%;
		//   height: 40px;
		//   left: 0;
		//   bottom: 0;
		//   background-color: white;
		//   border-radius: 100%;
		//   transform: translateY(50%);
		// }


		//登录按钮样式
		.login-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0upx 30upx;
			margin-top: 80upx;

		}

		.login-btn-lo {
			background-color: #007AFF;
			border-radius: 100rpx;
			height: 80rpx;
			width: 550rpx;
			line-height: 80rpx;
			color: #fff;
		}

		//按钮下方提示的信息样式
		.tips-text {
			// align-self: flex-start;
			font-size: 12px;
			color: gray;
			letter-spacing: 2rpx;

			.tips-text-top {
				display: block;
				font-weight: 800;
				font-size: 54rpx;
				color: black;
				margin-top: 1vh;
				position: relative;
				margin-bottom: 10rpx;

				&::after {
					content: '';
					position: absolute;
					bottom: -14upx;
					left: 0px;
					width: 96upx;
					height: 8upx;
					border-radius: 200upx;
					background: linear-gradient(90deg, rgba(55, 110, 234, 1) 0%, rgba(255, 255, 255, 1) 100%);
				}

			}

			.tips-text-desc {
				display: block;
				color: #9f9f9f;
				padding-top: 16rpx;
			}
		}

	}
</style>
