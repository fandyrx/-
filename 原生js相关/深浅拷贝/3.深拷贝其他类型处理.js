function isObject(value) {
	const valueType = typeof value;
	return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue) {
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
	const newObject = Array.isArray(originValue) ? [] : {};
	for (const key in originValue) {
		newObject[key] = deepClone(originValue[key]);
	}

	//Symbol复制处理
	const symbolKeys = Object.getOwnPropertySymbols(originValue);
	for (const sKey of symbolKeys) {
		newObject[sKey] = deepClone(originValue[sKey]);
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

const newObj = deepClone(obj);
console.log("是否相等:", newObj === obj);

obj.name = "wwwww";
obj.friends.name = "wwwww";
obj.friends.address.city = "wwwww";
console.log(newObj);
