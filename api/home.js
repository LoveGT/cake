import {
	$http
} from "../utils/request.js"
export function getBanners() {
	return $http({
		url: '/1.1/classes/banner',
		method: 'GET'
	})
}

export function getBannersDetail() {
	return $http({
		url: '/1.1/classes/bannerDetail',
		method: 'GET'
	})
}
