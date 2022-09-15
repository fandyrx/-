var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];


 function flatten(arr) {
      while (arr.some(item => Array.isArray(item))) {
        console.log(arr)
          arr = [].concat.apply([], arr);
          console.log(arr,"after")
      }
      return arr;
  }

//原生方法, flat 方法传参,拍平层数  
arr.flat() 
// console.log(arr.flat(Infinity))
// console.log(flatten(arr))
//reduce ,slice ,concat 合并使用



