const baseUrl = 'https://h04prfal.lc-cn-n1-shared.com'
export function $http(options = {}) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseUrl + options.url,
			method: options.method || 'GET',
			header: {
				'X-LC-Id': 'H04prfALuRP0mKGU1Usyjup6-gzGzoHsz',
				'X-LC-Key': 'PNIPWOy8nIeNdq7deKOvPSEi',
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
