// Object Map

// 1.Object 键只能是字符串或者Symbols  Map则可以为任意值:函数
// 2.Object 无序, Map有序(FIFO原则)
// 3. Object键值对只能手动计算, Map有size属性
// 4.Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

// 字符串
// var myMap = new Map();
// var keyString = "a string"; 
 
// myMap.set(keyString, "和键'a string'关联的值");
// myMap.get(keyString);    // "和键'a string'关联的值"
// myMap.get("a string");   // "和键'a string'关联的值"
//                          // 因为 keyString === 'a string'


 //对象
//  var myMap = new Map();
//  var keyObj = {};
  
//  myMap.set(keyObj, "和键 keyObj 关联的值");
 
//  let res1 = myMap.get(keyObj); // "和键 keyObj 关联的值"
//  let res2 = myMap.get({}); // undefined, 因为 keyObj !== {}
//  console.log(res1);
//  console.log(res2);

//  var kvArray = [["key1", "value1"], ["key2", "value2"],["key2", "value2"]];
 
// // Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
// var myMap = new Map(kvArray);
 
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
// var outArray = Array.from(myMap);

// console.log( myMap);
// console.log( outArray);
// // Map合并 
// var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
// var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
// var merged = new Map([...first, ...second]);



// 唯一性,Map,Set
let yellow1 = Symbol.for("Yellow");
   // "Yellow"
console.log(Symbol.keyFor(yellow1));