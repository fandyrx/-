const obj = {
	name: "code",
	age: 1356,
};

const entries = Object.entries(obj);
console.log(entries); //[ [ 'name', 'code' ], [ 'age', 1356 ] ]

const newObj = {};
for (const entry of entries) {
	newObj[entry[0]] = entry[1];
}

console.log(newObj);

// es10 新增[ [ 'name', 'code' ], [ 'age', 1356 ] ] entries 数据转为对象

const es10 = Object.fromEntries(entries);
console.log("es10", es10);

// url query 转对象
const queryString = "name=why&age=18&height=1.89";
const queryParams = new URLSearchParams(queryString);
// console.log(queryParams);
for (const param of queryParams) {
	console.log("queryParam:", param);
}
const paramObj = Object.fromEntries(queryParams);
console.log("paramObj:", paramObj);
