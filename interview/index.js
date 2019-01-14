// https://github.com/xiaomuzhu/ElemeFE-node-interview/
// 1.
// javaScript原始类型: Undefined、Null、Boolean、Number、String、Symbol
// JavaScript引用类型:Object {arr,object,function,date}



// 2. 预解释

var a = 1;
function f() {
    console.log(a);
    var a = 2;
}
f();  // undefined
//
f();
g();
//函数声明
function f() {
    console.log('f');
}
//函数表达式
var g = function () {
    console.log('g');
}; // undefined

// clone
// 浅克隆函数
function shallowClone(o) {
    const obj = {};
    for (let i in o) {
        obj[i] = o[i];
    }
    return obj;
}
// 被克隆对象
const oldObj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: { i: 2 } }
};

const news= Object.assign({},oldObj);
const newObj = shallowClone(oldObj);
console.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }
console.log(oldObj.c.h === newObj.c.h); // true
// 这表明他们依然指向同一段堆内存, 这就造成了如果对newObj.c.h进行修改, 也会影响oldObj.c.h

//
const oldObj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: { i: 2 } }
};

const newObj = JSON.parse(JSON.stringify(oldObj));
console.log(newObj.c.h, oldObj.c.h); // { i: 2 } { i: 2 }
console.log(oldObj.c.h === newObj.c.h); // false
newObj.c.h.i = 'change';
console.log(newObj.c.h, oldObj.c.h); // { i: 'change' } { i: 2 }

