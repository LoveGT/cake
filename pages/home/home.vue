<template>
	<view class="home-box">
		<view class="wapper">
			<NavCustome></NavCustome>
			<u-swiper :list="banner" circular keyName="img" height='1000rpx' indicator indicatorActiveColor="#ffe32a" @change="change"
				@click="click"></u-swiper>

			<home-title title="本季推荐" en-title="Seasonal Recommend" en-tit="Seasonal"></home-title>
			<u-scroll-list>
				<view v-for="(item, index) in list" :key="index" class="scroll-item">
					<image :src="item.thumb" mode="aspectFill"></image>
				</view>
			</u-scroll-list>
			<home-title title="法系经典" en-title="French Classic" en-tit="French"></home-title>
			<image src="../../static/img/french.jpg" mode="widthFix" class="frence-poster"></image>
			<view class="flex flex-wrap padding-sm justify-between">
				<goods-item v-for="(item,index) in 10"></goods-item>
			</view>
		</view>
		<u-back-top :scroll-top="scrollTop" top="600" icon="arrow-up" text="返回"></u-back-top>
	</view>
</template>

<script>
	import GoodsItem from "../../components/goods-item.vue"
	import NavCustome from "../../components/nav-custom.vue"
	import HomeTitle from "../../components/home-title.vue"
	import { getClassfiy } from "../../api/classfiy.js"
	import { getBanners	} from "../../api/home.js"
	export default {
		data() {
			return {
				scrollTop: 0,
				banner:[],
				list: [{
					thumb: "https://cdn.uviewui.com/uview/goods/1.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/2.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/3.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/4.jpg"
				}, {
					thumb: "https://cdn.uviewui.com/uview/goods/5.jpg"
				}]
			}
		},
		onPageScroll(e) {
			console.log(e.scrollTop)
		},
		onLoad() {
			
			getBanners().then(res => {
				this.banner = res.results
			})
			// this.$http({
			// 	url: '/api/5e90690f0e270d04?cityId=110'
			// })
			// uni.request({
			// 	url: "https://h04prfal.lc-cn-n1-shared.com/1.1/classes/classify",
			// 	method: 'GET',
			// 	header: {
			// 		'X-LC-Id': 'H04prfALuRP0mKGU1Usyjup6-gzGzoHsz',
			// 		'X-LC-Key': 'PNIPWOy8nIeNdq7deKOvPSEi',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	success(res) {
			// 		console.log(res, 'res')
			// 	}
			// })
		},
		methods: {
			change() {

			},
			click() {
				console.log(111)
				uni.navigateTo({
					url: "./banner-ad/banner-ad"
				})
			}
		},
		components: {
			NavCustome,
			HomeTitle,
			GoodsItem
		}
	}
</script>

<style lang="scss">
	.home-box {
		background: #fff;
		border: 1rpx solid red;
		padding-top: 60rpx;
		height: 100vh;
		border: 1px solid red;
		overflow-y: auto;

		.wapper {
			border: 1px solid blue;
		}

		.scroll-item {
			height: 290rpx;
			padding: 0 4rpx;
		}

		.frence-poster {
			width: 750rpx;
		}
	}
</style>
