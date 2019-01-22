// https://github.com/xiaomuzhu/ElemeFE-node-interview/
// 1.
// javaScript原始类型: Undefined、Null、Boolean、Number、String、Symbol
// JavaScript引用类型:Object {arr,object,function,date}

// 原始类型保存的变量和值直接保存在栈内存(Stack)中, 且空间相互独立, 通过值来访问

var person = 'Messi';
var person1 = person;

var person = 1;

console.log(person); //1
console.log(person1); //'Messi'

//引用类型   Object 类型、Array 类型、Date 类型、Function 类型
// 与原始类型不同的是,引用类型的内容是保存在堆内存中,而栈内存(Heap)中会有一个堆内存地址
var a = { name: "percy" };
var b;
b = a;
a.name = "zyj";
console.log(b.name);    // zyj
b.age = 22;
console.log(a.age);     // 22
var c = {
    name: "zyj",
    age: 22
};
console.log(a === c); //false
