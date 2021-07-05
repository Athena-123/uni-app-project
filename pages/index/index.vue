<template>
	<view class="content">
		<!-- 轮播图区域开始 -->
		<view class="swiper-content">
			<swiper circular indicator-dots autoplay indicator-active-color="#ffffff">
				<swiper-item v-for="(item,index) in swiperList" :key="item.id">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播图区域结束 -->
		
		<!-- 导航栏区域开始 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navList" :key="item.id">
				<navigator :url="item.path">
					<image :src="item.src" class="nav_image"></image>
					<text class="text">{{item.name}}</text>
				</navigator>
			</view>
		</view>
		<!-- 导航栏区域结束 -->
		
		<!-- 商品详情标题开始 -->
		<view class="shop-detail">
			<text>商品详情</text>
		</view>
		<!-- 商品详情标题结束 -->
		
		<!-- 商品详情区域开始 -->
		<view class="detail-content">
			<view class="detail-item" v-for="(item,index) in detailList">
				<navigator :url="'/pages/detailItem/detailItem?id=' + item.id">
					<view class="detail-image">
						<image :src="item.src"></image>
					</view>
					<text>{{item.text}}</text>
					<view class="detail-price">
						<view class="left">
							{{item.price}}
						</view>
						<view class="right">
							<text>看相似</text>
						</view>
					</view>
					<view class="detail-disPrice" v-if="item.disPrice">
						{{item.disPrice}}
					</view>
				</navigator>
			</view>
		</view>
		<!-- 商品详情区域结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				swiperList:[
					{
						src:'https://img1.baidu.com/it/u=3678620774,2545866168&fm=26&fmt=auto&gp=0.jpg',
						id:1
					},
					{
						src:'https://img1.baidu.com/it/u=1453752574,532940070&fm=26&fmt=auto&gp=0.jpg',
						id:2
					},
					{
						src:'https://img1.baidu.com/it/u=3535786093,2303627311&fm=26&fmt=auto&gp=0.jpg',
						id:3
					}
				],
				navList:[
					{
						src:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png',
						name:'回隆超市',
						path:'/pages/shop/shop',
						id:4
					},
					{
						src:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png',
						name:'数码电器',
						path:'/pages/digital/digital',
						id:5
					},
					{
						src:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png',
						name:'回隆服饰',
						path:'/pages/costume/costume',
						id:6
					},
					{
						src:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png',
						name:'生鲜食品',
						path:'/pages/foods/foods',
						id:7
					},
					{
						src:'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/179511/33/4023/3422/609e0d45Ea495a996/3783165b48cf1e08.png',
						name:'9.9元拼',
						path:'/pages/active/active',
						id:8
					}
				],
				detailList:[
					{
						src:'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/165680/14/2987/104788/60054457E0d0055b7/c2e0da722385d874.jpg!q70.dpg.webp',
						text:"南极人文胸无钢圈运动内衣深V聚拢薄杯夏季抹胸无痕冰丝速干背心女瑜伽睡眠胸罩SZN0287 287绿色/粉色 L",
						price:"￥79",
						disPrice:"￥75.9",
						id:9
					},
					{
						src:'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/134763/33/17212/38325/60b890a5E6f3672a9/f434681c0f86ad37.jpg!q70.dpg.webp',
						text:"松达婴儿护肤爽身露 桃子水 护肤精华液 痱子水 爽身露桃子水30ml",
						price:"￥28",
						disPrice:"",
						id:10
					},
					{
						src:'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/36077/2/15294/305488/60d15359Ea78ddaa8/3db2c32024d546c6.jpg!q70.dpg.webp',
						text:"首彬 床实木双人床1.8米现代简约出租屋实木床1.5米1.2米小单人床带软包 实木床 长2米*宽1.5米(店长推荐)",
						price:"￥680",
						disPrice:"",
						id:11
					},
					{
						src:'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/194436/20/10922/346331/60dc44a8Ec8ae8346/66b8a82c22a0b6a5.jpg!q70.dpg.webp',
						text:"【2件5折】徐福记 零食糕点法式饼干点 500g混合大礼包",
						price:"￥49.9",
						disPrice:"",
						id:12
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f6f6f6;
		swiper{
			width: 750rpx;
			height: 375rpx;
			image{
				width:100%;
				height: 100%;
			}
		}
		.nav{
			display:flex;
			.nav_item{
				text-align: center;
				margin-top: 10rpx;
				width: 150rpx;
				image {
					width: 80rpx;
					height: 80rpx;
					display: block;
					margin: 10rpx auto;
				}
				.text {
					font-size: 28rpx;
				}
			}
		}
			
		.shop-detail {
			margin:20rpx 0;
			width: 100%;
			height: 50rpx;
			background-color: #fff;
			text-align:center;
			text {
				letter-spacing:20rpx;
			}
		}
		
		.detail-content {
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap:wrap;
			.detail-item {
				width: 360rpx;
				height: 500rpx;
				border-radius: 20rpx;
				overflow: hidden;
				background-color: #fff;
				.detail-image {
					width: 360rpx;
					height: 350rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				text{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp:2;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 26rpx;
				}
				
				.detail-price {
					overflow: hidden;
					.left {
						float: left;
						color: #fa444f;
						font-size: 28rpx;
						font-weight: 700;
					}
					.right {
						float: right;
						margin-top: 5rpx;
						height: 36rpx;
						line-height: 36rpx;
						border-radius:7rpx;
						background-color: #f0f2f5;
						text {
							color: #808080;
							padding:0 8rpx;
						}
					}
				}
				
				.detail-disPrice {
					width: 100%;
					font-size: 24rpx;
				}
			}
		}
		
	}
	
</style>
