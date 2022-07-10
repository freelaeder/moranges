<template>
	<view class="pic-uploader-container" @click="upload" >
		上传图片
	</view>
</template>

<script>
	export default {
		name: "my-upload",
		data() {
			return {
			};
		},
		onReady: () => {
			uni.$showMsg('每次只能上传一张图片哦')
		},
		methods: {
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
							url : 'http://139.196.43.234:20517/file/uploadFile', // post请求地址
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
									'url':result.data[0].url,
									'status':false
								}
								this.$emit('addImgurl',imgurl)
								console.log(imgurl,'imurl');
								uni.$showMsg('您已上传成功')
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
			}



		}
	}
</script>

<style lang="scss">

</style>
