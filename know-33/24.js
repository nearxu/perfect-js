// https://www.imooc.com/article/17591

// Object.assign  Object.create

// let h = JSON.parse(JSON.stringify(a));  对象深克隆

//copy
var obj = { a: 1 };
var copy = Object.assign({}, obj);
//deepcopy problem
let a = { b: { c: 4 }, d: { e: { f: 1 } } }
let g = Object.assign({}, a)
let h = JSON.parse(JSON.stringify(a));
console.log(g.d) // { e: { f: 1 } }
g.d.e = 32
console.log(g) // { b: { c: 4 }, d: { e: 32 } }
console.log(a) // { b: { c: 4 }, d: { e: 32 } }
console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
