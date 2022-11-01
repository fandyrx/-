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

watchFn(function () {
	// const newName = obj.name;
	console.log("hello world");
	console.log(obj.name);
});

watchFn(function () {
	console.log(obj.name, "demo function---");
});

obj.name = "james";

depend.notify();
