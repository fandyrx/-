Function.prototype.myCall = function myCall(context,...args) {
    //1.this 调用者
    if(typeof this !== "function") {
      return console.log(TypeError);
    }

    let fn = this;

    //2.传入数据处理
    context = context ?  Object(context) : window

    //3.传入对象加属性,并调用函数
    context.fn = fn
    let result = context.fn(...args)
    
    delete context.fn
    //4.返回结果
   
    return result

 }


function foo (num1,num2){
   return num1 + num2
}


let result = foo.myCall({name:'s'},20,30)
console.log(result);