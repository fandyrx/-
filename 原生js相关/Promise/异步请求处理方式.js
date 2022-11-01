/**
 * 弊端：参数名，需要定制好，第三方库源码，文档查看，沟通成本高
 *
 */
function requestData(url, suc, fail) {
	setTimeout(() => {
		if (url === "a") {
			const data = ["a", "b", "c"];
			suc(data);
		} else {
			let err = "fail";
			fail(err);
		}
	}, 3000);
}

const res = requestData(
	"a",
	(data) => {
		console.log(data);
	},
	(err) => {
		console.log(err);
	}
);

function requestData2() {
	return new Promise((resolve, reject) => {
		console.log("执行Promise");
		resolve("resData");
		// reject("errrrr");
	})
		.then((res) => {
			console.log("Promise的数据", res);
		})
		.catch((err) => console.log("err", err));
}

requestData2();
