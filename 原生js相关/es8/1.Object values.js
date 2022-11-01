// es2017  es8

//旧的方式 Object.keys 获取对象所有key
//新增 Object.keys 获取对象所有value

const obj = {
	name: "kobe",
	age: 20,
};

console.log(Object.keys(obj)); //[ 'name', 'age' ]
console.log(Object.values(obj)); //[ 'kobe', 20 ]
//可传其他参数
console.log(Object.values(["abc", "vas", "ddd"])); //[ 'abc', 'vas', 'ddd' ]
console.log(Object.values("abc")); //[ 'a', 'b', 'c' ]
