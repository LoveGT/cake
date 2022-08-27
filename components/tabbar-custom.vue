<template>
	<view class="custom-tabbar">
		<template v-for="(item,index) in tabbarList">
			<view class="tabbar-item" :key="index" @click="handleTurn(item)">
				<text class="text">{{item.name}}</text>
				<u-line v-if="index<tabbarList.length-1" color="#2979ff" direction="col" length="15"></u-line>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		name: "cus-tabbar",
		props: {
			tabbarList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				showSidebar: false,
			};
		},
		methods: {
			handleTurn(item) {
				this.$emit('tabbarFn', item)
			}
		},
		computed: {
			count() {
				return this.$store.state.count
			}
		},
	}
</script>

<style lang="scss">
	.custom-tabbar {
		box-shadow: 0 0 10rpx 2rpx rgba(0, 0, 0, .2);
		width: 100vw;
		background: #fff;
		padding: 26rpx 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 4;

		.tabbar-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			.text {
				flex: 1;
			}
		}
	}
</style>
