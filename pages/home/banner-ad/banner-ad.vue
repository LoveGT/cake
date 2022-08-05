<template>
	<view>
		banner-ad...
	</view>
</template>

<script>
	import { getBannersDetail	} from "../../../api/home.js"
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			getBannersDetail().then(res=> {
				console.log(res, 'res')
			})
		},
		methods: {
		}
	}
</script>

<style>

</style>
