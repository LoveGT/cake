<template>
	<view style="padding-top:  600rpx;">
		<u-button text="录入数据" @click="handleClick"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.request({
				url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=641',
				method: 'GET',
				header: {
					'access-token': "978229012f4094129c9a8d9618adbff7",
					'version': "v1.0"
				},
				success: (res) => {
					console.log(res.data.data)
					// {
					// 	"requests": [{
					// 			"method": "POST",
					// 			"path": "/1.1/classes/Post",
					// 			"body": {
					// 				"content": "2021 年 5 月 1 日至 2021 年 5 月 5 日放假五天，5 月 8 日调休正常上班。",
					// 				"pubUser": "官方客服"
					// 			}
					// 		},
					// 		{
					// 			"method": "POST",
					// 			"path": "/1.1/classes/Post",
					// 			"body": {
					// 				"content": "我们将于 2021 年 2 月 10 日至 2021 年 2 月 17 日放假八天，2 月 18 日恢复正常工作，放假期间，运维团队仍将在线值班，以应对可能的突发情况，保障服务稳定。",
					// 				"pubUser": "官方客服"
					// 			}
					// 		}
					// 	]
					// }
				}
			})
		},
		methods: {
			handleClick() {
				uni.request({
					url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=641',
					method: 'GET',
					header: {
						'access-token': "978229012f4094129c9a8d9618adbff7",
						'version': "v1.0"
					},
					success: (res) => {
						console.log(res.data.data)
						const { data } = res.data
						let batchObj = {'request': []}
						data.forEach(item => {
							batchObj.request.push({
								"method": "POST",
								"path": "/1.1/classes/classify",
								"body": item
							})
						})
						console.log(batchObj, 'batchObj.request')
						this.$post('/1.1/batch', batchObj) //批量录入分类
					}
				})
			}
		}
	}
</script>

<style>

</style>
