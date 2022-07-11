<template>
	<view>
		<!-- 用户登录 -->
		<view class="loginin-container" v-if="token">
			<!-- 顶部名称 -->
			<view class="archive-top">
				<view class="archive-pic-warp">
					<image class="archive-pics" :src="wxUserinfo.userInfo.avatarUrl" mode="widthFix"></image>
				</view>
				<view class="archive-nickname">
					{{wxUserinfo.userInfo.nickName}}
				</view>
				<view class="expand-pic-warp">
					<image class="expand-pics"
						:src=" wxUserinfo.userInfo.gender ==0 ? 'https://s1.ax1x.com/2022/06/30/jM3rjA.png': 'https://s1.ax1x.com/2022/06/30/jM3ynI.png'  "
						mode="aspectFill"></image>
				</view>
			</view>
			<!-- 日志分类 -->
			<view class="archive-categories">
				<!-- 分布情况 -->
				<view class="archive-title">
					共计28个日志，分布情况如下：
				</view>
				<!-- 详细分类 -->
				<view class="archive-cate-container">
					<!-- 每一个分类项 -->
					<view class="archive-cate-items">
						<!-- 分类图片 -->
						<view class="archive-pic-warp">
							<image class="archive-pics" src="https://s1.ax1x.com/2022/06/30/jM3dhD.png" mode="widthFix"></image>
						</view>
						<!-- 分类名称 -->
						<view class="archive-articles">
							文章
						</view>
						<!-- 分类数量 -->
						<view class="archiver-number">
							{{articlesAll}}
						</view>
					</view>
					<!-- 每一个分类项 -->
					<view class="archive-cate-items" @click="picClick">
						<!-- 分类图片 -->
						<view class="archive-pic-warp">
							<image class="archive-pics" src="https://s1.ax1x.com/2022/06/30/jM3UAK.png" mode="widthFix"></image>
						</view>
						<!-- 分类名称 -->
						<view class="archive-articles">
							图片
						</view>
						<!-- 分类数量 -->
						<view class="archiver-number">
							{{allOwnImgs}}
						</view>
					</view>
					<!-- 每一个分类项 -->
					<view class="archive-cate-items">
						<!-- 分类图片 -->
						<view class="archive-pic-warp">
							<image class="archive-pics" src="https://s1.ax1x.com/2022/06/30/jM311J.png" mode="widthFix"></image>
						</view>
						<!-- 分类名称 -->
						<view class="archive-articles">
							多媒体
						</view>
						<!-- 分类数量 -->
						<view class="archiver-number">
							3
						</view>
					</view>
					
				</view>
				
				<view class="all-btn" @click="allClick">
					全部
				</view>

			</view>

		</view>
		<!-- 用户未登录 -->
		<view class="loginout-container" v-else>
			<image class="loginout-pic" src="https://s1.ax1x.com/2022/06/30/jMnQsK.png">
			</image>
			<view class="loginout-tips">
				滚烫人生路，漫漫不辜负
			</view>
		</view>
		<!-- https://s1.ax1x.com/2022/06/30/jMZ3ZQ.png -->
	</view>
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	import {
		mapState
	} from 'vuex'
	export default {
		// 混合 aside 目的 点击侧边栏之后，修改btnActive 状态，保证再次返回不显示侧边栏
		mixins: [asideMix],
		data() {
			return {

			};
		},
		onReady() {
			// uni.$showMsg('点击 我的，就可以登录了哟')
		},
		computed: {
			...mapState('m_user', ['token', 'wxUserinfo','allOwnImgs','articlesAll'])
		},
		methods:{
			//点击全部
			allClick(){
				uni.$showMsg('点了全部')
			},
			// 点击了图片
			picClick(){
				uni.$showMsg('正在前往个人图片集')
				uni.navigateTo({
					url:"/subpkg/my_pics/my_pics"
				})
			}
		}
	}
</script>

<style lang="scss">
	// 用户没有登录样式
	page {
		background-color: #ffffff;
	}

	.loginout-container {
		width: 80vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.loginout-pic {
			width: 100%;
		}

		.loginout-tips {
			margin-top: 3vh;
			text-align: center;
			color: #98928a;
			font-size: 23rpx;
		}

	}

	// <!-- 用户登录 -->
	// <!-- 顶部名称 -->
	.archive-top {
		height: 115rpx;
		background-color: #faf9f4;
		display: flex;
		align-items: center;
		justify-content: center;

		.archive-pic-warp {
			width: 75rpx;
			height: 75rpx;
			border-radius: 50%;
			overflow: hidden;

			.archive-pics {
				width: 100%;
				height: 100%;
			}
		}

		.archive-nickname {
			font-size: 40rpx;
			margin-left: 10rpx;
		}

		.expand-pic-warp {
			position: absolute;
			right: 60rpx;
			height: 60rpx;
			width: 60rpx;
			overflow: hidden;

			.expand-pics {
				width: 90%;
				height: 90%;
			}
		}
	}
	
	//<!-- 日志分类 -->
	.archive-categories{
		margin-top: 15vh;
		text-align: center;
		.archive-title{
			font-size: 35rpx;
		}
		.archive-cate-container{
			margin-top: 10vh;
			margin-bottom: 10vh;
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			.archive-cate-items{
				width: 120rpx;
				height: 220rpx;
				border-radius: 55rpx;
				background-color: #f6e870;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				font-size: 24rpx;
				&:nth-child(2){
					background-color: #a5ce52;
				}
				&:nth-child(3){
					background-color: #e39a49;
				}
				.archive-pic-warp{
					width: 55rpx;
					height: 55rpx;
					border-radius: 50%;
					overflow: hidden;
					background-color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					.archive-pics {
						width: 50%;
						height: 50%;
						// transform: translate(9%,28%);
					}
					
				}
				.archive-articles{
					
				}
					
				.archiver-number{
				}
			}
		}
	}
	.all-btn{
		background-color: #a9e5df;
		width: 100rpx;
		line-height: 100rpx;
		border-radius: 50%;
		color: #fff;
		font-size: 30rpx;
		margin: 0 auto;
		
	}
	
</style>

