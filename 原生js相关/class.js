//#region   1.类的属性
// class Person {

//   //1.实例属性  ,必须创建实例才可以访问
//   name='孙悟空';
  
//   //2.静态属性(类属性)   static 前缀,可以直接访问,读取不了
//   static age = 18;
//   //3.方法同理  
//   sayHello(){
//     console.log(this.name);
//   }
 

// }
// console.log('-----1.访问类的属性,访问-----');
// console.log(Person.name,'访问类 实例属性');
// console.log(Person.age,'访问类 属性(静态)');

// console.log('-----2.创建实例p,再访问-----');
// let p = new Person()
// console.log(p.name,'访问实例p 实例属性');
// console.log(p.age,'访问实例p 属性(静态)');
//#endregion


// 2.构造函数
class Dog {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  bark(){
      console.log(this.age,'age')
      // this指向调用实例  
  }
}

const dog = new Dog('旺财',15);



//3.继承 son  extends father
class Dog extends Animal {
  // 1.里面可以写子类自己的属性方法,同样的会覆盖父类属性
  
  // 2.this 指向引用对象
  // 3. super 指向父类  使用父类的属性,方法/构造函数时需要使用
  constructor(name,age,test) {
    //调用父类方法
      super(name,age)
      //子类本身的构造属性
      this.test = test
  }
  //4.super  方法内使用代表调用父类身上的方法(指向父类)
  bark(){
    console.log(this.name,'dog')
    // this指向调用实例  
    // super代表调用父类的方法
   super.bark()
    
}

}

//4.abstract  抽象类   ts语法
// 父类如果不希望用来创建实例,只用作继承可以加前缀
abstract class Animal {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  //代表 抽象方法,由子类决定.继承者必须重写该方法
  abstract sayHello():void;
}
