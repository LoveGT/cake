<template>
	<view class="sidebar">
		<u-popup :show="isShow" @close="close" mode="left" style="height: 100vh;">
			<view class="menu-wrapper">
				<view class="menu-title u-border-bottom" v-for="(item, index) in cateList.slice(0,4)" style="position: relative;">
					{{item.bname}}
					<u-badge type="warning " :value="item.num" absolute :offset="[6, 110]"></u-badge>
					<view v-if="index == 0">
						<!-- <view class="menu-title u-border-bottom">
							口味筛选
						</view> -->
						<u-collapse accordion>
							<u-collapse-item title="口味筛选">
								<u-cell-group>
									<u-cell v-for="(it,idx) in item.list" :title="it.tname" isLink>
									</u-cell>
								</u-cell-group>
							</u-collapse-item>
						</u-collapse>
						<u-collapse accordion>
							<u-collapse-item title="场景筛选">
								<u-cell-group>
									<u-cell v-for="(it,idx) in item.list" :title="it.tname" isLink>
									</u-cell>
								</u-cell-group>
							</u-collapse-item>
						</u-collapse>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "side-bar",
		props: {
			isShow: {
				type: Boolean,
				default: false
			},
			cateList: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {};
		},
		onLoad() {
			console.log('conponent-onload')
		},
		mounted() {
			// uni.$on('show', data=> {
			// 	console.log(data, 'data')
			// 	this.show = data.isShow
			// })
			console.log('conponent-onload')
		},
		methods: {
			open() {
				this.$emit('openFn')
			},
			close() {
				this.$emit('closeFn')
			}
		}
	}
</script>

<style lang="scss">
	.sidebar {
		z-index: 3;

		.menu-wrapper {
			padding-top: 140rpx;
			z-index: 4;
			width: 50vw;
			overflow: auto;

			.menu-title {
				padding: 22rpx 20rpx
			}
		}
	}
</style>
