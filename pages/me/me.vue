<template>
	<view>
		<image @click="showPdf" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2020%2FD96BDADDFC94A222DCFB293747270865E35017E8_size14_w500_h338.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628730452&t=809fb61804a2d442cceed279f14547ce"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			showPdf(){
				let pdfUrl= encodeURIComponent('http://rtdsoft.rtdsoft.cn:6100/files/sop/file_befca6a4.pdf')
				uni.navigateTo({
					url:'../pdf/pdf?pdfUrl='+ pdfUrl
				})
			},
		},
	}
</script>

<style>

</style>
