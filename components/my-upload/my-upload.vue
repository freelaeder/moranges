<template>
	<view class="pic-uploader-container" @click="upload" >
		上传图片
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "my-upload",
		data() {
			return {
			};
		},
		onReady: () => {
			uni.$showMsg('每次只能上传一张图片哦')
		},
		computed: {
			...mapState('m_user', ['wxUserinfo'])
		},
		methods: {
			...mapMutations('m_user', ['updateWxImgs','updateAllCountImgs']),
			// 图片选择上传
			upload() {
				// 图片选择，只支持一次选择一张图片
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册、相机选择
					success: (res)=> {
						const tempFilePaths = res.tempFilePaths[0];
						// 图片上传
						const uploadTask = uni.uploadFile({
							url : 'https://freelaeder.cn/uploadImg/', // post请求地址
						    filePath: tempFilePaths,
						    name: 'file',  // 待确认
						    header: {
								'Content-Type': 'multipart/form-data',
								'Authorization': getApp().globalData.token || 'Basic YXBwOmFwcA=='
							},
							success:(res) =>{
								// 类型转化 
								const result = JSON.parse(res.data)
								const imgurl = {
									'imgurl':result.default_img,
									'status':0,
									'name': this.wxUserinfo.userInfo.nickName
								}
								// 触发父组件事件
								// this.$emit('addImgurl',imgurl)
								// 显示成功
								uni.$showMsg('您已上传成功')
								// 保存服务器
								this.postImgs(imgurl)
								// 获取上传的图片
								this.getOwnImgs()
								
							},
							fail: function (uploadFileFail) {
								console.log('Error:', uploadFileFail.data);
							},
							complete: ()=> {
								console.log('Complete:');
							}
						});
					},
					error : function(e){
						console.log(e);
					}
			   });
			},
			// 保存图片
			async postImgs(e){
				// 上传
				const {data:res} = await uni.$http.post('/wx/postImgs/',e)
			},
			// 获取上传的图片
			async getOwnImgs() {
				const username = this.wxUserinfo.userInfo.nickName
				const {
					data: res
				} = await uni.$http.get(`/wx/getImgs/${username}/`)
				// 获取服务器图集保存
				// 持久化保存图集
				this.updateWxImgs(res.data)
				// 持久化保存图集总数
				this.updateAllCountImgs(res.count)
			},
			



		}
	}
</script>

<style lang="scss">
.pic-uploader-container{
	text-align: center;
	color: #fff;
	letter-spacing: 2rpx;
}
</style>
