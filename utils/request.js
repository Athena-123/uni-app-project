let baseUrl = 'http://127.0.0.1';
export function request(option){
		return new Promise((reslove,reject)=>{
			uni.request({
				url:baseUrl + option.url,
				data:option.data || {},
				method:option.method || "GET",
				success:(res)=>{
					if(res.code !== "000000") {
						uni.showToast({
							title:"请求接口失败"
						})
					}
					return Promise.resolve(res)
				},
				fail:(err)=>{
					Promise.reject("数据返回失败！")
				}
			})
		})
} 