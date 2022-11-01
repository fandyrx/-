console.log("---一真一假---");
console.log(0 || 1); //1    或，找真值
console.log(0 && 1); //0    与，找假

console.log("----两值为真----"); //若都为真
console.log(4 || 1); //4    // 或，返回第一个
console.log(4 && 1); //1   //与， 返回第二个

console.log("-----");
console.log(true || false); //true
console.log(true && false); //false

console.log("-----");
console.log(false || true); //true
console.log(false && true); //false

console.log("判断:" + (1 && 2));

if (false) {
	console.log("if执行");
} else if (false || true) {
	console.log("第一层elseif执行");
} else if (false && true) {
	console.log("第二层执行 ");
} else {
	console.log("都不符合");
}
