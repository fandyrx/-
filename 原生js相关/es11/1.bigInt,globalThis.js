const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum);
console.log(maxNum + 1);
console.log(maxNum + 2);
//精度缺失

const bigInt = 9007199254740991n;
console.log(bigInt + 1n);
console.log(bigInt + 2n);

//空值合并运算 ？？
const foo = 0;
const bar1 = foo || "default value"; // 0 ,'',null undefined 都视为false
const bar2 = foo ?? "default value"; //null undefined 才会获取后方值

console.log("bar1:", bar1);
console.log("bar2:", bar2);

//可选链

const info = {
	name: "sa",
};

console.log(info.name);
console.log(info.a?.name);
