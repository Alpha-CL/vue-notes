import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./utils";

import {showMessage} from "./utils/index";
Vue.prototype.$showMessage = showMessage;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');