//Promise 状态常量
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
	//1.开始构造函数
	constructor(executor) {
		//架构
		this.status = PROMISE_STATUS_PENDING; //初始化状态 pending

		this.value = void 0; //成功的信息保存,用于传递给resolve
		this.reason = undefined; //失败的信息保存,用于传递给reject
		//then方法回调
		this.onFulfilledFns = []; //成功事件回调
		this.onRejectedFns = []; //失败事件回调

		//1.resolve函数
		const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) { 
        this.status = PROMISE_STATUS_FULFILLED; //resolve 状态调为成功
        this.value = value
       //then的回调执行
        this.onFulfilledFns.forEach(fn => { 
          fn(this.value);
        })
      }
     
		};
		//2.reject 函数
		const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) { 
        this.status = PROMISE_STATUS_REJECTED;
        this.reason = reason;

        this.onRejectedFns.forEach(fn=>{
          fn(this.reason)
        })
      }
		};

    //3.传入方法开始执行
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
    }   
  }
  // API
  //1.then方法 获取执行的结果
  then(onFulfilled, onRejected){ 
    return new MyPromise((resolve, reject) => {
      if (this.status == PROMISE_STATUS_FULFILLED && onFulfilled) { 
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch (err) {
          reject(err);
        }
      }
      if (this.status == PROMISE_STATUS_REJECTED && onRejected) { 
        try {
          const reason = onFulfilled(this.reason);
          reject(reason);
        } catch (err) {
          reject(err);
        }
      }
    })

    
  }

  
}
//执行流程
/**
 *  1.返回一个新promise 
 *  2.内部为异步操作, 传入的箭头函数, 能获取到两个内部提供的函数, resolve, reject
 *  3.根据res, rej调用, 改变对应状态, then,catch 获取结果
 *  4.then 接受两个参数,成功回调,失败回调
 */

//
//1.调用promise
const P1 = new MyPromise((resolve, reject) => {
	console.log("Promise 执行开始");
	resolve("resolve调用");
	reject("reject调用");
});

P1.then(res => { 
  console.log(res)
})

// const p2 = new Promise((res, rej) => {
// 	// res(1);
// 	rej(2);
// });

// // p2.catch((err) => console.log(err));
