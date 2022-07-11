<template>
	<view>
		<!-- 顶部通告 -->
		<uni-notice-bar show-icon scrollable text="您可以点击选择你喜欢的图片,来动态生成您专属的旋转相册" />
		<!-- 图集 -->
		<view class="pics-container">
			<!-- <view class="left">
        <view @click="changePicActive(item)" v-for="(item,index) in leftList" :key="index" class="left-items"
          :class=" item.imgstatus ? 'picsActives' : '' ">
          <uni-icons class="detail-footer-icons" :type=" item.imgstatus ? 'heart-filled': 'heart' " size="20"
            :color="item.imgstatus ? '#C00000' :'#1ecbe4' "></uni-icons>
          <image :src="item.imgurl" alt="" mode="widthFix"></image>
        </view>

      </view> -->
			<!--   <view class="right">
        <view @click="changePicActive(item)" class="left-items" v-for="(item,index) in rightList" :key="index"
          :class=" item.imgstatus ? 'picsActives' : '' ">
          <uni-icons class="detail-footer-icons" :type=" item.imgstatus ? 'heart-filled': 'heart' " size="20"
            :color="item.imgstatus ? '#C00000' :'#1ecbe4' "></uni-icons>
          <image :src="item.imgurl" alt="" mode="widthFix"></image>
        </view>
      </view> -->

			<view class="pics-warper">
				<view @click="changePicActive(item)" class="pics-items" v-for="(item,index) in ownImgs" :key="index"
					:class=" item.imgstatus ? 'picsActives' : '' ">
					<uni-icons class="detail-footer-icons" :type=" item.imgstatus ? 'heart-filled': 'heart' " size="20"
						:color="item.imgstatus ? '#C00000' :'#1ecbe4' "></uni-icons>
					<image class="pics-images" :src="item.imgurl" alt="" mode="widthFix"></image>
				</view>
			</view>

		</view>
		<!-- 底部功能按钮 -->
		<view class="pic-function-warp">
			<!-- 显示数量盒子 -->
			<view class="count-container">
				喜欢 {{likeCounts}} 
			</view>
			<view class="function-upload">
				<my-upload></my-upload>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				// 保存上传的图片
				imgLists: [],
				// 初始化左右盒子
				leftList: [],
				rightList: [],
				// 初始化左右盒子高度
				leftH: 0,
				rightH: 0,
				// 控制盒子状态，防止再次添加过多
				picFalg: true,
				// 点击喜欢设置的节流
				handClick: false
			};
		},
		onLoad() {
			// 获取个人图集
			this.getOwnImgs()

		},

		computed: {
			...mapState('m_user', ['wxUserinfo', 'ownImgs']),
			...mapGetters('m_user', ['likeCounts','allImgCounts'])
		},
		methods: {
			...mapMutations('m_user', ['updateWxImgs']),

			// 获取个人图集
			async getOwnImgs() {
				const username = this.wxUserinfo.userInfo.nickName
				const {
					data: res
				} = await uni.$http.get(`/wx/getImgs/${username}/`)
				// 持久化保存图集
				this.updateWxImgs(res.data)
			},
			// 图片排序
			doList() {
				const that = this
				console.log(this.ownImgs, 'imglists');
				this.ownImgs.forEach(res => {
					// 获取图片宽高
					uni.getImageInfo({
						src: res.imgurl,
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
			},
			// 改变图片选择状态
			changePicActive(e) {
				if (this.handClick) return uni.$showMsg('您点击太快了，请等等哦')
				// 修改状态 防止多次点击
				this.handClick = true
				// 改变状态
				this.changeImgs(e)
				// 显示
				if (e.imgstatus) {
					uni.$showMsg('正在移出我喜欢❤️')
				} else {
					uni.$showMsg('正在加到我喜欢❤️')
				}
				setTimeout(() => {
					this.getOwnImgs()
					this.handClick = false
				}, 1000)




			},
			// 服务器修改喜欢的状态
			async changeImgs(e) {
				// 上传
				const {
					data: res
				} = await uni.$http.post('/wx/changeImgsLikes/', e)
			},


		}
	}
</script>

<style lang="scss">
	// 图集
	.pics-container {
		padding-bottom: 15vh;
		padding-left: 3vw;
		padding-right: 3vw;

		// 最新 瀑布流布局
		.pics-warper {
			width: 98%;
			margin: 0 auto;
			column-count: 2;

			.pics-items {
				display: inline-block;
				width: 98%;
				margin-left: 3%;
				margin-bottom: 3%;
				padding: 2%;
				position: relative;
				opacity: 0.8;

				.detail-footer-icons {
					position: absolute;
					top: 20%;
					left: 80%;
					transform: translate(-50%, -50%)
				}

				.pics-images {
					border-radius: 20rpx;
					overflow: hidden;
					width: 95%;
					margin: 0 auto;

				}

			}
		}

	}

	.picsActives {
		opacity: 1;
	}



	// 底部功能按钮
	.pic-function-warp {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 140rpx;
		line-height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10vh;
		background-color: #9f9f9f;
		color: #fff;

		.count-container {
			background-color: #f18b58;
			height: 100%;
			text-align: center;
			flex: 1;
		}

		.function-upload {
			height: 100%;
			background-color: skyblue;
			flex: 1;
		}

	}
</style>
