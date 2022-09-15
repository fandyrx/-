// 1.对下面数组进行 排重 ，并按 升序 排序，代码尽量简练:
const array = [ '中文','英文','2', 'b', '9','a','7','3','4','b','6', '4' ]; 
//es6 set 唯一性
// function handle(arr) {
//   newArr = [...new Set(array)]
//  return  newArr.sort()
// }
// 2.  indexof  includes 
// function handle(arr) {
//    let newArr = [] 
//    for(let i = 0 ; i < arr.length ;i++){
//       if(newArr.indexOf(arr[i])=== -1){
//         newArr.push(arr[i])
//       }
//    }
//    return newArr.reverse().sort(function(a,b){
//         let reg = /[A-Za-z0-9]/
       
//         if(reg.test(a) || reg.test(b)){
//           //num
//             if(a>b) return 1
//             if(a<b) return -1
//             if(a = b) return 0
//         }
//         else{
//           //chinese 
//           return a.localeCompare(b)
//         }
//    })
// }



//  console.log(handle(array))


// Array.prototype.reverse.call(array)
// console.log(array)


  const ar2 = [1,6,8,2,0,6]
  //下面为自定义方法,局部翻转,返回截取的翻转片段,改变原数组  
function reverse(arr,start,end) {
  if(Array.isArray(arr)){
    let res = arr.slice(start,end+1)
    result = res.reverse()
     arr.splice(start,end,...result)
   return result
  }else{
    return console.warn("Please input Array");
  }
  
}
console.log(reverse(ar2,1,2));
console.log(ar2);

console.log(reverse(123465));
