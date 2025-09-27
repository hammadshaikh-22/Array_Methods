// var arr=[10,20,30,40,50]
// arr.splice(2,1)
// console.log(arr)

// var arr2=[1,2,3,5]
// arr2.splice(3,0,4)
// console.log(arr2)

// var arr3=['a','b','c','d']
// arr3.splice(1,1,'x')
// console.log(arr3)

// var arr4=[100,200,300,400,500]
// var arr5=arr4.slice(1,4)
// console.log(arr5)

var arr6=[10,20,30,40,50]
var arr7=arr6.slice(arr6.length-3,arr6.length)
console.log(arr7)

arr6.splice(1,3)
console.log(arr6)

var arr8=[1,2,3]
var arr9=[4,5,6]
// var arr10= arr8.concat(arr9) 
var arr10=arr8.slice(0,3).concat(arr9.slice(0,3))
console.log(arr10)


var arr=[1,2,3,4]
var arr2=arr.slice(0,arr.length)
arr2.splice(arr.length,0,5)
console.log(arr2)
