// 1.forEach()  不会有返回值 即使return 也只是undefined 更改item,index不影响原数组 除非过程中修改原数组
let arr = [1,8,4,6]

arr.forEach((item,index,arr)=>{
  //获取遍历元素,item    遍历元素的索引index  arr 遍历数组本身
      
      arr.push(item*2)

})
//2.map()   映射数据,返回一个新数组,不改变原数组  除非同上    有return   

let result= arr.map((item,index,arr)=>{
  //获取遍历元素,item    遍历元素的索引index  arr 遍历数组本身
      
      return item*2
})





console.log(arr);
console.log(result);


总结 : 1.相同点:map ,forEach 都为遍历数组,获取元素,索引,原数组  在函数内部进行一些操作.
       2.不同点: mpa 会返回一个新数组  ,   forEach 不会返回新数组
