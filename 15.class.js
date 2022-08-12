class Text {
  name;

}



console.log(new Text('123'))

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength =  sideLength
}
  calcPerimeter(){
    return  this.sides * this.sideLength
  }

}
    

let square = new Shape("square",2,5);


console.log(square);
console.log(square.calcPerimeter());




let obj = {
  a:1,
  b:2
}
let newArr = []
let arr1 = Object.entries(obj).map(item=>{
  
  newArr.push(...item)
 

})

console.log(newArr,'newArr遍历拍平');
//拍平
console.log(Object.entries(obj).flat(),'api');

  //判断类型
  console.log(newArr instanceof Array); 
  console.log(Object.prototype.toString.call(newArr)); 
console.log(void 0);




// Object.keys(obj).map(item=>{
  
// })

