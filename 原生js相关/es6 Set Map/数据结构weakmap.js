const obj1 = {
	name: "kobe",
	age: 20,
};

function objName1() {
	console.log("objName1");
}
function objName2() {
	console.log("objName2");
}

function objAge1() {
	console.log("objName1");
}
function objAge2() {
	console.log("objName2");
}

const obj2 = {
	name: "james",
	height: 1.88,
	address: "US",
};
function obj2Name1() {
	console.log("obj2:objName1");
}
function obj2Name2() {
	console.log("obj2:objName2");
}

//1.weakmap数据结构创建
const weakMap = new WeakMap();

//2.收集依赖结构
//对obj1收集的数据结构
const obj1Map = new Map();
obj1Map.set("name", [objName1, objName2]);
obj1Map.set("age", [objAge1, objAge2]);
weakMap.set(obj1, obj1Map); //weakMap 的键只能是对象

//对obj2收集的数据结构
const obj2Map = new Map();
obj2Map.set("name", [obj2Name1, obj2Name2]);
weakMap.set(obj2, obj2Map);

//3.obj1.name 发生改变
//Proxy/Object.defineProperty
obj1.name = "change";
const targetMap = weakMap.get(obj1);
const fns = targetMap.get("name");
fns.forEach((item) => item());
