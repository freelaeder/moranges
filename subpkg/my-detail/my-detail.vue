<template>
	<view class="detail-container">
		<!-- header -->
		<view class="detail-header">

		</view>
		<!-- body -->
		<view class="detail-body">
			<!-- uparse -->
			<scroll-view scroll-y="true" style="height: 400px;">
				<u-parse :content=" articleDetail.blog_content" @preview="preview" @navigate="navigate"></u-parse>
			</scroll-view>
		</view>

		<!-- footer -->
		<view class="detail-footer">

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
				console.log(src, e, '00000');

			},
		}
	}
</script>

<style lang="scss">
	@import url("@/components/u-parse/u-parse.css");

	.detail-container {
		border: 1px solid;

		.detail-header {
			width: 100vw;
			height: 340rpx;
			background: pink;
		}

		.detail-body {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			margin-left: 15px;
			white-space: pre-wrap;
			// overflow: hidden;
			background-color: #fff;
			border-radius: 10px;
		}

		.detail-footer {}
	}
</style>
