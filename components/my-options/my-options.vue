<template>
	<view>
		<view class="example-body">

			<uni-section title="Article-Options" type="line">
				<view class="uni-padding-wrap uni-common-mt">
					<!-- 顶部选择框 -->
					<!-- 如果是home页显示一下内容 -->
					<uni-segmented-control v-if="!add" :current="current" :values="items" :style-type="styleType"
						:active-color="activeColor" @clickItem="onClickItem" />
					<!-- home end -->
					<!-- 如果是文章页显示以下内容 -->
					<view class="funtion-add" v-if="add">
						<uni-segmented-control class="itemss" :current="current" :values="defaultOptions"
							:style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
						<!-- 添加功能按钮 -->
						<uni-section title="请选择喜欢的分类(最多可展示5个)" type="line">
							<uni-collapse accordion v-model="accordionVal" @change="change">
								<!-- 列表折叠框 -->
								<uni-collapse-item title="stack options">
									<view class="content-options">
										<!-- 滚动盒子 -->
										<scroll-view scroll-y="true" style="height: 174rpx;">
											<!-- tags box -->
											<view class="content-tags">
												<!-- 循环渲染tags -->
												<block v-for="(item,i) in fullOptions" :key="item.id">
													<uni-tag class="content-tags-items content-tags-items-active"
														size="default" :inverted="item.tagtype" :text="item.tagname"
														type="primary" @click="setInverted(item)" />
												</block>
											</view>
										</scroll-view>
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</uni-section>
					</view>

				</view>
				<!-- 内容区域 -->
				<view class="content">
					<view v-if="current === 0">
						<block v-for="(item, i) in articlesList" :key="i">
							<view class="articles-item" @click="gotoDetail(item)">
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
					<view v-if="current === 1">
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
			// 可选项
			changItems: {
				type: Array,
				default: []
			},
			//接受分类
			items: {
				type: Array,
				default: ['html', 'css', 'vue', 'python'],
			},
			// 是否展示功能按钮
			add: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button',
				// 默认图片
				defaultPic: 'http://mail.freelaeder.cn/img/wallseven/wallseven%20(2).png',
				accordionVal: '1',
				// 默认展示4条options
				defaultOptions: [],
				// 传递的全部options 处理之后
				fullOptions: [],
				// tags
				inverted: false,




			};
		},
		onReady() {
			// 保存 items  
			// 展示的items ，只展示4条
			this.defaultOptions = this.items
			// 处理items  items: ['html', 'css', 'vue2', 'node','javascript',
			// 要处理的结果 【 {id: 1, name: "css", type: false}】

			// 思路：处理不同的tagtype 合并在一起
			const itemA = this.items.map((item, i) => {
				return {
					id: i,
					tagname: item,
					tagtype: false
				}
			})
			const itemB = this.changItems.map((item, i) => {
				return {
					id: i + 4,
					tagname: item,
					tagtype: true
				}
			})
			this.fullOptions = [...itemA, ...itemB]

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
			},
			// 
			change(e) {
				console.log(e);
			},
			// 点击tag
			setInverted(e) {
				// 保存当前点击的tag
				const activeTag = this.fullOptions.filter(x => x.id == e.id)[0]
				// 判断是不是已经点击过的
				const findTag = this.defaultOptions.find(x => x == activeTag.tagname)

				// 如果没有添加，
				if (!findTag) {
					// 判断分类不可以超过5个
					if (this.defaultOptions.length === 5) {
						return uni.$showMsg('分类不可以超过5个 \n 可以再次点击取消选中 ❤️')
					}
					this.defaultOptions.push(activeTag.tagname)
				} else {
					// 如果添加
					if(this.defaultOptions.length == 1){
						return uni.$showMsg('分类不可以小于1个')
					}
					this.defaultOptions = this.defaultOptions.filter(x => x !== activeTag.tagname)
				}
				// 改变状态
				this.fullOptions.filter(x => x.id == e.id)[0].tagtype = !activeTag.tagtype


			},

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

	// 文章页 css

	.funtion-add {
		width: 100%;
		height: 440rpx;
		// border: 1px solid #007aff;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 0px 5px 15px royalblue;


		.content-options {
			height: 200rpx;

			.content-tags {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;

				.content-tags-items {
					margin: 20rpx;
					display: block;
					min-width: 30rpx;

				}
			}
		}
	}

	.content {
		width: 81vw;
		margin-top: 30px;
		margin: 0 auto;

		.articles-item {
			display: flex;
			height: 360rpx;
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

				.articles-img {
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
