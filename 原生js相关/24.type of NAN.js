console.log(typeof NaN);//number

console.log(NaN == NaN);//false
console.log(NaN === NaN);//false
console.log(Object.is(NaN,NaN));//true

//NaN 代表不可转化的   变量,不是一个确切的值.所以相等,不能自反!  
//个人理解:1.一个动态的数字类型,代表 不可确切表达 的范围值没有确切边界
        //2.number  浮点型,整数型 特殊型 NaN