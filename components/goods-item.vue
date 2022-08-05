<template>
	<view class="cake-item">
		<view class="poster">
		</view>
		<view class="info-cont">
			<view class="info flex justify-between align-center">
				<view class="">
					<view class="fs-28">
						草莓蛋糕
					</view>
					<view class="fs-16">
						CaoMei DanGao
					</view>
				</view>
				<view class="cart-btn">
					<text class="iconfont icon-gouwuche"></text>
				</view>
			</view>
			<view class="fs-18">
				<text class="fs-14">￥</text> 218
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "goods-item",
		data() {
			return {

			};
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.cake-item {
		width: 350rpx;
		.poster {
			height: 350rpx;
			background-color: #f5f5f5;
		}

		.fs-28 {
			margin-top: 24rpx;
		}

		.fs-16 {
			margin: 14rpx;
		}

		.fs-18 {
			font-weight: 600;
			margin-bottom: 22rpx;
		}
		.cart-btn {
			margin-right: 30rpx;
			width: 60rpx;
			height: 60rpx;
			background-color: #ffe32a;
			text-align: center;
			line-height: 60rpx;
			border-radius: 50%;
		}
	}
</style>
