// 1.==  当两边值不同时,类型转换再比较
    //强制类型转换   
console.log(1 == true);
console.log(1 == '1');
//2. === : 不会强制类型转换   ,   等型等值
console.log(1 === true);
console.log(1 === '1');
console.log(NaN === NaN); //false
console.log(+0=== -0);  //true  
 
//3.Object.is() 是否严格相等    处理了特殊情况 +0 -0 隐式转换, NaN
console.log(Object.is(NaN,NaN));  
console.log(Object.is(+0,-0));

let obj = [1,2,3]
console.log(Object.valueOf(obj),'e')