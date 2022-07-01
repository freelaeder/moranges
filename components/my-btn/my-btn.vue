<template>
	<view>
		<!-- 功能按钮 -->
		<view class="btn-container" @click="changeActive">
			<uni-icons type="bars" color="#fff" size="18" v-if="!btnActive"></uni-icons>
			<uni-icons type="closeempty" color="#fff" size="18" v-else></uni-icons>
		</view>
		<!-- 侧边栏 -->
		<view class="btn-aside" :class="{active:btnActive}" >
			<!-- 头部 -->
			<view class="aside-header">
				<!-- 个人图片 -->
				<view class="aside-pic">
					<image class="aside-image" :src="userinfo.default_image" mode="heightFix">
					</image>
				</view>
				<!-- 个人姓名 -->
				<view class="aside-title">
					{{userinfo.username}}laeder
				</view>
				<!-- 个人社交图标 -->
				<view class="aside-icons">
					<!-- facebook -->
					<uni-icons class='icons-items' color="#fff" custom-prefix="iconfont" type="icon-facebook" size="18">
					</uni-icons>
					<!-- github -->
					<uni-icons class='icons-items' color="#fff" custom-prefix="iconfont" type="icon-github-fill"
						size="18"></uni-icons>
					<!-- 微信 -->
					<uni-icons class='icons-items' color="#fff" custom-prefix="iconfont" type="icon-weixin" size="18">
					</uni-icons>
					<!-- qq -->
					<uni-icons class='icons-items' color="#fff" custom-prefix="iconfont" type="icon-qq" size="18">
					</uni-icons>
					<!-- 性别 -->
					<uni-icons class='icons-items' color="#fff" custom-prefix="iconfont" type="icon-a-17nanxingjiaose"
						size="18">
					</uni-icons>

				</view>
			</view>
			<!--tabbar 功能  -->
			<view class="aside-tabbar" >
				<!-- 搜索 -->
				<block v-for="(item,i) in list" :key="i">
					<navigator  class="aside-tabbar-item" :open-type="item.openType" :url="item.pagePath">
						<uni-icons color="#fff" custom-prefix="iconfont" :type="item.iconPath" size="18">
						</uni-icons>
						<text class="aside-item-text">{{item.text}}</text>
					</navigator>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入 vuex
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "my-btn",
		data() {
			return {
				// 侧边栏数据
				list: [{
						"pagePath": "/subpkg/my_search/my_search",
						"text": "Search",
						"iconPath": "icon-search_list_light",
						"openType": "navigate"
					},
					{
						"pagePath": "/pages/home/home",
						"text": "Home",
						"iconPath": "icon-home",
						"openType": "switchTab"
					},
					{
						"pagePath": "/pages/cate/cate",
						"text": "Article",
						"iconPath": "icon-article-line",
						"openType": "switchTab"
					},
					{
						"pagePath": "/pages/hot/hot",
						"text": "Hot",
						"iconPath": "icon-me",
						"openType": "switchTab"
					},
					{
						"pagePath": "/subpkg/my_stack/my_stack",
						"text": "Stack",
						"iconPath": "icon-particlemovement",
						"openType": "navigate"
					},
					{
						"pagePath": "/pages/my/my",
						"text": "My",
						"iconPath": "icon-My",
						"openType": "switchTab"
					}
				]
			};
		},
		computed: {
			// 导入aside.js 中的state
			...mapState('m_aside', ['btnActive']),
			...mapState('m_user',['userinfo'])

		},
		methods: {
			// 导入aside.js 中的方法
			...mapMutations('m_aside', ['updateBtnActive', 'updateBtnActiveFalse']),
			// 改变当前按钮状态
			changeActive() {
				this.updateBtnActive(!this.btnActive)
			},
			// 跳转页面
			switchPageHome() {
				uni.switchTab({
					url: '/pages/my/my'
				})
				// 更新btnActive 状态 关闭侧边栏
				this.updateBtnActiveFalse()
			}
		}
	}
</script>

<style lang="scss">
	// <!-- 功能按钮 -->
	.btn-container {
		position: fixed;
		top: 185rpx;
		right: 65rpx;
		width: 85rpx;
		background: #00b26a;
		border-radius: 50%;
		text-align: center;
		line-height: 85rpx;
		z-index: 9999;
	}

	// 盒子进入的动画
	@keyframes aside-move {
		0% {
			transform: translate3d(-1000px, 0px, 0px);
		}


		50% {
			transform: translate3d(-150px, 0px, 0px);
			opacity: 0.4;
			border-radius: 50%;
		}


		85% {
			transform: translate3d(10px, 0px, 0px);
			opacity: 0.6;
			border-radius: 30%;
		}

		100% {
			transform: translate3d(0px, 0px, 0px);
			opacity: 0.9;
			border-radius: 0%;
		}
	}

	// 侧边栏
	.btn-aside.active {
		clip-path: ellipse(150% 70% at 0% 50%);
		animation: aside-move ease-out 1.5s;

	}

	.btn-aside {
		z-index: 99999;
		//     transform: translate3d(-300px, 0px, 0px);
		position: fixed;
		top: 0;
		transform-style: preserve-3d;
		background-color: #077ecd;
		height: 100vh;
		max-height: 100vh;
		color: #fff;
		width: 80vw;
		clip-path: ellipse(0% 0% at 0% 50%);

		.aside-header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
			border-bottom: 1px solid;
			height: 40vh;

			.aside-pic {
				width: 140rpx;
				height: 140rpx;
				border: 5px solid #209040;
				border-radius: 50%;
				overflow: hidden;

				.aside-image {
					width: 100%;
					height: 100%;

				}
			}

			// 个人姓名
			.aside-title {
				font-weight: blod;
				letter-spacing: 1rpx;
			}

			// 社交图标
			.aside-icons {
				align-self: center;
				.icons-items {
					display: inline-block;
					width: 80rpx;
					height: 80rpx;
					margin-right: 20rpx;
					box-shadow: 1px 1px 5px #fff;
					border-radius: 50%;
					text-align: center;
					line-height: 80rpx;
				}
			}
		}

		// tabbar 功能  
		.aside-tabbar {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			overflow: hidden;
			height: 60vh;
			max-height: 60vh;

			.aside-tabbar-item {
				width: 100%;
				line-height: 110rpx;
				// border: 1px solid;
				padding-left: 65rpx;

				.aside-item-text {
					padding-left: 35rpx;
				}
			}

		}
	}
</style>
