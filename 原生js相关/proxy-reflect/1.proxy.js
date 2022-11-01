//13个捕获器，看文档   _name 私有属性，可以访问
const obj = {
	_name: "kobe",
	age: 18,
	get name() {
		return this._name;
	},
	set name(newValue) {
		this._name = newValue;
	},
};

const objProxy = new Proxy(obj, {
	get(target, key, receiver) {
		console.log("get调用", receiver);
		console.log("receiver是本身的proxy实例：", receiver === objProxy);
		// return target[key];
		return Reflect.get(target, key, receiver);
	},
	set(target, key, newValue, receiver) {
		console.log("set调用");
		// target[key] = newValue;
		Reflect.set(target, key, newValue, receiver); //能拿到成功与否的返回值
	},
	has: function (target, key) {
		console.log(`监听对象${key}属性in 操作`);
		return key in target;
	},
	deleteProperty(target, key) {
		console.log(`监听对象${key}属性delete 操作`);
		return target[key];
	},
});

objProxy.name = "james";
console.log(objProxy.name);
// objProxy.age = 30;
// console.log("name" in objProxy);
// console.log(delete objProxy.name);
// console.log(objProxy);
