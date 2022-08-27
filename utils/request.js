const baseUrl = 'https://api2105.h5project.cn'
export function $http(options = {}) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			header: {
				'X-LC-Id': '7yoqQxyLBNN9MW5rsgTGXbHL-gzGzoHsz',
				'X-LC-Key': 'hA8yGYuHjnXWRui1rzTe0C3P',
				'Content-Type': 'application/json'
			},
			data: options.data || {},
			success(res) {
				reslove(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

export function $get(url, data = {}) {
	return $http(url, 'GET', data)
}

export function $post(url, data = {}) {
	return $http({
		url,
		method: 'POST',
		data
	})
}
