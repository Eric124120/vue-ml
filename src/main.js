/**
 * Created by huangchengwen on 16/11/30.
 */
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import demoList from './vue/demoList.vue'
import toast from './vue/toast.vue'
import button from './vue/button.vue'
import checkbox from './vue/checkbox.vue'
import Switch from './vue/switch.vue'
import Messagebox from './vue/messagebox.vue'



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
	}, {
		path: '/checkbox',
		name: 'checkbox',
		component: checkbox
	}, {
		path: '/switch',
		name: 'switch',
		component: Switch
	}, {
		path: '/messagebox',
		name: 'messagebox',
		component: Messagebox
	}]
});

const app = new Vue({
	router:router
}).$mount('#app');
