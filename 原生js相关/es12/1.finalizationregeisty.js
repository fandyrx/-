//检测对象回收，gc执行会调用回调
const finalRegistry = new FinalizationRegistry((value) => {
	console.log("注册在finalRegistry的对象，某一个被销毁", value);
});

let obj = { name: "why" };
let info = new WeakRef(obj);

finalRegistry.register(obj, "name");
// finalRegistry.register(info, "age");

obj = null;
// info = null;

console.log(info);
console.log(info.deref().name);

setTimeout(() => {
	console.log(info.deref()?.name);
}, 10000);
