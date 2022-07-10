<template>
	<view>
		<!-- 顶部通告 -->
		<uni-notice-bar show-icon scrollable text="您可以点击选择你喜欢的图片,来动态生成您专属的旋转相册" />
		<!-- 图集 -->
		<view class="pics-container" >
			<view class="left">
				<image v-for="(item,index) in leftList" :key="index" :src="item.url" alt="" mode="widthFix"></image>
			</view>
			<view class="right">
				<image v-for="(item,index) in rightList" :key="index" :src="item.url" alt="" mode="widthFix"></image>
			</view>
		</view>
		<!-- 底部功能按钮 -->
		<view class="pic-function-warp">
			<view class="function-special ">

			</view>
			<view class="function-upload">
				<my-upload @addImgurl='addImgurls'></my-upload>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 保存上传的图片
				imgLists: [{
						url: 'http://139.196.43.234:20517/upload/png/2022-07-08/7f411280-fea6-11ec-840b-ebe4f89addaa.png'
					},
					{
						url: 'http://mail.freelaeder.cn/img/wallseven/wallseven27.png'
					},
					{
						url: 'http://mail.freelaeder.cn/img/wallseven/wallseven25.png'
					},
					{
						url: 'http://mail.freelaeder.cn/img/wallseven/wallseven23.png'
					},
					{
						url: 'https://img1.baidu.com/it/u=3883901410,74560379&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667'
					},
					{
						url: 'https://img0.baidu.com/it/u=2518378277,1696634197&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=773'
					},
					{
						url: 'https://img1.baidu.com/it/u=3069626876,3050992213&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
					}

				],
				// 初始化左右盒子
				leftList: [],
				rightList: [],
				// 初始化左右盒子高度
				leftH: 0,
				rightH: 0,
				// 控制盒子状态，防止再次添加过多
				picFalg: true
			};
		},
		onLoad() {
			this.doList()
		},
		methods: {

			// 保存上传的图片
			addImgurls(e) {
				// 获取图片宽高
				const that = this
				uni.getImageInfo({
					src: e.url,
					success: (image) => {
						console.log(image, 'image');
						// 计算图片渲染高度
						let showH = (50 * image.height) / image.width
						// 判断左右盒子高度
						if (that.leftH <= that.rightH) {
							console.log(that.leftH, 'thatlefth');
							console.log(that.rightH, 'thatlefth');
							that.leftList.push(e)
							that.leftH += showH
						} else {
							that.rightList.push(e)
							that.rightH += showH
						}
					}
				
				})

			
			},

			doList() {
				const that = this
				this.imgLists.forEach(res => {
					
					// 获取图片宽高
					uni.getImageInfo({
						src: res.url,
						success: (image) => {
							console.log(image, 'image');
							console.log(res.url)
							// 计算图片渲染高度
							let showH = (50 * image.height) / image.width
							// 判断左右盒子高度
							if (that.leftH <= that.rightH) {
								console.log(that.leftH, 'thatlefth');
								console.log(that.rightH, 'thatlefth');
								that.leftList.push(res)
								that.leftH += showH
							} else {
								that.rightList.push(res)
								that.rightH += showH
							}
						}

					})
				})
			}

		}
	}
</script>

<style lang="scss">
	page {
		margin: 4px;
	}

	// 图集
	.pics-container {
		padding-bottom: 15vh;
	}

	.container {
		padding: 0 30rpx;
		font-size: 14rpx;
		line-height: 24rpx;
	}

	.right,
	.left {
		display: inline-block;
		width: 49%;
		vertical-align: top;
	}

	.left {
		margin-right: 2%;
	}

	.left image,
	.right image {
		width: 100%;
		margin-bottom: 20rpx;
	}


	// 底部功能按钮
	.pic-function-warp {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10vh;

		background-color: #c3c3c3;

		.function-special {
			background-color: pink;
			flex: 1;
		}

		.function-upload {
			background-color: skyblue;
			flex: 1;
		}

	}
</style>
