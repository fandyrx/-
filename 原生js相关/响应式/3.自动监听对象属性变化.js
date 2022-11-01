class Depend {
	constructor() {
		this.reactiveFns = [];
	}

	addDepend(reactiveFn) {
		this.reactiveFns.push(reactiveFn); //传入需要收集的函数
	}

	notify() {
		this.reactiveFns.forEach((fn) => {
			fn();
		});
	}
}

//每个属性对应一个类   new Depended() => reactiveFns []
const depend = new Depend();
function watchFn(fn) {
	depend.addDepend(fn); //传入需要收集的函数
}

const obj = {
	name: "kobe",
	age: 18,
};

/**
 * 监听对象属性变量:Proxy(vue3) Object.defineProperty (vue2)
 *
 */

const objProxy = new Proxy(obj, {
	get: function (target, key, receiver) {
		return Reflect.get(target, key, receiver);
	},
	set: function (target, key, newValue, receiver) {
		Reflect.set(target, key, newValue, receiver);
		depend.notify(); //监听数据变化，自动通知
	},
});

/**
 * 需要监听的回调函数
 */

watchFn(function () {
	const newName = objProxy.name;
	console.log("hello world----");
	console.log(objProxy.name);
});

watchFn(function () {
	console.log(objProxy.name, "demo function---");
});

/**
 * 修改数据
 */

objProxy.name = "james";
objProxy.name = "js";
objProxy.name = "cc";
