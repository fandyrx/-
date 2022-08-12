
console.log(isNaN(1));  //FALSE
console.log(isNaN("NaN"));  //TRUE
console.log(isNaN(0));  //FALSE
console.log(isNaN(0/0));  //TRUE

console.log("----");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Number.NaN));
console.log(Number.isNaN(0/0));






console.log('----不会进行数据转换,先判断是否数字 ,下面全部为false');
console.log(Number.isNaN("NaN"));   
console.log(Number.isNaN(undefined));
console.log(Number.isNaN({}));
console.log(Number.isNaN("babla"));
console.log(Number.isNaN(37));
console.log(Number.isNaN("37"));


// 

let arr = [1,2,3,4,6]
// 1.arr.shift()  从前面删除 1 个    
// 2.arr.pop()  从后面删除 1 个   以上有返回值,删除的元素

//3.arr.unshift(8)  //从前面  + 
//4.arr.push(7)    // 从后面 +    以上有返回值,添加玩的数组长度
//5.slice不改变原数组   截取
console.log(arr.slice(2))   // [3,4,6]   
console.log(arr.slice(2,3))   // [3]   根据数组索引截取, start(包括) end(不包括)

//6.splice  改变原数组 删除从 i(索引值)开始之后的那个元素。返回值是删除的元素  
//console.log(arr.splice(2)); //[3,4,6]
//console.log(arr.splice(0,3)); //[1,2,3]   不包括结束索引元素


//7. concat 拼接 返回新数组
console.log(arr.concat(10));//[ 1, 2, 3, 4, 6, 10 ]

//8.join   数组转字符串,自定义分割符号/链接文字  不改变原数组
let str = 'zi'
console.log(arr.join(str)); //1zi2zi3zi4zi6
console.log(arr.join(",")); //1,2,3,4,6

//8.1(字符串方法拓展).字符串转数组 split() 类似JOIN

//9.arr.sort()  返回值是排好的数组，默认是按照最左边的数字进
//行排序，不是按照数字大小排序的,改变原数组
console.log(arr.sort());
console.log( arr.sort((a,b)=>{return b-a}));  
// 可自定义排序,a,b 为比较的数组元素  根据返回值 1.< 0 a放左边    2.>0  a放右边   3. =0 位置不变
//

//10.reverse    改变原数组
arr.reverse()
console.log(arr);

//11.forEach (callback) 。 遍历数组,无 return 即使有 return，也不会返回任何
//值，并且会影响原来的数组

//12.arr.map(callback)   映射数组(遍历数组),有 return 返回一个新数组 
//13.arr.filter(callback) 过滤数组，返回一个满足要求的数组

//14.every ,some forEach ,map 区别?
//forEach() 本身是不支持的 continue 与 break 语句的，我们可以通过 some 和 every 来实现。

//使用 return 语句实现 continue 关键字的效果：
                    //   拓展return some() 跳过一个元素,继续执行, every() return 停止条件 ==>等同 break
// 两个 方法都用于检测数组所有元素是否都符合指定条件（通过函数提供）。
//14.1 some      找一个成功就行
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。



// 14.2  every    所有元素都要成功 
//如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。
// 注意： some() every() 不会对空数组进行检测。

// 注意： some()  every() 不会改变原始数组。


