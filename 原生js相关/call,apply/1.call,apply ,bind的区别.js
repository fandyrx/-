function foo (...a){
  let name = "我是foo"
  console.log(this.name);
  // console.log(this);  指向定义所在的window
  console.log(a);
}
// 1.声明一个函数 
// 2. 正常调用
// foo()   //undefined   因为指向的window 没有挂载这个name 变量

const obj = {
  name:"我是OBJ"
}

foo.call(obj,1,2,3)     // 我是OBJ

foo.apply(obj,[4,5,6])    // 我是OBJ

// foo.bind(obj)()   // 我是OBJ
/* 
    1.三者相同点:都改变了 函数/方法的 this 指向.
    2.不同点: bind 改变指向后并不会自动调用该方法

call apply 的不同点
    3.call 和 apply 都是调用一个对象的一个方法，用另一个对
    象替换当前对象。

    而不同之处在于传递的参数   最多只能有两个参数—— (1)新this 对象 和 (2)一个数组 argArray 如果 arg 不是数组则会报错.
    3.1 apply(this,[arg1,arg2,arg3....]) apply只能传递一个参数
    3.2 call(this,arg1,arg2,arg3....)  call可以传递多个参数
    
   */
  console.log("----")
    let arr1 = [132]
    let arr2 = [2,3,[4,5,6]]
    

    console.log([].concat.apply(arr1,arr2))   
      //1.apply(this,args) 第二个参数为数组,使用时,会给前方函数调用函数以 (...args) 方式传递参数   
    console.log(...arr2)
    //2.上面代码,等价于下面,arr1调用concat(...arr2) ; concat 再次合并, 所以会把里面的数组[]拓展出来.
    console.log([132].concat(...arr2))