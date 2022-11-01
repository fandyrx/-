//throttle 节流
function throttle(fn, interval, options = { leading: true, trailing: false }) {
	//1.记录上一次的开始时间
	const { leading, trailing } = options; //控制首次,尾次是否触发函数
	let lastTime = 0;

	//2.事件触发时,真正执行的函数
	const _throttle = function () {
		//2.1获取事件触发的当前时间
		const nowTime = new Date().getTime();
		if (!lastTime && !leading) lastTime = nowTime; //当首次进入,且leading设置为false  执行,使remainTime =0

		//2.2  当前触发时间 和 上一次触发的时间 相减,与我设置的时间对比,是否到达了
		const remainTime = interval - (nowTime - lastTime);
		if (remainTime <= 0) {
			//2.3时间到达,真正触发函数
			fn.apply(this, args);
			//2.4 保留上次触发的时间
			lastTime = nowTime;
		}
	};
	return _throttle;
}
