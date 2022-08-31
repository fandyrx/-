function sum(a:number,b:number):number{
 return a + b
}
console.log(sum(123,456));

// abstract 代表抽象类,不能创建实例,只能用于继承
abstract class Animal {
  // 1.定义 类型
  name:string;
  age:number;
  // 2. 构造函数
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
   
  bark(){
      console.log(this.name,'name')
      // this指向调用实例  
  }
}
// 继承 extends 
class Dog extends Animal{
  //继承不建议重写原先的类,容易影响原先类,在其他地方的使用
  // 子类继承,同样的方法会覆盖,但不修改(方法的重写)
  test:number;
  constructor(name:string,age:number,test:number) {
    //调用父类方法
      super(name,age)
      //子类本身的构造属性
      this.test = test
  }

  bark(){
      console.log(this.name,'dog')
      // this指向调用实例  
      // super代表调用父类的方法
     super.bark()
      
  }
}

let dog = new Dog("旺财",18,33)
dog.bark();
console.log(dog);



 