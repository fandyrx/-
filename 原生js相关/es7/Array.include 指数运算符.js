const arr = ["a", "b", "c", NaN];

//1.老方法 NaN 查找不到
if (arr.indexOf("a") !== -1) {
	console.log("包含了：'a'");
}
if (arr.indexOf(NaN) !== -1) {
	console.log("包含了：NaN");
}

//2.es7 新增   includes（查找的value,从哪个索引开始查找【可选】）
if (arr.includes("b", 0)) {
	console.log("包含了：'b'");
}

if (arr.includes(NaN)) {
	console.log("es7包含了：NaN");
}

// exponentiation指数（乘方）运算符

const res = Math.pow(3, 3);
const res2 = 3 ** 3;
console.log(res, res2);
