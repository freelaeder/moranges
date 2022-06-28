<template>
	<view class="detail-container">
		<!-- header -->
		<view class="detail-header">
			<img class="detail-pic" :src="articleDetail.cover_url || defaultPic" alt="">
		</view>
		<!-- body -->
		<view class="detail-body">
			<!-- uparse -->
			<scroll-view scroll-y="true" style="height: 60vh;">
				<u-parse :content=" articleDetail.blog_content" @preview="preview" @navigate="navigate"></u-parse>
			</scroll-view>
		</view>

		<!-- footer -->
		<view class="detail-footer" v-if="articleDetail.blog_content">
			<view slot="actions" class="card-actions no-border">
				<view class="card-actions-item" @click="actionsClick('分享')">
					<uni-icons class="detail-footer-icons" type="redo" size="20" color="#fff"></uni-icons>
					<text class="card-actions-item-text">分享</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('点赞')"  >
					<uni-icons class="detail-footer-icons" type="hand-up-filled" size="20"
						:color="handUp ? '#C00000' :'#fff' "></uni-icons>
					<text class="card-actions-item-text">点赞 {{ 0 || articleDetail.clicks}}</text>
				</view>
				<view class="card-actions-item" @click="actionsClick('评论')">
					<uni-icons class="detail-footer-icons" type="chatbubble" size="20" color="#fff"></uni-icons>
					<text class="card-actions-item-text">评论</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				//uid
				query: '',
				// 文章详情
				articleDetail: [],
				// 图片不展示的默认图片
				defaultPic: 'http://mail.freelaeder.cn/img/wallseven/wallseven12.png',
				// 是否点赞
				handUp: false,
				// 点赞节流阀
				isHandUp: false



			};
		},
		onLoad(options) {
			this.query = options
			// console.log(this.query, 'querys');

			// 调用获取文章
			this.getDeatilArticle(this.query)

		},
		onReady() {
			// 修改文章标题
			uni.setNavigationBarTitle({
				title: this.query.title
			})
		},
		methods: {
			// 获取文章详情
			async getDeatilArticle(e) {
				// 请求文章详情地址
				// http://139.196.43.234:9001
				//  /article/queryArticleByUid/14ee0019-2d66-37b5-a56e-46780caf8ba
				const {
					data: res
				} = await uni.$http.get(`/article/queryArticleByUid/${e.uid}`)
				if (res.code !== 1) return uni.$showMsg('获取文章时，服务器跑丢了')
				let reg1 = new RegExp("<img", "gi");
				let reg2 = new RegExp("<p", "gi");
				// let reg1=/<p><img/gi;
				res.data[0].blog_content = res.data[0].blog_content.replace(reg1,
					"<img style='width:80vw;height:398rpx;display:block'").replace(reg2,
					"<p style= 'white-space:pre-wrap' ")
				this.articleDetail = res.data[0]
				console.log(this.articleDetail);
			},
			// 点击富文本链接
			async navigate(href, e) {
				console.log(href, e);
				const [err, succ] = await uni.showModal({
					title: '正在打开外部链接',
					content: '确定去看看吗'
				}).catch(err => err)
				// 成功跳转外部链接
				if (succ && succ.confirm) {
					uni.navigateTo({
						url: `/subpkg/my_web/my_web?href=${href}`
					})
				}
			},
			// 点击富文本图片
			preview(src, e) {
				// do something
				// console.log(src, e, '00000');

			},
			//点击底部分享 点赞 评论
			actionsClick(e) {
				if (e == '点赞') {
					// 如果isHandUp 为true 代表上一次的点击事件正在执行
					if (this.isHandUp) return uni.$showMsg('您点赞太快了，请等等哦')
					this.isHandUp = true
					setTimeout(() => {
						this.handUp = !this.handUp
						// 显示点赞状态
						if (this.handUp) {
							this.articleDetail.clicks += 1
							uni.$showMsg('点赞成功')
						} else {
							this.articleDetail.clicks += -1
							uni.$showMsg('取消点赞')
						}
						this.isHandUp = false
					}, 1000)
				}else{
					uni.$showMsg(`暂不支持${e}`)
				}

			}

		}
	}
</script>

<style lang="scss">
	@import url("@/components/u-parse/u-parse.css");

	.detail-container {

		.detail-header {
			width: 100vw;
			height: 340rpx;

			.detail-pic {
				width: 100%;
				display: block;

			}
		}

		.detail-body {
			margin-top: 4vh;
			// border-bottom: 1px solid;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			margin-left: 15px;
			margin-right: 15px;
			white-space: pre-wrap;
			// overflow: hidden;
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0px 5px 5px #383838;
		}

		.detail-footer {
			background-color: #077ecd;
			// margin-top: 5vh;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100vw;

			.card-actions {
				height: 6vh;
				line-height: 6vh;
				display: flex;
				align-items: center;
				justify-content: space-around;

				.card-actions-item {
					display: flex;
					align-items: center;

					.card-actions-item-text {
						color: #fff;
						padding-left: 4px;
						display: inline-block;
						vertical-align: top;
					}
				}
			}
		}

		.uni-icons {
			vertical-align: bottom !important;
		}
	}
</style>
