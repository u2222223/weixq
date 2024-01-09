
import { baseURL } from './config'
function ajax(params = { method, url, data, params }) {
	let header = params.header
	return new Promise(function (resolve, reject) {
		const t = wx.getStorageSync("t")
		uni.request({
			url: params.url.includes('http') ? (params.url) : (baseURL + params.url),
			method: params.method || 'get',
			data: params.data ? params.data : {},
			header: {
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'authorization': t || '',
				...header
			},
			timeout: 10 * 1000,
			success(res) {
				if (res.errMsg === "request:ok") {
					if (res.data.dToken) {
						wx.removeStorageSync('t')
						reject();
					}
					resolve(res.data);
				} else {
					uni.showToast({
						title: '提示',
						content: '网络请求超时！',
						showCancel: false,
						success: function (res) { }
					})
					reject();
				}

			},
			fail(err) {
				reject(err)
			}
		})
	})
}

export {
	ajax
}