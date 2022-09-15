// Array.from() 方法对一个  类似数组  或  可迭代对象创建一个新的，浅拷贝的  数组实例。
// 数组去重合并
function combine(){
  let arr = [].concat.apply([], arguments);  //没有去重复的新数组
  return  Array.from(new Set(arr))
    new Set(arr)  //Set(3) { 1, 2, 3 }  
 
}

// 1.arguments:    [Arguments] { '0': [ 1, 2, 2 ], '1': [ 2, 3, 3 ] }  为类数组

//2. apply (this,[args])

//3.concat.apply(this,[args])    arguments 转换为数组,
var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]

