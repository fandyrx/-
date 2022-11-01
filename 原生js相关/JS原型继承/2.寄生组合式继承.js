function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.running = function () {
	console.log(this.name + " running");
};
Person.prototype.eating = function () {
	console.log("eating..");
};
// 子类
function Student(name, age) {
	Person.call(this, name, age);
	this.sno = 111;
}

//创建 一个中间对象  其原型指向父类的原型对象,实现数据不影响
Student.prototype = Object.create(Person.prototype);
//为中间对象设置constructor属性,用于寻找正确的类名
Object.defineProperty(Student.prototype, "constructor", {
	enumerable: false,
	configurable: true,
	writable: true,
	value: Student,
});

Student.prototype.studying = function () {
	console.log("studying..");
};

let stu = new Student("Stu", 18);

console.log(stu);
stu.studying();
stu.running();
stu.eating();

/**
 * 
 * 总结:1.子类 使用父类构造函数.call(this,构造所需参数) , 利用父类指向 子类实例,创建新对象
        2.//创建 一个中间对象 指向父类的原型对象,实现数据不影响
            Student.prototype = Object.create(Person.prototype)
        3. 设置子类原型上的 constructor 属性,用于正确获取类名

          Object.defineProperty(Student.prototype,"constructor",{
              enumerable:false,
              configurable:true,
              writable:true,
              value: Student
          })

          没有这个设置 :console.log(stu) 打印出来显示使 Person 构造的类
            Person { name: 'Stu', age: 18, sno: 111 }
          
 */
