//  所以api 请求接口文件

const  baseUrl = 'https://douban.uieee.com';

//  https://douban-api.uieee.com/v2/movie/in_theaters
// 正在上映的电影
export  const getInTheaters =  (params) =>(
    // new Promise((resolve,reject)=>{  // 这个都可以不用写
		uni.request({
			url: `${baseUrl}/v2/movie/in_theaters`,
			data: params,
			header: {
				'content-type': 'json'
			},
			// 如果不加 success ,默认直接返回一个Promise
			// success(res){
			// 	console.log(res)
			// }
		// })  // 这个括号是上面promise 的
	})
)

export  const comingSoon =  (params) =>(
    // new Promise((resolve,reject)=>{  // 这个都可以不用写
		uni.request({
			url: `${baseUrl}/v2/movie/coming_soon`,
			data: params,
			header: {
				'content-type': 'json'
			},
			// 如果不加 success ,默认直接返回一个Promise
			// success(res){
			// 	console.log(res)
			// }
		// })  // 这个括号是上面promise 的
	})
)


// 豆瓣新片榜
export  const newMovies =  (params) =>(
    // new Promise((resolve,reject)=>{  // 这个都可以不用写
		uni.request({
			url: `${baseUrl}/v2/movie/new_movies`,
			data: params,
			header: {
				'content-type': 'json'
			},
			// 如果不加 success ,默认直接返回一个Promise
			// success(res){
			// 	console.log(res)
			// }
		// })  // 这个括号是上面promise 的
	})
)


// top 250
export  const top250 =  (params) =>(
    // new Promise((resolve,reject)=>{  // 这个都可以不用写
		uni.request({
			url: `${baseUrl}/v2/movie/top250`,
			data: params,
			header: {
				'content-type': 'json'
			},
			// 如果不加 success ,默认直接返回一个Promise
			// success(res){
			// 	console.log(res)
			// }
		// })  // 这个括号是上面promise 的
	})
)



// 电影详情
export  const details =  (id) =>(
    // new Promise((resolve,reject)=>{  // 这个都可以不用写
		uni.request({
			url: `${baseUrl}/v2/movie/subject/${id}`,
			
			header: {
				'content-type': 'json'
			},
			// 如果不加 success ,默认直接返回一个Promise
			// success(res){
			// 	console.log(res)
			// }
		// })  // 这个括号是上面promise 的
	})
)