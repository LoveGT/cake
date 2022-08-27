import {
	$http
} from "../utils/request.js"

// export function getGoodsList(data) {
// 	return $http({
// 		url: `/1.1/classes/goods?where=${data.where || '{bcid: 1}'}&limit=${data.limit||8}&skip=${data.skip||8}`,
// 		method: 'GET',
// 	})
// }
export function getGoodsList(data) {
	return $http({
		url: `/1.1/classes/goods?where={"bcid": ${data.bcid||1}}&limit=${data.limit||8}&skip=${data.skip||8}`,
		method: 'GET',
	})
}