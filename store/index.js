import Vue from "vue"
import Vuex from "vuex"
import where from './where.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: () => {
		return {
			count: 100
		}
	},
	modules: {
		where
	}
})

export default store
