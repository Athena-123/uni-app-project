<template>
	<view style="width: 100%;" >
		<!-- <view>你好，世界</view> -->
		<web-view src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2020%2FD96BDADDFC94A222DCFB293747270865E35017E8_size14_w500_h338.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628730452&t=809fb61804a2d442cceed279f14547ce"></web-view>
		<!-- <web-view :src="pdfUrl"></web-view> -->
		<!-- <web-view src="/hybrid/html/web/viewer.html"></web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pdfUrl:'',
				htmlUrl: '/hybrid/html/web/viewer.html'
			}
		},
		methods: {
			
		},
		onLoad(options) {
			// console.log(options,"jjjjjj");
			// 从A页面点击跳转传递pdf文件路径过来
			let fileUrl = decodeURIComponent(options.pdfUrl) // encodeURIComponent 函数可把字符串作为 URI 组件进行编码。
			// console.log(fileUrl,"iiiii");
			this.pdfUrl = fileUrl;
			// this.pdfUrl= this.htmlUrl+ '?file=' + fileUrl
			// console.log(this.pdfUrl,'wwwww');
		}
	}
</script>

<style>

</style>
