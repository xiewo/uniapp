// 只有目录中有一个文件，而且是index文件时 才可以简写

import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store;


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
