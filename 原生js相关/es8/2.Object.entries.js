// Object.entries()
const obj = {
	name: "kobe",
	age: 20,
};
//数据结构名：entries [ [ 'name', 'kobe' ], [ 'age', 20 ] ]
console.log(Object.entries(obj)); //[ [ 'name', 'kobe' ], [ 'age', 20 ] ]

const objectEntries = Object.entries(obj);
objectEntries.forEach((item) => {
	console.log(item[0], item[1]);
}); //name kobe age 20

console.log(Object.entries(["a", "b", "c"])); //[ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
