function foo(a) {
    console.log(a);
    console.log(arguments);
}

foo(12,34);

// arguments 接受了所有传递的参数,不管有无写入形参,
// 返回值是伪数组,存储了实参数据,可读取,但是不能修改.pop.push等数组方法没用


let  data = new Date ();
console.log(data);


console.log(data.getFullYear());
console.log(data.getMonth()+1);
console.log(data.getDate());
console.log('今天星期'+data.getDay());  //day 是周几
console.log(data.getTime());



