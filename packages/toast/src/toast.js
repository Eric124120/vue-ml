/**
 * Created by huangchengwen on 16/12/17.
 */
import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));

let vmPool = [];
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
	this.modal = false;
	this.$el.addEventListener('transitionend', removeDom);
	this.closed = true;
	returnAnInstance(this);
}

let Toast = function(options) {
	let vm = getVm();

	// 缓存是否弹遮罩
	vm.modal = vm._modal = vm._modal ? vm._modal : vm.modal;

	// 将options属性拷贝给vm
	if(typeof options === 'string') {
		vm.message = options;
	} else if(typeof options === 'object') {
		Object.assign(vm, options);
	}
	vm.closed = false;
	clearTimeout(vm.timer);

	document.body.appendChild(vm.$el);

	// 当toast挂载到document上面是触发
	Vue.nextTick(function() {
		vm.visible = true;
		vm.$el.removeEventListener('transitionend', removeDom);
		vm.timer = setTimeout(function() {

			if (vm.closed) return;
			vm.close();

		}, vm.duration);
	});
	return vm;

}


// 移除toast节点
let removeDom = event => {
	if (event.target.parentNode) {
		event.target.parentNode.removeChild(event.target);
	}
}

export default Toast;