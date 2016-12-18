/**
 * Created by huangchengwen on 16/12/18.
 */

import Vue from 'vue';
import Toast from '../packages/toast'

const version = '0.0.1';

const install = function(Vue) {
	if (install.installed) return;

	// define components



	//
	Vue.$toast = Vue.prototype.$toast = Toast;


}


install(Vue);


export {
	install as default,
	version
}
