
function Person() { }
Person.prototype.say = ' i can say!';
var person = new Person();
console.log(person.__proto__ === Person.prototype);

person.say = 'person say';

console.log(person.say);

delete person.say;

// 自己没有就去原型链上找 ，
console.log(person.say)

// 继承 原型对象的属性方法，都能被实例共享；
function animal(name) {
  this.name = name;
}
animal.prototype.color = 'white';

var cat3 = new animal('33');
var cat4 = new animal('444');
console.log(cat3.color === cat4.color);

function Dog() { }

Dog.prototype = new animal();

var dog = new Dog();

console.log(dog.color);

// call
function P1(age) {
  this.names = ['aa', 'bb', 'cc'];
  this.age = age;
}

function C1() {
  P1.call(this, 18);
}


var c = new C1();

console.log(c.names, c.age);

class P2 {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
  dosomethings() {
    console.log('do some !')
  }
}

class C2 extends P2 {
  constructor(name, parname) {
    super(parname);
    this.name = name
  }
  say() {
    console.log(this.name);
  }
}

var chils = new C2('son', 'father');
chils.say();
chils.dosomethings();

//es6 extends 

Object.setPrototypeOf(obj, proto){
  obj.__proto__ = proto;
  return obj;
}
