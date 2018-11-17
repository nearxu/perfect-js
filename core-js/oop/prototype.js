function cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log('mao')
    }
}

var cat1 = new cat('11', 'white')
var cat2 = new cat('22', 'block')

console.log(cat1.meow === cat2.meow)

// 每新建一个实例，就会新建一个meow方法。这既没有必要，又浪费系统资源

// JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享

function f() { }
console.log(typeof f.prototype) // object

function animal(name) {
    this.name = name;
}
animal.prototype.color = 'white';

var cat3 = new animal('33');
var cat4 = new animal('444');
console.log(cat3.color === cat4.color);

// 所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性

// instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。

// instanceof运算符的左边是实例对象，右边是构造函数。它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上
var v = new View();
console.log(v instanceof View) // true

