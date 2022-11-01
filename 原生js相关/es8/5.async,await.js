async function foo() {
	const res = await 11;
	const res2 = await new Promise((resolve, reject) => {
		resolve("resolveRes");
		// reject("rejectRes"); //报错
	});
	console.log(res);
	console.log(res2);
}

foo();
