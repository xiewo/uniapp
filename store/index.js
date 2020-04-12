// 这个文件时 vuex 状态管理文件

import Vue from 'vue';
import Vuex from 'vuex';
// 引入地图文件
import QQMapWX from '../static/js/qqmap-wx-jssdk.min.js'
// 引入请求接口文件
import  {getInTheaters} from '../apis'


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		city: '长沙',
		nowPlayingList: {},
	},
	mutations: {

	},
	actions: {
		getCity(context) {
			uni.showLoading({
				title: '加载中'
			})
			
			// 检查用户是否授权的接口   
			uni.authorize({
				scope: "scope.userLocation",
				success() {
					// 引入了腾讯地图api
					let qqmapsdk = new QQMapWX({
						// 在腾讯地图申请的key
						key: 'ZPIBZ-IRB3O-INYW3-SC46P-CM4AF-C3B7O'
					});
					uni.getLocation({
						type: 'gcj02',
						success: function(res) {
							// console.log('当前经度：' + res.longitude);
							// console.log('当前纬度：' + res.latitude);
						
							qqmapsdk.reverseGeocoder({  // 逆地址解析
								location: {
									longitude: res.longitude,
                                    latitude: res.latitude							
								},
								success(res){
									context.state.city = res.result.address_component.city,
									getInTheaters({
										start: '0',
										count: '8',
										city: context.state.city 
									}).then(res=>{
										let [error, data]  = res;
										context.state.nowPlayingList = data.data;
										uni.hideLoading();
									})
								}
							})
							
						}
					});

				},
				fail(res) {
					uni.showToast({
						icon: 'none',
						title: '需要授权',
						duration: 1500
					})
				}
			})
		}
	}
})
