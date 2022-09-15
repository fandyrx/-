class Vue {
  constructor(obj_instance) {
    //1.传入实例,保存数据
    this.$data = obj_instance.data
    Observer(this.$data);
  }
}

// 2.数据劫持  监听实例的数据
function  Observer(data_instance) {
  //3.获取数据的key数组集合,forEach 做数据劫持(Object.defineProperty(target,key,{}))
  //4.value 保存当前的值,因为每次访问 get,set 会修改数据,需要备份
 
  Object.keys(data_instance).forEach(key=>{
    let value = data_instance[key]
   Object.defineProperty(data_instance,key,{
    enumerable:true,
    configurable: true,
    get(){},
    set(){}
   })


  })
  console.log(Object.keys(data_instance),"data的keys" );

};