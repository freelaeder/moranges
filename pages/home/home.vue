<template>
	<view>
		<!-- v-if="token" -->
		<view >
			<!-- 功能按钮 -->
			<my-btn></my-btn>
			<!-- 文章主体 -->
			<view class="home-container">
				<!-- body -->
				<view class="home-body-box">
					<view class="home-title">
						<text id="site-title">Alex Smith</text>
						<text id="site-title">I'm {{userinfo.username}}laeder</text>
					</view>
				</view>
				<!-- about -->
				<view class="home-about-container">
					<!-- 描述盒子 -->
					<view class="about-title-box">
						<text class="about-title">About</text>
						<view class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptates
							soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
							fugitsaepe corporis dicta a.</view>
					</view>
					<!-- 个人图片 -->
					<view class="about-desc">
						<image class="about-pic" src="https://s1.ax1x.com/2022/06/21/jSYQqP.png" mode="widthFix">
						</image>
						<!-- 个人详细信息 -->
						<view class="about-developer">
							<view class="developer-title">
								<view>UI/UX Designer & Web </view>
								<text>Developer.</text>
							</view>
							<text class="developer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</text>
						</view>
						<!--列表清单  -->
						<view class="about-list">
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Birthday:</text>
								<text class="list-text-desc">1 May 2000</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Website:</text>
								<text class="list-text-desc">mail.freelaeder.cn</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Phone:</text>
								<text class="list-text-desc">{{userinfo.mobile}}</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">City:</text>
								<text class="list-text-desc">New York,USA</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Age:</text>
								<text class="list-text-desc">22</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Degree:</text>
								<text class="list-text-desc">Master</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">PhEmailone:</text>
								<text class="list-text-desc">{{userinfo.email}}</text>
							</view>
							<view class="about-list-item">
								<uni-icons class='icons-items' color="#fff" type="right" size="16">
								</uni-icons>
								<text class="list-item-title">Freelance:</text>
								<text class="list-text-desc">Available</text>
							</view>


						</view>
						<view class="about-title-box">
							<!-- <text class="about-title">About</text> -->
							<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit.
								iustoquonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam
								aliasfugitsaepe corporis dicta a.</text>
						</view>

					</view>
				</view>
				<!-- facts -->
				<view class="facts-container">
					<!-- 描述盒子 -->
					<view class="about-title-box">
						<text class="about-title">Facts</text>
						<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
							quonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
							fugitsaepe corporis dicta a.</text>
					</view>
					<!-- count-box -->
					<view class="count-box">
						<view class="count-box-items">
							<view class="box-item-container">
								<uni-icons color="#027bff" custom-prefix="iconfont" type="icon-smile" size="44">
								</uni-icons>
								<view class="count-box-desc">
									<view class="box-desc-title">232</view>
									<view class="box-desc-stange">Happy Clients</view>
									<text class="box-desc-text"> consequuntur quae</text>
								</view>
							</view>
						</view>
						<view class="count-box-items">
							<view class="box-item-container">
								<uni-icons color="#027bff" custom-prefix="iconfont" type="icon-book" size="44">
								</uni-icons>
								<view class="count-box-desc">
									<view class="box-desc-title">521</view>
									<view class="box-desc-stange">Projects </view>
									<text class="box-desc-text"> adipisci atque cum quia aut </text>
								</view>
							</view>
						</view>
						<view class="count-box-items">
							<view class="box-item-container">
								<uni-icons color="#027bff" custom-prefix="iconfont" type="icon-erji" size="44">
								</uni-icons>
								<view class="count-box-desc">
									<view class="box-desc-title">1453</view>
									<view class="box-desc-stange">Hours Of Support</view>
									<text class="box-desc-text"> aut commodi quaerat </text>
								</view>
							</view>
						</view>
						<view class="count-box-items">
							<view class="box-item-container">
								<uni-icons color="#027bff" type="staff" size="44"></uni-icons>
								<view class="count-box-desc">
									<view class="box-desc-title">32</view>
									<view class="box-desc-stange">Hard Workers</view>
									<text class="box-desc-text"> rerum asperiores</text>
								</view>
							</view>
						</view>

					</view>
				</view>

				<!-- skills -->
				<view class="skills-container">
					<!-- 描述盒子 -->
					<view class="about-title-box">
						<text class="about-title">Skills</text>
						<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
							quonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
							fugitsaepe corporis dicta a.</text>
					</view>
					<!-- skill-item -->
					<view class="skills-box">
						<block v-for="(item,i) in skillsList" :key="i">
							<view class="skills-item">
								<view class="skill-title">
									<text>{{item.skillName}}</text>
									<text>{{item.percent}}%</text>
								</view>
								<view class="progress-box">
									<progress :percent="item.percent" border-radius="14" stroke-width="10"
										color="#f38111" active />
								</view>
							</view>
						</block>
					</view>

				</view>
				<!-- Resume -->
				<view class="resume-container">
					<!-- 描述盒子 -->
					<view class="about-title-box">
						<text class="about-title">Resume</text>
						<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iusto
							quonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
							fugitsaepe corporis dicta a.</text>
					</view>
					<!--步骤条  -->
					<view class="setup-box">
						<view class="setup-item">
							<!-- row1 -->
							<uni-section title="Summary">
								<uni-steps :options="list1" active-icon="circle" direction="column" :active="active" />
							</uni-section>
							<!-- row2 -->
							<uni-section title="Education">
								<uni-steps :options="list2" active-icon="circle" direction="column" :active="active" />
							</uni-section>
							<!-- row3 -->
							<uni-section title="Bachelor of fine arts & Graphic design">
								<uni-steps :options="list2" active-icon="circle" direction="column" :active="active" />
							</uni-section>
						</view>

					</view>
					<!-- 文章页article classification -->
					<view class="article-classification-container">
						<!-- 描述盒子 -->
						<view class="about-title-box">
							<text class="about-title">Article-Classification</text>
							<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
								iusto
								quonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
								fugitsaepe corporis dicta a.</text>
						</view>
						<!-- article-clssification-box -->
						<view class="article-classification-box">
							<!-- 分类选项 -->
							<view class="article-options">
								<!-- 使用组件 -->
								<!-- 传递参数 items渲染的options articlesList 渲染的文章列表 -->
								<my-options :items="items" @changeOptions="changeOptions" :articlesList='articlesList'>
								</my-options>
							</view>

						</view>

					</view>
					<!-- testimonials  -->
					<view class="testimonial-container">
						<!-- 描述盒子 -->
						<view class="about-title-box">
							<text class="about-title">Article-Classification</text>
							<text class="about-descword">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
								iusto
								quonihil voluptates soluta id, veritatis vero neque vel nam unde natus ipsa magnam alias
								fugitsaepe corporis dicta a.</text>
						</view>
						<!-- testimonial-box -->
						<view class="testimonial-box">
							<swiper class="my-swipers" indicator-active-color="#0000ff" :indicator-dots="true" circular
								:autoplay="true" :interval="5000" :duration="1000">
								<block v-for="(item,i) in OwnsInfo" :key="i">
									<swiper-item>
										<view class="swiper-item">
											<view class="swipers-top">
												<text class="owns-top-desc">{{item.desc}}</text>
											</view>
											<view class="owns-top-triangle">
											</view>
											<view class="swipers-body">
												<image class="owns-body-pic" mode="heightFix"
													:src="item.defaultImg || defaultPic"></image>
												<!-- 个人nickname -->
												<text class="owns-nickname">{{item.nickName}}</text>
												<!-- 个人信息描述 -->
												<text class="owns-desc">{{item.lastName}}</text>
											</view>
										</view>
									</swiper-item>
								</block>
							</swiper>
						</view>

					</view>
				</view>

			</view>
		</view>
		</block>
		<!-- 当用户没有登录的时候显示  v-else -->
		<!-- <view class="loginout-container">
			<image class="loginout-pic" src="https://s1.ax1x.com/2022/07/11/jyjBGV.png" mode="">
			</image>
			<view class="loginout-tips">
				不妨停下匆匆的脚步，来营造自己的一方天地
			</view>
		</view> -->
	</view>
</template>

<script>
	import asideMix from '@/mixins/close-aside.js'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		// 混合 aside
		mixins: [asideMix],
		data() {
			return {
				// 设置skills 
				skillsList: [{
						skillName: 'HTML',
						percent: '99'
					},
					{
						skillName: 'CSS',
						percent: '96'
					},
					{
						skillName: 'JAVASCRIPT',
						percent: '95'
					},
					{
						skillName: 'VUE',
						percent: '90'
					},
					{
						skillName: 'PYTHON',
						percent: '85'
					},
					{
						skillName: 'NODE',
						percent: '75'
					},

				],
				// 步骤条
				active: 0,
				list1: [{
					title: 'Alex Smith',
					desc: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.'
				}],
				list2: [{
					title: 'Alex Smith',
					desc: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.'
				}, {
					title: 'Alex Smith',
					desc: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.'
				}],
				// 步骤条end

				// 获取文章参数
				queryArticles: {
					blogStatus: 1,
					currentPage: 1,
					pageSize: 10,
					key: 'html',
				},
				// 接受获取到的文章参数
				articlesList: [],
				// 定义渲染的article-options 
				items: ['html', 'css', 'vue', 'pythons'],
				defaultPic: 'http://mail.freelaeder.cn/img/wallseven/wallseven%20(2).png',
				// 轮播图个人信息
				OwnsInfo: [{
						// 姓名
						nickName: 'Sara Wilsson',
						// 个人描述
						desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
						// 名字
						lastName: 'Designer',
						// 用户头像
						defaultImg: 'http://mail.freelaeder.cn/img/wallseven/wallseven%20(8).png',

					},
					{
						// 姓名
						nickName: 'Saul Goodman',
						// 个人描述
						desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper',
						// 名字
						lastName: 'Ceo & Founder',
						// 用户头像
						defaultImg: 'http://mail.freelaeder.cn/img/wallseven/wallseven%20(9).png',

					},
					{
						// 姓名
						nickName: 'Jena Karlis',
						// 个人描述
						desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
						// 名字
						lastName: 'Store Owner',
						// 用户头像
						defaultImg: 'http://mail.freelaeder.cn/img/picfive/wallfive%20(23).png',

					},
					{
						// 姓名
						nickName: 'Matt Brandon',
						// 个人描述
						desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
						// 名字
						lastName: 'Freelancer',
						// 用户头像
						defaultImg: 'http://mail.freelaeder.cn/img/picfive/wallfive%20(20).png',

					},
					{
						// 姓名
						nickName: 'John Larson',
						// 个人描述
						desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
						// 名字
						lastName: 'Entrepreneur',
						// 用户头像
						defaultImg: 'http://mail.freelaeder.cn/img/picfive/wallfive%20(22).png',

					}
				]

			};
		},
		onLoad() {
			// 获取用户信息
			this.getUserInfo()
			// 获取文章
			this.getArticles(this.queryArticles)

		},
		onShow() {
			// 获取用户信息
			this.getUserInfo()
			// 获取文章
			this.getArticles(this.queryArticles)
			uni.$showMsg('我打碎了夕阳,散做漫天的星光')
		},
		// onReady() {
			
		// },
		computed: {
			...mapState('m_user', ['userinfo', 'token','articlesAll']),
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo','updateAllArcticles']),
			// 3. 获取用户信息的方法
			async getUserInfo() {
				// 3.1 发起请求
				const {
					data: res
				} = await uni.$http.get('/getinfo/free/')

				// console.log(res, 'ress');
				// 3.3 请求成功，为 data 中的数据赋值
				this.updateUserInfo(res)
			},
			// 获取文章信息
			async getArticles(e) {
				const {
					data: res
				} = await uni.$http.post('/article/queryArticlePage', e)
				// console.log(res, 'artciles');
				if (res.code !== 1) return uni.$showMsg('获取文章时，服务器跑丢了')
				// 处理数据 只需要前四条数据
				const resultArticles = res.data.result.slice(0, -5)
				this.articlesList = resultArticles
				// 持久保存文章总数
				this.updateAllArcticles(res.data.total)
			},
			// 点击切换options
			changeOptions(e) {
				// 根据点击的下标获取对应的关键词进行获取对应的文章
				this.queryArticles.key = this.items[e.currentIndex]
				// console.log(this.queryArticles);
				// 暂时置为空
				// 暂时置为空
				// 暂时置为空

				// this.articlesList=[]
				this.getArticles(this.queryArticles)
			}
		}
	}
</script>

<style lang="scss">
	/* 需要放到文件最上面 */
	@import '@/uni_modules/uni-scss/variables.scss';

	page {
		box-sizing: border-box;
		background-color: #fff;
	}

	// 修改setup样式
	// setup start
	.uni-section {
		background: #faf9f4 !important;
	}

	.distraction {
		color: #0b0fff !important;
	}
	.articles-title {
		color: #fff !important;
	}
	.uni-steps__column-circle {
		background-color: #3579ff !important;
		width: 10px !important;
		height: 10px !important;
	}

	.uni-steps__column-desc {
		color: #98928a !important;
	}

	.uni-steps__column-text {
		// border-bottom-color: #c00000 !important;
		border-bottom: none !important;
	}

	.uni-steps__column-title {
		color: #3579ff !important;
	}

	.uni-steps__column-line--after {
		background-color: #3579ff !important;
	}

	// end setup

	// 设置盒子边框的padding
	$box-padding-left:15px;

	// 用户没有登录样式
	.loginout-container {
		width: 80vw;
		margin: 0 auto;
		// background-color: #fff;

		.loginout-pic {
			width: 100%;
		}
		.loginout-tips{
			margin-top: 13vh;
			text-align: center;
			color: #98928a;
			font-size: 23rpx;
		}

	}

	.home-container {
		max-height: 100vh;
		max-width: 100vw;
		width: 100vw;
		height: 100vh;
		background: url(https://s1.ax1x.com/2022/05/20/OO5Z4g.png) center;
		background-size: cover;

		.home-body-box {
			height: 100vh;

			.home-title {
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
	#site-title {
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

		0%,
		100% {
			transform: translate(0, 0) rotate(0);
		}
	}

	// home-about-container about
	.testimonial-container,
	.article-classification-container,
	.resume-container,
	.skills-container,
	.facts-container,
	.home-about-container {
		background-color: #faf9f4;
		color: #007aff;

		// 描述盒子
		.about-title-box {
			padding-top: 30px;
			height: 188px;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			letter-spacing: 2rpx;
			padding-left: $box-padding-left;

			.about-title {
				font-weight: 900;
				font-size: 29px;
				height: 58px;
				display: inline-block;
				position: relative;

				&::after {
					display: block;
					content: '';
					position: absolute;
					width: 50px;
					height: 3px;
					background: #0000ff;
					bottom: 0;
					left: 0;
				}

			}

			.about-descword {
				color: #98928a;
				// display: block;
				margin-top: 30px;
				font-style: italic !important;
				font-size: 23rpx;
				letter-spacing: 1rpx;
				// line-height: 2px;
			}
		}

		// 个人图片
		.about-desc {
			.about-pic {
				width: 100vw;
			}

			.about-developer {
				padding-left: $box-padding-left;

				.developer-title {
					height: 64px;
					font-size: 25px;
					font-weight: 600;

					margin-bottom: 10px;
				}

				.developer-text {
					color: #98928a;
					font-style: italic !important;
					font-size: 23rpx;
					letter-spacing: 1rpx;
					line-height: 2px;
				}
			}
		}

		// 		<!--列表清单  -->
		.about-list {
			padding-left: $box-padding-left;
			padding-top: 20px;

			.about-list-item {
				line-height: 28px;

				.list-item-title {
					font-size: 26rpx;
					letter-spacing: 1rpx;
				}

				.list-text-desc {
					padding-left: $box-padding-left;
					font-size: 23rpx;
					letter-spacing: 1rpx;
				}
			}
		}

	}

	// count-box
	.count-box {
		.count-box-items {
			width: 100vw;
			height: 157px;

			.box-item-container {
				display: flex;
				align-items: flex-start;
				width: 80vw;
				height: 97px;
				margin: 0 auto;

				.count-box-desc {
					margin-left: 30rpx;
					letter-spacing: 2rpx;

					.box-desc-title {
						font-size: 58rpx;
						font-weight: 700;
					}

					.box-desc-stange {
						font-size: 28rpx;
						padding-right: 10rpx;
					}

					.box-desc-text {
						font-size: 22rpx;
					}

				}
			}


		}
	}

	// skill-item

	.skills-box {
		.skills-item {
			height: 60px;

			.skill-title {
				display: flex;
				justify-content: space-between;
				padding: 0 $box-padding-left;
			}

			.progress-box {
				padding: $box-padding-left;
			}
		}
	}

	// setup-box 最后背景色一致的盒子
	.resume-container {
		// background-color: #9c9eff;


		&::after {
			content: "";
			display: block;
			width: 100vw;
			height: 10px;
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
			// background-color: #9c9eff;
			overflow: hidden;
		}
	}

	.setup-box {
		// background-color: #9c9eff;
	}

	// article-classification-container
	.article-classification-box {
		display: flex;
		justify-content: center;
	}

	.article-classification-container {
		// background-color: #9c9eff;
	}

	// testimonial-box 
	.testimonial-container {
		// background-color: #9c9eff;

		.testimonial-box {
			width: 100vw;
			box-sizing: border-box;
			border-bottom-left-radius: 10px;

			.my-swipers {
				margin: 15px;
				height: 640rpx;

				.swiper-item {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					.swipers-top {
						height: 254rpx;
						display: flex;
						align-items: center;
						flex-direction: column;
						justify-content: space-between;
						border-radius: 20rpx;
						overflow: hidden;
						border: 2px solid #007aff;

						.owns-top-desc {
							padding-top: 30rpx;
							padding-left: 10px;
						}
					}

					.owns-top-triangle {
						transform: translateY(-2px);
						box-sizing: border-box;
						width: 0;
						height: 0;
						border-style: solid;
						border-width: 20px;
						border-radius: 10px;
						border-color: #0000ff transparent transparent transparent;
					}

					.swipers-body {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;

						.owns-body-pic {
							width: 90px;
							height: 90px;
							border-radius: 50%;
							overflow: hidden;
							display: block;

						}

						.owns-nickname {
							letter-spacing: 2rpx;
							color: #242729;
						}

						.owns-desc {
							font-size: 13px;
							color: #1b1a18;
						}
					}
				}
			}

		}
	}
</style>
