// 1.< 0 a放左边    2.>0  a放右边   3. =0 位置不变


console.log("------默认排序(ASCII字符排序)------");  
var arr = [1,2,55,12,88];  
arr.sort();  //ASCII字符代码从小到大排序  
console.log(arr.toString());  


console.log("------自定义函数排序------");  
var arr1 = [1,2,55,12,88];  
arr1.sort(function(a,b){  //自定义函数排序  
    var a1= parseInt(a);  
    var b1= parseInt(b);  
    if(a1<b1){  
        return -1;  
    }else if(a1>b1){  
        return 1;  
    }  
    return 0;  
});  
console.log(arr1.toString());  


console.log("------反转数组------");  
var reArr = arr1.reverse();  //将数组中元素的顺序倒转  
console.log(reArr.toString());  


console.log("------按年龄正序排序------");  
var arr2 = [];  
arr2.push({date:"20130101",name:"lee",age:2});  
arr2.push({date:"20130101",name:"wang",age:12});  
arr2.push({date:"20130202",name:"huang",age:30});  
arr2.push({date:"20130202",name:"keke1",age:14});  
arr2.push({date:"20130202",name:"keke2",age:31});  
arr2.push({date:"20130303",name:"keke3",age:56});  
arr2.push({date:"20130303",name:"keke4",age:22});  
arr2.push({date:"20130303",name:"keke5",age:32});  
arr2.sort(function(a,b){  
    if(a.age<b.age){  
        return -1;  
    }else if(a.age>b.age){  
        return 1;  
    }  
    return 0;  
});  
for(var i=0;i<arr2.length;i++){  
 
    console.log(arr2[i].date + ", " + arr2[i].name + ", " + arr2[i].age);  
}  

console.log("------按date倒序，age正序排序------");  
arr2.sort(function(a,b){  
    if(a.date<b.date){  
        return 1;  
    }else if(a.date>b.date){  
        return -1;  
    }else{  
        if(a.age<b.age){  
            return -1;  
        }else if(a.age>b.age){  
            return 1;  
        }  
        return 0;  
    }  
});  
for(var i=0;i<arr2.length;i++){  
    console.log(arr2[i].date + ", " + arr2[i].name + ", " + arr2[i].age);  
}

let deepArr = [1,2,5,[2,2,5,[3,8,5,6]]]
let result = JSON.parse(JSON.stringify(deepArr))
let sliceRes = deepArr.slice()
//浅拷贝,只拷贝了浅层的,深层数据结构的还是引用地址,指向同一个引用数据,所以有关联
//Object.assign(targetObj,copyObj);  还可以用来重置
//Array.concat() .slice()   拼接,截取返回的都是新数组,利用这个特性浅拷贝
//深拷贝 JSON.parse(JSON.stringify())      不能拷贝函数，undefined，symbol。

deepArr[3].push('6666')
console.log(result,'red');
console.log(sliceRes,'slice');


