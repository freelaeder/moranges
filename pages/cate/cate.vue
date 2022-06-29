<template>
	<view>
		<!-- article-clssification-box -->
		<view class="article-classification-box">
			<!-- 分类选项 -->
			<view class="article-options">
				<!-- 使用组件 -->
				<!-- 传递参数 items渲染的options articlesList 渲染的文章列表 文章列表页新增功能add   -->
				<my-options :changItems='changItems' :items="items" :add="true" @changeOptions="changeOptions"
					:articlesList='articlesList'>
				</my-options>
			</view>

		</view>
		<!-- 返回top -->
		<my-backtop v-if="isShowBackTop" @arcticleToTop='arcticleToTop'></my-backtop>
	</view>
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	export default {
		// 混合 aside 目的 点击侧边栏之后，修改btnActive 状态，保证再次返回不显示侧边栏
		mixins: [asideMix],
		data() {
			return {
				// 获取文章参数
				queryArticles: {
					blogStatus: 1,
					currentPage: 1,
					pageSize: 10,
					key: 'html',
				},
				// 接受获取到的文章参数
				articlesList: [],
				// 定义顶部渲染的article-options 
				items: ['html', 'css', 'vue2', 'node', ],
				// 定义可选项
				changItems: ['javascript', 'less', 'sass', 'axios', 'react', 'echarts', 'python', 'redis', 'django',
					'celery', 'mysql', 'docker', 'nginx'
				],
				// 节流阀
				isLoading: false,
				// 文章总数
				articlesTotal: 0,
				// 是否展示backtop按钮
				isShowBackTop:false


			};
		},
		onLoad() {
			// 获取文章
			this.getArticles(this.queryArticles)
		},
		onReachBottom() {
			// 判断文章是不是全部加载完毕
			if (this.queryArticles.currentPage * this.queryArticles.pageSize >= this.articlesTotal) return uni.$showMsg(
				'文章全部加载完了哦')

			// 如果正在加载上一条就return
			if (this.isLoading) return uni.$showMsg('正在疯狂加载中')
			this.queryArticles.currentPage++
			// 获取文章
			this.getArticles(this.queryArticles)

		},
		// 监听页面滚动事件
		onPageScroll(e) {
			// console.log(e);
			//如果滚动距离大于1000 展示backtop 按钮
			if(e.scrollTop >= 1000){
				this.isShowBackTop =true
			}else{
				this.isShowBackTop = false
			}
		},
		methods: {
			// 获取文章信息
			async getArticles(e) {
				// 开启节流阀
				this.isLoading = true
				const {
					data: res
				} = await uni.$http.post('/article/queryArticlePage', e)
				// console.log(res, 'artciles');
				if (res.code !== 1) return uni.$showMsg('获取文章时，服务器跑丢了')
				// 处理数据 只需要前四条数据
				this.articlesList = [...this.articlesList, ...res.data.result]
				this.articlesTotal = res.data.total
				// 关闭节流阀
				this.isLoading = false
			},
			// 点击切换options
			changeOptions(e) {
				// 根据点击的下标获取对应的关键词进行获取对应的文章
				console.log(e.key);
				this.queryArticles.key = e.key
				// console.log(this.queryArticles);
				this.getArticles(this.queryArticles)
			},
			// totop
			arcticleToTop(e) {
				// https://uniapp.dcloud.io/api/ui/scroll.html#pagescrollto
				uni.pageScrollTo({
					scrollTop: e,
					duration: 600
				});
			}
		}

	}
</script>

<style lang="scss">
	// 修改setup样式
	// setup start
	.uni-section {
		background: #869803 !important;
	}

	.uni-section__content-title {
		color: #fff !important;
	}

	.uni-collapse-item__title-text {
		color: #fff !important;
	}

	// article-classification-container
	.article-classification-box {
		display: flex;
		justify-content: center;
		background-color: #869803;

		.article-options {

			// 设置下拉列表的color
			.uni-collapse-item__title-box {
				background-color: #007aff;
			}

			.uni-collapse-item__title {
				background-color: #007aff;
			}
		}
	}
</style>
