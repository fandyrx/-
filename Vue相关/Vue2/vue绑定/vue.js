


class Vue {
  constructor(obj_instance) {
    this.$data = obj_instance.data
    Observer(this.$data);
    Compile(obj_instance.el,this)

  }
}


function  Observer(data_instance) {
  
  if(!data_instance || typeof data_instance !== "object") return;
  
  const dependency = new Dependency();

  Object.keys(data_instance).forEach(key=>{
    let value = data_instance[key]
    // 1.递归,值内还有数组
    Observer(value)
   Object.defineProperty(data_instance,key,{
    enumerable:true,
    configurable: true,
    get(){
    
      // console.log(Dependency.temp,'temp');
      Dependency.temp && dependency.addSub(Dependency.temp);
      return value
    },
    set(newValue){
      console.log(newValue,'n');
      value = newValue
      // 3.监视,新设置的值:  已有属性赋值为{}时
      Observer(newValue);
      dependency.notify()
    }
   })


  })

};



// HEML模板解析  编译函数
function Compile(element,vm) {
 
   vm.$el = document.querySelector(element);

   const fragment = document.createDocumentFragment();
  
  let child;
  while (child = vm.$el.firstChild) {
    fragment.appendChild(child)
 
  }

fragment_compile(fragment);

 
function fragment_compile(node) {
  const pattern = /\{\{\s*(\S+)\s*\}\}/
    
  if(node.nodeType === 3){
  
   const xxx = node.nodeValue

    const result_regex = pattern.exec(node.nodeValue);
 
    if(result_regex) {
     
      const arr = result_regex[1].split('.');
      
      const value = arr.reduce((total,current)=> total[current],vm.$data);
     
    
     
      node.nodeValue = xxx.replace(pattern,value);
      //1.创建订阅者
      new Watcher(vm,result_regex[1],(newValue)=>{
        node.nodeValue = xxx.replace(pattern,newValue);
      })
    };
   
    return
  }
  if(node.nodeType === 1 && node.nodeName === "INPUT") {
    const attr = Array.from(node.attributes)
    // console.log(node.attributes);
    console.log(attr);
    attr.forEach(i=>{
    if(i.nodeName === "v-model") {
      
        const value = i.nodeValue.split('.').reduce((total,current)=>total[current],vm.$data)
        node.value = value;
        new Watcher(vm,i.nodeValue,newValue=>{
          node.value = newValue
        })
        node.addEventListener('input',e=>{
          // ["more","like"]
          const arr1 = i.nodeValue.split('.');
          // ["more"]
          const arr2 = arr1.slice(0,arr1.length-1);
          // [vm.$data.more]
          const final = arr2.reduce((total,current)=>total[current],vm.$data);

          final[arr1[arr1.length-1]] = e.target.value
        })
    }
   
  })


  }
 
  node.childNodes.forEach(child => fragment_compile(child))
  }
  
  vm.$el.appendChild(fragment)
}



class Dependency {
  constructor() {
    this.subscribes = [];
  }
  addSub(sub) {
    this.subscribes.push(sub);
  }
  
  notify(){
    this.subscribes.forEach(sub=>sub.update())
  }
  
  
  }
  
  
  class Watcher {
    constructor(vm,key,callback) {
      this.vm = vm
      this.key = key
      this.callback = callback

      //临时属性,触发getter 
      Dependency.temp = this;
      key.split('.').reduce((total,current)=> total[current],vm.$data);
      Dependency.temp = null;
    }

    update() {
      const value = this.key.split('.').reduce(
        (total,current)=> total[current],
        this.vm.$data);
        this.callback(value)
    }
  }