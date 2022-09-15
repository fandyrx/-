// apply 第二参数为数组
Function.prototype.myApply = function myApply(context,args) {
  //1.this 调用者
  if(typeof this !== "function") {
    return console.log(TypeError);
  }

  let fn = this;

  //2.传入数据处理
  context = (context  !== null && context !== undefined ) ?  Object(context) : window
  console.log(context);

  //3.传入对象加属性,并调用函数
 
 args =  args || []
  console.log(args);
  context.fn = fn
 let result = context.fn(...args)
  delete context.fn
  //4.返回结果
 
  return result

}


function foo (num1,num2){
 return num1 + num2
}


let result = foo.myApply({},[0,1])
console.log(result);