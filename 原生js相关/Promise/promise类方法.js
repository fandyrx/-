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

 
    const resolve = (value)=>{
      if(this.status ===  PROMISE_STATUS_PENDING) {
        queueMicrotask(()=> {     
          if (this.status !== PROMISE_STATUS_PENDING) return 
          this.status = PROMISE_STATUS_FULFILLED
        
          this.value = value
          
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
 
        queueMicrotask(()=>{
          this.status = PROMISE_STATUS_REJECTED
         
          this.reason = reason
        
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
          console.log(this.reason,"rejected内部");
        })
      }
    }

  
    try {
      executor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  
  }


  then(onFulfilled,onRejected) {
    onRejected =  onRejected || ( err=>{throw err} )
    onFulfilled = onFulfilled || ( value=>{ return value})
    return new MyPromise((resolve,reject) =>{
   
      if(this.status == PROMISE_STATUS_FULFILLED && onFulfilled) {

        execFunctionCatchError(onFulfilled,this.value,resolve,reject)
      }
      if(this.status === PROMISE_STATUS_REJECTED && onRejected){
        
        execFunctionCatchError(onRejected,this.reason,resolve,reject)
      }
      //2.状态 pending  将接收到的成功,失败回调传入数组
      if(this.status === PROMISE_STATUS_PENDING){
         if(onFulfilled) this.onFulfilledFns.push(()=>{
           execFunctionCatchError(onFulfilled,this.value,resolve,reject)
         })
          if(onRejected) this.onRejectedFns.push(()=>{
            execFunctionCatchError(onRejected,this.reason,resolve,reject)
         })
      }

    })
   
    
  }

  catch(onRejected) {
    return this.then(undefined,onRejected)
  }

  finally(onFinally) {
    this.then(()=>{
      onFinally()
    },()=>{
      onFinally()
    })
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }
  static  reject(reason) {
    return new MyPromise((reject) => reject(reason))
  }
 

}

// 测试用
const promise = new MyPromise((resolve,reject)=>{
  console.log("pending");
  resolve(111)
  // reject(2222)
})


promise.then(res=>{
  console.log("res1:",res);
  return "第一次调用resolve"
},err=>{
  console.log("err:",err);
  return "a"
}).then(res=>{
  console.log("res3:",res);
  return "b"
},err=>{
  console.log("err3:",err);
  return "c"
}).finally((value)=>{

  console.log("finally:",value);
})



promise.then(res=>{
  console.log("res2:",res);
},err=>{
  console.log("err2",err);
})