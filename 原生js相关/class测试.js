//异步操作
function log(time) {
	setTimeout(function () {
		console.log(time);
		return 1;
	}, time);
}
async function fun() {
	let a = await log(1000);
	let b = await log(3000);
	let c = log(2000);
	console.log(a);
	console.log(1);
}

fun();

console.log("Object.is(value1,value2):判读两个值是否同一个", Object.is(+0, -0));
