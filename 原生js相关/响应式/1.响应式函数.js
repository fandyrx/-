let reactiveFns = []; //name 改变时，需要执行的函数 收集

function watchFn(fn) {
	//传入需要收集的函数
	reactiveFns.push(fn);
}

const obj = {
	name: "kobe",
	age: 18,
};

watchFn(function () {
	// const newName = obj.name;
	console.log("hello world");
	console.log(obj.name);
});

watchFn(function () {
	console.log(obj.name, "demo function---");
});

obj.name = "james";

reactiveFns.forEach((fn) => {
	fn();
});
