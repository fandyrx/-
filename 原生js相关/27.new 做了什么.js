// 1.创建一个空对象 
//2.this 指向刚才创建的空对象
// 3.构造行数的代码执行,  新对象添加属性方法
//4.返回这个新对象  (所以构造函数不用return)


//箭头函数this 是静态的,  没有自身的this
//this指向了定义时所在的对象,且不可改变

// 栗子:
let money = 10;
   var s = 102
let obj = {
    money : 100,
    a:function a(){
      console.log(this.money);
    },
    b:()=>{
      //箭头函数没有自己的this.所以会在定义的地方上找,
      //BUG: 1.如果在JS文件测试,没有window对象,所以无法查找到外部变量     undefined
      //      2.在html 文件,但 money 用LET声明,块级作用域无法访问,所以    undefined
      console.log(this.s);
      console.log(this.s);
    }
}
obj.a()  //obj调用了a  
obj.b()  


// 测试BUG.html 可以查看