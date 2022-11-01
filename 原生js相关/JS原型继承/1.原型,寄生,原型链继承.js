function Father(name) {
	this.grandName = name;
}

function Son(name) {
	this.name = name;
}

let father = new Father("父亲");

// 1.子类构造函数的原型指向 父类实例 (不正确,所有东西塞到父类原型了)
//三个弊端,子类实例对象,看不到继承属性,两个不同子类属性相互影响,实现类过程没有传递参数
Son.prototype = father;
let son = new Son("儿子");

console.log(son.name);
console.log(son.grandName);

//2.借用构造函数
// 弊端: Person 至少被调用两次. stu 多出一些属性,父类原型对象多出undefined属性
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.running = function () {
	console.log(this.name + "running");
};

function Student(name, age) {
	Person.call(this, name, age);
	this.sno = 111;
}

let p = new Person();
//子类构造函数的原型指向 父类实例
Student.prototype = p;

let stu = new Student("Stu", 18);

console.log(p);
console.log(stu);

/**
 * 3.原型式继承
 *
 */
var obj = {
	name: "me",
	age: 18,
};

function createObject(o) {
	var newObj = {};
	Object.setPrototypeOf(newObj, o);
	return newObj;
}
// 没有	Object.setPrototypeOf Api 前实现方式:
function createObject2(o) {
	function Fn() {}
	Fn.prototype = o;
	var newObj = new Fn();
	return newObj;
}

//创建{},指定o为其原型对象,返回
var info1 = createObject(obj);
console.log("info1的隐式原型:", info1.__proto__);
//新版ECMA ,等同上方原理
let info2 = Object.create(obj);
console.log("first", Object.getPrototypeOf(info1));
/**
 *  Object.getPrototypeOf(target)  //获取的隐式原型
 *  Object.setPrototypeOf(targetObj, proto) //为targetObj 设置原型
 *  Object.create(obj);  新API 等同上方操作
 *  创建一个新对象,其原型指向obj
 */
