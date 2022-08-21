// 1.函数嵌套
// 2. 内部函数调用外部的局部变量或者函数,在定义时就已经产生闭包了
//3.作用,延长局部变量的生命周期,但是会一直存在,直到内部函数为null,清除掉引用.
//    1.延长局部变量的生存周期
    // 2.外部可以间接访问操作到,作用域内部的局部变量.

//4.缺点:会造成内存泄漏,闭包的变量一直占据了空间(不解除的话)
        // 内存泄漏:1.闭包,2.意外的全局变量(函数内部 a = 1 )3.定时器setInterval或回调没清除
        // 内存溢出:程序运行需要的内存超出了剩余内存  
//  函数执行完毕后,函数内部的局部变量一般会回收,不存在.  闭包除外
//  正常的外部作用域无法访问函数内部的局部变量  


function  fun (n,o) {
 console.log(o);
 return {
  fun:function(m){
    return fun(m,n);
  }
 }
}

var a = fun(0); a.fun(1); a.fun(2);  a.fun(3);//undefined;0;0;0
console.log('----');
var b = fun(0).fun(1).fun(2).fun(3);//undefined;0;1;2
console.log('----');
var c = fun(0).fun(1); c.fun(2);  c.fun(3);//undefined;0; 1;1

// var = fun(0); 闭包产生  n 即为闭包储存的值,a 接受到的函数 传入0, n 改变为0 
// 后方a.fun(1);   闭包产生, n 为之前传入的0  但没有变量接受,变为垃圾对象, 闭包消失, n 依旧为之前的0
// h5 webworker  分线程,防止主线程 函数递归性能较差,等待时间过长

// 1.主线程 new Worker ('引入分线程执行的js')
//   1.1 worker.postMessage(number)       //往分线程传递待处理数据
//   1.2  worker.onMessage =function (event) {
        //event.data 接受分线程处理的数据
//}
//    
// 2.分线程js 放置递归函数,  
//onmessage= function(event){
//        let number = event.data   固定写法,event.data为接受数据
//        递归函数计算,获取结果后再传递给主线程
  //      let result = 递归函数使用
  //       postMessage(result)
  //     分线程无法操作DOM   接触不了window  
//  }

//为了不阻塞 主线程,但是慢点,不能跨域加载JS 内部不支持操作 DOM   不支持所有浏览器h5新增
let worker = new Worker('work.js')

