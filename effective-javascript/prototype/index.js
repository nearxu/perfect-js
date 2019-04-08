// 组合

function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
//让子类的prototype属性指向父类的实例
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var child = new Child('xiaoming', 18);
console.log(child);

// 寄生组合
// function F() { }
// F.prototype = Parent.prototype
// Child.prototype = new F();
// Child.prototype.constructor = Child;
// var child = new Child('jisheng', 1)
// console.log(child)

//constructor 原型对象的constructor属性是一个函数指针，指向函数声明
