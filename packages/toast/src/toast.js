/**
 * Created by huangchengwen on 16/12/17.
 */
import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));
const OverlayConstructor = Vue.extend(require('../../overlay/src/overlay.vue'));


let vmPool = [];
let overlay = null;
let getVm = () => {
	if(vmPool.length > 0) {
		let vm = vmPool[0];
		vmPool.splice(0,1);

		return vm;
	} else {
		return new ToastConstructor({
			el: document.createElement('div')
		});
	}
}

let returnAnInstance = vm => {
	if (vm) {
		vmPool.push(vm);
	}
};

// 关闭toast
ToastConstructor.prototype.close = function(){
	this.visible = false;
	// 关闭遮罩
	overlay && (overlay.display = false);
	this.closed = true;
	returnAnInstance(this);
}

let Toast = function(options) {
	let vm = getVm();

	// 将options属性拷贝给vm
	if(typeof options === 'string') {
		vm.message = options;
	} else if(typeof options === 'object') {
		Object.assign(vm, options);
	}
	vm.closed = false;
	clearTimeout(vm.timer);

	document.body.appendChild(vm.$el);

	// 弹遮罩
	if(vm.modal) {
		overlay = new OverlayConstructor({
			el: document.createElement('div')
		});
		document.body.appendChild(overlay.$el);
	}

	// 当toast挂载到document上面是触发
	Vue.nextTick(function() {
		vm.visible = true;
		vm.timer = setTimeout(function() {

			if (vm.closed) return;
			vm.close();

		}, vm.duration);
	});
	return vm;

}

export default Toast;