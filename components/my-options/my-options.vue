<template>
	<view>
		<view class="example-body">
			<uni-section title="Article-Options" type="line">
				<view class="uni-padding-wrap uni-common-mt">
					<uni-segmented-control :current="current" :values="items" :style-type="styleType"
						:active-color="activeColor" @clickItem="onClickItem" />
				</view>
				
				<view class="content">
					<view v-if="current === 0">
						<block v-for="(item, i) in articlesList" :key="i">
							<view class="articles-item" @click="gotoDetail(item)" >
								<!-- img -->
								<view class="articles-pic">
									<image class="articles-img" :src="item.cover_url || defaultPic" ></image>
								</view>
								<!-- 标签 -->
								<view class="tag-view">
									<uni-tag :text="item.blog_title" type="warning" />
								</view>
								<!-- 底部介绍 -->
								<view class="articles-bottom">
									<text class="articles-title">{{item.blog_summary}}
									</text>
								</view>
							</view>
						</block>
					</view>
					<view v-if="current === 1">
						<block v-for="(item, i) in articlesList" :key="i">
							<view class="articles-item">
								<!-- img -->
								<view class="articles-pic">
									<image class="articles-img" :src="item.cover_url || defaultPic" ></image>
								</view>
								<!-- 标签 -->
								<view class="tag-view">
									<uni-tag :text="item.blog_title" type="warning" />
								</view>
								<!-- 底部介绍 -->
								<view class="articles-bottom">
									<text class="articles-title">{{item.blog_summary}}
									</text>
								</view>
							</view>
						</block>
					</view>
					<view v-if="current === 2">
						<block v-for="(item, i) in articlesList" :key="i">
							<view class="articles-item">
								<!-- img -->
								<view class="articles-pic">
									<image class="articles-img" :src="item.cover_url || defaultPic"></image>
								</view>
								<!-- 标签 -->
								<view class="tag-view">
									<uni-tag :text="item.blog_title" type="warning" />
								</view>
								<!-- 底部介绍 -->
								<view class="articles-bottom">
									<text class="articles-title">{{item.blog_summary}}
									</text>
								</view>
							</view>
						</block>
					</view>
					<view v-if="current === 3">
						<block v-for="(item, i) in articlesList" :key="i">
							<view class="articles-item">
								<!-- img -->
								<view class="articles-pic">
									<image class="articles-img" :src="item.cover_url || defaultPic" ></image>
								</view>
								<!-- 标签 -->
								<view class="tag-view">
									<uni-tag :text="item.blog_title" type="warning" />
								</view>
								<!-- 底部介绍 -->
								<view class="articles-bottom">
									<text class="articles-title">{{item.blog_summary}}
									</text>
								</view>
							</view>
						</block>
					</view>
				</view>
			</uni-section>
		</view>

	</view>

</template>

<script>
	export default {
		name: "my-options",
		props: {
			// 接受文章列表
			articlesList: {
				type: Array,
				default: []
			},
			//接受分类
			items: {
				type: Array,
				default: ['html', 'css', 'vue', 'python'],
				
			}
		},
		data() {
			return {
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button',
				// 默认图片
				defaultPic: 'http://mail.freelaeder.cn/img/wallseven/wallseven%20(2).png'

			};
		},
		methods: {
			// 点击切换options
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
					// 触发父组件事件
					this.$emit('changeOptions', e)
				}
			},
			// 点击文章跳转文章详情页
			gotoDetail(e) {
				uni.navigateTo({
					url: `/subpkg/my-detail/my-detail?uid=${e.uid}&title=${e.blog_title}`
				})
			}
		},
		
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 0;
	}

	.uni-common-mt {
		margin-top: 30px;
	}

	.uni-padding-wrap {
		width: 81vw;
		padding: 0px 30px;
		margin-bottom: 30px;

	}

	.content {
		width: 81vw;
		margin-top: 30px;
		margin: 0 auto;

		.articles-item {
			display: flex;
			height: 170px;
			border-radius: 10px;
			border: 1px solid;
			overflow: hidden;
			justify-content: space-between;
			flex-direction: column;
			align-items: flex-start;
			margin-bottom: 15px;
			position: relative;
			width: 100%;

			.articles-pic {
				width: 100%;
				height: 100%;

				.articles-img{
					width: 100%;
					height: 100%;
				}
			}

			.tag-view {
				margin-left: 15px;
				margin-top: 15px;
				position: absolute;
			}

			.articles-bottom {
				position: absolute;
				width: 100%;
				height: 30px;
				line-height: 30px;
				background-color: #007aff;
				bottom: 0;

				.articles-title {
					display: inline-block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 580rpx;
					margin-left: 10px;

				}

			}
		}


	}
</style>
