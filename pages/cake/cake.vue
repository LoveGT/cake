<template>
	<view>
		<view class="cake-box">
			
		</view>
	</view>
</template>

<script>
	import GoodsItem from "../../components/goods-item.vue"
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleDetil() {
				uni.navigateTo({
					url:"../detail/detail"
				})
			}
		},
		components: {
			GoodsItem
		}
	}
</script>

<style lang="scss">
	.cake-box {
		display: flex;
		flex-wrap: wrap;
		padding: 15rpx;
		justify-content: space-between;
	}
</style>
