let Json  = {"gender":"男","age":26}

//1.
Json['添加']='值'
//2.
delete Json["添加"];
console.log(Json);



function Star(name,age) {
  this.name = name;
  this.age = age
}
let starMaker = new Star('星星',28)
console.log(Star);
console.log(starMaker);
console.log("----");
console.log(Star.prototype);
console.log(starMaker.constructor);


function factory(name,age){
  const obj = {}

  obj.name = name
  obj.age = age

  return obj
}
var obj = factory('carl','28')

// 接受自定义属性值
// 新建一个对象
// 给新建的对象赋值自定义属性
// 返回新创建的对象
// 由于每次生产过程中，都会重新创建对象，因此每一次生产
// 出来的对象都是全新的

// 工厂函数的使用不借助 new，而构造函数需要
// 工厂函数没有使用 this
// 工厂函数需要 明确 返回新对象，而构造函数不需要

// 其实new做的事情很简单，流程如下

// 创建 一个新对象
// 将函数内部的this 指向 这个新对象
// 将 新对象的原型对象 指向 构造函数的原型对象
// 返回 this