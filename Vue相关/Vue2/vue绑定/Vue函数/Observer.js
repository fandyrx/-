export function  Observer(data_instance) {
  // 2.递归出口, 如果没有子属性,或,子属性不是对象 则退出
  if(!data_instance || typeof data_instance !== "object") return;
  Object.keys(data_instance).forEach(key=>{
    let value = data_instance[key]
    // 1.递归,值内还有数组
    Observer(value)
   Object.defineProperty(data_instance,key,{
    enumerable:true,
    configurable: true,
    get(){
      console.log(key,value,'key');
      return value
    },
    set(newValue){
      console.log(newValue,'n');
      value = newValue
      // 3.监视,新设置的值:  已有属性赋值为{}时
      Observer(newValue)
    }
   })


  })

};