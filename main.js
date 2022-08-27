import App from './App'
import store from 'store/index.js'
// #ifndef VUE3
import Vue from 'vue'
// 引入uview库
import uView from "uview-ui";
Vue.use(uView);

// import { $get, $post, $http } from "utils/request.js"
// Vue.prototype.$http = $http
// Vue.prototype.$post = $post
// Vue.prototype.$get = $get

import * as request from "utils/request.js"
for (let key in request) {
	Vue.prototype[key] = request[key]
}
import NavCustom from "components/nav-custom.vue"
Vue.component('nav-custom', NavCustom)

import SideBar from "components/side-bar.vue"
Vue.component('side-bar', SideBar)

import TabbarCustom from "components/tabbar-custom.vue"
Vue.component('tabbar-custom', TabbarCustom)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
		store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif