<template>
	<view class="profile-box">
		<view class="bg-box">
		</view>
		<view class="margin bg-white">
			<view class="text-center">
					<image src="../../static/logo.png" mode="widthFix" class="avatar"></image>
			</view>
			<view class="fs-28 text-center">
				张三丰  
			</view>
			<view class="flex order-list justify-between">
				<view v-for="(item,index) in orderList" class="flex flex-direction align-center padding">
					<text :class="item.icon" class="iconfont margin-bottom-xs"></text>
					{{ item.name }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [{
						icon: 'icon-danju',
						name: '我的订单'
					},
					{
						icon: 'icon-jifen',
						name: '待付款'
					},
					{
						icon: 'icon-ziliaoshouce',
						name: '待收货'
					},
					{
						icon: 'icon-vip-fill',
						name: '会员等级'
					},
				]
			}
		},
		methods: {

		}
	}
</script>
 
<style lang="scss">
	.profile-box {
		.bg-box {
			background: #f6eee1;
			height: 400rpx;
		}
		.avatar {
				margin-top: -75rpx;
			// transform: translateY(-50%);
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
		.order-list .iconfont {
			font-size: 60rpx;
			color: #888;
		}
		.margin.bg-white {
			margin-top: -200rpx;
		}
	}
</style>
