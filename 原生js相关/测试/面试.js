// 1.
// let a = 3
// let b = new Number(3)
// let c = 3

// console.log(a == b); //true  ==  等值
// console.log(b == c);  //true 

// console.log(a === b); //false === 等值等型
// console.log(b === c); //false
// console.log(a === c);  //true





// console.log(typeof b);
// console.log(typeof c);

//2.
// function bark (){
//   const a = 1
//   console.log("woof");
// }

// bark.animal= "dog"

// bark()
// console.log( bark.animal);
// console.log( bark);


//3.
const Person = {
  name:'Lydia'
}

function sayHi(age) {
  console.log(`${this.name}+${age}`);
}
//
sayHi.call(Person,21)
// bind 不执行
sayHi.bind(Person,21)



//4.
function getInfo(member,year){
  member.name = "Lydia",
  year = "1998"
}

const member = { name:"Pier"};
const bYear  = "1994"

getInfo(member,bYear)

//const 基本数据修改不了,内部可以修改

console.log(member);
console.log(bYear);
