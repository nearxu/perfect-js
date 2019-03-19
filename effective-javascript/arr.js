const all = (arr, fn = Boolean) => arr.every(fn);

console.log(all([1, 2, 3], (n) => n > 0));

const arrFill = n => Array(n).fill(n);
console.log(arrFill(6));

const arrFindexIndex = arr => n => arr.findIndex(item => item === n)
// 第一个元素索引 or -1
console.log(arrFindexIndex([1, 2, 3, 4])(1))

// return true false
console.log([1, 2, 3].find((n) => n > 4))

// some true and false

console.log([1, 2, 3].some(n => n % 2 === 0))

// Array.from()

console.log(Array.of(1, 2, 3)) // [...1,2,3]





