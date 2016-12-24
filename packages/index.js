/**
 * Created by huangchengwen on 16/12/19.
 */
import Vue from 'vue';
import Toast from './toast'
import MessageBox from './messagebox'
import Button from './button'
import Checkbox from './checkbox'
import Switch from './switch'

import './base/css/index.scss'

const version = '0.0.1';

const install = function(Vue) {
	if (install.installed) return;

	// define components
	Vue.component(Button.name, Button);
	Vue.component(Checkbox.name, Checkbox);
	Vue.component(Switch.name, Switch);

	//
	Vue.$ml = Vue.prototype.$ml = {
		Toast: Toast,
		MessageBox: MessageBox
	};


}


install(Vue);


export {
		install as default,
		version,
		Button,
		Switch
}