function Person() {
    this.name = name;
}

var tom = new Person();

// 每个函数都有一个 prototype 属性

tom.__proto__ === Person.prototype

tom.__proto__.__proto__ === object;

person => person.prototype

person.__proto__ => person.prototype