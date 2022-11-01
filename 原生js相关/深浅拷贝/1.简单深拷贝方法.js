const s1 = Symbol();
const s2 = Symbol();

const obj = {
	name: "me",
	friend: {
		name: "tom",
		age: 11,
	},
	foo: function () {
		console.log("foo");
	},
	[s1]: "abc",
	s2: s2,
};

obj.inner = obj;

const info = JSON.parse(JSON.stringify(obj));
console.log(info);
//1.弊端:Symbol 函数 会直接被去除  无法处理
//2.  内部如果存在 对象的循环引用 递归,报错
