// debounce  回城  规定时间，只有最后一次触发成功
//进一步完善,可传入回调函数,调用fn 后,把结果通过回调传出 (类型限制/判断未作)
//或者整个_debounce包裹promise 利用resolve()传出结果,但是外部使用比较麻烦
function debounce(fn, delay, immediate = false, resultCb) {
	let timer = null;
	let isInvoke = false;

	const _debounce = function (...args) {
		if (timer) clearTimeout(timer);

		if (immediate && !isInvoke) {
			const result = fn.apply(this, args);
			resultCb(result);
			isInvoke = true;
		} else {
			timer = setTimeout(() => {
				const result = fn.apply(this, args);
				resultCb(result);
				isInvoke = false;
				timer = null;
			}, delay);
		}
	};

	//取消功能
	_debounce.cancel = function () {
		if (timer) clearTimeout(timer);
		timer = null;
		isInvoke = false;
	};

	return _debounce;
}

/**
 * 应用场景:
 * 输入框频繁输入内容,搜索,提交信息
 * 频繁点击,触发事件
 * 浏览器滚动,resize事件
 *
 * 频繁操作,调用函数,希望函数在规定时间内只触发最后一次
 *
 * 原理:定时器,闭包
 * 1.外层定义定时器标识
 * 2.内层利用定时器,延迟调用函数,每次进入时,先清除闭包内上一次的标识
 * 3.返回该函数
 *
 * 注意点:内部函数再调用,this会指向window,需要改回正常的调用者
 * apply(this,args)     apply接受this,数组
 * setTimeout设置的箭头函数没有this,外部函数作用域查找,this指向其调用者<input>
 *
 */
