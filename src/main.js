/**
 * Created by huangchengwen on 16/11/30.
 */
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import demoList from './vue/demoList.vue'
import toast from './vue/toast.vue'
import button from './vue/button.vue'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [{
		path: '/',
		redirect: {name: 'list'}
	}, {
		path: '/list',
		name: 'list',
		component: demoList
	}, {
		path: '/toast',
		name: 'toast',
		component: toast
	}, {
		path: '/button',
		name: 'button',
		component: button
	}]
});

const app = new Vue({
	router:router
}).$mount('#app');
