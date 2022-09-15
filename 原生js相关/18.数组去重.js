let arr = [1,2,8,1,5,4]
let newArr = []
//#region 
//1.双重for 循环 暴力方法
// for (let i = 0 ; i<arr.length ; i++){
//       for(j = i+1; j<arr.length ; j++){
//         if(arr[i] === arr[j]){
//           arr.splice(j,1)  //移除重复元素
//           j--;      //修正下标, 上面删除后,前一个元素索引前移了,再次比对
//         }
//       }
// }

//2. indexOf includes 查找一个元素的索引 .新数组,没有这个元素推入
//  let newArr = []
// for (let i = 0 ; i<arr.length ; i++){
//     if(  newArr.indexOf(arr[i]) == -1){
//       newArr.push(arr[i])

//     }
// }
//3.
// let newArr = []
// for (let i = 0 ; i < arr.length ; i++){
//     if(!newArr.includes(arr[i])){
//       newArr.push(arr[i])

//     }
// }
//#endregion

//4.排序去重  会 改变原数组的排序方式
// arr.sort()
// for(let i = 0;i <arr.length ;i++){
//     if(arr[i] !== newArr[newArr.length-1]){
//       newArr.push(arr[i]);
//     }
// }
// 5.filter [1,2,3,1]
// newArr = arr.filter(function(item,index,arr){
//   return arr.indexOf(item) === index;

// })

// 6.键值对  对象
//  let obj = {}
//  for(let i = 0;i <arr.length ; i++){
//         if(! obj[arr[i]] ){
//           newArr.push(arr[i])

//           obj[arr[i]] = 1;
//         }else{
//           obj[arr[i]]++
//         }
//  }



//7.es6  set 唯一元素 数组
   // newArr = [...new Set(arr)]


console.log(arr,'origin');
console.log(newArr,'new');

