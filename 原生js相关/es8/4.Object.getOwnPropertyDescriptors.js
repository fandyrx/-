const obj = {
	name: "aa",
};
console.log(Object.getOwnPropertyDescriptors(obj));
//获取对象所有描述符
/* 
{
  name: { value: 'aa', writable: true, enumerable: true, configurable: true }
}
 */
