// 等价Object.create(SuperType.prototype)
function createObject(p) {
  function Fn() {}
  Fn.prototype = o 
  return new Fn()
}


function inheritPrototype (Subtype,SuperType) {
  Subtype.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(Subtype.prototype,"construtor",{
    enumerable:false,
    configurable:true,
    writable:true,
    value: Subtype
  })
}



//方法
let obj = {
  name:'名',
  age:'年龄'
}


let info = Object.create(obj,{
  address:{
   value: '广东',
    enumerable:true
  }
})



console.log(obj);
console.log(info,'info');
console.log(info.__proto__);



//1. hasOwnProperty  属性是否在实例身上
console.log(info.hasOwnProperty("address"))
console.log(info.hasOwnProperty("name"))

//' 2. in  属性是否在实例或者原型链上 
console.log("name" in info )

//3.instanceof 