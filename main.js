import App from './App'

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

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
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