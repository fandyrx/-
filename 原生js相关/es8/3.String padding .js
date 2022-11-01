const message = "hello js";

//padStart(需要填充的字符长度【含自身和替换字符长度】, 替换的字符);
const newMessage = message.padStart(15, "*").padEnd(20, "-");
// message.padEnd()

console.log(newMessage);

const phone = "18954328888";
const startThreePhoneNumber = phone.slice(0, 3); //手机前三位
const lastFourPhoneNumber = phone.slice(7, Infinity); //手机后四位
// const b4 = phone.slice(-4); //号码后四位
// console.log(b4, "b4");

// console.log(lastFourPhoneNumber, "last");
// 需要替换的长度 =  手机号码长度 - 后四位
const sliceLength = phone.length - lastFourPhoneNumber.length;
const paddingEnd = startThreePhoneNumber.padEnd(7, "*");

// console.log(paddingEnd);
const finalPhone = lastFourPhoneNumber.padStart(phone.length, paddingEnd);
console.log("finalphone", finalPhone);
