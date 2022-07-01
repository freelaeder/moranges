<template>
	<view>
		<view class="my-userinfo-container">
			<!-- 顶部盒子 -->
			<view class="login-pic-warp">
				<image class="login-pic" src="https://s1.ax1x.com/2022/06/30/jKjMKP.png" mode="widthFix"></image>
			</view>
			<!-- 头像昵称区域 -->
			<view class="top-box">
				<!-- 头像顶部个人介绍 -->
				<view class="top-person">
					<image :src="wxUserinfo.userInfo.avatarUrl" class="avatar"></image>
					<view class="person-desc">
						<view class="nickname">{{wxUserinfo.userInfo.nickName}}</view>
						<view class="personal-signature">
							我打碎了夕阳,散做漫天的星光
						</view>
					</view>

				</view>
				<!--// 个人扩展 列表  -->
				<view class="expand-container">
					<!-- 个人扩展的每一项 -->
					<view class="expand-items">
						<view class="expand-pic-warp">
							<image class="expand-pics" src="https://s1.ax1x.com/2022/06/30/jKxnnP.png" mode="aspectFill" ></image>
						</view>
						<text class="expand-desc">技术栈</text>
					</view>
					<!-- 个人扩展的每一项 -->
					<view class="expand-items">
						<view class="expand-pic-warp">
							<image class="expand-pics" src="https://s1.ax1x.com/2022/06/30/jKx1hQ.png" mode="aspectFill" ></image>
						</view>
						<text class="expand-desc">个人图集</text>
					</view>
					<!-- 个人扩展的每一项 -->
					<view class="expand-items">
						<view class="expand-pic-warp">
							<image class="expand-pics" src="https://s1.ax1x.com/2022/06/30/jM3t76.png" mode="aspectFill" ></image>
						</view>
						<text class="expand-desc">我的评论</text>
					</view>
					<!-- 个人扩展的每一项 -->
					<view class="expand-items">
						<view class="expand-pic-warp">
							<image class="expand-pics" src="https://s1.ax1x.com/2022/06/30/jM38XR.png" mode="aspectFill" ></image>
						</view>
						<text class="expand-desc">我的关注</text>
					</view>

				</view>


			</view>
			<!-- 程序更多功能 -->
			<view class="program-container">
				<!-- 各个功能模块 -->
				<view class="program-items">
					<view class="program-pic-warp">
						<image class="program-pics" src="https://s1.ax1x.com/2022/06/30/jKxLHf.png" mode="aspectFill" ></image>
					</view>
					<view class="program-desc">
						免责申明
					</view>
					<view>
						<uni-icons class='program-icons-items' color="#cdcdcd" type="right" size="16">
						</uni-icons>
					</view>
				</view>
				<!-- 各个功能模块 -->
				<view class="program-items">
					<view class="program-pic-warp">
						<image class="program-pics" src="https://s1.ax1x.com/2022/06/30/jKxXE8.png" mode="aspectFill" ></image>
					</view>
					<view class="program-desc">
						清除缓存
					</view>
					<view>
						<uni-icons class='program-icons-items' color="#cdcdcd" type="right" size="16">
						</uni-icons>
					</view>
				</view>
				<!-- 各个功能模块 -->
				<view class="program-items">
					<view class="program-pic-warp">
						<image class="program-pics" src="https://s1.ax1x.com/2022/06/30/jKxjUS.png" mode="aspectFill" ></image>
					</view>
					<view class="program-desc">
						关于程序
					</view>
					<view>
						<uni-icons class='program-icons-items' color="#cdcdcd" type="right" size="16">
						</uni-icons>
					</view>
				</view>
				<!-- 各个功能模块 -->
				<view class="program-items"  @click="backout">
					<view class="program-pic-warp">
						<image class="program-pics" src="https://s1.ax1x.com/2022/06/30/jKzS3j.png" mode="aspectFill" ></image>
					</view>
					<view class="program-desc">
						退出程序
					</view>
					<view>
						<uni-icons class='program-icons-items' color="#cdcdcd" type="right" size="16">
						</uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "my-info",
		data() {
			return {

			};
		},
		computed: {
			...mapState('m_user', ['wxUserinfo'])
		},
		methods: {
			...mapMutations('m_user', ['updateWxUserInfo', 'updateToken']),
			async backout() {
				const [err, succ] = await uni.showModal({
					title: '提示',
					content: "确定退出嘛?"
				}).catch(err => err)
				// 用户确认了退出登录的操作
				// 需要清空 vuex 中的 userinfo、token
				if (succ && succ.confirm) {
					this.updateWxUserInfo({})
					this.updateToken('')
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
	}
	// 处理url图片
	.login-pic-warp{
		width: 80vw;
		margin: 0 auto;
		.login-pic {
			width: 100%;
		}
		
	}
	

	.my-userinfo-container {
		.top-bg {
			width: 100%;
			height: 340upx;
			overflow: hidden;

			.top-pic-items {
				width: 100%;
				height: 100%;
			}
		}

		// <!-- 头像昵称区域 -->
		.top-box {
			width: 85vw;
			background-color: #f7f7f7;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 0 auto;
			border-radius: 25rpx;
			transform: translateY(-51rpx);
			overflow: hidden;
			padding: 30rpx;
			margin-bottom: 1vh;
			box-shadow: 1px 1px 3px burlywood;

			// 头像顶部个人介绍
			.top-person {
				display: flex;

				.avatar {
					height: 120upx;
					width: 120upx;
					border-radius: 100upx;
					overflow: hidden;
					flex-shrink: 0;
				}

				.person-desc {
					padding-left: 30rpx;
					letter-spacing: 3rpx;
					.nickname {
						font-weight: 500;
						font-size: 40rpx;
						margin-top: 10px;
						letter-spacing: 2rpx;
						flex: 1;
						padding-bottom: 20rpx;
					}

					.personal-signature {
						color: #929292;
						font-size: 20rpx;
					}
				}
			}
			// 头像顶部个人介绍end
			// 个人扩展 列表
			.expand-container{
				width: 100%;
				height: 100rpx;
				margin: 50rpx 0 10rpx 0;
				display: flex;
				align-items: center;
				.expand-items{
					text-align: center;
					width: 25%;
					.expand-pic-warp{
						height: 60rpx;
						width: 60rpx;
						margin: auto;
						overflow: hidden;
						.expand-pics{
							width: 90%;
							height: 90%;
						}
					}
					.expand-desc{
						font-size: 20rpx;
						color: #929292
					}
					
				}
			}



		}
		
	//<!-- 程序更多功能 -->
	.program-container{
		width: 85vw;
		background-color: #f7f7f7;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin: 0 auto;
		border-radius: 25rpx;
		overflow: hidden;
		padding: 30rpx;
		box-shadow: 1px 1px 3px burlywood;
		.program-items{
			width: 100%;
			height: 60rpx;
			display: flex;
			align-items: center;
			// border-bottom: 1px solid #cdcdcd;
			.program-pic-warp{
				height: 40rpx;
				width: 40rpx;
				margin: auto;
				overflow: hidden;
				flex-shrink: 0;
				.program-pics{
					width: 90%;
					height: 90%;
				}
			}
			.program-desc{
				margin-left: 30rpx;
				flex: 1;
				font-size: 25rpx;
				font-weight: 550;
				letter-spacing: 2rpx;
				
			}
			.program-icons-items{
				
			}
		}
	}
	}
</style>
