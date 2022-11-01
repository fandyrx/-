function isObject(value) {
	const valueType = typeof value;
	return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue, map = new WeakMap()) {
	//Set,Map处理 浅拷贝
	if (originValue instanceof Set) {
		return new Set([...originValue]);
	}
	if (originValue instanceof Map) {
		return new Map([...originValue]);
	}

	if (typeof originValue === "symbol") {
		return Symbol(originValue.description); //symbol 唯一性,如果不做这步操作,Symbol作为值,指向会一样
	}

	if (typeof originValue === "function") {
		return originValue; //函数引用同一个即可,不需要特殊拷贝,拷贝引用即可
	}

	if (!isObject(originValue)) {
		return originValue;
	}

	if (map.has(originValue)) {
		return map.get(originValue);
	}
	const newObject = Array.isArray(originValue) ? [] : {};
	for (const key in originValue) {
		map.set(originValue, newObject); //存储一份,若需要循环引用,将对应指针返回即可
		newObject[key] = deepClone(originValue[key], map); //第二次clone 将存储了对象指针的map传入
	}

	//Symbol复制处理
	const symbolKeys = Object.getOwnPropertySymbols(originValue);
	for (const sKey of symbolKeys) {
		newObject[sKey] = deepClone(originValue[sKey], map);
	}
	return newObject;
}

let s1 = Symbol("a");
let s2 = Symbol("b");
const obj = {
	name: "me",
	age: 15,
	friends: {
		name: "tom",
		address: {
			city: "GZ",
		},
	},
	//特殊情况1:数组
	hobbies: ["abc", "cba"], //如果数组,需要用[] 作为数据载体
	//特殊情况2:函数
	foo: function () {
		console.log("foo");
	},
	//Symbol
	[s1]: "a",
	s2: s2,
};

obj.info = obj; ///循环引用
const newObj = deepClone(obj);
console.log("是否相等:", newObj === obj);

obj.name = "wwwww";
obj.friends.name = "wwwww";
obj.friends.address.city = "wwwww";

console.log(newObj.info);


/**
 * 深拷贝第一次,创建一个新对象,new WeakMap() 用于若引用存储 对象指针
 * 1.第二次调用,把当前map 传入
 * 2.如果已经存储了对象指针,返回即可,该指针作为拷贝的值,不在继续递归
 * 3.递归结束,弱引用自动清除 释放内存
 */