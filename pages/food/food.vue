<template>
	<view>
		<TestCpd></TestCpd>
		<view class="item">
			<u-tag text="标签"></u-tag>
		</view>
		<u-tag text="标签" type="warning"></u-tag>
		<u-tag text="标签" type="success"></u-tag>
		<u-tag text="标签" type="error"></u-tag>
	</view>
</template>

<script>
	import TestCpd from "../../components/testCpd.vue"
	export default {
		components: {
			TestCpd
		},
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
