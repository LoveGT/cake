<template>
	<view class="cake-box">
		<nav-custom></nav-custom>
		<side-bar @openFn='handleOpen' @closeFn="handleClose" :is-show="showSidebar" :cateList="cateList"></side-bar>
		<GoodsItem v-for="item in goodsList" :goods-item="item" :key="item.id"></GoodsItem>
		<tabbar-custom @tabbarFn='handleTab' :tabbar-list="tabbarList"></tabbar-custom>
	</view>
</template>

<script>
	import {
		getGoodsList
	} from "../../api/goods-list.js"
	import {
		getClassfiy
	} from "../../api/classfiy.js"
	import GoodsItem from "../../components/goods-item.vue"
	export default {
		data() {
			return {
				showSidebar: true,
				queryParams: {
					page: 1,
					where: { bcid: 1}
				},
				goodsList: [],
				cateList: [],
				tabbarList: [{
					name: '分类',
					bcid: '',
					target: ''
				}, {
					name: '蛋糕',
					bcid: '1',
					target: '/pages/cake/cake'
				}, {
					name: '面包',
					bcid: '11',
					target: '/pages/bread/bread'
				}, {
					name: '小食',
					bcid: '6',
					target: '/pages/food/food'
				}, {
					name: '购物车',
					bcid: '',
					target: '/pages/cart/cart'
				}]
			}
		},
		onLoad() {
			this.getData()
			this.getCateList()
		},
		onPullDownRefresh() {
			uni.showLoading({
				title: '加载中'
			});
		},
		onReachBottom() {
			console.log('触底了，重新请求数据')
			this.queryParams.page++
			this.getData(this.queryParams)
			uni.showToast({
				title: '到底了'
			})
		},
		methods: {
			handleTab(tabbarItem) {
				const {
					bcid,
					target
				} = tabbarItem
				if (bcid) {
					this.goodsList = []
					this.queryParams.page = 1
					this.queryParams.bcid = bcid
					this.getData(this.queryParams)
				}
				if (!bcid && !target) {
					this.showSidebar = true
				}
			},
			getData(data = {}) {
				getGoodsList(data).then(res => {
					this.goodsList = [...this.goodsList, ...res.results]
				})
			},
			getCateList() {
				getClassfiy().then(res => {
					console.log(res)
					this.cateList = res.results
				})
			},
			handleOpen() {
				this.showSidebar = true
			},
			handleClose() {
				this.showSidebar = false
			},
			handleDetil() {
				uni.navigateTo({
					url: "../detail/detail"
				})
			}
		},
		components: {
			GoodsItem
		}
	}
</script>

<style lang="scss">
	page {
		padding: 110rpx 0 120rpx 0;
	}

	.cake-box {
		display: flex;
		flex-wrap: wrap;
		padding: 15rpx;
		justify-content: space-between;
	}
</style>
