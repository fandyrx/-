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
//响应式函数
const depend = new Depend();
function watchFn(fn) {
	depend.addDepend(fn); //传入需要收集的函数
}

//封装获取 depend 函数
const targetMap = new WeakMap();
function getDepend(target, key) {
	//根据target 获取对应目标的map 数据管理对象
	let map = targetMap.get(target);
	if (!map) {
		map = new Map();
		targetMap.set(target, map);
	}

	//根据key 获取depend 对象
	let depend = map.get(key);
	if (!depend) {
		depend = new Depend();
		map.set(key, depend);
	}
	return depend;
}

//数据
const obj = {
	name: "kobe",
	age: 18,
};
const info = {
	address: "china",
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
		//depend.notify(); //监听数据变化，自动通知
		const depend = getDepend(target, key);
		depend.notify();
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
 * 依赖数据的管理
 * 
 * 
 * 
//obj对象
//name: depend
//age:depend
const objMap = new Map();
objMap.set("name", "nameDepend");
objMap.set("age", "ageDepend");
//infoMap对象
//name:depend
const infoMap = new Map();
infoMap.set("address", "addressDepend");

const targetMap = new WeakMap();
targetMap.set(obj, objMap);
targetMap.set(info, infoMap);

//obj.name   
const depend1 = targetMap.get(obj).get("name");
depend1.notify()
 */

/**
 * 修改数据
 */

objProxy.name = "james";
objProxy.name = "js";
objProxy.name = "cc";
