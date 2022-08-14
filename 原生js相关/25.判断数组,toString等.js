// 1. Object.prototype.toString.call()  //返回字符串的[object XXXX]
console.log(Object.prototype.toString.call([]).slice(8,-1));
//2.原型链  对象的隐式原型链 = 构造函数的显式原型链
console.log([].__proto__ === Array.prototype);
//3.Array.isArray()  ES6
console.log(Array.isArray([]));
//4. instanceof 
console.log([] instanceof Array);
//5.Array.prototype.isPrototypeOf 是否在原型链上
console.log(Array.prototype.isPrototypeOf([]));