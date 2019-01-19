// http://javascript.ruanyifeng.com/oop/basic.html


// new 命令的原理

// 创建一个空对象，作为将要返回的对象实例。
// 将这个空对象的原型，指向构造函数的prototype属性。
// 将这个空对象赋值给函数内部的this关键字。
// 开始执行构造函数内部的代码。


// http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html

function Animal() {

    this.species = "动物";

}
// 使用call或apply方法，将父对象的构造函数绑定在子对象
function Cat(name, color) {

    Animal.apply(this, arguments);

    this.name = name;

    this.color = color;

}

var cat1 = new Cat("大毛", "黄色");

alert(cat1.species); // 动物

// 第二种方法更常见，使用prototype属性。

Cat.prototype = new Animal();

Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛", "黄色");

alert(cat1.species); // 动物


// 直接继承prototype
function Animal() { }

Animal.prototype.species = "动物";

Cat.prototype = Animal.prototype;

Cat.prototype.constructor = Cat;

var cat1 = new Cat("大毛", "黄色");

alert(cat1.species); // 动物

// function Person (){}  => Person.prototype => __proto__  new Obj

