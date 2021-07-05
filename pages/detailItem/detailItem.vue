<template>
	<view>
		我是详情页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemInfo:{}
			}
		},
		onLoad:function(options){
			console.log(options);
			this.getItemInfo(options)
		},
		methods: {
			async getItemInfo(options){
				if(options.id) {
					let {res} = await this.$request({
						url:"/detail?id=" + options.id,
					})
					if(res.code == '000000') {
						this.itemInfo = res.data;
					} else {
						uni.$showToast({
							title:"数据获取失败!"
						})
					}
					if(!res){
						console.log("errMessage");
					}
				}
			}
		}
	}
</script>

<style>

</style>
