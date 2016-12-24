import Vue from 'vue'

const MessageConstructor = Vue.extend(require('./messagebox.vue'));
const OverlayConstructor = Vue.extend(require('../../overlay/src/overlay.vue'));

let vm, overlay,
		/*
	 * 默认值设置
	 * icon[String] 显示icon，并给出icon地址
	 * title[String] 提示框标题
	 * message[String] 提示框信息
	 * type['alert', 'confirm'] 提示框类型：alert、confirm两种形式
	 * confirmButtonClass[String] confirm按钮附加样式
	 * cancelButtonClass[String] cancel按钮附加样式
	 * confirmButtonText[String] confirm按钮文本
	 * cancelButtonText[String] cancel按钮文本
	 * confirmCallback[function] 点击confirm按钮时的回调方法
	 * cancelCallback[function] 点击cancel按钮时的回调方法
	 */
	defaults = {
		icon: '',
		title: '提示',
		message: '',
		type: 'alert',
		modal: true,
		confirmButtonClass: '',
		cancelButtonClass: '',
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		cancelCallback: null,
		confirmCallback: null
	},

	getVm = () => {
		if(!vm) {
			return new MessageConstructor({
				el: document.createElement('div')
			});
		} else {
			return vm;
		}
	};

MessageConstructor.prototype.close = function () {
	// 关闭提示框
	this.value = false;
	// 关闭遮罩
	overlay && (overlay.display = false);
}

MessageConstructor.prototype.callback = function (action) {
	// 关闭窗口
	this.close();
	// 执行相应的回调
	'function' === typeof this[action] && this[action]();
}


let MessageBox = function (options) {
	vm = getVm();

	if(typeof options === 'string') {
		options = {
			content: options
		};
	} else {
		Object.assign(vm, defaults, options);
	}

	// 弹遮罩
	if(vm.modal) {
		overlay = new OverlayConstructor({
			el: document.createElement('div')
		});
		document.body.appendChild(overlay.$el);
	}

	if(vm.type === 'confirm') {
		vm.showConfirmButton = true;
	} else {
		vm.showConfirmButton = false;
	}

	document.body.appendChild(vm.$el);

	// 当toast挂载到document上面是触发
	Vue.nextTick(function() {
		vm.value = true;
	});
	return vm;
}



export default MessageBox