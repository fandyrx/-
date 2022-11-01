// es9  Async iterators 迭代器，Object spread operators 对象创建可用拓展运算符，Promise finally方法新增

const nums = [
	10,
	20,
	30,
	[40, 50],
	[
		[60, 70],
		[80, 90],
	],
	100,
];
//拍平数组，根据传入数字 决定层数
const newNums = nums.flat(Infinity);
console.log(newNums);

const message = ["hello world", "goodbye world", "cu later"];
for (const msg in message) {
	console.log(message[msg]);
}
//FLATMAP会自动降维
const words = message.flatMap((item) => {
	return item.split(" ");
});

console.log("words", words); //words [ 'hello', 'world', 'goodbye', 'world', 'cu', 'later' ]
