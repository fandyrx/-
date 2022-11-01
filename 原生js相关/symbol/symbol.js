const s1 = Symbol();
const s2 = Symbol("s2:description");
const s3 = Symbol(3);
//1.symbol 作为对象key 字面量
const obj = {
	[s1]: "abc",
	notSymbol: "非symbol键值",
};

//2.新增属性
obj[s2] = 2;

//3.Object,defineProperty
Object.defineProperty(obj, s3, {
	enumerable: true,
	writable: true,
	configurable: true,
	value: "bbb",
});

// 4. 读取 不能.获取
console.log(obj[s1], obj[s2], obj[s3]);
console.log(obj.s1, "点语法查找的是字符串");

//5. Symbol 作为属性名，遍历 Object.keys获取不了
console.log(Object.keys(obj), "keys");
console.log(Object.getOwnPropertyNames(obj), "propertyNames");
console.log(Object.getOwnPropertySymbols(obj), "propertySymbols");

//6. Symbol.for(key)   keyFor
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
console.log(sa === sb);
console.log(Symbol.keyFor(sa), "keyFor");
