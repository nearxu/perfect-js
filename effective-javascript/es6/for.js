// 遍历数组
// for(var i=0;i<Array.length;i++){}
// Array.forEach(d => d*2) // no return 
// for in // 会遍历原型链属性
// no object
// var arr = [1, 2, 3, 4];
// for (var val of arr) {
//   console.log(val);
// }

var arr1 = [
  { name: 'tom' },
  { name: "sim" }
]

// for (var item of arr1) {
//   console.log(item);
// }

for (var key in arr1) {
  console.log(key)
}