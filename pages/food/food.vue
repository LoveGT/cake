<template>
	<view>
		<view class="item">
			<u-tag text="标签"></u-tag>
		</view>
		<u-tag text="标签" type="warning"></u-tag>
		<u-tag text="标签" type="success"></u-tag>
		<u-tag text="标签" type="error"></u-tag>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.item {
		width: 200rpx;
	}
</style>
