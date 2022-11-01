function isObject(value) {
	const valueType = typeof value;
	return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue) {
	if (!isObject(originValue)) {
		return originValue;
	}
	const newObject = {};
	for (const key in originValue) {
		newObject[key] = deepClone(originValue[key]);
	}

	return newObject;
}

const obj = {
	name: "me",
	age: 15,
	friends: {
		name: "tom",
		address: {
			city: "GZ",
		},
	},
};

const newObj = deepClone(obj);
console.log("是否相等:", newObj === obj);

obj.name = "wwwww";
obj.friends.name = "wwwww";
obj.friends.address.city = "wwwww";
console.log(newObj);
