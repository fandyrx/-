const PROMISE_STATUS_PENDING = "pending"
const PROMISE_STATUS_FULFILLED = "fulfilled"
const PROMISE_STATUS_REJECTED = "rejected"

//工具函数
function  execFunctionCatchError(execFn,value,resolve,reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch(err){
    reject(err)
  }
}

class  MyPromise {

  constructor(executor){
    this.status = PROMISE_STATUS_PENDING //初始化状态
    
    this.value = void(0)       //成功的信息保存,用于传递给resolve
    this.reason = undefined     //失败的信息保存,用于传递给reject
    //then
    this.onFulfilledFns = []    //成功事件回调
    this.onRejectedFns = []     //失败事件回调

    //resolve成功回调
    const resolve = (value)=>{
      if(this.status ===  PROMISE_STATUS_PENDING) {
        //1.状态为pending ,开启微任务
        queueMicrotask(()=> {        //主线程执行,保证then已经执行了,传入成功和失败的对应方法 否则报错
          if (this.status !== PROMISE_STATUS_PENDING) return 
          this.status = PROMISE_STATUS_FULFILLED
          //2.状态改为成功,存储传入值
          this.value = value
          //3.遍历 所有 then传入成功的事件 传值
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
          console.log(this.value,"resolve内部");
       })
      }
    }
    //reject 失败的回调
    const reject = (reason) =>{
      if(this.status ===  PROMISE_STATUS_PENDING) {
        if (this.status !== PROMISE_STATUS_PENDING) return 
       //1.状态为待定时,开启微任务 
        queueMicrotask(()=>{
          this.status = PROMISE_STATUS_REJECTED
          //1.状态改为失败,保存传入值
          this.reason = reason
          //2.遍历 所有then传失败的 事件 传值
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
          console.log(this.reason,"rejected内部");
        })
      }
    }

    //执行传入的箭头函数,(resolve,reject)=>{...}
    //.将类里的 resolve,reject函数 当参数传入
    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  
  }


  then(onFulfilled,onRejected) {
    return new MyPromise((resolve,reject) =>{
          // 1.then调用时,状态已经确定 
      if(this.status == PROMISE_STATUS_FULFILLED && onFulfilled) {
        //  try {
        //    const value = onFulfilled(this.value)
        //    resolve(value)
        //  } catch (error) {
        //     reject(error)
        //  }
        execFunctionCatchError(onFulfilled,this.value,resolve,reject)
      }
      if(this.status === PROMISE_STATUS_REJECTED && onRejected){
        
        execFunctionCatchError(onRejected,this.reason,resolve,reject)
      }
      //2.状态 pending  将接收到的成功,失败回调传入数组
      if(this.status === PROMISE_STATUS_PENDING){
        this.onFulfilledFns.push(()=>{
          // try {
          //   const value = onFulfilled(this.value)
          //   resolve(value)
          // } catch (err) {
          //   reject(err)
          // }
          execFunctionCatchError(onFulfilled,this.value,resolve,reject)
        })
        this.onRejectedFns.push(()=>{
          execFunctionCatchError(onRejected,this.reason,resolve,reject)
        })
      }

    })
   
    
  }



}


const promise = new MyPromise((resolve,reject)=>{
  console.log("pending");
  resolve(111)
  reject(2222)
})


promise.then(res=>{
  console.log("res1:",res);
  return "第一次调用resolve"
},err=>{
  console.log("err:",err);
  return "a"
}).then(res=>{
  console.log("res3:",res);
},err=>{
  console.log("err3:",err);
})



promise.then(res=>{
  console.log("res2:",res);
},err=>{
  console.log("err2",err);
})  




// 构造函数
function Person (name) {
  this.name = name
  
  
}

console.log(new Person("名字"));

// 类 es6
class Dog  {
  constructor(name){
    this.name = name
  }
  bark(){
    console.log("汪");
  }
}

console.log(new Dog("小白"));


//
class MPromise {
  constructor(executor){
    //定义状态 
    //定义resolve,reject回调
    //resolve 执行微任务队列:改变状态,获取value,then传入执行成功回调
    //reject 执行微任务队列:改变状态,获取reason,then传入执行失败回调

    //try catch
    executor(resolve,reject)
  }
}


// then方法
function then(onFulfilled,onRejected){
  this.onFulfilled = onFulfilled
  this.onRejected =onRejected

  //1.判断无值  给 默认值
  //2.返回promise resolve/reject
  // 3. 判断状态是否确定
  //    onFulfilled/onRejected 直接执行 (捕获异常)
  //4.添加到数组中 push(()=>{ 执行onFulfilled/onRejected 直接执行代码})
}


// catch
