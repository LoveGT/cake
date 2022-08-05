import {
	$http
} from "../utils/request.js"
export function getClassfiy() {
	return $http({
		url: '/1.1/classes/classify',
		method: 'GET'
	})
}
