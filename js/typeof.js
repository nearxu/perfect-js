// console.log(typeof('123'));
// 那我们都知道，在 ES6 前，JavaScript 共六种数据类型，分别是：

// Undefined、Null、Boolean、Number、String、Object

// undefined、object、boolean、number、string、object

// Object.prototype.toString
// Array.isArray

console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]